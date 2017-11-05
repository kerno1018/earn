package com.example.ico.trade.okex.entity;

import java.io.Serializable;
import java.util.List;

public class FeaturePositon implements Serializable{
    private Double force_liqu_price;
    private List<FeaturePositionInfo> holding;
    private Boolean result;

    public Double getForce_liqu_price() {
        return force_liqu_price;
    }

    public void setForce_liqu_price(Double force_liqu_price) {
        this.force_liqu_price = force_liqu_price;
    }

    public List<FeaturePositionInfo> getHolding() {
        return holding;
    }

    public void setHolding(List<FeaturePositionInfo> holding) {
        this.holding = holding;
    }

    public Boolean getResult() {
        return result;
    }

    public void setResult(Boolean result) {
        this.result = result;
    }
}
