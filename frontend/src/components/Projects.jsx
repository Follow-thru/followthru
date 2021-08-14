import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Popups from './Popups'
export default function Projects() {
    const [open, setOpen] = useState(false)
    //Figure out how to go from child to parent to transmit info
    return (
        <>
            <div className="project-navbar">
            <div className="project-nav-flex-right">
                <input type="text" placeholder="Search for a project or branch" className="project-input"/>
                <Link className="project-nav-links" onClick={() => setOpen(!open)}>Add Projects</Link>
                <Link className="project-nav-links">View Projects</Link>
                <Link className="project-nav-links">View Branches</Link>
                <Link className="project-nav-links">Goal Help</Link>
            </div>
            {open && <Popups state={[open, setOpen]} />}
        </div>
        </>
    )
}
