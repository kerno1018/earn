package com.example.ico.trade.okex.websocket.entity;

import java.io.Serializable;

public class FeatureTicker implements Serializable{
    private Object last        ;
    private Object buy         ;
    private Object sell        ;
    private Object hold_amount ;
    private Object dayLow      ;
    private Object limitHigh   ;
    private Object high        ;
    private Object vol         ;
    private Object limitLow    ;
    private Object low         ;
    private Object contractId  ;
    private Object unitAmount  ;
    private Object dayHigh     ;
    private Object timestamp   ;

    public Object getLast() {
        return last;
    }

    public void setLast(Object last) {
        this.last = last;
    }

    public Object getBuy() {
        return buy;
    }

    public void setBuy(Object buy) {
        this.buy = buy;
    }

    public Object getSell() {
        return sell;
    }

    public void setSell(Object sell) {
        this.sell = sell;
    }

    public Object getHold_amount() {
        return hold_amount;
    }

    public void setHold_amount(Object hold_amount) {
        this.hold_amount = hold_amount;
    }

    public Object getDayLow() {
        return dayLow;
    }

    public void setDayLow(Object dayLow) {
        this.dayLow = dayLow;
    }

    public Object getLimitHigh() {
        return limitHigh;
    }

    public void setLimitHigh(Object limitHigh) {
        this.limitHigh = limitHigh;
    }

    public Object getHigh() {
        return high;
    }

    public void setHigh(Object high) {
        this.high = high;
    }

    public Object getVol() {
        return vol;
    }

    public void setVol(Object vol) {
        this.vol = vol;
    }

    public Object getLimitLow() {
        return limitLow;
    }

    public void setLimitLow(Object limitLow) {
        this.limitLow = limitLow;
    }

    public Object getLow() {
        return low;
    }

    public void setLow(Object low) {
        this.low = low;
    }

    public Object getContractId() {
        return contractId;
    }

    public void setContractId(Object contractId) {
        this.contractId = contractId;
    }

    public Object getUnitAmount() {
        return unitAmount;
    }

    public void setUnitAmount(Object unitAmount) {
        this.unitAmount = unitAmount;
    }

    public Object getDayHigh() {
        return dayHigh;
    }

    public void setDayHigh(Object dayHigh) {
        this.dayHigh = dayHigh;
    }

    public Object getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Object timestamp) {
        this.timestamp = timestamp;
    }
}
