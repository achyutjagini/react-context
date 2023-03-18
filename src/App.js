import MyContext from "./context/MyContext";
import { useContext } from "react";

export default function MyComponent() {
  return (
    <div>
    <MyContext.Provider value="Hello, world!">
      <ChildComponent />
      <ChildComponent />
    </MyContext.Provider>
    <MyContext.Provider value="Buffalo">
    <ChildComponent />
    </MyContext.Provider>
     </div>
  );
}

function ChildComponent() {
  const value = useContext(MyContext);
  return <div>{value} hello</div>;
}


