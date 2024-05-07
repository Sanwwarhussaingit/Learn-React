import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// function MyApp()
// {
//   return(
//     <>
//     <h3>MyApp</h3>
//     </>
//   )
// }

// const reactElement={
//   type: 'a',
//   props:{
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

// const AnotherElement = (
// <a href='https://google.com' target='_blank'>Click me</a>
// )
const another = "coffee"
const reactElement =React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  "click me to visit goole",
  another
)



ReactDOM.createRoot(document.getElementById('root')).render(
  // AnotherElement
  reactElement
  // <App />
)
