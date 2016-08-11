import "rxjs/Rx";
import {Observable} from "rxjs/Rx";

const interval$ = Observable.create(observer => {

    setInterval(_ => {
        const time =
            new Date().toLocaleTimeString();

        observer.next(time);

    }, 1000);

});

const subscription = interval$.subscribe(console.log);


//setTimeout(_ => subscription.unsubscribe(), 5000);