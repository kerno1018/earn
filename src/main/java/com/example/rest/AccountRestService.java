package com.example.rest;

import com.example.db.PriceDB;
import com.example.ico.trade.okex.entity.FeatureOwn;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AccountRestService {

    @GetMapping("/account")
    public Map account(){
        FeatureOwn own = PriceDB.account.getInfo().getBtc();
        Map map = new HashMap();
        map.put("right",own.getAccount_rights());
        map.put("levelRage",PriceDB.levelRage);
        map.put("maxAllowCont",PriceDB.maxAllowCont);
        map.put("eachOrderCont",PriceDB.eachOrderCont);
        return map;
    }
    @PostMapping("/account")
    public void update(@RequestBody Map map){
        PriceDB.levelRage = Integer.valueOf(map.get("levelRage").toString());
        PriceDB.eachOrderCont = Integer.valueOf(map.get("eachOrderCont").toString());
    }
}
