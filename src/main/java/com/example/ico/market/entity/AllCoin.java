package com.example.ico.market.entity;

import com.example.util.HttpUtil;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class AllCoin implements Serializable {
    private Integer id;
    private String primary;
    private String secondary;
    private Double change24h;
    private Double lastprice;
    private Double btcDollor;
    private Double ethDollor;
    private Double qtumDollor;
    private Double dollor;
    private String key;

    public Double getDollor() {
        return dollor;
    }

    public void setDollor(Double dollor) {
        this.dollor = dollor;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPrimary() {
        return primary;
    }

    public void setPrimary(String primary) {
        this.primary = primary;
    }

    public String getSecondary() {
        return secondary;
    }

    public void setSecondary(String secondary) {
        this.secondary = secondary;
    }

    public Double getChange24h() {
        return change24h;
    }

    public void setChange24h(Double change24h) {
        this.change24h = change24h;
    }

    public Double getLastprice() {
        return lastprice;
    }

    public void setLastprice(Double lastprice) {
        this.lastprice = lastprice;
    }

    public Double getBtcDollor() {
        return btcDollor;
    }

    public void setBtcDollor(Double btcDollor) {
        this.btcDollor = btcDollor;
    }

    public Double getEthDollor() {
        return ethDollor;
    }

    public void setEthDollor(Double ethDollor) {
        this.ethDollor = ethDollor;
    }

    public Double getQtumDollor() {
        return qtumDollor;
    }

    public void setQtumDollor(Double qtumDollor) {
        this.qtumDollor = qtumDollor;
    }

    public void report(Map<String, List<List<BigDecimal>>> db){
        // depth
        try {
            Map<String, List<List<Double>>> map = HttpUtil.revert(HttpUtil.getResponse("https://api.allcoin.com/api/v1/depth?symbol=" + getPrimary() + "_" + getSecondary()), Map.class);
            List<BigDecimal> bids = convert(map.get("bids"));
            List<BigDecimal> asks = convert(map.get("asks"));
            List<List<BigDecimal>> list = new ArrayList<>();
            list.add(asks);
            list.add(bids);
            db.put(getKey(),list);
        }catch (Exception ex){
            ex.printStackTrace();
        }
    }
    private List<BigDecimal> convert(List<List<Double>> bids){
        int tmpBid = 1;
        BigDecimal sumValue = BigDecimal.ZERO;
        BigDecimal sumVolumn = BigDecimal.ZERO;
        for (List<Double> bid : bids) {
            tmpBid++;
            sumValue = BigDecimal.valueOf(bid.get(0));
            sumVolumn = BigDecimal.valueOf(bid.get(1));
            break;
        }
        List<BigDecimal> list = new ArrayList<>();
        list.add(sumValue);
        list.add(sumVolumn);
        return list;
    }


}
