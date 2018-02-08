package example.ETH;

import example.Listener.OtcBtcApi;
import org.apache.commons.httpclient.HttpClient;

public class OtcBtcEosListener extends OtcBtcApi {

    public OtcBtcEosListener(HttpClient httpClient) {
        super(httpClient);
    }

    public String getUrl(){
        return "https://otcbtc.com/sell_offers?currency=eos&fiat_currency=cny&payment_type=all";
    }
}
