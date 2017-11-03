package com.example.stock.entity;

import java.io.Serializable;

public class SinaBean implements Serializable {
    public SinaBean(String values){
        String[] result = values.split(",");
        key = result[0];
        this.value = Double.valueOf(result[3]);
    }
    public String key;
    public Double value;

    public String getKey() {
        return key;
    }

    public Double getValue() {
        return value;
    }

}
