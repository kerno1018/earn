package com.example.ico.trade.okex.websocket.stratety;

import com.example.db.PriceDB;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.Map;

public class TickerProcess {
    ObjectMapper mapp = new ObjectMapper();
    private String source = null;
    public TickerProcess(){
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public void process(){
        try {
            Map<String,Map<String,Object>> map = mapp.readValue(source, Map.class);
            if(source.indexOf("addChannel")==-1){
                if(source.indexOf("next_week")>-1){
                    PriceDB.featureData.put("N",Double.valueOf(map.get("data").get("last").toString()));
                }
                if(source.indexOf("this_week")>-1){
                    PriceDB.featureData.put("T",Double.valueOf(map.get("data").get("last").toString()));
                }
                if(source.indexOf("quarter")>-1){
                    PriceDB.featureData.put("Q",Double.valueOf(map.get("data").get("last").toString()));
                }

            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
