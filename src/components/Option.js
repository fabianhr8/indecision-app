import React from 'react';

const Option = (props) => (
    <div className='option'>

        <p className='option__text'>{props.count}. {props.opText}</p>
        <button 
            className='button button--link'
            onClick={() => { props.handleDeleteOption(props.opText) }}
        >
            remove
        </button>

    </div>
);

export default Option;