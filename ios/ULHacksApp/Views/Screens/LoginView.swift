//
//  Login.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-14.
//

import SwiftUI

struct LoginView: View {
    
    @StateObject private var loginVM = LoginViewModel()
    
    var body: some View {
        VStack{
            Text("Login")
                .font(.custom("Arial Bold", size: 50))
                .padding(.top, 50)
            Image("followThruLogo")
                .resizable()
                .frame(width: 150, height: 150, alignment: .center)
                .padding(.bottom, 50)
            
            Form {
                Section{
                    TextField("Username", text: $loginVM.username)}
                Section{
                    SecureField("Password", text: $loginVM.password)
                }
                    
                HStack {
                    Spacer()
                    Button("Login") {
                        loginVM.login()
                    }
                    Button("Signout") {
                        
                    }
                    Spacer()
                }
            
            }
            Image(systemName: loginVM.isAuthenticated ? "lock.fill": "lock.open")
                .font(.custom("Arial Bold", size: 50))
                .padding([.top, .bottom], 20)
            Text(loginVM.isAuthenticated ? "Logged In": "Logged Out")
                .font(.title)
            Spacer()
        }
    }
}

struct LoginView_Previews: PreviewProvider {
    static var previews: some View {
        LoginView()
    }
}
