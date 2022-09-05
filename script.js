const App = ({ initialButtonText, initialButtonClass }) => {
    const [buttonText, setButtonText] = React.useState(initialButtonText);
    const [buttonColor, setButtonColor] = React.useState('');
    const [buttonClass, setButtonClass] = React.useState('');

    const onButtonClick = () => {
        setButtonText('Hello from React!');
        setButtonClass(initialButtonClass);
    };
    return (
        <div className='app'>
            <button className={buttonClass} onClick={onButtonClick}>
                {buttonText}
            </button>
        </div>
    );
};

const helloWorldHeading = <h1>Hello from React</h1>;
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(
    <App initialButtonText='Click me!' initialButtonClass='green-btn' />
);
