//
//  TaskView.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-14.
//

import SwiftUI

struct TaskView: View {
    
    var task: Task
    
    var body: some View {
        VStack {
            HStack {
                DueDateView(date: task.date)
                    .padding(.leading, 8)
                Spacer()
                PriorityView(level: task.priority)
                    .padding(.top)
            }
            .padding(2)
            .background(Color.AppTheme.fadedBlue)
            .cornerRadius(16)
            .padding(.top, 16)
            .clipped()
            .shadow(color: Color.gray, radius: 10, x: 0, y: 10)
            Spacer()
            Text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium velit vitae nibh consectetur tincidunt. Proin rutrum nisl eu lacus condimentum aliquam. Nullam dictum, metus vitae lacinia sagittis, turpis nisi porttitor tellus, sit amet pretium elit felis eget ligula. Curabitur eu tincidunt ex, suscipit tempus neque. \n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium velit vitae nibh consectetur tincidunt. Proin rutrum nisl eu lacus condimentum aliquam. Nullam dictum, metus vitae lacinia sagittis, turpis nisi porttitor tellus, sit amet pretium elit felis eget ligula. Curabitur eu tincidunt ex, suscipit tempus neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium velit vitae nibh consectetur tincidunt. Proin rutrum nisl eu lacus condimentum aliquam. Nullam dictum, metus vitae lacinia sagittis, turpis nisi porttitor tellus, sit amet pretium elit felis eget ligula. Curabitur eu tincidunt ex, suscipit tempus neque.")
                .padding()
                .background(Color.AppTheme.fadedGreen)
                .cornerRadius(12)
                .clipped()
                .shadow(color: Color.gray, radius: 10, x: 0, y: 10)
            
            Spacer(minLength: 120)
            
            Button("Edit"){}
                .foregroundColor(.black)
                .padding(.horizontal, 170)
                .padding(.vertical, 4)
                .background(Color.AppTheme.fadedBlue)
                .cornerRadius(8)
                .font(.custom("Arial Bold", size: 25))
                .clipped()
                .shadow(color: Color.gray, radius: 10, x: 0, y: 10)
        }
        .navigationTitle(task.name)
        .padding(.horizontal, 12)
    }
}

struct TaskView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView{
        TaskView(task: Task(name: "New Sorting Algorithm", date: "Aug. 14", priority: 2))
        }
    }
}
