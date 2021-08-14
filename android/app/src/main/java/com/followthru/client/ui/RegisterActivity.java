package com.followthru.client.ui;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;

import com.followthru.client.R;

public class RegisterActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        TextView usernameInput = findViewById(R.id.username_input);
        TextView passwordInput = findViewById(R.id.password_input);

        TextView loginEntry = findViewById(R.id.login_entry);
        loginEntry.setOnClickListener(v -> {
            Intent intent = new Intent();
            intent.setClass(RegisterActivity.this, LoginActivity.class);
            startActivity(intent);
        });

        Button registerButton = findViewById(R.id.login_button);
        registerButton.setOnClickListener(v -> {
            String username = usernameInput.getText().toString();
            String password = passwordInput.getText().toString();

            Intent intent = new Intent();
            intent.setClass(RegisterActivity.this, ProjectActivity.class);
            startActivity(intent);
        });
    }
}