package com.followthru.client.ui;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;

import com.followthru.client.R;
import com.followthru.client.observers.AuthStatusCallback;
import com.followthru.client.service.AuthService;

public class RegisterActivity extends AppCompatActivity {

    private AuthService authService;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        authService = new AuthService(null);

        TextView usernameInput = findViewById(R.id.register_username_input);
        TextView passwordInput = findViewById(R.id.register_password_input);

        TextView loginEntry = findViewById(R.id.login_entry);
        loginEntry.setOnClickListener(v -> {
            Intent intent = new Intent();
            intent.setClass(RegisterActivity.this, LoginActivity.class);
            startActivity(intent);
        });

        Button registerButton = findViewById(R.id.register_button);
        registerButton.setOnClickListener(v -> {
            String username = usernameInput.getText().toString();
            String password = passwordInput.getText().toString();
            authService.registerUser(username, password);

            Intent intent = new Intent();
            intent.setClass(RegisterActivity.this, AboutUsActivity.class);
            startActivity(intent);
        });
    }


}