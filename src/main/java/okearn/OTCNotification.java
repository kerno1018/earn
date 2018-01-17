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

        HttpUtilManager.cookie = "";
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
