package com.example.ico.market;

import com.example.db.PriceDB;
import com.example.ico.market.entity.BittrexCoin;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

public class BittrexMarket implements Runnable {
    private String key = "https://bittrex.com";
    public void execute(String marketName, Map<String, List<List<BigDecimal>>> db){
        BittrexCoin x = new BittrexCoin();
        x.setKey(key);
        x.setMarketname(marketName);
        x.report(db);
    }

    @Override
    public void run() {
        execute("BTC-LMC", PriceDB.lmc);
    }
}
