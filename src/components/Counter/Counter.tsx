import "./Counter.scss";
import {MouseEvent} from "react";
import {PlusIcon} from "../svgs/PlusIcon";
import {MinusIcon} from "../svgs/MinusIcon";

interface Props {
    counter: number,
    setCounter: (value: number) => void
}

const INCREASE = "increase";
const DECREASE = "decrease";

export const Counter = ({counter, setCounter}: Props) => {
    const handleCounterClick = (event: MouseEvent<HTMLButtonElement>) => {
        const currentTarget: HTMLButtonElement = event.currentTarget;
        let counterValue;
        if (currentTarget.id === INCREASE) {
            counterValue = counter +1;
        } else {
            counterValue = Math.max(counter - 1, 0)
        }
        setCounter(counterValue);
    }
    return (
        <div className="counter">
            <button
                id={DECREASE}
                className="counter__button"
                onClick={(event) => handleCounterClick(event)}
            >
                <MinusIcon color="currentColor" />
            </button>
            <span>{counter}</span>
            <button
                id={INCREASE}
                className="counter__button"
                onClick={(event) => handleCounterClick(event)}
            >
                <PlusIcon color="currentColor" />
            </button>
        </div>
    )
}