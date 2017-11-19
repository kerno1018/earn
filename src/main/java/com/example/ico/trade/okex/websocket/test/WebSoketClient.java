package com.example.ico.trade.okex.websocket.test;


import com.example.ico.trade.okex.websocket.WebSocketBase;
import com.example.ico.trade.okex.websocket.WebSocketService;

/**
 * 通过继承WebSocketBase创建WebSocket客户端
 * @author okcoin
 *
 */
public class WebSoketClient extends WebSocketBase {
	public WebSoketClient(String url,WebSocketService service){
		super(url,service);
	}
}
