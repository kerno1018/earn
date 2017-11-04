package com.example.ico.trade.okex.entity;

import java.io.Serializable;

public class FeatureOwn implements Serializable{
    private Object account_rights  ; //账户权益
    private Object keep_deposit    ;//保证金
    private Object profit_real     ;//已实现盈亏
    private Object profit_unreal   ;//未实现盈亏
    private Object risk_rate       ;//保证金率

    public Object getAccount_rights() {
        return account_rights;
    }

    public void setAccount_rights(Object account_rights) {
        this.account_rights = account_rights;
    }

    public Object getKeep_deposit() {
        return keep_deposit;
    }

    public void setKeep_deposit(Object keep_deposit) {
        this.keep_deposit = keep_deposit;
    }

    public Object getProfit_real() {
        return profit_real;
    }

    public void setProfit_real(Object profit_real) {
        this.profit_real = profit_real;
    }

    public Object getProfit_unreal() {
        return profit_unreal;
    }

    public void setProfit_unreal(Object profit_unreal) {
        this.profit_unreal = profit_unreal;
    }

    public Object getRisk_rate() {
        return risk_rate;
    }

    public void setRisk_rate(Object risk_rate) {
        this.risk_rate = risk_rate;
    }
}
