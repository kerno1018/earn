package com.example.demo.okex;

import com.example.ico.trade.okex.entity.*;
import com.example.ico.trade.okex.rest.future.IFutureRestApi;
import com.example.ico.trade.okex.rest.future.impl.FutureRestApiV1;
import com.example.ico.trade.okex.util.OKConstant;
import com.example.ico.trade.okex.util.OKEXErrorCode;
import com.fasterxml.jackson.databind.ObjectMapper;
import static org.testng.AssertJUnit.*;

import org.springframework.web.bind.annotation.Mapping;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.io.IOException;
import java.util.Date;
import java.util.Map;

public class FeatureTradeTest {
    private IFutureRestApi futureGetV1;
    private IFutureRestApi futurePostV1;
    private String api_key = OKConstant.APIKEY;  //OKCoin申请的apiKey
    private String secret_key = OKConstant.SECRETKEY;  //OKCoin申请的secretKey
    private String url_prex = OKConstant.BASE_URI;  //注意：请求URL 国际站https://www.okcoin.com ; 国内站https://www.okcoin.cn
    ObjectMapper mapp;

    @BeforeMethod
    public void init(){
        futureGetV1 = new FutureRestApiV1(OKConstant.BASE_URI);
        futurePostV1 = new FutureRestApiV1(url_prex, api_key,secret_key);
        mapp = new ObjectMapper();
    }
    @Test
    public void featureTickerTest() throws IOException {
        //期货行情信息
        FeaturePrice price  = mapp.readValue(futureGetV1.future_ticker("btc_usd", "this_week"),FeaturePrice.class);
        System.out.println(price.getDate());
        assertNotNull(price);
        assertNotNull(price.getDate());
        assertNotNull(price.getTicker());
        assertNotNull(price.getTicker().getLast());
    }
    @Test
    public void featureIndexTest() throws IOException {
        //期货指数信息
        Map<String,Double> featureIndex = mapp.readValue(futureGetV1.future_index("btc_usd"),Map.class);
        assertNotNull(featureIndex);
        assertNotNull(featureIndex.get("future_index"));
        assertTrue(featureIndex.get("future_index")>0.0);
    }

    @Test
    public void featureTradesTest() throws IOException {
        //期货交易信息
        assertNotNull(futureGetV1.future_trades("btc_usd", "this_week"));
    }
    @Test
    public void featureDepthTest() throws IOException {
        //期货市场深度
        FeatureDepth featureDepth = mapp.readValue(futureGetV1.future_depth("btc_usd", "this_week"),FeatureDepth.class);
        assertNotNull(featureDepth);
        assertNotNull(featureDepth.getAsks());
        assertNotNull(featureDepth.getBids());
        assertEquals(true,featureDepth.getAsks()[0][1].doubleValue()>0.0);
        assertEquals(true,featureDepth.getBids()[0][1].doubleValue()>0.0);
    }
    @Test
    public void featureCashTest() throws IOException {
        //美元-人民币汇率
        Map<String,Double> map = mapp.readValue(futureGetV1.exchange_rate(),Map.class);
        assertNotNull(map);
        assertTrue(map.get("rate")>0.0);
    }

    @Test
    public void featureOrder() throws IOException{
        FeaturePrice price  = mapp.readValue(futureGetV1.future_ticker("btc_usd", "this_week"),FeaturePrice.class);
        double ask = price.getTicker().getLast().doubleValue()*0.97;
        //期货下单
//        1:开多(done)   2:开空   3:平多   4:平空
        String tradeResultV1 = futurePostV1.future_trade("btc_usd","this_week", ask+"", "1", "2", "0");
        ObjectMapper mapp = new ObjectMapper();
        FeatureOrder tradeJSV1 = mapp.readValue(tradeResultV1, FeatureOrder.class);
        assertTrue(tradeJSV1.getResult());
        if(tradeJSV1.getResult()){
            //期货用户订单查询
           String result =  futurePostV1.future_order_info("btc_usd", "this_week",tradeJSV1.getOrder_id(), "1", "1", "2");
           FeatureOrderInfo info = mapp.readValue(result,FeatureOrderInfo.class);
           assertNotNull(info);
           assertTrue(info.getResult());
           assertNotNull(info.getOrders());
           assertTrue(info.getOrders().size()>0);
           assertFalse(info.getOrders().get(0).isSuccess());
            //取消订单
            FeatureOrder cancelOrder = mapp.readValue(futurePostV1.future_cancel("btc_usd", "this_week",tradeJSV1.getOrder_id()),FeatureOrder.class);
            assertNotNull(cancelOrder);
            assertTrue(cancelOrder.getResult());
            assertNotNull(cancelOrder.getOrder_id());
            if(cancelOrder.getResult()){
                assertEquals(cancelOrder.getOrder_id(),tradeJSV1.getOrder_id());
            }else{
                System.out.println(OKEXErrorCode.errorCode.get(tradeJSV1.getError_code()));
            }

        }else{
            System.out.println(OKEXErrorCode.errorCode.get(tradeJSV1.getError_code()));
        }
    }

    @Test
    public void featureAccount() throws IOException{
        //期货账户信息
        String result =  futurePostV1.future_userinfo();
        FeatureUserInfo info = mapp.readValue(result,FeatureUserInfo.class);
        assertNotNull(info);
        assertTrue(info.getResult());
        assertNotNull(info.getInfo());
        assertNotNull(info.getInfo().getBtc());
        assertTrue(Double.valueOf(info.getInfo().getBtc().getAccount_rights().toString())>0.0);
    }


}
