import React from "react";
import './AddTask.css';
import close from './img/close.png'
import logo from './img/logo.png'

const AddTask = () => {
    return (
        <div className="addTaskWrapper">
            <div className="header">
                <div className="addTask-title">add task</div>
                <div className="header-close">
                    <img src={close} alt="close" />
                </div>
            </div>
            <div className="addTask-logo">
                    <img src={logo} alt="logo" />
            </div>
            <form>
                <label>
                    <div className="inputTitle">Title</div>
                    <input
                        type="text"
                        placeholder="Enter task title"
                        className="input"
                    />
                </label>
                <label>
                    <div className="inputTitle">Description</div>
                    <input
                        type="text"
                        placeholder="Enter task descriprion"
                        className="input"
                    />
                </label>
                <label>
                    <div className="inputTitle">Date end</div>
                    <input
                        type="text"
                        placeholder="Click here to choose date"
                        className="input"
                    />
                </label>
                <div className="buttons">
                    <button
                    type="submit"
                    className="add-btn"
                    >Add</button>
                    <button
                    type="submit"
                    className="cancel-btn"
                    >Cancel</button>
                    </div>
            </form>
        </div>
    )
}



export default AddTask