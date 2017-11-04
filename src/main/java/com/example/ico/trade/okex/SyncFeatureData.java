package com.example.ico.trade.okex;

import com.example.db.PriceDB;
import com.example.ico.trade.okex.entity.FeaturePrice;
import com.example.ico.trade.okex.rest.future.IFutureRestApi;
import com.example.ico.trade.okex.rest.future.impl.FutureRestApiV1;
import com.example.ico.trade.okex.util.OKConstant;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;

public class SyncFeatureData implements Runnable {
    IFutureRestApi futureGetV1 = new FutureRestApiV1(OKConstant.BASE_URI);
    ObjectMapper mapp = new ObjectMapper();
    @Override
    public void run() {
        while (true){
            try{
                FeaturePrice price = mapp.readValue(futureGetV1.future_ticker("btc_usd", "this_week"),FeaturePrice.class);
                PriceDB.featureData.put("T",price.getTicker().getLast().doubleValue());
                price  = mapp.readValue(futureGetV1.future_ticker("btc_usd", "next_week"),FeaturePrice.class);
                PriceDB.featureData.put("N",price.getTicker().getLast().doubleValue());
                price  = mapp.readValue(futureGetV1.future_ticker("btc_usd", "quarter"),FeaturePrice.class);
                PriceDB.featureData.put("Q",price.getTicker().getLast().doubleValue());
            }catch (IOException ex){
                ex.printStackTrace();
            }
            try {
                Thread.sleep(5000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
