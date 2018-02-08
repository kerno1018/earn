package com.example.dao;

import com.example.dao.entity.OKex;
import com.example.util.HttpUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import example.BTC.OTCBtcBtcListener;
import example.ETH.OtcBtcBNBListener;
import example.ETH.OtcBtcEosListener;
import example.ETH.OtcBtcEthListener;
import example.Listener.OtcBtcApi;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class OKEXDao {
    static volatile Map<String ,Double > index = new ConcurrentHashMap<>();
    ObjectMapper mapp = new ObjectMapper();

    public List<OKex> prim() {
        List<OKex> result = new ArrayList<>();
        Double rate = 0.0;
        try {
            rate = processRate();
        } catch (IOException e) {
            e.printStackTrace();
        }
        OtcBtcApi btc = new OTCBtcBtcListener(HttpUtil.client);
        btc.update();
        OKex btcIndex = new OKex();
        btcIndex.setContract_id("BTC_OTC_PRI");
        btcIndex.setIndex(getBTCPriceFromKraken());
        btcIndex.setRate(rate);
        btcIndex.setLast(btc.price);
        result.add(btcIndex);
        OtcBtcApi eth = new OtcBtcEthListener(HttpUtil.client);
        eth.update();
        OKex ethIndex = new OKex();
        ethIndex.setContract_id("ETH_OTC_PRI");
        ethIndex.setIndex(getETHPriceFromKraken());
        ethIndex.setLast(eth.price);
        ethIndex.setRate(rate);
        result.add(ethIndex);
        Double eosId= 0.0;
        try {
            Map map = (Map) mapp.readValue(HttpUtil.getResponse("https://www.okex.com/api/v1/ticker.do?symbol=eos_usdt"),Map.class).get("ticker");
            eosId = Double.valueOf(map.get("last").toString());
        } catch (IOException e) {
            e.printStackTrace();
        }
        OtcBtcApi eos = new OtcBtcEosListener(HttpUtil.client);
        eos.update();
        OKex eosIndex = new OKex();
        eosIndex.setContract_id("EOS_OTC_PRI");
        eosIndex.setIndex(eosId);
        eosIndex.setLast(eos.price);
        eosIndex.setRate(rate);
        result.add(eosIndex);
        Double bnbId= 0.0;
        try {
            bnbId = Double.valueOf(mapp.readValue(HttpUtil.getResponse("https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT"),Map.class).get("price").toString());
        } catch (IOException e) {
            e.printStackTrace();
        }
        OtcBtcApi bnb = new OtcBtcBNBListener(HttpUtil.client);
        bnb.update();
        OKex bnbIndex = new OKex();
        bnbIndex.setContract_id("BNB_OTC_PRI");
        bnbIndex.setRate(rate);
        bnbIndex.setLast(bnb.price);
        bnbIndex.setIndex(bnbId);
        result.add(bnbIndex);
        return result;

    }
    public List<OKex> processPart(String symbol,Double index) throws IOException {
        List<OKex> result = new ArrayList<>();
        result.add(new OKex(mapp.readValue(HttpUtil.getResponse(buildUrl(symbol,"this_week")),Map.class),index));
        result.add(new OKex(mapp.readValue(HttpUtil.getResponse(buildUrl(symbol,"next_week")),Map.class),index));
        result.add(new OKex(mapp.readValue(HttpUtil.getResponse(buildUrl(symbol,"quarter")  ),Map.class),index));
        return result;
    }

    public Double processIndex(String symbol) throws IOException {
        String index = "https://www.okex.com/api/v1/future_index.do?symbol="+symbol;
        Double value = Double.valueOf(mapp.readValue(HttpUtil.getResponse(index),Map.class).get("future_index").toString());
        this.index.put(symbol,value);
        return  this.index.get(symbol);
    }

    public Double processRate() throws IOException {
        String rate = "http://hq.sinajs.cn/rn="+new Date().getTime()+"list=fx_susdcny";
        Double value = Double.valueOf(HttpUtil.getResponse(rate).split(",")[1]);
        return value;
    }
    private String buildUrl(String symbal,String time){
        StringBuilder str= new StringBuilder("https://www.okex.com/api/v1/future_ticker.do?symbol=");
        str.append(symbal).append("&contract_type=").append(time);
        return str.toString();
    }

    public List<OKex> getListByType(String type) {
        try {
            return processPart(type,processIndex(type));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public Double getBTCPriceFromKraken() {
        String url = "https://api.kraken.com/0/public/Ticker?pair=XBTUSD";
        try {
            Map<String,Map<String,Map<String,List>>> map = mapp.readValue(HttpUtil.getResponse(url),Map.class);
            return Double.valueOf(map.get("result").get("XXBTZUSD").get("c").get(0).toString());
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("get BTC price from kraken failed");
        }
    }
    public Double getETHPriceFromKraken() {
        String url = "https://api.kraken.com/0/public/Ticker?pair=ETHUSD";
        try {
            Map<String,Map<String,Map<String,List>>> map = mapp.readValue(HttpUtil.getResponse(url),Map.class);
            return Double.valueOf(map.get("result").get("XETHZUSD").get("c").get(0).toString());
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("get ETH price from kraken failed");
        }
    }

    public static void main(String[] args) {
        new OKEXDao().getBTCPriceFromKraken();
    }
}
