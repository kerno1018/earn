package com.example.ico.trade.okex.websocket.test;


import com.example.ico.trade.okex.util.OKConstant;
import com.example.ico.trade.okex.websocket.WebSocketService;

/**
 * WebSocket API使用事例
 * 
 * @author okcoin
 * 
 */
public class Example {
	public static void main(String[] args) throws InterruptedException {

		String apiKey = OKConstant.APIKEY;
		String secretKey = OKConstant.SECRETKEY;
		String url = "wss://real.okex.com:10440/websocket/okexapi";
		WebSocketService service = new BuissnesWebSocketServiceImpl();
		WebSoketClient client = new WebSoketClient(url, service);
		client.start();

		// 添加订阅
		client.addChannel("ok_sub_future_btc_ticker_this_week");
		client.addChannel("ok_sub_future_btc_ticker_next_week");
		client.addChannel("ok_sub_future_btc_ticker_quarter");

//		client.addChannel("ok_futureusd_orderinfo");
		// 获取用户信息
//		 client.login(apiKey,secretKey);
//			while (true){
//				Thread.sleep(3000);
//				client.getOrderInfo(apiKey,secretKey,"btc_usd",13224928339l,"this_week");
//			}
		// 删除定订阅
		// client.removeChannel("ok_sub_spotusd_btc_ticker");

		// 合约下单交易
//		1:开多 2:开空 3:平多 4:平空
//		 client.futureTrade(apiKey, secretKey, "btc_usd", "this_week", 2.3, 2,
//		 4, 0, 10);
//		 client.futureTrade(apiKey, secretKey, "btc_usd", "quarter", 2.3, 2,
//				3, 0, 10);

		// 实时交易数据 apiKey
		// client.futureRealtrades(apiKey, secretKey);

		// 取消合约交易
		// client.cancelFutureOrder(apiKey, secretKey, "btc_usd", 123456L,
		// "this_week");

		// 现货下单交易
		// client.spotTrade(apiKey, secretKey, "btc_usd", 3.2, 2.3, "buy");

		// 现货交易数据
		// client.realTrades(apiKey, secretKey);

		// 现货取消订单
		// client.cancelOrder(apiKey, secretKey, "btc_usd", 123L);

	}
}
