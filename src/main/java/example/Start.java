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
    static String cookie="perm=4B64C7DAD0916810A517540F40CBB1F7; Hm_lvt_01a61555119115f9226e2c15e411694e=1504611883,1504865646,1505056916,1505134539; closesettings=2049; _umdata=C234BF9D3AFA6FE75D4332347B142875268FDB2304BB377E66A9E10A9C9FA4576E8C25633DC94EA0CD43AD3E795C914C0978C2A6FE45BE6BA07DC5FDB9914CA6; __cfduid=d76df84658a4877729189206fc48a807f1515106264; market_version=0; first_ref=\"https://www.okex.com/c2c/trade/openTrade.do\"; lp=\"https://www.okex.com/spot/trade/accountBalance.do\"; __zlcmid=j0gp05UmrEBfqI; currency=1; mcid=11625; tradetype=1; language=1; locale=zh_CN; Hm_lvt_b4e1f9d04a77cfd5db302bc2bcc6fe45=1515889521,1515910628,1516185272,1516410797; coin_session_logininfo=\"\"; coin_session_id_o=fb375ca6-58fc-4e1a-8288-9b689c3aeb8083e02b8349461230; coin_session_nikename=185****2610; coin_session_user_id=fb375ca6-58fc-4e1a-8288-9b689c3aeb8083e02b8349461230; treatyType_Btc=201801260000012; future_contract_type_BTC=this_week; open-base-currency=cny; open-trade-currency=eth; ref=\"https://www.okex.com/c2c/trade/openTrade.do\"; JSESSIONID=A3393AC23DF657053C07A0A12E7EDC95; Hm_lpvt_b4e1f9d04a77cfd5db302bc2bcc6fe45=1516411947";
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
        headers.add(new Header("Accept-Language", "en,zh-CN;q=0.9,zh;q=0.8,es;q=0.7,sq;q=0.6,en-US;q=0.5"));
        headers.add(new Header("User-Agent", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"));
        headers.add(new Header("Host", "www.okex.com"));
        headers.add(new Header("Referer", "https://www.okex.com/c2c/trade/openTrade.do"));
        headers.add(new Header("Cookie",cookie));
        httpClient.getHostConfiguration().getParams().setParameter("http.default-headers", headers);
        return httpClient;
    }




}
