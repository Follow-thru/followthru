//
//  BrowseBranchView.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-15.
//

import SwiftUI

struct BrowseBranchView: View {
    
    var branch: Branch
    
    init(branch: Branch) {
        self.branch = branch
    }
    
    var body: some View {
        ScrollView {
        VStack {
            AboutBranchCardView(branch: branch)
            
            ForEach(branch.subBranches, id:\.id) { subBranch in
                NavigationLink(
                    destination: BrowseBranchView(branch: subBranch),
                    label: {
                        BranchCardView(branch: subBranch)
                            .foregroundColor(Color.black)
                    })
            }
            
            ForEach(branch.tasks, id:\.id) {task in
                NavigationLink(
                    destination: TaskView(task: task),
                    label: {
                        TaskCardView(task: task)
                            .foregroundColor(Color.black)
                    })
            }
            Spacer()
        }
        }
            .navigationTitle(branch.name)
    }
}

struct BrowseBranchView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
        BrowseBranchView(branch: DataController().project1.branches[0])
        }
    }
}
