import "rxjs/Rx";
import {Observable} from "rxjs";

const observable$ = new Observable(observer => {

    setTimeout(_ => {
        const time =
            new Date().toLocaleTimeString();

        // No error

        observer.next(time);
        // 1 next
    }, 1000);

});

observable$.subscribe(console.log, console.log);


//observable$.onErrorResumeNext().subscribe(console.log);
// 1 subscriber