//
//  ProjectCardView.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-14.
//

import SwiftUI

struct ProjectCardView: View {
    
    var projectName: String
    var date: String
    var priority: Int
    var chevron: Bool
    
    init(projectName: String, date: String, priority: Int, chevron: Bool = true) {
        self.projectName = projectName
        self.date = date
        self.priority = priority
        self.chevron = chevron
    }
    
    var body: some View {
        VStack {
            VStack {
                HStack {
                    Text("About \(projectName)")
                        .font(.title2)

                    Spacer()
                    
                    Image(systemName: "plus.square.on.square")
                        .font(.title)
                        
                }
                    .padding(.all, 12)
                
                HStack{
                    Text("A small description about the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget condimentum felis. \n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget condimentum felis, vitae blandit quam.\n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget condimentum felis.")
                        .padding(.horizontal, 12)
                        .padding(.bottom, 12)
                    if (chevron) {
                    Image(systemName: "chevron.right")
                        .font(.title)
                        .padding(.trailing, 12)
                    }
                }
                HStack{
                    DueDateView(date: date)
                        .padding(.bottom, 12)
                        .padding(.leading, 12)
                    
                    Spacer()
                    
                    PriorityView(level: priority)
                }
                
            }
            .background(Color.AppTheme.fadedBlue)
            .cornerRadius(10)
            .padding(.all, 12)
            .clipped()
            .shadow(color: Color.gray, radius: 10, x: 0, y: 10)
       }

    }
}

struct ProjectCardView_Previews: PreviewProvider {
    static var previews: some View {
        ProjectCardView(projectName: DataController().project1.name, date: DataController().project1.date, priority: DataController().project1.priority)
            .previewLayout(.sizeThatFits)
    }
}
