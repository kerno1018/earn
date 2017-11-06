package com.example.rest;

import com.example.dao.OKEXDao;
import com.example.dao.entity.OKex;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class OKExRestService {

    @Autowired
    private OKEXDao exDao;
    @GetMapping("/list")
    public String exList(@RequestParam("coinType") String type){
        List<OKex> result = exDao.getListByType(type);
        Map<String,Object> map = new HashMap<>();
        map.put("data",result);
        map.put("recordsTotal",result.size());
        map.put("recordsFiltered",result.size());
        ObjectMapper mapp = new ObjectMapper();
        try {
           return mapp.writeValueAsString(map);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return "";
    }

    @GetMapping("/listex")
    public String lbex(@RequestParam("coinType") String type){
        List<OKex> result = exDao.getListByType(type);
        ArrayList<Map<String,Object>> list = new ArrayList<>();
        Map<String,Object> values ;
        String typeShow = "BTC";
        if(type.startsWith("ltc")){
            typeShow = "LTC";
        }
        for(int i=0;i<result.size();i++){
            for(int j=i+1;j<result.size();j++){
                values = new HashMap<>();
                values.put("oriId",typeShow + result.get(i).getContract_id());
                values.put("oriPrice",result.get(i).getLast());
                values.put("targetId",typeShow + result.get(j).getContract_id());
                values.put("targetPrice",result.get(j).getLast());
                list.add(values);
            }
        }
        Double btcPrice = exDao.getBTCPriceFromKraken();
        for(int j=0;j<result.size();j++){
            values = new HashMap<>();
            values.put("oriId","Kraken");
            values.put("oriPrice",btcPrice);
            values.put("targetId",typeShow + result.get(j).getContract_id());
            values.put("targetPrice",result.get(j).getLast());
            list.add(values);
        }
        Map<String,Object> map = new HashMap<>();
        map.put("data",list);
        map.put("recordsTotal",list.size());
        map.put("recordsFiltered",list.size());
        ObjectMapper mapp = new ObjectMapper();
        try {
            return mapp.writeValueAsString(map);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return "";
    }

}
