// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
    // let obj = {
    //   userName: "Sanwwar",
    //   age:21,
    // }

    // let arr=[1,2,3,4,5,6,7]
    return (
        <>
            <h1 className="bg-red-300 p-4 rounded-xl mb-4">Tailwind CSS</h1>
            <Card userName="Sanwwar hussain" btnText="click here" />

            <Card userName="Aman" btnText="good way" />
            <Card userName="Lucky" btnText="visit me" />
        </>
    );
}

export default App;
