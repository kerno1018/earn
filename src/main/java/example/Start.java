package example;

import example.BTC.OKExBtcListener;
import example.BTC.OTCBtcBtcListener;
import example.ETH.Earn;
import example.ETH.OKExEthListener;
import example.ETH.OtcBtcEthListener;
import example.Listener.Listener;
import example.Listener.OKExApi;
import example.Listener.OtcBtcApi;
import org.apache.commons.httpclient.Header;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

public class Start {
    static HttpClient okExClient;
    static  HttpClient otcClient;
    public static void init(String cookie){
        okExClient = getOkExHttpClient(cookie);
        otcClient = new org.apache.commons.httpclient.HttpClient(new MultiThreadedHttpConnectionManager());;
    }

    public static void main(String[] args) throws InterruptedException {
        if(args == null || args[0].length()<50){
            System.out.println("invalid input...");
            return;
        }
        init(args[0]);
        if(args.length>1){
            Double inner = Double.valueOf(args[1]);
            Listener.inter = inner;
        }
        OKExApi btc = new OKExBtcListener(okExClient);
        OtcBtcApi otBtc = new OTCBtcBtcListener(otcClient);
        List<Earn> btcList = new ArrayList<>();
        btcList.add(otBtc);
        btcList.add(btc);
        OKExApi eth = new OKExEthListener(okExClient);
        eth.type="buyTradingOrders";
        OtcBtcApi otEth = new OtcBtcEthListener(otcClient);
        List<Earn> ethList = new ArrayList<>();
        ethList.add(otEth);
        ethList.add(eth);
        Executor ex = Executors.newFixedThreadPool(5);
        while (true){
            Listener listener = new Listener();
            listener.addListener("eth",ethList);
//            listener.addListener("btc",btcList);
            ex.execute(listener);
            Thread.sleep(30000);
        }
    }

    private static  org.apache.commons.httpclient.HttpClient getOkExHttpClient(String cookie){
        org.apache.commons.httpclient.HttpClient httpClient = new org.apache.commons.httpclient.HttpClient(new MultiThreadedHttpConnectionManager());
        List<Header> headers = new ArrayList<Header>();
        headers.add(new Header("Accept", "*/*"));
        headers.add(new Header("Accept-Encoding", "gzip, deflate, br"));
        headers.add(new Header("Accept-Language", "en,zh-CN;q=0.8,zh;q=0.6,es;q=0.4,sq;q=0.2,en-US;q=0.2"));
        headers.add(new Header("User-Agent", "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"));
        headers.add(new Header("Host", "www.okex.com"));
        headers.add(new Header("Referer", "https://www.okex.com/c2c/trade/openTrade.do"));
        headers.add(new Header("Cookie",cookie));
        httpClient.getHostConfiguration().getParams().setParameter("http.default-headers", headers);
        return httpClient;
    }




}
