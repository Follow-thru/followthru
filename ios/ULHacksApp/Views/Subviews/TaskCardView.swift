//
//  TaskCardView.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-15.
//

import SwiftUI

struct TaskCardView: View {
    
    var task: Task
    
    var body: some View {
        HStack {
        VStack{
            Text(task.name)
                .font(.title)
                .padding(.top)
                .padding(.leading, 45)
            
            HStack {
                DueDateView(date: task.date)
                    .padding()
                Spacer()
                PriorityView(level: task.priority)
                    .padding(.top, 6)
            }
        }
        Image(systemName: "chevron.right")
            .font(.title)
            .padding(.trailing, 8)
    }
        .background(Color.AppTheme.fadedBlue)
        .cornerRadius(10)
        .padding(.all, 12)
        .clipped()
        .shadow(color: Color.gray, radius: 10, x: 0, y: 10)
    }
}

struct TaskCardView_Previews: PreviewProvider {
    static var previews: some View {
        TaskCardView(task: Task(name: "Debugging", date: "Sept. 1", priority: 2))
            .previewLayout(.sizeThatFits)
    }
}
