import {MouseEvent} from "react";

import {MinusIcon} from "../svgs/MinusIcon";
import {PlusIcon} from "../svgs/PlusIcon";


import "./Counter.scss";

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
                <span className="visually-hidden-title">{`${DECREASE} Button`}</span>
                <MinusIcon />
            </button>
            <span>{counter}</span>
            <button
                id={INCREASE}
                className="counter__button"
                onClick={(event) => handleCounterClick(event)}
            >
                <span className="visually-hidden-title">{`${INCREASE} Button`}</span>
                <PlusIcon/>
            </button>
        </div>
    )
}