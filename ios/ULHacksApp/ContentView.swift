//
//  ContentView.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-13.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        TabView {
            NavigationView {
                VStack {
                Image("followThruLogo")
                    .resizable()
                    .frame(width: 200, height: 200, alignment: .center)
                Text("FollowThru")
                    .font(.custom("Arial Bold", size: 50))
                    .padding(.top, 50)
                }
            }
                .tabItem {
                    Image(systemName: "house")
                    Text("Home")
                }
            NavigationView {
                BrowseView()
            }
                .tabItem {
                    Image(systemName: "list.bullet")
                    Text("Projects")
                }
            Text("Help and Advice")
                .tabItem {
                    Image(systemName: "questionmark.circle")
                    Text("Help")
                }
            LoginView()
                .tabItem {
                    Image(systemName: "person.fill")
                    Text("Account")
                }

        }
        .accentColor(.blue)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
