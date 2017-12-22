package com.example.db;

import com.example.ico.trade.okex.entity.FeaturePositionInfo;
import com.example.ico.trade.okex.entity.FeaturePrice;
import com.example.ico.trade.okex.entity.FeatureUserInfo;
import com.example.stock.entity.SinaBean;

import java.math.BigDecimal;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

public class PriceDB {
    public static List<SinaBean> collectMoney = new ArrayList<>();
    public static Map<String,List<List<BigDecimal>>> lmc = new HashMap<>();
    public static Map<String,TreeMap<String,String>> collectValueCoin = new HashMap<>();
    static BigDecimal flag = BigDecimal.valueOf(0.00000001);
    public static FeaturePositionInfo positionThisWeek = new FeaturePositionInfo();
    public static FeaturePositionInfo positionNextWeek = new FeaturePositionInfo();
    public static FeaturePositionInfo positionQuarter = new FeaturePositionInfo();

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

    public static Map<String,Double> featureData = new ConcurrentHashMap<>();
    public static Map<String,FeaturePrice> featureBTC = new ConcurrentHashMap<>();
    public static volatile FeatureUserInfo account = new FeatureUserInfo();
    public static volatile Integer maxAllowCont = 0;
    public static volatile Integer levelRage = 10; // default level rage
    public static Integer eachOrderCont = 3;
}
