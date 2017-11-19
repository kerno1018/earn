package com.example.ico.job;

import com.example.db.PriceDB;
import com.example.ico.service.OKEXService;
import com.example.ico.trade.okex.entity.FeaturePrice;
import com.example.ico.trade.okex.entity.FeatureUserInfo;
import com.example.ico.trade.okex.rest.future.IFutureRestApi;
import com.example.util.TimeLimit;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class OKExJob {
    public final static long SECOND = 1 * 1000;
    Logger logger = LoggerFactory.getLogger(OKExJob.class);
    private ObjectMapper mapp = new ObjectMapper();
    @Autowired
    private IFutureRestApi featureApi;
    @Autowired
    private OKEXService service;

    @Scheduled(fixedDelay = SECOND *30)
    public void rolling(){
        String result = null;
        try {
            if (TimeLimit.canGetNew()) {
                result = featureApi.future_userinfo();
                PriceDB.account = mapp.readValue(result,FeatureUserInfo.class);
                FeaturePrice price = null;
                if(PriceDB.account != null && PriceDB.account.getResult()!=null && PriceDB.account.getResult() && PriceDB.account.getInfo().getBtc() != null && Double.valueOf(PriceDB.account.getInfo().getBtc().getAccount_rights()+"")>0.0 ) {
                    price = mapp.readValue(featureApi.future_ticker("btc_usd", "this_week"), FeaturePrice.class);
                    PriceDB.featureData.put("T", price.getTicker().getLast().doubleValue());
//                    PriceDB.featureBTC.put("this_week", price);
                    price = mapp.readValue(featureApi.future_ticker("btc_usd", "next_week"), FeaturePrice.class);
                    PriceDB.featureData.put("N", price.getTicker().getLast().doubleValue());
//                    PriceDB.featureBTC.put("next_week", price);
                    price = mapp.readValue(featureApi.future_ticker("btc_usd", "quarter"), FeaturePrice.class);
                    PriceDB.featureData.put("Q", price.getTicker().getLast().doubleValue());
//                    PriceDB.featureBTC.put("quarter", price);
                    PriceDB.maxAllowCont = Double.valueOf(Double.valueOf(PriceDB.account.getInfo().getBtc().getAccount_rights().toString())*PriceDB.levelRage * PriceDB.featureData.get("T")/100/2).intValue();
                    if(PriceDB.eachOrderCont > PriceDB.maxAllowCont){
                        PriceDB.eachOrderCont = PriceDB.maxAllowCont;
                    }
                    if(PriceDB.maxAllowCont >=1){
                        service.processFeatureData();
                    }
                }
            } else {
                logger.error("waiting for 5 mins ...");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
//    @Scheduled(fixedDelay = SECOND * 2)
    public void cleanFeature(){
//        service.cleanFeature();
    }

//    @Scheduled(fixedDelay = SECOND * 5)
    public void syncFeatureOrderInfo(){
        service.updateOrderStatus();
    }
}
