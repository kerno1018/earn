package com.example.rest;

import com.example.ico.entity.OKEXOrder;
import com.example.ico.service.OKEXService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class OKEXOrderRestService {

    @Autowired
    private OKEXService service;

    @GetMapping("/orders")
    public String orderList(){
        List<OKEXOrder> orderList = service.getOrders();
        ObjectMapper mapp = new ObjectMapper();
        Map<String,Object> result = new HashMap<>();
        result.put("data",orderList);
        result.put("recordsTotal",orderList.size());
        result.put("recordsFiltered",orderList.size());
        try {
            return mapp.writeValueAsString(result);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return "";
    }

}
