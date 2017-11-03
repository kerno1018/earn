package com.example.ico.market.entity;

import com.example.util.HttpUtil;
import javax.persistence.Transient;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class BittrexCoin implements Serializable {
    private String marketname;
    private Double high;
    private Double low;
    private Double volume;
    private Double last;
    private Double basevolume;
    private String timestamp;
    private Double bid;
    private Double ask;
    private Double openbuyorders;
    private Double opensellorders;
    private String prevday;
    private String created;
    private Double btcDollor;
    private Double ethDollor;
    @Transient
    private String key;

    public String getMarketname() {
        return marketname;
    }

    public void setMarketname(String marketname) {
        this.marketname = marketname;
    }

    public Double getHigh() {
        return high;
    }

    public void setHigh(Double high) {
        this.high = high;
    }

    public Double getLow() {
        return low;
    }

    public void setLow(Double low) {
        this.low = low;
    }

    public Double getVolume() {
        return volume;
    }

    public void setVolume(Double volume) {
        this.volume = volume;
    }

    public Double getLast() {
        return last;
    }

    public void setLast(Double last) {
        this.last = last;
    }

    public Double getBasevolume() {
        return basevolume;
    }

    public void setBasevolume(Double basevolume) {
        this.basevolume = basevolume;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public Double getBid() {
        return bid;
    }

    public void setBid(Double bid) {
        this.bid = bid;
    }

    public Double getAsk() {
        return ask;
    }

    public void setAsk(Double ask) {
        this.ask = ask;
    }

    public Double getOpenbuyorders() {
        return openbuyorders;
    }

    public void setOpenbuyorders(Double openbuyorders) {
        this.openbuyorders = openbuyorders;
    }

    public Double getOpensellorders() {
        return opensellorders;
    }

    public void setOpensellorders(Double opensellorders) {
        this.opensellorders = opensellorders;
    }

    public String getPrevday() {
        return prevday;
    }

    public void setPrevday(String prevday) {
        this.prevday = prevday;
    }

    public String getCreated() {
        return created;
    }

    public void setCreated(String created) {
        this.created = created;
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

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public void report(Map<String, List<List<BigDecimal>>> db) {
       try {
           Map<String, Map<String, Object>> map = HttpUtil.revert(HttpUtil.getResponse("https://bittrex.com/api/v1.1/public/getticker?market=" + marketname), Map.class);
           List<BigDecimal> asks = new ArrayList<>();
           asks.add(BigDecimal.valueOf(Double.valueOf(map.get("result").get("Ask").toString())));
           asks.add(BigDecimal.ZERO);
           List<BigDecimal> bids = new ArrayList<>();
           bids.add(BigDecimal.valueOf(Double.valueOf(map.get("result").get("Bid").toString())));
           bids.add(BigDecimal.ZERO);
           List<List<BigDecimal>> result = new ArrayList<>();
           result.add(asks);
           result.add(bids);
           db.put(getKey(), result);
       }catch (Exception ex){
           ex.printStackTrace();
       }
    }
}
