package com.example.demo.okex;

import com.example.ico.trade.okex.rest.future.IFutureRestApi;
import com.example.ico.trade.okex.rest.future.impl.FutureRestApiV1;
import com.example.ico.trade.okex.util.OKConstant;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;

public class BaseTest {
    IFutureRestApi futureGetV1;
    IFutureRestApi futurePostV1;
    String api_key = OKConstant.APIKEY;  //OKCoin申请的apiKey
    String secret_key = OKConstant.SECRETKEY;  //OKCoin申请的secretKey
    String url_prex = OKConstant.BASE_URI;  //注意：请求URL 国际站https://www.okcoin.com ; 国内站https://www.okcoin.cn
    ObjectMapper mapp;

    @BeforeTest
    public void init(){
        System.out.println("init");
        futureGetV1 = new FutureRestApiV1(OKConstant.BASE_URI);
        futurePostV1 = new FutureRestApiV1(url_prex, api_key,secret_key);
        mapp = new ObjectMapper();
    }
}
