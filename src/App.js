import { useState } from "react";
import TodoAppUseReducer from "./Component/TodoAppUseReducer";
// import CheckBox from "./Component/CheckBox";
// import UseMemo from "./Component/UseMemo";
// import UseReducer from "./Component/UseReducer";
// import RadioBox from "./Component/RadioBox";
// import TodoList from "./Component/TooList";
// import CountDown from "./Component/CountDown";
// import UnSubsribe from "./Component/UnSubscribe";
// import UseRef from "./Component/useRef";
// import Content from './Content';

function App() {
  const [show, setShow] = useState(false)

  return (
    <div style={{ marginTop: "40px", padding: "40px" }}>
      <button onClick={() => { setShow(!show) }}>Toggle</button>
      {show && <TodoAppUseReducer />}
    </div>
  )
}

export default App;