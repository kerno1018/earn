package com.example.util;

import com.example.db.PriceDB;
import com.example.ico.trade.okex.rest.HttpUtilManager;
import com.example.stock.entity.SinaBean;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.httpclient.Header;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpMethod;
import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.http.HttpException;
import org.junit.Test;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.*;

public class HttpUtil {
    public static HttpClient  client = getOkExHttpClient("");

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

    public static String getResponse(String url){
        try {
           return HttpUtilManager.getInstance().requestHttpGet(url,"","");
        } catch (HttpException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "";
//        GetMethod method = new GetMethod(url);
//        StringBuffer temp = new StringBuffer();
//        try{
//        int code = client.executeMethod(method);
//            if(code == 200) {
//                InputStream is = method.getResponseBodyAsStream();
//                InputStreamReader ir = new InputStreamReader(is,"utf-8");
//                BufferedReader br = new BufferedReader(ir);
//                String tempLine = br.readLine();
//                while (tempLine != null) {
//                    temp.append(tempLine);
//                    tempLine = br.readLine();
//                }
//                br.close();
//                ir.close();
//                is.close();
//            }
//        }catch (Exception ex){
//            ex.printStackTrace();
//        }finally {
//            method.releaseConnection();
//        }
//        return temp.toString();
    }
    public static <T> T revert(String value,Class clazz){
        try {
            ObjectMapper mapp = new ObjectMapper();
            return (T)mapp.readValue(value,clazz);
        } catch (IOException e) {
            System.out.println("exception : " + value);
        }
        return null;
    }

}
