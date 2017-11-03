package com.example.ico.trade.allcoin;

import com.example.util.MathUtil;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpMethod;
import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;
import org.apache.commons.httpclient.NameValuePair;
import org.apache.commons.httpclient.methods.PostMethod;

import java.io.*;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class AllCoinTrade {
    private static String kernoKey = "";
    private static String md5(String key){
        try {
            char md5String[] = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                    'A', 'B', 'C', 'D', 'E', 'F' };
            //信息摘要是安全的单向哈希函数，它接收任意大小的数据，并输出固定长度的哈希值。
            MessageDigest mdInst = MessageDigest.getInstance("MD5");

            //MessageDigest对象通过使用 update方法处理数据， 使用指定的byte数组更新摘要
            mdInst.update(key.getBytes());

            // 摘要更新之后，通过调用digest（）执行哈希计算，获得密文
            byte[] md = mdInst.digest();

            // 把密文转换成十六进制的字符串形式
            int j = md.length;
            char str[] = new char[j * 2];
            int k = 0;
            for (int i = 0; i < j; i++) {   //  i = 0
                byte byte0 = md[i];  //95
                str[k++] = md5String[byte0 >>> 4 & 0xf];    //    5
                str[k++] = md5String[byte0 & 0xf];   //   F
            }
            //返回经过加密后的字符串
            return new String(str);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return "";
    }

    static HttpClient client = new HttpClient(new MultiThreadedHttpConnectionManager());
    private static String tradeUrl = "https://api.allcoin.com/api/v1/trade";
    public static void sell(String coin,Double price,Double num){
        PostMethod method = new PostMethod(tradeUrl);
        NameValuePair[] param = getParam(coin,"sell", MathUtil.formatDouble(price),MathUtil.formatDouble(num));
        method.setRequestBody(param);
        try {
            String response = processResponse(method);
            System.out.println("sell stuff");
            System.out.println(response);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void buy(String coin,Double price,Double num){
//        LMC_BTC
        PostMethod method = new PostMethod(tradeUrl);
        NameValuePair[] param = getParam(coin,"buy", MathUtil.formatDouble(price),MathUtil.formatDouble(num));
        method.setRequestBody(param);
        try {
            String response = processResponse(method);
            System.out.println("buy stuff");
            System.out.println(response);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    private static NameValuePair[] getParam(String coin, String type, String price, String num){
        StringBuilder str = new StringBuilder("amount=");
                str.append(num)
                .append("&api_key=").append("d3d1fd77-fff4-43e2-b7f3-859e2aaf76a7")
                .append("&price=").append(price)
                .append("&symbol=").append(coin)
                .append("&type=").append(type)
                .append("&secret_key=").append("3CA03CA460F528A767354CDB2A49193E");
//                kernoKey=str.toString()
        String sign = md5(str.toString());
        NameValuePair[] params = {
                new NameValuePair("amount",num),
                new NameValuePair("api_key","d3d1fd77-fff4-43e2-b7f3-859e2aaf76a7"),
                new NameValuePair("price",price),
                new NameValuePair("symbol",coin),
                new NameValuePair("type",type),
                new NameValuePair("secret_key","3CA03CA460F528A767354CDB2A49193E"),
                new NameValuePair("sign",sign)
        };
        return params;
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


}
