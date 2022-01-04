import React from 'react';
import AddOption from './AddOption'
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    // Delete all options
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    // Delete one option
    handleDeleteOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter(op => op !== option)
        }));
    };

    // Choose one option
    handlePick = () => {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const actualOption = this.state.options[randNum];
        this.setState(() => ({selectedOption: actualOption}));
    };

    // Add an option
    handleAddOption = (newOption) => {
        if (!newOption) {
            return 'Enter a valid value!'
        } else if (this.state.options.indexOf(newOption) > -1) {
            return 'This option already exists!'
        }

        this.setState((prevState) => ({options: prevState.options.concat([newOption])}));
    };

    // Close the modal
    handleCloseModal = () => {
        this.setState(() => ({selectedOption: undefined}));
    };

    // This will run before eerything else
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if (options) {
                this.setState(() => ({options: options}));
            }
        } catch (err) {
            // If there's an error, do nothing at all
        }
    };

    // This is ran everytime there's a change in this.state and it has those 2 arguments
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    };

    // This fires right before a component goes away
    componentWillUnmount() {
        console.log('Component will be unmounted')
    };

    render() {

        return (
            <div>
                <Header />

               <div className='container'>
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />

                    <div className='widget'>
                        <Options 
                            options={this.state.options} 
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
               </div>

                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}
                />
            </div>
        )
    }
}