package com.example.ico.trade.okex.rest.future.impl;

import com.example.ico.trade.okex.rest.HttpUtilManager;
import com.example.ico.trade.okex.rest.MD5Util;
import com.example.ico.trade.okex.rest.MySecureProtocolSocketFactory;
import com.example.ico.trade.okex.rest.StringUtil;
import com.example.ico.trade.okex.rest.future.IFutureRestApi;
import com.example.ico.trade.okex.util.OKConstant;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.protocol.Protocol;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * 新版本期货 REST API实现
 * 
 * @author zc
 * 
 */
@Component
public class FutureRestApiV1 implements IFutureRestApi {

	private String secret_key=OKConstant.SECRETKEY;
	
	private String api_key=OKConstant.APIKEY;
	
	private String url_prex= OKConstant.BASE_URI;
	public FutureRestApiV1(){
		Protocol myhttps = new Protocol("https", new MySecureProtocolSocketFactory(), 443);
		Protocol.registerProtocol("https ", myhttps);
	}
	public FutureRestApiV1(String url_prex,String api_key, String secret_key) {
		this();
	}

	public FutureRestApiV1(String url_prex) {
		this();

	}

	/**
	 * 期货行情URL
	 */
	private final  String FUTURE_TICKER_URL = "/api/v1/future_ticker.do";
	/**
	 * 期货指数查询URL
	 */
	private final String FUTURE_INDEX_URL = "/api/v1/future_index.do";

	/**
	 * 期货交易记录查询URL
	 */
	private final  String FUTURE_TRADES_URL = "/api/v1/future_trades.do";

	/**
	 * 期货市场深度查询URL
	 */
	private final String FUTURE_DEPTH_URL = "/api/v1/future_depth.do";
	/**
	 * 美元-人民币汇率查询URL
	 */
	private final  String FUTURE_EXCHANGE_RATE_URL = "/api/v1/exchange_rate.do";

	/**
	 * 期货取消订单URL
	 */
	private final  String FUTURE_CANCEL_URL = "/api/v1/future_cancel.do";

	/**
	 * 期货下单URL
	 */
	private final  String FUTURE_TRADE_URL = "/api/v1/future_trade.do";

	/**
	 * 期货账户信息URL
	 */
	private final String FUTURE_USERINFO_URL = "/api/v1/future_userinfo.do";
	
	/**
	 * 逐仓期货账户信息URL
	 */
	private final String FUTURE_USERINFO_4FIX_URL = "/api/v1/future_userinfo_4fix.do";

	/**
	 * 期货持仓查询URL
	 */
	private final String FUTURE_POSITION_URL = "/api/v1/future_position.do";
	
	/**
	 * 期货逐仓持仓查询URL
	 */
	private final String FUTURE_POSITION_4FIX_URL = "/api/v1/future_position_4fix.do"; 

	/**
	 * 用户期货订单信息查询URL
	 */
	private final String FUTURE_ORDER_INFO_URL = "/api/v1/future_order_info.do";

	@Override
	public String future_ticker(String symbol, String contractType)
			throws HttpException, IOException {

		HttpUtilManager httpUtil = HttpUtilManager.getInstance();
		String param = "";
		if (!StringUtil.isEmpty(symbol)) {
			if (!param.equals("")) {
				param += "&";
			}
			param += "symbol=" + symbol;
		}
		if (!StringUtil.isEmpty(contractType )) {
			if (!param.equals("")) {
				param += "&";
			}
			param += "contract_type=" + contractType;

		}
		return httpResult(httpUtil, param, url_prex, FUTURE_TICKER_URL);
	}

	private static String httpResult(HttpUtilManager httpUtil, String param, String url_prex, String FUTURE_TICKER_URL){
		String result = null;
		try {
			result = httpUtil.requestHttpGet(url_prex,FUTURE_TICKER_URL, param);
		} catch (IOException e) {
			e.printStackTrace();
		}
		// System.out.println(result);
		return result;
	}

