//
//  BrowseView.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-14.
//

import SwiftUI

struct BrowseView: View {
    var body: some View {
        ScrollView{
            VStack {
                NavigationLink(
                    destination: ProjectView(project: DataController().project1),
                    label: {
                        ProjectCardView(projectName: DataController().project1.name, date: DataController().project1.date, priority: DataController().project1.priority)
                            .foregroundColor(Color.black)
                    })
                ProjectCardView(projectName: DataController().project1.name, date: DataController().project1.date, priority: DataController().project1.priority)
            }
                
        }
        .navigationTitle("Browse Projects")
    }
}

struct BrowseView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView{
        BrowseView()
        }
    }
}
