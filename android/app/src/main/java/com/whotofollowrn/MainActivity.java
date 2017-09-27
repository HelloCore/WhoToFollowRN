package com.whotofollowrn;

import com.facebook.react.ReactActivity;
import com.reactnativenavigation.controllers.SplashActivity;

import android.content.Intent; // <--- import
import android.content.res.Configuration; // <--- import

public class MainActivity extends SplashActivity {

    @Override
      public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        Intent intent = new Intent("onConfigurationChanged");
        intent.putExtra("newConfig", newConfig);
        this.sendBroadcast(intent);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    // @Override
    // protected String getMainComponentName() {
    //     return "WhoToFollowRn";
    // }
}
