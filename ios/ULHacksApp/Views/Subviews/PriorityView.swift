//
//  PriorityView.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-14.
//

import SwiftUI

struct PriorityView: View {
    
    var level: Int = 3
    var pColor: Color
    
    init(level: Int) {
        self.level = level
        switch self.level {
            case 1:
                self.pColor = Color.AppTheme.fadedGreenHighlight
            case 2:
                self.pColor = Color.AppTheme.fadedGoldHighlight
            case 3:
                self.pColor = Color.AppTheme.fadedRedHighlight
            default:
                self.pColor = Color.AppTheme.fadedRedHighlight
        }
    }
    
    
    var body: some View {
        ZStack{
            Image(systemName: "exclamationmark.triangle")
                .font(.title)
        }
        .frame(width: 40, height: 40, alignment: .center)
        .background(self.pColor)
        .cornerRadius(8
        )
        .padding([.bottom, .trailing], 12)
    }
}

struct PriorityView_Previews: PreviewProvider {
    static var previews: some View {
        PriorityView(level: 2)
    }
}
