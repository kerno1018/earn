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
    static String cookie="perm=4B64C7DAD0916810A517540F40CBB1F7; Hm_lvt_01a61555119115f9226e2c15e411694e=1504611883,1504865646,1505056916,1505134539; closesettings=2049; _umdata=C234BF9D3AFA6FE75D4332347B142875268FDB2304BB377E66A9E10A9C9FA4576E8C25633DC94EA0CD43AD3E795C914C0978C2A6FE45BE6BA07DC5FDB9914CA6; __cfduid=d76df84658a4877729189206fc48a807f1515106264; market_version=0; first_ref=\"https://www.okex.com/c2c/trade/openTrade.do\"; lp=\"https://www.okex.com/spot/trade/accountBalance.do\"; __zlcmid=j0gp05UmrEBfqI; coin_session_logininfo=\"\"; coin_session_id_o=b63c0cca-4f30-4be7-83d1-c14f555fb61d83e02b8349461230; coin_session_nikename=185****2610; coin_session_user_id=b63c0cca-4f30-4be7-83d1-c14f555fb61d83e02b8349461230; language=0; future_contract_number_ETH=1; CONTRACT_TYPE_ETH=1; future_contract_number_BTC=2; CONTRACT_TYPE_BTC=2; tradetype=0; symbol=btc_usdt; future_contract_type_BTC=this_week; treatyType_Btc=201801190000034; future_contract_type_ETH=this_week; treatyType_Eth=201801190020060; currency=1; locale=zh_CN; ref=\"https://www.okex.com/c2c/trade/openTrade.do\"; JSESSIONID=F2A4CBFD3920776FD9187A67DC48FE2D; Hm_lvt_b4e1f9d04a77cfd5db302bc2bcc6fe45=1515496192,1515674139,1515712112,1515748299; Hm_lpvt_b4e1f9d04a77cfd5db302bc2bcc6fe45=1515753222; open-base-currency=cny; open-trade-currency=eth";
    public static void init(){
        okExClient = getOkExHttpClient(cookie);
        otcClient = new org.apache.commons.httpclient.HttpClient(new MultiThreadedHttpConnectionManager());;
    }

    public static void main(String[] args) throws InterruptedException {
        init();
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
