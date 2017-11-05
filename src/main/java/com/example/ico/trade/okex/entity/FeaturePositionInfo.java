package com.example.ico.trade.okex.entity;

import java.io.Serializable;

public class FeaturePositionInfo implements Serializable{

     private Object buy_amount      ;
     private Object buy_available   ;
     private Object buy_price_avg   ;
     private Object buy_price_cost  ;
     private Object buy_profit_real ;
     private Object contract_id     ;
     private Object contract_type   ;
     private Object create_date     ;
     private Object lever_rate      ;
     private Object sell_amount     ;
     private Object sell_available  ;
     private Object sell_price_avg  ;
     private Object sell_price_cost ;
     private Object sell_profit_real;
     private Object symbol          ;


    public Object getBuy_amount() {
        return buy_amount;
    }

    public void setBuy_amount(Object buy_amount) {
        this.buy_amount = buy_amount;
    }

    public Object getBuy_available() {
        return buy_available;
    }

    public void setBuy_available(Object buy_available) {
        this.buy_available = buy_available;
    }

    public Object getBuy_price_avg() {
        return buy_price_avg;
    }

    public void setBuy_price_avg(Object buy_price_avg) {
        this.buy_price_avg = buy_price_avg;
    }

    public Object getBuy_price_cost() {
        return buy_price_cost;
    }

    public void setBuy_price_cost(Object buy_price_cost) {
        this.buy_price_cost = buy_price_cost;
    }

    public Object getBuy_profit_real() {
        return buy_profit_real;
    }

    public void setBuy_profit_real(Object buy_profit_real) {
        this.buy_profit_real = buy_profit_real;
    }

    public Object getContract_id() {
        return contract_id;
    }

    public void setContract_id(Object contract_id) {
        this.contract_id = contract_id;
    }

    public Object getContract_type() {
        return contract_type;
    }

    public void setContract_type(Object contract_type) {
        this.contract_type = contract_type;
    }

    public Object getCreate_date() {
        return create_date;
    }

    public void setCreate_date(Object create_date) {
        this.create_date = create_date;
    }

    public Object getLever_rate() {
        return lever_rate;
    }

    public void setLever_rate(Object lever_rate) {
        this.lever_rate = lever_rate;
    }

    public Object getSell_amount() {
        return sell_amount;
    }

    public void setSell_amount(Object sell_amount) {
        this.sell_amount = sell_amount;
    }

    public Object getSell_available() {
        return sell_available;
    }

    public void setSell_available(Object sell_available) {
        this.sell_available = sell_available;
    }

    public Object getSell_price_avg() {
        return sell_price_avg;
    }

    public void setSell_price_avg(Object sell_price_avg) {
        this.sell_price_avg = sell_price_avg;
    }

    public Object getSell_price_cost() {
        return sell_price_cost;
    }

    public void setSell_price_cost(Object sell_price_cost) {
        this.sell_price_cost = sell_price_cost;
    }

    public Object getSell_profit_real() {
        return sell_profit_real;
    }

    public void setSell_profit_real(Object sell_profit_real) {
        this.sell_profit_real = sell_profit_real;
    }

    public Object getSymbol() {
        return symbol;
    }

    public void setSymbol(Object symbol) {
        this.symbol = symbol;
    }
}
