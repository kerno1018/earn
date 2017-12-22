package example.BTC;

import example.Listener.OKExApi;
import org.apache.commons.httpclient.HttpClient;

public class OKExBtcListener extends OKExApi {
    public OKExBtcListener(HttpClient httpClient) {
        super(httpClient);
    }

    @Override
    public String getUrl() {
        return "https://www.okex.com/v2/c2c-open/tradingOrders/group?digitalCurrencySymbol=btc&legalCurrencySymbol=cny";
    }
}
