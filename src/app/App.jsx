import { Counter, Step } from "../components";
import './App.css';
import { useSelector } from "../slomux";

const App = () => {
  const counter = useSelector(state => state.counter);

  return (
     <>
         <Step />
         {(counter < 3) && <Counter />}
     </>
  )
}

export default App;
