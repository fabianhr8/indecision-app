import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleAddOption = (e) => {
        e.preventDefault();
        
        let newOption = e.target.elements.addOption.value.trim();
        // Call function from the parent. It could return an error
        const error = this.props.handleAddOption(newOption);

        // This will only run if there was an error
        this.setState(() => ({ error }));

        // If there is no error, clear the input
        if (!error) {
            e.target.elements.addOption.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form className='add-option' onSubmit={this.handleAddOption}>
                    <input className='add-option__input' name='addOption'></input>
                    <button className='button'>Add option</button>
                </form>
            </div>
        );
    }
}