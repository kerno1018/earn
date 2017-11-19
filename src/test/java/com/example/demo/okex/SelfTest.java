package com.example.demo.okex;

import org.apache.commons.httpclient.Header;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;
import org.apache.commons.httpclient.NameValuePair;
import org.apache.commons.httpclient.methods.PostMethod;
import org.testng.annotations.Test;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import static com.example.db.PriceDB.account;

public class SelfTest {
    HttpClient httpClient = null;
    public HttpClient getClient(String cookie){
        List<Header> headers = new ArrayList<Header>();
        headers.add(new Header("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"));
        headers.add(new Header("Accept-Encoding", "gzip, deflate"));
        headers.add(new Header("Accept-Language", "zh-CN,zh;q=0.8,en;q=0.6,es;q=0.4,sq;q=0.2,en-US;q=0.2"));
        headers.add(new Header("User-Agent", "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)"));
        headers.add(new Header("Cache-Control", "max-age=0"));
        headers.add(new Header("Connection", "keep-alive"));
        headers.add(new Header("Content-Type", "application/x-www-form-urlencoded"));
        headers.add(new Header("Host", "www.okex.com"));
        headers.add(new Header("Origin", "www.okex.com"));
        headers.add(new Header("Referer", "www.okex.com"));
        headers.add(new Header("Cookie",cookie));
        httpClient = new HttpClient(new MultiThreadedHttpConnectionManager());
        httpClient.getHostConfiguration().getParams().setParameter("http.default-headers", headers);
        return httpClient;
    }
    @Test
    public void tt() throws IOException {
        getClient("chartSettings=%7B%22ver%22%3A3%2C%22charts%22%3A%7B%22chartStyle%22%3A%22CandleStick%22%2C%22mIndic%22%3A%22MA%22%2C%22indics%22%3A%5B%22VOLUME%22%2C%22MACD%22%5D%2C%22indicsStatus%22%3A%22close%22%2C%22period%22%3A%2215m%22%2C%22period_weight%22%3A%7B%220%22%3A4%2C%221%22%3A3%2C%222%22%3A8%2C%223%22%3A6%2C%224%22%3A7%2C%227%22%3A0%2C%229%22%3A2%2C%2210%22%3A1%2C%2211%22%3A0%2C%2212%22%3A0%2C%2213%22%3A0%2C%2214%22%3A0%2C%2215%22%3A0%2C%22line%22%3A5%7D%2C%22areaHeight%22%3A%5B%5D%7D%2C%22indics%22%3A%7B%22MA%22%3A%5B7%2C30%2C0%2C0%5D%2C%22EMA%22%3A%5B7%2C30%2C0%2C0%5D%2C%22VOLUME%22%3A%5B5%2C10%5D%2C%22MACD%22%3A%5B12%2C26%2C9%5D%2C%22KDJ%22%3A%5B9%2C3%2C3%5D%2C%22StochRSI%22%3A%5B14%2C14%2C3%2C3%5D%2C%22RSI%22%3A%5B6%2C12%2C24%5D%2C%22DMI%22%3A%5B14%2C6%5D%2C%22OBV%22%3A%5B30%5D%2C%22BOLL%22%3A%5B20%5D%2C%22DMA%22%3A%5B10%2C50%2C10%5D%2C%22TRIX%22%3A%5B12%2C9%5D%2C%22BRAR%22%3A%5B26%5D%2C%22VR%22%3A%5B26%2C6%5D%2C%22EMV%22%3A%5B14%2C9%5D%2C%22WR%22%3A%5B10%2C6%5D%2C%22ROC%22%3A%5B12%2C6%5D%2C%22MTM%22%3A%5B12%2C6%5D%2C%22PSY%22%3A%5B12%2C6%5D%7D%2C%22theme%22%3A%22Dark%22%7D; perm=4B64C7DAD0916810A517540F40CBB1F7; Hm_lvt_01a61555119115f9226e2c15e411694e=1504611883,1504865646,1505056916,1505134539; closesettings=2049; lp=\"https://www.okex.com/\"; first_ref=\"https://www.okex.com/\"; tradetype=0; market_version=0; __zlcmid=j0gp05UmrEBfqI; language=0; coin_session_logininfo=\"\"; SHOW_NOTIFY=0; coin_session_id_o=452a5b85-932c-49ea-b2c7-a445da624e91282d7d69e3515a3b; coin_session_nikename=kernoyu; coin_session_user_id=452a5b85-932c-49ea-b2c7-a445da624e91282d7d69e3515a3b; future_contract_type_BTC=this_week; locale=zh_CN; treatyType_Btc=20171124034; CONTRACT_TYPE_BTC=1; Hm_lvt_b4e1f9d04a77cfd5db302bc2bcc6fe45=1510142820,1510322260,1510418008,1510977604; Hm_lpvt_b4e1f9d04a77cfd5db302bc2bcc6fe45=1510984619; isFuture=1; futureReflash0=0; JSESSIONID=DCD67F8D3AD4EFDF4818821241AD9739; ref=\"https://www.okex.com/future/future.do?symbol=0");
        String login ="https://www.okex.com/user/login/index.do?random="+new Random().nextInt(100);
//        post(login);
        buy();

    }

    public void buy() throws IOException {
        String url = "https://www.okex.com/future/futureDeal.do?leverRate=undefined&current_symbol=0&isFullScreen=undefined&random=94";
        NameValuePair[] param =  {
            new NameValuePair("symbol","0"),
            new NameValuePair("contractId","20171124034" ),
            new NameValuePair("price","6000"),
            new NameValuePair("amount","60" ),
            new NameValuePair("type","1" ),
            new NameValuePair("matchPrice","0"),
            new NameValuePair("partValue","0" ),
            new NameValuePair("isConfirmPrice","0")
        };
        PostMethod method = new PostMethod(url);
        method.setRequestBody(param);

        int code = httpClient.executeMethod(method);
        StringBuffer temp = new StringBuffer();
        try{
//            if(code == 200) {
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
//            }
        }catch (Exception ex){
            ex.printStackTrace();
        }finally {
            method.releaseConnection();
        }
        System.out.println(temp.toString());
    }

    public void post(String url) throws IOException {
        NameValuePair[] param =  {
                new NameValuePair("loginName","18500152610"),
                new NameValuePair("password","wyf518123"),
                new NameValuePair("weixinBind","0")
        };
        PostMethod method = new PostMethod(url);
        method.setRequestBody(param);
        int code = httpClient.executeMethod(method);
        Header[] heards = method.getResponseHeaders();

        for(Header header: heards){
            System.out.println(header.getName());
            System.out.println(header.getValue());
//            httpClient.getHostConfiguration().
        }
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
        System.out.println(temp.toString());
    }

}
