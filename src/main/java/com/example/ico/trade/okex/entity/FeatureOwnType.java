package com.example.ico.trade.okex.entity;

import java.io.Serializable;

public class FeatureOwnType implements Serializable{
    private FeatureOwn btc;
    private FeatureOwn ltc;
    private FeatureOwn bcc;
    private FeatureOwn etc;
    private FeatureOwn eth;

    public FeatureOwn getBtc() {
        return btc;
    }

    public void setBtc(FeatureOwn btc) {
        this.btc = btc;
    }

    public FeatureOwn getLtc() {
        return ltc;
    }

    public void setLtc(FeatureOwn ltc) {
        this.ltc = ltc;
    }

    public FeatureOwn getBcc() {
        return bcc;
    }

    public void setBcc(FeatureOwn bcc) {
        this.bcc = bcc;
    }

    public FeatureOwn getEtc() {
        return etc;
    }

    public void setEtc(FeatureOwn etc) {
        this.etc = etc;
    }

    public FeatureOwn getEth() {
        return eth;
    }

    public void setEth(FeatureOwn eth) {
        this.eth = eth;
    }
}
