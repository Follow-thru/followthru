//
//  ProjectView.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-14.
//

import SwiftUI

struct ProjectView: View {
    
    var project: Project
    
    init(project: Project) {
        self.project = project
    }
    
    var body: some View {
        ScrollView{
        VStack{
            ProjectCardView(projectName: project.name, date: project.date, priority: project.priority, chevron: false)
            ForEach(project.branches, id:\.id) { branch in
                NavigationLink(
                    destination: BrowseBranchView(branch: branch),
                    label: {
                        BranchCardView(branch: branch)
                            .foregroundColor(Color.black)
                    })
                
                }

            }
        }
        .navigationTitle("\(project.name)")
    }
}

struct ProjectView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView{
            ProjectView(project: DataController().project1)
        }
    }
}
