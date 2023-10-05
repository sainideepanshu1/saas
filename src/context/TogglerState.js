import React from 'react';
import ToggleContext from './ToggleContext';
import { useState } from 'react';
const ToggleState = (props) => {
    const [tgl, setTgl] = useState(false);
    const toggleBtn = () => {
        setTgl(!tgl);
    }
    return(
    <ToggleContext.Provider value={{tgl,toggleBtn}}>
        {props.children}
    </ToggleContext.Provider>)
}
export default ToggleState
