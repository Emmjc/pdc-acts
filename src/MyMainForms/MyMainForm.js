import React from "react";
import BasicForms from "./BasicForms";
import { Link,Route, Routes } from "react-router-dom";
import ControlledInput from "./ControlledInput";
import UncontrolledInput from "./UncontrolledInput";
import TabbedForm from "./TabForm/TabbedForm";

const MyMainForm = () => {
    return(
        <div>
            <h1> React Form Apps</h1>
            <nav>
                <ul>
                    <li><Link to="basic-form">Basic Form</Link></li>
                    <li><Link to="controlled-input">Controlled Input</Link></li>
                    <li><Link to="uncontrolled-input">Uncontrolled Input</Link></li>
                    <li><Link to="tabbed-form">Tabbed Form</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="basic-form" element={<BasicForms/>}/>
                <Route path="controlled-input" element={<ControlledInput/>}/>
                <Route path="uncontrolled-input" element={<UncontrolledInput/>}/>
                <Route path="tabbed-form" element={<TabbedForm/>}/>
            </Routes>
        </div>
    );
}

export default MyMainForm;