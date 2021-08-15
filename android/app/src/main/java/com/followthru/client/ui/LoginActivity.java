package com.followthru.client.ui;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;

import com.followthru.client.R;

public class LoginActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        TextView usernameInput = findViewById(R.id.login_username_input);
        TextView passwordInput = findViewById(R.id.login_password_input);

        TextView loginEntry = findViewById(R.id.register_entry);
        loginEntry.setOnClickListener(v -> {
            Intent intent = new Intent();
            intent.setClass(LoginActivity.this, LoginActivity.class);
            startActivity(intent);
        });

        Button registerButton = findViewById(R.id.login_button);
        registerButton.setOnClickListener(v -> {
            String username = usernameInput.getText().toString();
            String password = passwordInput.getText().toString();

            Intent intent = new Intent();
            intent.setClass(LoginActivity.this, AboutUsActivity.class);
            startActivity(intent);
        });
    }
}