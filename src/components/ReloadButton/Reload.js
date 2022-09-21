import React from 'react';
import "./Reload.css"
const Reload = () => {
    return (
        <div>
            <button onClick={reloadPage} className='button'>Reload</button>
            <p>Click here for generating new users info!</p>
        </div>
    );
};

function reloadPage(){
    window.location.reload()
}

export default Reload;