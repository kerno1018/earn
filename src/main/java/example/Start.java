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
    HttpClient okExClient;
    HttpClient otcClient;
    @Before
    public void init(){
        String cookie="perm=4B64C7DAD0916810A517540F40CBB1F7; Hm_lvt_01a61555119115f9226e2c15e411694e=1504611883,1504865646,1505056916,1505134539; closesettings=2049; first_ref=\"https://www.okex.com/\"; lp=\"https://www.okex.com/\"; market_version=0; leverRate=10; treatyType_Eth=20180330242; CONTRACT_TYPE_ETH=4; _umdata=C234BF9D3AFA6FE75D4332347B142875268FDB2304BB377E66A9E10A9C9FA4576E8C25633DC94EA0CD43AD3E795C914CC79AF546F9818B8740B6B485BC9907A5; coin_session_logininfo=\"\"; coin_session_id_o=a54b9b59-eb99-403f-b5bc-6c7cc675a47183e02b8349461230; coin_session_nikename=185****2610; coin_session_user_id=a54b9b59-eb99-403f-b5bc-6c7cc675a47183e02b8349461230; __zlcmid=j0gp05UmrEBfqI; language=0; future_contract_type_BTC=this_week; futureReflash0=0; tradetype=0; symbol=dash_btc; isFuture=1; treatyType_Btc=20171222034; CONTRACT_TYPE_BTC=1; locale=zh_CN; JSESSIONID=BA69CA74CAE200029593F0A571AB06BA; Hm_lvt_b4e1f9d04a77cfd5db302bc2bcc6fe45=1513511627,1513511802,1513512338,1513512364; Hm_lpvt_b4e1f9d04a77cfd5db302bc2bcc6fe45=1513514476; open-base-currency=cny; open-trade-currency=btc; ref=\"https://www.okex.com/c2c/trade/openTrade.do\"";
        okExClient = getOkExHttpClient(cookie);
        otcClient = new org.apache.commons.httpclient.HttpClient(new MultiThreadedHttpConnectionManager());;
    }

    @Test
    public void start() throws InterruptedException {
        OKExApi btc = new OKExBtcListener(okExClient);
        OtcBtcApi otBtc = new OTCBtcBtcListener(otcClient);
        List<Earn> btcList = new ArrayList<>();
        btcList.add(otBtc);
        btcList.add(btc);
        OKExApi eth = new OKExEthListener(okExClient);
        OtcBtcApi otEth = new OtcBtcEthListener(otcClient);
        List<Earn> ethList = new ArrayList<>();
        ethList.add(otEth);
        ethList.add(eth);
        Executor ex = Executors.newFixedThreadPool(5);
        while (true){
            Listener listener = new Listener();
            listener.addListener("eth",ethList);
            listener.addListener("btc",btcList);
            ex.execute(listener);
            Thread.sleep(10000);
        }
    }

    private org.apache.commons.httpclient.HttpClient getOkExHttpClient(String cookie){
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
