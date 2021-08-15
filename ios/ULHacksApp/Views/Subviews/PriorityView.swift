//
//  PriorityView.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-14.
//

import SwiftUI

struct PriorityView: View {
    var body: some View {
        ZStack{
            Image(systemName: "exclamationmark.triangle")
                .font(.title)
        }
        .frame(width: 40, height: 40, alignment: .center)
        .background(Color.AppTheme.fadedRedHighlight)
        .cornerRadius(8
        )
        .padding([.bottom, .trailing], 12)
    }
}

struct PriorityView_Previews: PreviewProvider {
    static var previews: some View {
        PriorityView()
    }
}
