import { useState , React, Fragment} from "react";
import Names from "./components/Name/Name";
import NewName from "./components/NewName/NewName";

const DummyNames = [
  { id: "e1", name: "Abdullah", age:22},
  { id: "e2", name: "Bahaa", age:22}
];
const App = () => {
  const [names,setNames] = useState(DummyNames);
  const AddToNames= name=>{
    setNames((prevNames)=>{
      return [name,...prevNames];
    });
  }

  return (
    <Fragment>
      <NewName onAddName={AddToNames} />;
      <Names data={names} />
    </Fragment>
  );
};

export default App;
