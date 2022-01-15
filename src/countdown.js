import {useEffect, useState} from "react";


export default function Countdown() {

    const [seconds, setSeconds] = useState(120);
    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive(!active);
    }

    const reset = () => {
        setSeconds(120)
    }

    useEffect(() => {
        let interval = null;
        if(active) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds -1)
            }, 1000)
        } else if(!active && seconds !== 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [active, seconds])

    function convertSeconds(s){
        let minutes = Math.floor(s/60);
        let seconds = Math.floor(s%60);
        if (minutes<10){minutes = '0' + minutes}
        if (seconds<10){seconds = '0' + seconds}
        return minutes + ':' +seconds;
    }

    return (
        <>
        <div>{convertSeconds(seconds)}</div>
        <button onClick={toggle}>Start/Pause</button>
        <button onClick={reset}>Reset</button>
        </>
    )

}