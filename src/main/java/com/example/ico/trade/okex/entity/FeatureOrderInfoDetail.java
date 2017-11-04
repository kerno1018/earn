package com.example.ico.trade.okex.entity;

import java.io.Serializable;

public class FeatureOrderInfoDetail implements Serializable{
    private Object amount        ;
    private Object contract_name ;
    private Object create_date   ;
    private Object deal_amount   ;
    private Object fee           ;
    private Object order_id      ;
    private Object price         ;
    private Object price_avg     ;
    private Object status        ;
    private Object symbol        ;
    private Object type          ;
    private Object unit_amount   ;
    private Object lever_rate    ;

    public Object getAmount() {
        return amount;
    }

    public void setAmount(Object amount) {
        this.amount = amount;
    }

    public Object getContract_name() {
        return contract_name;
    }

    public void setContract_name(Object contract_name) {
        this.contract_name = contract_name;
    }

    public Object getCreate_date() {
        return create_date;
    }

    public void setCreate_date(Object create_date) {
        this.create_date = create_date;
    }

    public Object getDeal_amount() {
        return deal_amount;
    }

    public void setDeal_amount(Object deal_amount) {
        this.deal_amount = deal_amount;
    }

    public Object getFee() {
        return fee;
    }

    public void setFee(Object fee) {
        this.fee = fee;
    }

    public Object getOrder_id() {
        return order_id;
    }

    public void setOrder_id(Object order_id) {
        this.order_id = order_id;
    }

    public Object getPrice() {
        return price;
    }

    public void setPrice(Object price) {
        this.price = price;
    }

    public Object getPrice_avg() {
        return price_avg;
    }

    public void setPrice_avg(Object price_avg) {
        this.price_avg = price_avg;
    }

    public Object getStatus() {
        return status;
    }

    public Boolean isSuccess(){
        return "2".equals(status.toString());
    }

    public void setStatus(Object status) {
        this.status = status;
    }

    public Object getSymbol() {
        return symbol;
    }

    public void setSymbol(Object symbol) {
        this.symbol = symbol;
    }

    public Object getType() {
        return type;
    }

    public void setType(Object type) {
        this.type = type;
    }

    public Object getUnit_amount() {
        return unit_amount;
    }

    public void setUnit_amount(Object unit_amount) {
        this.unit_amount = unit_amount;
    }

    public Object getLever_rate() {
        return lever_rate;
    }

    public void setLever_rate(Object lever_rate) {
        this.lever_rate = lever_rate;
    }
}