	@Override
	public String future_index(String symbol) throws HttpException, IOException {
		HttpUtilManager httpUtil = HttpUtilManager.getInstance();
		String param = "";
		if (!StringUtil.isEmpty(symbol )) {
			if (!param.equals("")) {
				param += "&";
			}
			param += "symbol=" + symbol;
		}
		return httpResult(httpUtil, param, url_prex, FUTURE_INDEX_URL);
	}

	@Override
	public String future_trades(String symbol, String contractType)
			throws HttpException, IOException {
		HttpUtilManager httpUtil = HttpUtilManager.getInstance();
		String param = "";
		if (!StringUtil.isEmpty(symbol )) {
			if (!param.equals("")) {
				param += "&";
			}
			param += "symbol=" + symbol;
		}
		if (!StringUtil.isEmpty(contractType )) {
			if (!param.equals("")) {
				param += "&";
			}
			param += "contract_type=" + contractType;

		}
		return httpResult(httpUtil, param, url_prex, FUTURE_TRADES_URL);
	}

	@Override
	public String future_depth(String symbol, String contractType)
			throws HttpException, IOException {
		HttpUtilManager httpUtil = HttpUtilManager.getInstance();
		String param = "";
		if (!StringUtil.isEmpty(symbol )) {
			if (!param.equals("")) {
				param += "&";
			}
			param += "symbol=" + symbol;
		}
		if (!StringUtil.isEmpty(contractType )) {
			if (!param.equals("")) {
				param += "&";
			}
			param += "contract_type=" + contractType;

		}
		param += "&size=10";
		return httpResult(httpUtil, param, url_prex, FUTURE_DEPTH_URL);
	}

	@Override
	public String exchange_rate() throws HttpException, IOException {
		HttpUtilManager httpUtil = HttpUtilManager.getInstance();
		return httpResult(httpUtil, null, url_prex, FUTURE_EXCHANGE_RATE_URL);
	}

	@Override
	public String future_cancel(String symbol, String contractType,
			String orderId) throws HttpException, IOException {
		// 构造参数签名
		Map<String, String> params = new HashMap<String, String>();
		if (!StringUtil.isEmpty(contractType )) {
			params.put("contract_type", contractType);
		}
		if (!StringUtil.isEmpty(orderId )) {
			params.put("order_id", orderId);
		}
		if (!StringUtil.isEmpty(api_key )) {
			params.put("api_key", api_key);
		}
		if (!StringUtil.isEmpty(symbol )) {
			params.put("symbol", symbol);
		}
		String sign = MD5Util.buildMysignV1(params, secret_key);

		params.put("sign", sign);
		// 发送post请求

		HttpUtilManager httpUtil = HttpUtilManager.getInstance();
		return httpPostResult(params, httpUtil, url_prex, FUTURE_CANCEL_URL);

	}

	private static String httpPostResult(Map<String, String> params, HttpUtilManager httpUtil, String url_prex, String FUTURE_CANCEL_URL)  {
		String result = null;
		try {
			result = httpUtil.requestHttpPost(url_prex,FUTURE_CANCEL_URL, params);
		} catch (IOException e) {
			e.printStackTrace();
		}
		// System.out.println(result);
		return result;
	}

	@Override
	public String future_trade(String symbol, String contractType,
			String price, String amount, String type, String matchPrice)
			throws HttpException, IOException {
		// 构造参数签名
		Map<String, String> params = new HashMap<String, String>();
		if (!StringUtil.isEmpty(symbol )) {
			params.put("symbol", symbol);
		}
		if (!StringUtil.isEmpty(contractType )) {
			params.put("contract_type", contractType);
		}
		if (!StringUtil.isEmpty(api_key )) {
			params.put("api_key", api_key);
		}
		if (!StringUtil.isEmpty(price )) {
			params.put("price", price);
		}
		if (!StringUtil.isEmpty(amount )) {
			params.put("amount", amount);
		}
		if (!StringUtil.isEmpty(type )) {
			params.put("type", type);
		}
		if (!StringUtil.isEmpty(matchPrice )) {
			params.put("match_price", matchPrice);
		}
		String sign = MD5Util.buildMysignV1(params, secret_key);
		params.put("sign", sign);
		// 发送post请求

		HttpUtilManager httpUtil = HttpUtilManager.getInstance();
		return httpPostResult(params, httpUtil, url_prex, this.FUTURE_TRADE_URL);
	}

