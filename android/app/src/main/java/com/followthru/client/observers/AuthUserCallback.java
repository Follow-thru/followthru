package com.followthru.client.observers;

import androidx.annotation.MainThread;

public interface AuthUserCallback {

    @MainThread
    void onAuthUserLoaded();

    @MainThread
    void onDataNotAvailable();
}
