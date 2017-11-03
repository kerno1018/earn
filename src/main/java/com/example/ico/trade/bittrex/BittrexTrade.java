package com.example.ico.trade.bittrex;

import com.example.util.MathUtil;
import org.apache.commons.codec.binary.Hex;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpMethod;
import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;
import org.apache.commons.httpclient.NameValuePair;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.methods.PostMethod;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.io.*;
import java.security.InvalidKeyException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Date;

public class BittrexTrade {
    private static String key="2febefc31177474aa085245bc83f804f";
    private static String secrit="944fe9935cdd416c8a946a840611816d";
    static HttpClient client = new HttpClient(new MultiThreadedHttpConnectionManager());
    private static String tradeUrl = "https://api.allcoin.com/api/v1/trade";
    private static String hmacSHA512(String data,String key) {
        String result = "";
        byte[] bytesKey = key.getBytes();
        final SecretKeySpec secretKey = new SecretKeySpec(bytesKey, "HmacSHA512");
        try {
            Mac mac = Mac.getInstance("HmacSHA512");
            mac.init(secretKey);
            final byte[] macData = mac.doFinal(data.getBytes());
            byte[] hex = new Hex().encode(macData);
            result = new String(hex, "ISO-8859-1");
        } catch (NoSuchAlgorithmException e) {
            // TODO 自动生成的 catch 块
            e.printStackTrace();
        } catch (InvalidKeyException e) {
            // TODO 自动生成的 catch 块
            e.printStackTrace();
        } catch (UnsupportedEncodingException e) {
            // TODO 自动生成的 catch 块
            e.printStackTrace();
        }
        return result;
    }
    public static void sell(String marketName,Double quantity,Double rate){
        StringBuilder str= new StringBuilder("https://bittrex.com/api/v1.1/market/selllimit?");
        str.append("market=").append(marketName)
        .append("&quantity=").append(quantity)
        .append("&rate=").append(rate)
        .append("&apikey=").append(key)
        .append("&nonce=").append(new Date().getTime());
        GetMethod method = new GetMethod(str.toString());
        method.setRequestHeader("apisign",hmacSHA512(str.toString(),secrit));
        try {
            String response = processResponse(method);
            System.out.println("Bittrex sell stuff");
            System.out.println(response);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    private static String processResponse(HttpMethod method) throws IOException {
        int code = client.executeMethod(method);
        StringBuffer temp = new StringBuffer();
        try{
            if(code == 200) {
                InputStream is = method.getResponseBodyAsStream();
                InputStreamReader ir = new InputStreamReader(is);
                BufferedReader br = new BufferedReader(ir);
                String tempLine = br.readLine();
                while (tempLine != null) {
                    temp.append(tempLine);
                    tempLine = br.readLine();
                }
                br.close();
                ir.close();
                is.close();
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }finally {
            method.releaseConnection();
        }
        return temp.toString();
    }

    public static void buy(String marketName,Double quantity,Double rate){
//        Key:
//        Secret:944fe9935cdd416c8a946a840611816d
        StringBuilder str= new StringBuilder("https://bittrex.com/api/v1.1/market/buylimit?");
        str.append("market=").append(marketName)
                .append("&quantity=").append(quantity)
                .append("&rate=").append(rate)
                .append("&apikey=").append(key)
                .append("&nonce=").append(new Date().getTime());
        GetMethod method = new GetMethod(str.toString());
        method.setRequestHeader("apisign",hmacSHA512(str.toString(),secrit));
        try {
            String response = processResponse(method);
            System.out.println("Bittrex buy stuff");
            System.out.println(response);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