	@Override
	public String future_userinfo() throws HttpException, IOException {
		// 构造参数签名
		Map<String, String> params = new HashMap<String, String>();

		params.put("api_key", api_key);

		String sign = MD5Util.buildMysignV1(params, this.secret_key);
		params.put("sign", sign);
		
		
		// 发送post请求

		HttpUtilManager httpUtil = HttpUtilManager.getInstance();
		return httpPostResult(params, httpUtil, url_prex, this.FUTURE_USERINFO_URL);
	}
	
	@Override
	public String future_userinfo_4fix()
			throws HttpException, IOException {
		// 构造参数签名
		Map<String, String> params = new HashMap<String, String>();
		    params.put("api_key", api_key);

		    String sign = MD5Util.buildMysignV1(params, this.secret_key);
		    params.put("sign", sign);
		
		
		// 发送post请求

		HttpUtilManager httpUtil = HttpUtilManager.getInstance();
		return httpPostResult(params, httpUtil, url_prex, this.FUTURE_USERINFO_4FIX_URL);
	}

	@Override
	public String future_position(String symbol, String contractType)
			throws HttpException, IOException {
		// 构造参数签名
		Map<String, String> params = new HashMap<String, String>();
		if (!StringUtil.isEmpty(symbol )) {
			params.put("symbol", symbol);
		}
		if (!StringUtil.isEmpty(contractType )) {
			params.put("contract_type", contractType);
		}
		params.put("api_key", api_key);
		String sign = MD5Util.buildMysignV1(params, secret_key);
		params.put("sign", sign);
		// 发送post请求

		HttpUtilManager httpUtil = HttpUtilManager.getInstance();
		return httpPostResult(params, httpUtil, url_prex, this.FUTURE_POSITION_URL);

	}
	
	@Override
	public String future_position_4fix(String symbol, String contractType)
			throws HttpException, IOException {
		// 构造参数签名
		Map<String, String> params = new HashMap<String, String>();
		if (!StringUtil.isEmpty(symbol )) {
			params.put("symbol", symbol);
		}
		if (!StringUtil.isEmpty(contractType )) {
			params.put("contract_type", contractType);
		}
		params.put("api_key", api_key);
		String sign = MD5Util.buildMysignV1(params, secret_key);
		params.put("sign", sign);
		// 发送post请求
		HttpUtilManager httpUtil = HttpUtilManager.getInstance();
		return httpPostResult(params, httpUtil, url_prex, this.FUTURE_POSITION_4FIX_URL);
	}

	@Override
	public String future_order_info(String symbol, String contractType,
			String orderId, String status, String currentPage, String pageLength)
			throws HttpException, IOException {
		// 构造参数签名
		Map<String, String> params = new HashMap<String, String>();
		if (!StringUtil.isEmpty(contractType )) {
			params.put("contract_type", contractType);
		}
		if (!StringUtil.isEmpty(currentPage )) {
			params.put("current_page", currentPage);
		}
		if (!StringUtil.isEmpty(orderId )) {
			params.put("order_id", orderId);
		}
		if (!StringUtil.isEmpty(api_key )) {
			params.put("api_key", api_key);
		}
		if (!StringUtil.isEmpty(pageLength )) {
			params.put("page_length", pageLength);
		}
		if (!StringUtil.isEmpty(symbol )) {
			params.put("symbol", symbol);
		}
//		if (!StringUtil.isEmpty(status )) {
//			params.put("status", status);
//		}
		String sign = MD5Util.buildMysignV1(params, secret_key);
		params.put("sign", sign);
		// 发送post请求

		HttpUtilManager httpUtil = HttpUtilManager.getInstance();
		return httpPostResult(params, httpUtil, url_prex, this.FUTURE_ORDER_INFO_URL);

	}
	
}
