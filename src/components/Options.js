import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options</h3>
            <button 
                onClick={props.handleDeleteOptions}
                className='button button--link'
            >
                Remove all
            </button>
        </div>

        {!props.options.length && <p className='widget__message'>Add an option to get started!</p>}
        {
            props.options.map((op, index) => (
                <Option 
                    key={op} 
                    opText={op}
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div>
);

export default Options;