import React, { useEffect, useRef, useState } from "react";
import { interval, Observable } from "rxjs";
import styles from "./Timer.module.css";

const Timer = (props) => {

    const time = new Date(timeSec).toISOString().slice(11, 19);
    const [timeSec, setTimeSec] = useState(0);
    let clickTimeot = null;

    const subscriber = useRef();
    const timer = new Observable((observer) => {
        interval(1000)
            .subscribe((val) => {
                observer.next(val)
            })
    })

    const onStatusRun = () => {
        props.setStatus("run");
    }
    const onStatusStop = () => {
        props.setStatus("stop");
        setTimeSec(0);
    }
    const onStatusReset = () => {
        setTimeSec(0);
        props.setStatus("run");
    }
    const doubleClick = () => {
        if (!!clickTimeot) {
            clearTimeout(clickTimeot);
            props.setStatus("stop");
            clickTimeot = null;
        } else {
            clickTimeot = setTimeout(() => {
                clickTimeot = null;
            }, 300)
        }
    }

    useEffect(() => {
        if (props.status === "run") {
            subscriber.current = timer.subscribe({
                next(sec) {
                    setTimeSec(sec => sec + 1000);
                    
                }
            })
        }
        if (props.status === "stop") {
            if (!!subscriber.current) {
                subscriber.current.unsubscribe();
            }
        }
    }, [props.status]);

    return (
        <div className={styles.timer}>
            <div className={styles.innerElement}>
                <button onClick={onStatusRun} className={styles.btn}>
                    Start
                </button>
            </div>
            <div className={styles.innerElement}>
                <button onClick={onStatusStop} className={styles.btn}>
                    Stop
                </button>
            </div>
            <div className={styles.innerElement}>
                <span> {time} </span>
            </div>
            <div className={styles.innerElement}>
                <button onClick={onStatusReset} className={styles.btn}>
                    Reset
                </button>
            </div>
            <div className={styles.innerElement}>
                <button onClick={doubleClick} className={styles.btn}>
                    Wait
                </button>
            </div>
        </div>
    )
};

export default Timer;