import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  // let items = ["New Your", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }

  // return (
  //   <div>
  //     <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
  //   </div>
  // );
  // return (
  //   <div>
  //     <Alert>
  //       <h3>Hllow I am html element</h3>
  //     </Alert>
  //   </div>
  // )
  const [alertVisible, setAlertVisibility] =useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>My Alert</Alert>}
      <Button color="danger" onClick={()=>setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
