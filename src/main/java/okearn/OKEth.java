package okearn;

import com.example.ico.trade.okex.rest.HttpUtilManager;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpException;
import org.junit.Test;

import javax.swing.*;
import java.applet.AudioClip;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;
import java.util.Map;

public class OKEth {

    @Test
    public void getPrice() throws IOException, HttpException, InterruptedException {
        while (true) {

            HttpUtilManager.cookie = "perm=4B64C7DAD0916810A517540F40CBB1F7; Hm_lvt_01a61555119115f9226e2c15e411694e=1504611883,1504865646,1505056916,1505134539; closesettings=2049; first_ref=\"https://www.okex.com/\"; lp=\"https://www.okex.com/\"; market_version=0; _umdata=C234BF9D3AFA6FE75D4332347B142875268FDB2304BB377E66A9E10A9C9FA4576E8C25633DC94EA0CD43AD3E795C914CC79AF546F9818B8740B6B485BC9907A5; tradetype=0; coin_session_logininfo=\"\"; coin_session_id_o=c7c2c5d2-c796-47e9-ac67-6d17c914181a83e02b8349461230; coin_session_nikename=185****2610; coin_session_user_id=c7c2c5d2-c796-47e9-ac67-6d17c914181a83e02b8349461230; __zlcmid=j0gp05UmrEBfqI; language=0; isFuture=1; treatyType_Btc=20180105034; CONTRACT_TYPE_BTC=1; locale=zh_CN; Hm_lvt_b4e1f9d04a77cfd5db302bc2bcc6fe45=1514477862,1514503546,1514505863,1514538432; Hm_lpvt_b4e1f9d04a77cfd5db302bc2bcc6fe45=1514538459; JSESSIONID=013FCAC6DDB3B421CAAA528A5294FB4A; open-base-currency=cny; open-trade-currency=btc; ref=\"https://www.okex.com/c2c/trade/openTrade.do\"";
            //currency
            String currencyUrl = "https://www.okex.com/api/v1/ticker.do?symbol=eth_btc";
            Double currency = processCurrency(HttpUtilManager.getInstance().requestHttpGet(currencyUrl, "", null));
            //eth
            String ethUrl = "https://www.okex.com/v2/c2c-open/tradingOrders/group?digitalCurrencySymbol=eth&legalCurrencySymbol=cny";
            Double[] sellETH = processBE(HttpUtilManager.getInstance().requestHttpGet(ethUrl, "", null), "buyTradingOrders");
            // btc
            String btcUrl = "https://www.okex.com/v2/c2c-open/tradingOrders/group?digitalCurrencySymbol=btc&legalCurrencySymbol=cny";
            Double[] buyBTC = processBE(HttpUtilManager.getInstance().requestHttpGet(btcUrl, "", null), "sellTradingOrders");
//        buyBTC -= 1000;
//        sellETH+=20;
            Double value = 5000.0;

            System.out.println("earn:" + (value / buyBTC[0] / currency * sellETH[0] - value));
            System.out.println( " --- btc:" + buyBTC[0] +" amount:"+buyBTC[1]);
            System.out.println( " --- eth:" + sellETH[0] +" amount:"+sellETH[1]);

            if((value / buyBTC[0] / currency * sellETH[0] - value) >= 30){
                URL u1 = null;
                try {
                    u1 = new URL("http://fjdx.sc.chinaz.com/Files/DownLoad/sound1/201702/8378.wav");
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
                AudioClip co1 = JApplet.newAudioClip(u1);
                co1.play();
            }

            Thread.sleep(5000);
        }

}

    private Double[] processBE(String source, String type){
        ObjectMapper mapp = new ObjectMapper();
        try {
            Map<String,Map<String,List<Map>>> map = mapp.readValue(source, Map.class);
            List<Map> all = map.get("data").get(type);
            Map bean = all.get(type.equalsIgnoreCase("buyTradingOrders")?0:all.size()-1);
            Double[] result = new Double[2];
            result[0]=Double.valueOf(bean.get("exchangeRate").toString());
            result[1]=Double.valueOf(bean.get("availableAmount").toString());
            return result;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
    private Double processCurrency(String source){
        ObjectMapper mapp = new ObjectMapper();
        try {
            Map<String,Map<String,Object>> map = mapp.readValue(source, Map.class);
            Object all = map.get("ticker").get("last");

            return Double.valueOf(all.toString());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

}
