//
//  DueDateView.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-14.
//

import SwiftUI

struct DueDateView: View {
    
    var date: String = "Aug. 15"
    
    init(date: String = "Aug. 15") {
        self.date = date
        
    }
    
    var body: some View {
        VStack(){
            Text("Due \(date)")
                .padding(.all, 10)
        }
        .background(Color.AppTheme.fadedRed)
        .cornerRadius(8)
    }
}

struct DueDateView_Previews: PreviewProvider {
    static var previews: some View {
        DueDateView()
            .previewLayout(.sizeThatFits)
    }
}
