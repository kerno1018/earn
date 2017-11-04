package com.example.ico.service;

import com.example.db.PriceDB;
import com.example.ico.dao.BaseDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OKEXService {
    @Autowired
    private BaseDao dao;
    public void processFeatureData() {
        Double thisWeek = PriceDB.featureData.get("T");
        Double nextWeek = PriceDB.featureData.get("N");
        Double quarter = PriceDB.featureData.get("Q");

        Double threshold = (quarter - thisWeek)/thisWeek;
        if(threshold<=-0.05){
            System.out.println("QT"+threshold + "下多：quarter,下空：this week");
        }

        threshold = (quarter - nextWeek)/nextWeek;
        if(threshold<=-0.05){
            System.out.println("QN"+threshold + "下多：quarter,下空：next week");
        }
        threshold = (nextWeek - thisWeek)/thisWeek;
        if(threshold<=-0.05){
            System.out.println("NT"+threshold + "下多：next week,下空：this week");
        }
    }

}
