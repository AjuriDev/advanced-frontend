import {FC, useState} from "react";

import {joinClassNames} from "../../utils";

import classes from './Counter.module.scss'

const Counter: FC = () => {
    const [count, setCount] = useState(0);

    const handleCountIncrease = () => {
        setCount(count + 1);
    };

    return (
        <div className={classes.count}>
            <h1>{count}</h1>
            <button className={joinClassNames(classes.count__button, {[classes.count__button_accent]: true})} onClick={handleCountIncrease}>Increase</button>
        </div>
    );
};

export default Counter;