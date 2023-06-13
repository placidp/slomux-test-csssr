import { useSelector, useDispatch } from "../../slomux";
import { changeStepSize } from "../actionCreators";

export const Step = () => {
    const dispatch = useDispatch();
    const stepSize = useSelector(state => state.stepSize);

    return (
        <div>
            <div>Значение счётчика должно увеличиваться или уменьшаться на заданную величину шага</div>
            <div>Текущая величина шага: { stepSize }</div>
            <input
                type="range"
                min="1"
                max="5"
                value={stepSize}
                onChange={({ target }) => dispatch(changeStepSize(+target.value))}
            />
        </div>
    );
};