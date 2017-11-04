package com.example.demo.okex;

import com.example.ico.trade.okex.rest.future.IFutureRestApi;
import com.example.ico.trade.okex.rest.future.impl.FutureRestApiV1;
import com.example.ico.trade.okex.rest.stock.impl.StockRestApi;
import com.example.ico.trade.okex.util.OKConstant;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.io.IOException;

public class SpotTradeTest {
    private StockRestApi stockGet;
    private StockRestApi stockPost;
    private String api_key = OKConstant.APIKEY;  //OKCoin申请的apiKey
    private String secret_key = OKConstant.SECRETKEY;  //OKCoin申请的secretKey
    private String url_prex = OKConstant.BASE_URI;  //注意：请求URL 国际站https://www.okcoin.com ; 国内站https://www.okcoin.cn
    ObjectMapper mapp;

    @BeforeMethod
    public void init(){
        stockGet = new StockRestApi(url_prex);
        stockPost = new StockRestApi(url_prex, api_key, secret_key);
        mapp = new ObjectMapper();
    }

    @Test
    public void spotTicker() throws IOException {
        //现货行情
        stockGet.ticker("btc_usd");
    }
    @Test
    public void spotDepth() throws IOException {
        //现货市场深度
        stockGet.depth("btc_usd");
    }
    @Test
    public void spotUserinfo() throws IOException {
        //现货用户信息
        stockPost.userinfo();
    }
    @Test
    public void test() throws IOException {

    }

}
