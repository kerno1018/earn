package com.example.ico.market;

import com.example.db.PriceDB;
import com.example.ico.market.entity.AllCoin;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

public class AllCoinMarket implements Runnable{

    private String key = "https://www.allcoin.com";
    private void execute(String primaryKey, String secondKey, Map<String, List<List<BigDecimal>>> db){
        AllCoin x = new AllCoin();
        x.setPrimary(primaryKey);
        x.setSecondary(secondKey);
        x.setKey(key);
        x.report(db);
    }

    @Override
    public void run() {
       execute("LMC","BTC",PriceDB.lmc);
    }
}
