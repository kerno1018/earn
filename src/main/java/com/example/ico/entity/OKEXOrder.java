package com.example.ico.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "OKEX_ORDER")
public class OKEXOrder implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "THIS_WEEK")
    private Double thisWeek;
    @Column(name = "NEXT_WEEK")
    private Double nextWeek;
    @Column(name = "QUARTER")
    private Double quarter;
    @Column(name = "THRESHOLD")
    private Double theshold;
    @Column(name = "ORDER_ID")
    private String orderId;
    @Column(name = "COMPLEMENT")
    private Boolean complement;
    @Column(name = "ORDER_TYPE")
    private String orderType;
    @Column(name="ORDER_DATE")
    private Date createDate;
    @Column(name = "TRADE_TYPE")
    private String tradeType;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getThisWeek() {
        return thisWeek;
    }

    public void setThisWeek(Double thisWeek) {
        this.thisWeek = thisWeek;
    }

    public Double getNextWeek() {
        return nextWeek;
    }

    public void setNextWeek(Double nextWeek) {
        this.nextWeek = nextWeek;
    }

    public Double getQuarter() {
        return quarter;
    }

    public void setQuarter(Double quarter) {
        this.quarter = quarter;
    }

    public Double getTheshold() {
        return theshold;
    }

    public void setTheshold(Double theshold) {
        this.theshold = theshold;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public Boolean getComplement() {
        return complement;
    }

    public String getTradeType() {
        return tradeType;
    }

    public void setTradeType(String tradeType) {
        this.tradeType = tradeType;
    }

    public void setComplement(Boolean complement) {

        this.complement = complement;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {

        this.createDate = createDate;
    }

    public String getOrderType() {
        return orderType;
    }

    public void setOrderType(String orderType) {
        this.orderType = orderType;
    }
}
