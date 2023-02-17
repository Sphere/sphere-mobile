package org.sunbird.customtabs;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.app.Activity;

public class CallbackActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent in = getIntent();
        Uri data = in.getData();
        String query = in.getData().getEncodedQuery();
        CustomTabsPlugin.onTokenRecieved(query, this);
        finish();
    }

}
