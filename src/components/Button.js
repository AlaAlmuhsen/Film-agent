import React from 'react'

function Button(props){
    return (
        <button className="btn-main">
            {props.children}
        </button>
    )
}

export default Button;
