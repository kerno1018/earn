package com.example.ico.trade.okex.websocket.test;

import com.example.ico.trade.okex.websocket.WebSocketBase;
import com.example.ico.trade.okex.websocket.WebSocketService;
import com.example.ico.trade.okex.websocket.stratety.TickerProcess;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;

import java.io.IOException;
import java.util.Map;

/**
 * 订阅信息处理类需要实现WebSocketService接口
 * @author okcoin
 *
 */
public class BuissnesWebSocketServiceImpl implements WebSocketService {
	private Logger log = Logger.getLogger(WebSocketBase.class);
	private TickerProcess ticker = new TickerProcess();
	@Override
	public void onReceive(String msg){
		
		log.info("WebSocket Client received message: " + msg);

		if(msg.indexOf("ok_sub_future_btc_ticker")>-1){
			ticker.setSource(msg.substring(1,msg.length()-1));
			ticker.process();
		}
	}

	public static void main(String[] args) throws IOException {
		String source = "[{\"data\":{\"last\":6971.01,\"buy\":6971.0,\"sell\":6972.0,\"hold_amount\":3722823,\"dayLow\":6221.0,\"limitHigh\":\"7735.51\",\"high\":7042.57,\"vol\":7288404.0,\"limitLow\":\"6770.79\",\"low\":6221.0,\"contractId\":20171229012,\"unitAmount\":100.0,\"dayHigh\":7042.57,\"timestamp\":1510153837552},\"channel\":\"ok_sub_future_btc_ticker_quarter\"}]";
		ObjectMapper mapp = new ObjectMapper();
		System.out.println(source.substring(1,source.length()-1));
		Map<String,Map<String,Object>> map = mapp.readValue(source.substring(1,source.length()-1), Map.class);
		System.out.println(map.get("data").get("last").toString());
		System.out.println(map.get("channel").toString());


	}

}
