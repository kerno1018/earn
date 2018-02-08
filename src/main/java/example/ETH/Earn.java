package example.ETH;

import com.example.ico.trade.okex.rest.HttpUtilManager;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpMethod;
import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;
import org.apache.commons.httpclient.methods.GetMethod;
import org.jsoup.Jsoup;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public abstract class Earn {

    public Double price;
    public abstract void update();
    protected  String processResponse(HttpClient client, HttpMethod method) throws IOException {

//        HttpUtilManager.getInstance().requestHttpGet()
        return "";
    }


}
