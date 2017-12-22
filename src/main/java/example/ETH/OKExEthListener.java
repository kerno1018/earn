package example.ETH;

import example.Listener.OKExApi;
import org.apache.commons.httpclient.HttpClient;

public class OKExEthListener extends OKExApi {


    public OKExEthListener(HttpClient httpClient) {
        super(httpClient);
    }

    @Override
    public String getUrl() {
        String url = "https://www.okex.com/v2/c2c-open/tradingOrders/group?digitalCurrencySymbol=eth&legalCurrencySymbol=cny";
        return url;
    }
}
