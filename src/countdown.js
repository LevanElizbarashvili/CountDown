import {useEffect, useState} from "react";
import {Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


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
        if(active && seconds === 0){
            setActive(!active)
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
        <Container className="d-flex align-items-center justify-content-center vh-100" style={{fontSize:40}}>
            <div className="m-2">Timer</div>
        <div className="">{convertSeconds(seconds)}</div>
        <Button variant="primary" className="m-2" onClick={toggle}>Start/Pause</Button>
        <Button variant="secondary" className="" onClick={reset}>Reset</Button>
        </Container>
    )

}