package com.example.ico.job;

import com.example.db.PriceDB;
import com.example.ico.service.OKEXService;
import com.example.ico.trade.okex.entity.FeaturePrice;
import com.example.ico.trade.okex.entity.FeatureUserInfo;
import com.example.ico.trade.okex.rest.future.IFutureRestApi;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class OKExJob {
    public final static long SECOND = 1 * 1000;

    private ObjectMapper mapp = new ObjectMapper();
    @Autowired
    private IFutureRestApi featureApi;
    @Autowired
    private OKEXService service;

    @Scheduled(fixedDelay = SECOND * 20)
    public void syncFeatureAccount(){
        String result = null;
        try {
            result = featureApi.future_userinfo();
            PriceDB.account = mapp.readValue(result,FeatureUserInfo.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Scheduled(fixedDelay = SECOND * 10)
    public void syncFeatureData(){
        FeaturePrice price = null;
        if(PriceDB.account != null && PriceDB.account.getResult()!=null && PriceDB.account.getResult() && PriceDB.account.getInfo().getBtc() != null && Double.valueOf(PriceDB.account.getInfo().getBtc().getAccount_rights()+"")>0.0 ){
            try {
                price = mapp.readValue(featureApi.future_ticker("btc_usd", "this_week"),FeaturePrice.class);
                PriceDB.featureData.put("T",price.getTicker().getLast().doubleValue());
                price  = mapp.readValue(featureApi.future_ticker("btc_usd", "next_week"),FeaturePrice.class);
                PriceDB.featureData.put("N",price.getTicker().getLast().doubleValue());
                price  = mapp.readValue(featureApi.future_ticker("btc_usd", "quarter"),FeaturePrice.class);
                PriceDB.featureData.put("Q",price.getTicker().getLast().doubleValue());
                System.out.println("syncFeatureData in every 10 seconds ------------------------------------");
                service.processFeatureData();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    @Scheduled(fixedDelay = SECOND * 5)
    public void syncFeatureOrderInfo(){
        service.updateOrderStatus();
    }
}
