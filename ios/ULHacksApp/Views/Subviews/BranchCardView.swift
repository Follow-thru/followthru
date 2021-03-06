//
//  BranchCardView.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-14.
//

import SwiftUI

struct BranchCardView: View {
    
    var branch: Branch
    
    init(branch: Branch) {
        self.branch = branch
    }
    
    var body: some View {
        VStack {
            HStack {
                Text("\(branch.name)")
                    .font(.title2)

                Spacer()
                
                Image(systemName: "plus.square.on.square")
                    .font(.title)
                    
            }
                .padding(.all, 12)
            
            HStack{
                Text("A small description about the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget condimentum felis. \n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget condimentum felis, vitae blandit quam.")
                    .padding(.horizontal, 12)
                    .padding(.bottom, 12)
                Image(systemName: "chevron.right")
                    .font(.title)
                    .padding(.trailing, 12)
            }
            HStack{
                DueDateView(date: branch.date)
                    .padding(.bottom, 12)
                    .padding(.leading, 12)
                
                Spacer()
                
                PriorityView(level: branch.priority)
            }
            
        }
        .background(Color.AppTheme.fadedGreen)
        .cornerRadius(10)
        .padding(.all, 12)
        .clipped()
        .shadow(color: Color.gray, radius: 10, x: 0, y: 10)
   }
}

struct AboutBranchCardView: View {
    
    var branch: Branch
    
    init(branch: Branch) {
        self.branch = branch
    }
    
    var body: some View {
        VStack {
            HStack {
                Text("About \(branch.name)")
                    .font(.title2)

                Spacer()
                
                Image(systemName: "plus.square.on.square")
                    .font(.title)
                    
            }
                .padding(.all, 12)
            
            HStack{
                Text("A small description about the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget condimentum felis. \n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget condimentum felis, vitae blandit quam.")
                    .padding(.horizontal, 12)
                    .padding(.bottom, 12)
            }
            HStack{
                DueDateView(date: branch.date)
                    .padding(.bottom, 12)
                    .padding(.leading, 12)
                
                Spacer()
                
                PriorityView(level: branch.priority)
            }
            
        }
        .background(Color.AppTheme.fadedGreen)
        .cornerRadius(10)
        .padding(.all, 12)
        .clipped()
        .shadow(color: Color.gray, radius: 10, x: 0, y: 10)
   }
}
    
struct BranchCardView_Previews: PreviewProvider {
    static var previews: some View {
        BranchCardView(branch: DataController().project1.branches[0])
    }
}
