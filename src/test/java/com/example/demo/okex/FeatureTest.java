package com.example.demo.okex;

import com.example.db.PriceDB;
import com.example.ico.trade.okex.SyncFeatureData;
import org.testng.AssertJUnit;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.io.IOException;

public class FeatureTest extends BaseTest{


    @BeforeClass
    public void cls(){
        System.out.println("cls");
    }
    @BeforeMethod
    public void sync() throws IOException{
        new Thread(new SyncFeatureData()).start();
    }


    @Test
    public void checkCondition() throws IOException, InterruptedException {
        //期货行情信息
        System.out.println("check");
        Thread.sleep(5000);
        Double thisWeek = PriceDB.featureData.get("T");
        Double nextWeek = PriceDB.featureData.get("N");
        Double quarter = PriceDB.featureData.get("Q");

        Double threshold = (quarter - thisWeek)/thisWeek;
        if(threshold<=-0.05){
            System.out.println("QT"+threshold);
        }

        threshold = (quarter - nextWeek)/nextWeek;
        if(threshold<=-0.05){
            System.out.println("QN"+threshold);
        }
        threshold = (nextWeek - thisWeek)/thisWeek;
        if(threshold<=-0.05){
            System.out.println("NT"+threshold);
        }
    }
}
