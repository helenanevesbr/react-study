import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting(){
    return <div>
        <Person/>
        <Message/>
        {/*Nest components*/}
    </div>
}

const Person = () => <h2>john doe</h2>; //implicit return is possible
const Message = () => { //however if you use brackets, you need explicit return
    return <p>this is my message</p>
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting/>)