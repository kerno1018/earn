package com.example.ico.service;

import com.example.db.PriceDB;
import com.example.ico.dao.BaseDao;
import com.example.ico.dao.OKEXOrderDao;
import com.example.ico.entity.OKEXOrder;
import com.example.ico.trade.okex.entity.FeatureOrder;
import com.example.ico.trade.okex.entity.FeatureOrderInfo;
import com.example.ico.trade.okex.rest.future.IFutureRestApi;
import com.example.util.MathUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.Date;
import java.util.List;

@Service
public class OKEXService {
    @Autowired
    private BaseDao dao;
    @Autowired
    private OKEXOrderDao orderDao;
    @Autowired
    private IFutureRestApi featureApi;
    public void processFeatureData() {
        if(canOrder()){

            Double thisWeek = PriceDB.featureData.get("T");
            Double nextWeek = PriceDB.featureData.get("N");
            Double quarter = PriceDB.featureData.get("Q");

            Double qt = MathUtil.formatDoubleWith2point((quarter - thisWeek)/thisWeek);
            Double qn = MathUtil.formatDoubleWith2point((quarter - nextWeek)/nextWeek);
            Double nt = MathUtil.formatDoubleWith2point((nextWeek - thisWeek)/thisWeek);
            String couple = new Date().getTime()+"";
//            if(qt <= qn){
//                if(qt < nt){
                    if(qt <0 && qt <= -0.05){
//                        quarter = 6000.0;
//                        thisWeek = 8000.0;
                        //1:开多(done)   2:开空   3:平多   4:平空
                        processBuyStuff(thisWeek,nextWeek,quarter,qt,quarter+"","quarter","1","1","up",couple);
                        processBuyStuff(thisWeek,nextWeek,quarter,qt,thisWeek+"","this_week","2","1","down",couple);
                    }
//                }else{
//                    if(nt<=-0.05){
//                        //1:开多(done)   2:开空   3:平多   4:平空
//                        processBuyStuff(thisWeek,nextWeek,quarter,qt,nextWeek+"","next_week","1","1","up",couple);
//                        processBuyStuff(thisWeek,nextWeek,quarter,qt,thisWeek+"","this_week","2","1","down",couple);
//                    }
//                }
//            }else{
//                if (qn < nt){
//                    if(qn <= -0.05){
//                        //1:开多(done)   2:开空   3:平多   4:平空
//                        processBuyStuff(thisWeek,nextWeek,quarter,qt,quarter+"","quarter","1","1","up",couple);
//                        processBuyStuff(thisWeek,nextWeek,quarter,qt,nextWeek+"","next_week","2","1","down",couple);
//                    }
//                }else{
//                    if(nt <= -0.05){
//                        //1:开多(done)   2:开空   3:平多   4:平空
//                        processBuyStuff(thisWeek,nextWeek,quarter,qt,nextWeek+"","next_week","1","1","up",couple);
//                        processBuyStuff(thisWeek,nextWeek,quarter,qt,thisWeek+"","this_week","2","1","down",couple);
//                    }
//                }
//            }
        }
    }
    private void processBuyStuff(Double thisWeek,Double nextWeek,Double quarter,Double thresHold, String price,String contractType,String tradeType, String amount,String orderType,String couple){
        //1:开多(done)   2:开空   3:平多   4:平空
        new Thread(new Runnable() {
            private Boolean flag = false;
            @Override
            public void run() {
                while (!flag){
                    String tradeResultV1 = null;
                    ObjectMapper mapp = new ObjectMapper();
                    try {
                        tradeResultV1 = featureApi.future_trade("btc_usd",contractType, price, amount, tradeType, "0");
                        if(!StringUtils.isEmpty(tradeResultV1)){
                            FeatureOrder tradeJSV1 = mapp.readValue(tradeResultV1, FeatureOrder.class);
                            if(tradeJSV1.getResult()){
                                saveOrder(thisWeek,nextWeek,quarter,contractType,thresHold,orderType,tradeJSV1.getOrder_id(),couple);
                            }
                            flag = tradeJSV1.getResult();
                        }
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                    System.out.println("buy stuff end pre ---- ");
                    try {
                        Thread.sleep(2000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
                System.out.println("buy stuff end --- end ");
            }
        }).start();
    }
    private Boolean canOrder(){
        Boolean unavliable = orderDao.getManager().createQuery("from OKEXOrder where complement=0").getResultList().size()>0;
        int countSize = orderDao.getManager().createQuery("from OKEXOrder where complement=1 and holding=1").getResultList().size();
        return !unavliable && countSize<=6;
    }
    private List<OKEXOrder> avliableOrder(){
        return orderDao.getManager().createQuery("from OKEXOrder where complement=1 and holding=1 ").getResultList();
    }

    private void saveOrder(Double thisWeek,Double nextWeek,Double quarter,String orderType,Double thesHold,String tradeType,String orderId,String couple){
        OKEXOrder order = new OKEXOrder();
        order.setThisWeek(thisWeek);
        order.setNextWeek(nextWeek);
        order.setQuarter(quarter);
        order.setOrderType(orderType);
        order.setCreateDate(new Date());
        order.setComplement(false);
        order.setTheshold(thesHold);
        order.setTradeType(tradeType);
        order.setOrderId(orderId);
        order.setCouple(couple);
        order.setHolding(true);
        dao.save(order);

    }

    public List<OKEXOrder> getOrders(){
        return dao.findAll();
    }
    @Transactional
    public void updateOrderStatus() {
        String hql = "from OKEXOrder o where o.complement=0 and o.orderId  is not null";
        List<OKEXOrder> updateOrders = orderDao.getManager().createQuery(hql).getResultList();
        ObjectMapper mapp = new ObjectMapper();
        updateOrders.forEach(x->{
            try {
                String result = featureApi.future_order_info("btc_usd", x.getOrderType(),x.getOrderId(), "1", "1", "10");
                FeatureOrderInfo info = mapp.readValue(result,FeatureOrderInfo.class);
                if(info.getResult()){
                    x.setComplement(info.getOrders().get(0).isSuccess());
                    orderDao.getManager().merge(x);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        });
    }

    private Boolean checkRate(){
        String sql = "select avg(this_week),avg(quarter) from test.okex_order where holding = 1 and complement=1";
        List<Double> list = orderDao.getManager().createNativeQuery(sql).getResultList();
        Double thisWeek = PriceDB.featureData.get("T");
        Double quarter = PriceDB.featureData.get("Q");
//        Double upWeek = (list.get(0)  - thisWeek)/
        return false;
    }

    @Transactional
    public void cleanFeature() {
        if(PriceDB.featureData.size() ==0){
            return;
        }
        List<OKEXOrder> feature = avliableOrder();
        if(feature.size()>0) {
            Double thisWeek = PriceDB.featureData.get("T");
            Double nextWeek = PriceDB.featureData.get("N");
            Double quarter = PriceDB.featureData.get("Q");

            Double qt = MathUtil.formatDoubleWith2point((quarter - thisWeek) / thisWeek);
//            Double qn = MathUtil.formatDoubleWith2point((quarter - nextWeek) / nextWeek);
//            Double nt = MathUtil.formatDoubleWith2point((nextWeek - thisWeek) / thisWeek);
            System.out.println("theshold : "+qt);
            if(qt<0 && qt > -0.03){
                //1:开多(done)   2:开空   3:平多   4:平空
                feature.forEach(x->{
                    if ("up".equals(x.getTradeType())){
                        processSellStuff(quarter+"",x.getOrderType(),"3","1");
                    }else if ("down".equals(x.getTradeType())){
                        processSellStuff(thisWeek+"",x.getOrderType(),"4","1");
                    }
                    x.setHolding(false);
                    orderDao.getManager().merge(x);
                });
            }
        }
    }

    private void processSellStuff(String price,String contractType,String tradeType, String amount){
        //1:开多(done)   2:开空   3:平多   4:平空
        new Thread(new Runnable() {
            private Boolean flag = false;
            @Override
            public void run() {
                while (!flag){
                    String tradeResultV1 = null;
                    ObjectMapper mapp = new ObjectMapper();
                    try {
                        tradeResultV1 = featureApi.future_trade("btc_usd",contractType, price, amount, tradeType, "0");
                        if(!StringUtils.isEmpty(tradeResultV1)){
                            FeatureOrder tradeJSV1 = mapp.readValue(tradeResultV1, FeatureOrder.class);
                            flag = tradeJSV1.getResult();
                        }
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                    System.out.println("sell stuff end pre ---- ");
                    try {
                        Thread.sleep(2000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
                System.out.println("sell stuff end --- end ");
            }
        }).start();
    }
}
