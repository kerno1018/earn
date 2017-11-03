package com.example.demo;

import com.example.ico.trade.allcoin.AllCoinTrade;
import com.example.ico.trade.bittrex.BittrexTrade;
import org.junit.Test;

public class BittrexTradeTest {

    @Test
    public void kernoTradeSell(){

        BittrexTrade.sell("BTC-LMC",10000.0,0.0000123);
        BittrexTrade.buy("BTC-LMC",10000.0,0.0000123);
//        BittrexTrade.buy("LMC_BTC",0.00001244,21.1);
    }

}
