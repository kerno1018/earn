package com.example.stock.listener;

import com.example.db.PriceDB;
import com.example.stock.entity.SinaBean;
import com.example.util.TimeLimit;

import java.util.Arrays;
import java.util.Calendar;
import java.util.Collections;
import java.util.Comparator;

import static com.example.util.HttpUtil.getResponse;

public class MoneyMgmt extends TimeLimit implements Runnable{

    String stockCode = "sh204001,sh204002,sh204003,sh204004,sh204007,sh204014,sh204028,sh204091,sh204182,sz131810,sz131811,sz131800,sz131809,sz131801,sz131802,sz131803,sz131805,sz131806";

    @Override
    public void run() {
        while (holdOn()){
            time.add(Calendar.MINUTE,5);
            String result = getResponse("http://hq.sinajs.cn/list="+stockCode);
            Arrays.stream(result.split(";")).forEach(x->{
                PriceDB.collectMoney.add(new SinaBean(x));
            });
            Collections.sort(PriceDB.collectMoney, new Comparator<SinaBean>() {
                @Override
                public int compare(SinaBean o1, SinaBean o2) {
                    return o2.value.compareTo(o1.value);
                }
            });
            PriceDB.collectMoney.forEach(x-> System.out.println(x.getValue()+x.getKey()));
        }
    }
}