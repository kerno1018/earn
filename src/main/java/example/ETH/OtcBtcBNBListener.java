package example.ETH;

import example.Listener.OtcBtcApi;
import org.apache.commons.httpclient.HttpClient;

public class OtcBtcBNBListener extends OtcBtcApi {

    public OtcBtcBNBListener(HttpClient httpClient) {
        super(httpClient);
    }

    public String getUrl(){
        return "https://otcbtc.com/sell_offers?currency=bnb&fiat_currency=cny&payment_type=all";
    }
}
