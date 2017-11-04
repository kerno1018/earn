package com.example.ico.trade.okex.entity;

import java.io.Serializable;

public class FeaturePrice implements Serializable{

    private String date;
    private FeatureTicker ticker;

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public FeatureTicker getTicker() {
        return ticker;
    }

    public void setTicker(FeatureTicker ticker) {
        this.ticker = ticker;
    }
}
