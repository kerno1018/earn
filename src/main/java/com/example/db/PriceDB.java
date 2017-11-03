package com.example.db;

import com.example.stock.entity.SinaBean;

import java.math.BigDecimal;
import java.util.*;

public class PriceDB {
    public static List<SinaBean> collectMoney = new ArrayList<>();
    public static Map<String,List<List<BigDecimal>>> lmc = new HashMap<>();
    public static Map<String,TreeMap<String,String>> collectValueCoin = new HashMap<>();
    static BigDecimal flag = BigDecimal.valueOf(0.00000001);
    public static BigDecimal getAskVolumn(List<List<BigDecimal>> db){
        return db.get(0).get(1);
    }
    public static BigDecimal getAskPrice(List<List<BigDecimal>> db){
        return db.get(0).get(0).subtract(flag);
    }
    public static BigDecimal getBidVolumn(List<List<BigDecimal>> db){
        return db.get(1).get(1);
    }
    public static BigDecimal getBidPrice(List<List<BigDecimal>> db){
        return db.get(1).get(0).add(flag);
    }

}