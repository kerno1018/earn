package example.Listener;

import com.fasterxml.jackson.databind.ObjectMapper;
import example.ETH.Earn;
import org.apache.commons.httpclient.Header;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;
import org.apache.commons.httpclient.methods.GetMethod;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public abstract class OKExApi extends Earn {

    HttpClient httpClient;
    public OKExApi(HttpClient httpClient){
        this.httpClient = httpClient;
    }
    protected abstract String getUrl();
    public void update(){
        GetMethod get = new GetMethod(getUrl());
        String response = null;
        try {
            response = processResponse(httpClient,get);
        } catch (IOException e) {
            e.printStackTrace();
        }
        ObjectMapper mapp = new ObjectMapper();
        try {
            Map<String,Map<String,List<Map>>> map = mapp.readValue(response, Map.class);
            List<Map> all = map.get("data").get("sellTradingOrders");
            if(all.size()==0){
                price = 0.0;
                return;
            }
            Map bean = all.get(all.size()-1);
//            System.out.print(bean.get("clientName"));
//            System.out.print(" "+ bean.get("availableAmount") +" ");
//            System.out.println();
            price = Double.valueOf(bean.get("exchangeRate").toString());
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

}
