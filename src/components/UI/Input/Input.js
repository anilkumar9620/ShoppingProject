import React from 'react';

const input = (props) => {
    return (
        <div>
            <input {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
        </div>
    )
}

export default input;