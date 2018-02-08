package example.Listener;

import com.example.ico.trade.okex.rest.HttpUtilManager;
import example.ETH.Earn;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpMethod;
import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.http.HttpException;
import org.jsoup.Jsoup;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public abstract class OtcBtcApi extends Earn {
    HttpClient httpClient;
    public OtcBtcApi(HttpClient httpClient){
        this.httpClient = httpClient;
    }
    public abstract String getUrl();

    public void update(){
        GetMethod get = new GetMethod();
        String response = null;
        try {
            response = HttpUtilManager.getInstance().requestHttpGet(getUrl(),"","");
        } catch (IOException e) {
            e.printStackTrace();
        } catch (HttpException e) {
            e.printStackTrace();
        }
        org.jsoup.nodes.Document doc = Jsoup.parse(response, "UTF-8");
        org.jsoup.select.Elements elements = doc.getElementsByAttributeValue("class","recommend-card__price");
        if(elements.size()>0){
            price = Double.valueOf(elements.get(0).text().split(" ")[0].replace(",",""));
        }else{
            price=0.0;
        }
    }

}
