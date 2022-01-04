class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }

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
    }

    // This is ran everytime there's a change in this.state and it has those 2 arguments
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    // This fires right before a component goes away
    componentWillUnmount() {
        console.log('Component will be unmounted')
    }

    // Delete all options
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    // Delete one option
    handleDeleteOption(option) {
        this.setState((prevState) => ({
            options: prevState.options.filter(op => op !== option)
        }));
    }

    // Choose one option
    handlePick() {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const actualOption = this.state.options[randNum];
        console.log(actualOption);
    }

    // Add an option
    handleAddOption(newOption) {
        if (!newOption) {
            return 'Enter a valid value!'
        } else if (this.state.options.indexOf(newOption) > -1) {
            return 'This option already exists!'
        }

        this.setState((prevState) => ({options: prevState.options.concat([newOption])}));
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision App'
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <p>Here are your options:</p>
            {!props.options.length && <p>There are no options here!</p>}
            <ol>
                {
                    props.options.map((op) => (
                        <Option 
                            key={op} 
                            opText={op}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    ))
                }
            </ol>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
        </div>
    );
}


const Option = (props) => {
    return (
        <div>
            <li>
            {props.opText}
            <button onClick={() => {
                props.handleDeleteOption(props.opText)
            }}>
                X
            </button>
            </li>

        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input name='addOption'></input>
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));