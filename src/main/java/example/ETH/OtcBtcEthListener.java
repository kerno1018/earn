package example.ETH;

import example.Listener.OtcBtcApi;
import org.apache.commons.httpclient.HttpClient;

public class OtcBtcEthListener extends OtcBtcApi {

    public OtcBtcEthListener(HttpClient httpClient) {
        super(httpClient);
    }

    public String getUrl(){
        return "https://otcbtc.com/sell_offers?currency=eth&fiat_currency=cny&payment_type=all";
    }
}
