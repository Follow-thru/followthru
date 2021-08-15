//
//  Project.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-14.
//

import Foundation

struct Project {
    var id = UUID()
    var name: String
    var info: String = "A small description about the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget condimentum felis. \n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget condimentum felis, vitae blandit quam.\n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget condimentum felis."
    var date: String
    var priority: Int
    var branches: [Branch]
}
