//
//  DataController.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-15.
//

import Foundation

struct DataController {
    var project1: Project = Project(name: "Video Game", date: "Sept. 1", priority: 2,
                                    branches: [Branch(name: "Gameplay Features", date: "Aug. 25", priority: 3, subBranches: [
                                        Branch(name: "Combos", date: "Aug. 19", priority: 2, subBranches: [], tasks: [
                                            Task(name: "Dash Combo", date: "Aug. 18", priority: 1), Task(name: "Jump Combo", date: "Aug.18", priority: 2)
                                        ]),
                                        Branch(name: "Spells", date: "Aug. 22", priority: 2, subBranches: [], tasks: [
                                            Task(name: "Fire Spell", date: "Aug. 21", priority: 2), Task(name: "Freeze Spell", date: "Aug.21", priority: 3), Task(name: "Poison Spell", date: "Aug. 22", priority: 1)
                                        ])
                                    ], tasks: [Task(name: "Landscape", date: "Aug. 15", priority: 3), Task(name: "Boss Battle", date: "Aug. 28", priority: 3)])
                           
                           ])
}
