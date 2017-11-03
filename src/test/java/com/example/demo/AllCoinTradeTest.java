package com.example.demo;

import com.example.ico.trade.allcoin.AllCoinTrade;
import org.junit.Test;

public class AllCoinTradeTest {

    @Test
    public void kernoTradeSell(){
        AllCoinTrade.sell("LMC_BTC",0.00001244,21.1);
        AllCoinTrade.buy("LMC_BTC",0.00001244,21.1);
    }

}
