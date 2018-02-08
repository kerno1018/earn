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
import java.util.Map;

public class OTCNotification {

    @Test
    public  void main() throws IOException, HttpException, InterruptedException {

        HttpUtilManager.cookie = "intercom-id-rjyht4dn=e2cac670-f7a9-412d-8a7c-d688684e8204; pt_7abbd3b8=uid=dsAT9pfqKkomoaxSzUNT4A&nid=0&vid=NQ9vW6Kzi5jLcvE2qNSkcg&vn=2&pvn=11&sact=1514734791961&to_flag=0&pl=mDA0Xo18JWBZczXPS3zStw*pt*1514734791961; _ga=GA1.2.1969955115.1513173326; intercom-lou-rjyht4dn=1; __auc=2d6b736916103d627ef93406499; _gid=GA1.2.412961156.1517615940; __asc=68d76b011615e1d622a61ae3a38; mp_mixpanel__c=0; mp_b7c8a66f0ac46e0afb868ab65ecb8fc7_mixpanel=%7B%22distinct_id%22%3A%20%2221851%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpap%22%3A%20%5B%5D%7D; intercom-session-rjyht4dn=YzJPQURuWnhYeW9jTkc3eWd0WWJiUXVEcjdoMEowR0FTaHdKQ25QV3VJaWZpR3luWUhzWlBpbVh0eWt2OGJJeC0tWWwwdnVHSmRWZnBtcFEyM0YrV2NTQT09--00af3f1756d4c1da917830795513ae5896bbd65b; _otcbtc_session=bGl3Qi82NWs4NFo0eXgyM1RyL0tWS0lFQWZHNlg1TFptZ1lLa2pnZVRhcjZ0VWFYV1FRNTdvZm5CdktLZmwvR2Z3dUJLalNoR2tEdzN6MkRVVkhqUGRSdU5ld3ZITGRZcENzOHUrbTRCcFczWTJrYitkbWRVc1Bib3BqS0xwRFc0SUJralpkMUxRaDczSG12aWlTV0tOZDA0U3hsV0w4QjE2akVhbWcrNzlnejY5amVLM2xhRmtoam9uWW1GdVRwaE44UWVKZXdocmEzM2dDelBvbkNlZ2JRK2RHMG5hcjJyYmRDVXpxZkE0RWtwUldXZUtRZ3N1K1N3SENGTXdwUmFPVTlpYXplWm9lL0JTS0VTMTV4d3haUDFWbG45a2JBaDNGbWpFcHpML1BiSUtaNld4RXh2QVpJNmtuK1ZMWmxlejRNSHBpMEFXT2dXTTIrY1U0RUUxTDNneXdacjZwSkM3UnIzdVp0UWJoTmtGMS9iNHM3R0p3NFhQS0cxZzcwcjBpbWV6VklnUExJWS9HS1NtcEJMU1lRUnM2UTVCTVJSS0VWNXliWWF5dGxWVlVkTWZGb1prNVkybEwxQnorbkw1VWlHT3pSL0hlUFZiMU9hdGpaWDA1QlYwNWRlb0NkaEpTRkh1ZzJ6QXBHQVFNekV5Rmd4NDNzcUxLSHM0RlJzaUIzUUJOaXZGRm9qZEwyZlBveEJHUHUxem9yUEhqaytJS1cxWHVKNW9tOEN5VFBlZ3NoN3VoSUJVYWo3SkRzLS01czIwOTBFTXNIT2w0akFiL2xlSGZ3PT0%3D--4a7c117aea6b9e874f6fbc93bd3a2834766a8c05";
        String currencyUrl = "https://otcbtc.com/notifications.json";
        while (true){
            try{
                Integer count = processCurrency(HttpUtilManager.getInstance().requestHttpGet(currencyUrl, "", null));
                if(count > 0){
                    new Thread(new Ring()).start();
                }
                System.out.println("unread count:"+count);
            }catch (Exception ex){
                System.out.println("error.....");
            }
            Thread.sleep(5000);
        }
    }

    private Integer processCurrency(String source){
        ObjectMapper mapp = new ObjectMapper();
        try {
            Map<String,Object> map = mapp.readValue(source, Map.class);
            Object all = map.get("unread_count");

            return Integer.valueOf(all.toString());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
    class Ring implements Runnable{

        @Override
        public void run() {
//            System.setProperty("proxySet", "true");
//            System.setProperty("proxyHost", "cn-proxy.jp.oracle.com");
            try {
                URL u1 = null;
                try {
                    u1 = new URL("http://fjdx.sc.chinaz.com/Files/DownLoad/sound1/201702/8378.wav");
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
                AudioClip co1 = JApplet.newAudioClip(u1);
                co1.play();
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

}
