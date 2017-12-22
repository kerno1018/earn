package example.Listener;

import example.ETH.Earn;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpMethod;
import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;
import org.apache.commons.httpclient.methods.GetMethod;
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
        GetMethod get = new GetMethod(getUrl());
        String response = null;
        try {
            response = processResponse(httpClient,get);
        } catch (IOException e) {
            e.printStackTrace();
        }
        org.jsoup.nodes.Document doc = Jsoup.parse(response, "UTF-8");
        org.jsoup.select.Elements elements = doc.getElementsByAttributeValue("class","can-buy-count");
        if(elements.size()>0){
            price = Double.valueOf(elements.get(0).text().split(" ")[0].replace(",",""));
        }else{
            price=0.0;
        }
    }

}
