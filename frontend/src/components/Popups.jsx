import React from 'react'
import ReactDOM from 'react-dom'

export default function Popups(props) {
    const [open, setOpen] = props.state
    
    return ReactDOM.createPortal(
        <>
            <div className="modal-container">
                <div className="modal-frame">
                    <button className="close-btn" onClick={() => setOpen(!open)}> X </button>
                    <div className="modal-info">
                        <div className="modal-text">
                            <div className="modal-header">
                                <h1> New Task </h1>
                            </div>
                            <div className="modal-inputs">
                                <input type="text" placeholder="Task name" />
                                <div className="date-inputs"> <input type="text" placeholder="Start Date" /> <input type="text" placeholder="Due Date" /> </div>
                                <input type="text" placeholder="Task category" />
                                <input type="text" placeholder="People you will collaborate with" />
                                <select>
                                    <option value="" select hidden> --Priority-- </option>
                                    <option value="low"> Low </option>
                                    <option value="medium"> Medium </option>
                                    <option value="high"> High </option>
                                </select>
                                <div className="popup-btn"> 
                                <button className="log-in-btn"> Create Task </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('react-modal')
    )
}