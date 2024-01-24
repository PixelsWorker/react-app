//import ListGroup from "./components/ListGroup";
//
//function App() {
//  let items = ["New York", "Sen Francisco", "Tokyo", "London", "Paris"];
//
//  const handleSelectItem = (item: string) => {
//    console.log(item);
//  };
//
//  return (
//    <div>
//      <ListGroup
//        items={items}
//        heading="Citirs"
//        onSelectItom={handleSelectItem}
//      />
//    </div>
//  );
//}

//import Alert from "./components/Alert";
//
//function App() {
//  return (
//    <div>
//      <Alert>
//        Hello <span>World</span>
//      </Alert>
//    </div>
//  );
//}
//
//export default App;

//import Button from "./components/Button";
//
//function App() {
//  return (
//    <div>
//      <Button color= 'primary' onClick={() => console.log("Clicked")}>My Button </Button>
//    </div>
//  );
//}
//
//export default App;

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button </Button>
    </div>
  );
}

export default App;
