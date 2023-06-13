import { useSelector, useDispatch } from "../../slomux";
import { updateCounter } from "../actionCreators";

export const Counter = () => {
    const dispatch = useDispatch();
    
    const counter = useSelector(state => state.counter);
    const stepSize = useSelector(state => state.stepSize);

    
    return (
        <div>
            <button onClick={() => dispatch(updateCounter(-stepSize))}>-</button>
            <span> { counter } </span>
            <button onClick={() => dispatch(updateCounter(stepSize))}>+</button>
        </div>
    );
};