import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Card from "./Card";

function App() {
    const [total, setTotal] = useState(0);

    let updateData = (key, value) => {
        setTotal(total + parseInt(value));
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Card id={0} updateData={updateData}/>
                <Card id={1} updateData={updateData}/>
                <Card id={2} updateData={updateData}/>
                <p>
                    Результат: {total}
                </p>
            </header>
        </div>
    );
}

export default App;
