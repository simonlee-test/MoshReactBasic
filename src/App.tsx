// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// // import Message from './Message.tsx'
// import Message, {Greet} from './Message'

// function App() {
//   const [count123, setCount] = useState(0)
//   // const message = Message.Greet("Simon", 24)
//   const message = Greet("simon", 124)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((countabc) => countabc + 1)}>
//           count is {count123}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       {/* <Message.Message/> */}
//       <Message></Message>

//     </>

//   )
// }

// import Message from './Message'
// import Alert from './components/Alert';

// function App() {
//   //Event handler

//   return (
//     <>
//       <Alert>
//         <div>I am children</div>
//       </Alert>
//     </>
//   );
// }

// export default App;

import Alert from "./components/Alert";
import Button from "./Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState<boolean>(false)

  return (
    <>
      {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>I am an Alert</Alert>}
      <Button color="primary" onClick={()=>{setAlertVisibility(true)}}>My button</Button>
    </>
  );
}

export default App;
