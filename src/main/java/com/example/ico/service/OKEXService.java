//package com.example.ico.service;
//
//import com.example.db.PriceDB;
//import com.example.ico.dao.BaseDao;
//import com.example.ico.dao.OKEXOrderDao;
//import com.example.ico.entity.OKEXOrder;
//import com.example.ico.trade.okex.entity.FeatureOrder;
//import com.example.ico.trade.okex.entity.FeatureOrderInfo;
//import com.example.ico.trade.okex.rest.future.IFutureRestApi;
//import com.example.ico.trade.okex.util.OKConstant;
//import com.example.ico.trade.okex.websocket.WebSocketService;
//import com.example.ico.trade.okex.websocket.test.BuissnesWebSocketServiceImpl;
//import com.example.ico.trade.okex.websocket.test.WebSoketClient;
//import com.example.util.MathUtil;
//import com.example.util.TimeLimit;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.util.StringUtils;
//
//import javax.net.ssl.SSLHandshakeException;
//import javax.transaction.Transactional;
//import java.io.IOException;
//import java.util.Date;
//import java.util.List;
//
//@Service
//public class OKEXService {
//    private Logger logger = LoggerFactory.getLogger(this.getClass());
//    @Autowired
//    private BaseDao dao;
//    @Autowired
//    private OKEXOrderDao orderDao;
//    @Autowired
//    private IFutureRestApi featureApi;
//    public static Boolean flag = true;
//
//    public void processFeatureData() {
//            Double thisWeek = PriceDB.featureData.get("T");
//            Double nextWeek = PriceDB.featureData.get("N");
//            Double quarter = PriceDB.featureData.get("Q");
//            Double qt = MathUtil.formatDoubleWith2point((quarter - thisWeek)/thisWeek);
//            Double qn = MathUtil.formatDoubleWith2point((quarter - nextWeek)/nextWeek);
//            Double nt = MathUtil.formatDoubleWith2point((nextWeek - thisWeek)/thisWeek);
//            // move to next week
//            if(thisWeek.equals(nextWeek)){
//                // sell this week
//                // buy next week
//            }
//            String couple = new Date().getTime()+"";
//            logger.info(qt+"---"+qn+"---"+nt);
//            // 季度/当周 小于等于 下周/当周
//            if(qt <0 && qt <= -0.5){
//                if(canBuy()) {
////                        quarter = 6000.0;
////                        thisWeek = 8000.0;
//                    //1:开多(done)   2:开空   3:平多   4:平空
//                    processBuyStuff(thisWeek, nextWeek, quarter, qt, quarter + "", "quarter", "1", "1", couple);
//                    processBuyStuff(thisWeek, nextWeek, quarter, qt, thisWeek + "", "this_week", "2", "1", couple);
//                }
//            }else if(qt > 0 && qt >= 0.05){
//                if (canBuy()){
//                    processBuyStuff(thisWeek,nextWeek,quarter,qt,quarter+"","quarter","2","1",couple);
//                    processBuyStuff(thisWeek,nextWeek,quarter,qt,thisWeek+"","this_week","1","1",couple);
//                }
//            }
//        // TODO need add position check in here
//        if(qt <0 && qt >= -0.03){
//            if(canSell()) {
//                //1:开多(done)   2:开空   3:平多   4:平空
//                processBuyStuff(thisWeek, nextWeek, quarter, qt, quarter + "", "quarter", "3", "1", couple);
//                processBuyStuff(thisWeek, nextWeek, quarter, qt, thisWeek + "", "this_week", "4", "1", couple);
//            }
//        }else if(qt > 0 && qt <= 0.03){
//            if (canSell()){
//                processBuyStuff(thisWeek,nextWeek,quarter,qt,quarter+"","quarter","4","1",couple);
//                processBuyStuff(thisWeek,nextWeek,quarter,qt,thisWeek+"","this_week","3","1",couple);
//            }
//        }
//
//
//    }
//    private void processBuyStuff(Double thisWeek,Double nextWeek,Double quarter,Double thresHold, String price,String contractType,String tradeType, String amount,String couple){
//        //1:开多(done)   2:开空   3:平多   4:平空
//        new Thread(new Runnable() {
//            private Boolean flag = false;
//            @Override
//            public void run() {
//                while (!flag){
//                    logger.info("try to buy "+contractType +"with type "+tradeType+" (1:开多 2:开空 3:平多 4:平空) starting ... ");
//                    String tradeResultV1 = null;
//                    ObjectMapper mapp = new ObjectMapper();
//                    try {
//                        tradeResultV1 = featureApi.future_trade("btc_usd",contractType, price, amount, tradeType, "0");
////                        client.futureTrade(OKConstant.APIKEY, OKConstant.SECRETKEY, "btc_usd", "contractType", Double.valueOf(price), Integer.valueOf(amount),
////                                Integer.valueOf(tradeType), 0, 10);
//                        if(!StringUtils.isEmpty(tradeResultV1)){
//                            FeatureOrder tradeJSV1 = mapp.readValue(tradeResultV1, FeatureOrder.class);
//                            if(tradeJSV1.getResult()){
//                                saveOrder(thisWeek,nextWeek,quarter,contractType,thresHold,tradeType,tradeJSV1.getOrder_id(),couple);
//                            }
//                            flag = tradeJSV1.getResult();
//                        }
//                    } catch (IOException e) {
//                        logger.error("try to buy "+contractType +"with type "+tradeType+" (1:开多 2:开空 3:平多 4:平空) failed will re-order after 5 min ... ");
//                        flag = false;
//                        e.printStackTrace();
//                    }
//                    try {
//                        if(flag){
//                            Thread.sleep(2000);
//                            logger.info("try to buy "+contractType +"with type "+tradeType+" (1:开多 2:开空 3:平多 4:平空)  successful ... ");
//                        }else{
//                            Thread.sleep(30000);
//                        }
//                    } catch (InterruptedException e) {
//                        e.printStackTrace();
//                    }
//                }
//            }
//        }).start();
//    }
//    private Boolean canBuy(){
//        List unavliable = orderDao.getManager().createQuery("from OKEXOrder where complement=false and tradeType in (1,2)").getResultList();
//        return unavliable != null && unavliable.size() == 0;
//    }
//    private Boolean canSell(){
////        return true;
//        List unavliable = orderDao.getManager().createQuery("from OKEXOrder where complement=false and tradeType in (3,4)").getResultList();
//        return unavliable != null && unavliable.size() == 0;
//    }
//
//    @Transactional
//    public void saveOrder(Double thisWeek,Double nextWeek,Double quarter,String orderType,Double thesHold,String tradeType,String orderId,String couple){
//        OKEXOrder order = new OKEXOrder();
//        order.setThisWeek(thisWeek);
//        order.setNextWeek(nextWeek);
//        order.setQuarter(quarter);
//        order.setOrderType(orderType);
//        order.setCreateDate(new Date());
//        order.setComplement(false);
//        order.setTheshold(thesHold);
//        order.setTradeType(tradeType);
//        order.setOrderId(orderId);
//        order.setCouple(couple);
//        order.setHolding(true);
//        dao.save(order);
//    }
//
//    public List<OKEXOrder> getOrders(){
//        return dao.findAll();
//    }
//    @Transactional
//    public void updateOrderStatus() {
//        String hql = "from OKEXOrder o where o.complement=false and o.orderId  is not null";
//        List<OKEXOrder> updateOrders = orderDao.getManager().createQuery(hql).getResultList();
//        ObjectMapper mapp = new ObjectMapper();
//        updateOrders.forEach(x->{
//            try {
//                String result = featureApi.future_order_info("btc_usd", x.getOrderType(),x.getOrderId(), "1", "1", "10");
//                FeatureOrderInfo info = mapp.readValue(result,FeatureOrderInfo.class);
//                if(info.getResult()){
//                    x.setComplement(info.getOrders().get(0).isSuccess());
//                    orderDao.getManager().merge(x);
//                }
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//        });
//    }
//
//    private Boolean checkRate(){
//        String sql = "select avg(this_week),avg(quarter) from test.okex_order where holding = 1 and complement=1";
//        List<Double> list = orderDao.getManager().createNativeQuery(sql).getResultList();
//        Double thisWeek = PriceDB.featureData.get("T");
//        Double quarter = PriceDB.featureData.get("Q");
////        Double upWeek = (list.get(0)  - thisWeek)/
//        return false;
//    }
//
////    @Transactional
////    public void cleanFeature() {
////        if(PriceDB.featureData.size() ==0){
////            return;
////        }
////        List<OKEXOrder> feature = avliableOrder();
////        if(feature.size()>0) {
////            Double thisWeek = PriceDB.featureData.get("T");
////            Double nextWeek = PriceDB.featureData.get("N");
////            Double quarter = PriceDB.featureData.get("Q");
////
////            Double qt = MathUtil.formatDoubleWith2point((quarter - thisWeek) / thisWeek);
//////            Double qn = MathUtil.formatDoubleWith2point((quarter - nextWeek) / nextWeek);
//////            Double nt = MathUtil.formatDoubleWith2point((nextWeek - thisWeek) / thisWeek);
////            System.out.println("theshold : "+qt);
////            if(qt<0 && qt > -0.03){
////                //1:开多(done)   2:开空   3:平多   4:平空
////                feature.forEach(x->{
////                    if ("up".equals(x.getTradeType())){
////                        processSellStuff(quarter+"",x.getOrderType(),"3","1");
////                    }else if ("down".equals(x.getTradeType())){
////                        processSellStuff(thisWeek+"",x.getOrderType(),"4","1");
////                    }
////                    x.setHolding(false);
////                    orderDao.getManager().merge(x);
////                });
////            }
////        }
////    }
//
//    private void processSellStuff(String price,String contractType,String tradeType, String amount){
//        //1:开多(done)   2:开空   3:平多   4:平空
//        new Thread(new Runnable() {
//            private Boolean flag = false;
//            @Override
//            public void run() {
//                while (!flag){
//                    String tradeResultV1 = null;
//                    ObjectMapper mapp = new ObjectMapper();
//                    try {
//                        tradeResultV1 = featureApi.future_trade("btc_usd",contractType, price, amount, tradeType, "0");
//                        if(!StringUtils.isEmpty(tradeResultV1)){
//                            FeatureOrder tradeJSV1 = mapp.readValue(tradeResultV1, FeatureOrder.class);
//                            flag = tradeJSV1.getResult();
//                        }
//                    } catch (IOException e) {
//                        e.printStackTrace();
//                    }
//                    System.out.println("sell stuff end pre ---- ");
//                    try {
//                        Thread.sleep(2000);
//                    } catch (InterruptedException e) {
//                        e.printStackTrace();
//                    }
//                }
//                System.out.println("sell stuff end --- end ");
//            }
//        }).start();
//    }
//
//    public void sell() {
//
//    }
//}
