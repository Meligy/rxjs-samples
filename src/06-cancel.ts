import "rxjs/Rx";
import {Observable} from "rxjs/Rx";


const interval$ = Observable.create(observer => {

    const intervalId = setInterval(_ => {
        const time =
            new Date().toLocaleTimeString();
        observer.next(time);
    }, 1000);

    return _ => clearInterval(intervalId);
});

const subscription = interval$.subscribe(console.log);


setTimeout(_ => subscription.unsubscribe(), 5000);