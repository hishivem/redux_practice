import React from 'react';

const user = (props) =>{
    return(
        <React.Fragment>
            <li>{props.children}</li>
            <button onClick={props.delEvent}>Delete</button>
        </React.Fragment>
    )
}

export default user; 