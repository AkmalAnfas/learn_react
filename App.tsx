import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";


function App(){
  const [alertVisible, setAlertVisibility]   = useState(false);

  return(
    <div>
      {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>My alert</Alert>}

      <Button color="primary" onClick={() =>setAlertVisibility(true) }>
      My Button   
      </Button>
      

    </div>
  );
}

export default App;





















































//import ListGroup from "./components/ListGroup";

//function App() {
  //let items=['New York','San Francisco','Tokyo','London','Paris'];

  //const handleSelectItem = (item: string) => {
    //console.log(item);
  //} 

  //return (
  //<div>
    //<ListGroup items={items} heading= "cities" onSelectItem={handleSelectItem}/>
  //</div>
//);

//}

//export default App; 
