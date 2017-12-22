package example.BTC;

import example.Listener.OtcBtcApi;
import org.apache.commons.httpclient.HttpClient;
import org.junit.Test;

public class OTCBtcBtcListener extends OtcBtcApi {
    public OTCBtcBtcListener(HttpClient httpClient) {
        super(httpClient);
    }

    @Override
    public String getUrl() {

        return "https://otcbtc.com/sell_offers?currency=btc&fiat_currency=cny&payment_type=all";

    }


    public static void main(String[] args){
        new OTCBtcBtcListener(new HttpClient()).update();
    }
}
