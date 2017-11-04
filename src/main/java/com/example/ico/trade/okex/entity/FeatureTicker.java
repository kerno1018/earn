package com.example.ico.trade.okex.entity;

import java.io.Serializable;
import java.math.BigDecimal;

public class FeatureTicker implements Serializable{
    private BigDecimal last        ;
    private BigDecimal buy         ;
    private BigDecimal sell        ;
    private BigDecimal high        ;
    private BigDecimal low         ;
    private BigDecimal vol         ;
    private String contract_id ;
    private BigDecimal unit_amount ;
    private BigDecimal day_high;
    private BigDecimal coin_vol;
    private BigDecimal day_low;

    public BigDecimal getLast() {
        return last;
    }

    public void setLast(BigDecimal last) {
        this.last = last;
    }

    public BigDecimal getBuy() {
        return buy;
    }

    public void setBuy(BigDecimal buy) {
        this.buy = buy;
    }

    public BigDecimal getSell() {
        return sell;
    }

    public void setSell(BigDecimal sell) {
        this.sell = sell;
    }

    public BigDecimal getHigh() {
        return high;
    }

    public void setHigh(BigDecimal high) {
        this.high = high;
    }

    public BigDecimal getLow() {
        return low;
    }

    public void setLow(BigDecimal low) {
        this.low = low;
    }

    public BigDecimal getVol() {
        return vol;
    }

    public void setVol(BigDecimal vol) {
        this.vol = vol;
    }

    public String getContract_id() {
        return contract_id;
    }

    public void setContract_id(String contract_id) {
        this.contract_id = contract_id;
    }

    public BigDecimal getUnit_amount() {
        return unit_amount;
    }

    public void setUnit_amount(BigDecimal unit_amount) {
        this.unit_amount = unit_amount;
    }

    public BigDecimal getDay_high() {
        return day_high;
    }

    public void setDay_high(BigDecimal day_high) {
        this.day_high = day_high;
    }

    public BigDecimal getCoin_vol() {
        return coin_vol;
    }

    public void setCoin_vol(BigDecimal coin_vol) {
        this.coin_vol = coin_vol;
    }

    public BigDecimal getDay_low() {
        return day_low;
    }

    public void setDay_low(BigDecimal day_low) {
        this.day_low = day_low;
    }
}
