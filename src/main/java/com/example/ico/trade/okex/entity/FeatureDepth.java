package com.example.ico.trade.okex.entity;

import java.io.Serializable;
import java.math.BigDecimal;

public class FeatureDepth implements Serializable{

    private BigDecimal[][] asks;
    private BigDecimal[][] bids;

    public BigDecimal[][] getAsks() {
        return asks;
    }

    public void setAsks(BigDecimal[][] asks) {
        this.asks = asks;
    }

    public BigDecimal[][] getBids() {
        return bids;
    }

    public void setBids(BigDecimal[][] bids) {
        this.bids = bids;
    }
}
