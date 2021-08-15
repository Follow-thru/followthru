package com.followthru.client.service;

import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.os.IBinder;

import androidx.annotation.Nullable;

import com.followthru.client.observers.AuthStatusCallback;

public class AuthService extends Service {

    private static String url = "http://localhost:2000/api/register";

    private final AuthStatusCallback mAuthStatusCallback;

    public AuthService(AuthStatusCallback authStatusCallback) {
        mAuthStatusCallback = authStatusCallback;
    }

    public void authenticateUser(String username, String password) {
        
    }

    public void registerUser(String username, String password) {
        // send post request here
    }

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }
}
