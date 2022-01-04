// JSX - Javascript XML

// Where it will render the React app
const appRoot = document.getElementById('app');

// Main object
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

// Add an option
const onFormSubmit = (e) => {
    // Prevent page from reloading
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderCounterApp();
    }
};

// Remove all options
const onRemoveAllOptions = () => {
    app.options = [];
    renderCounterApp();
};

// What shoul I do?
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const selectedOption = app.options[randomNum];
    alert(selectedOption);
};

const renderCounterApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>
                What should I do?
            </button>
            <button onClick={onRemoveAllOptions}>Remove all options</button>
            <ol>
                {
                    app.options.map((op) => <li key={op}>{op}</li>)
                }
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    // Render app
    ReactDOM.render(template, appRoot);

};

renderCounterApp();
