package com.example.ico.trade.okex.entity;

import java.io.Serializable;
import java.util.List;

public class FeatureOrderInfo implements Serializable {
    private Boolean result;
    private List<FeatureOrderInfoDetail> orders;

    public Boolean getResult() {
        return result;
    }

    public void setResult(Boolean result) {
        this.result = result;
    }

    public List<FeatureOrderInfoDetail> getOrders() {
        return orders;
    }

    public void setOrders(List<FeatureOrderInfoDetail> orders) {
        this.orders = orders;
    }
}
