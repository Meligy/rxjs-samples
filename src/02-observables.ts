import "rxjs/Rx";
import {Observable} from "rxjs";

Observable.of([1, 2, 3])
    .subscribe(number => console.log(number));

// [1, 2, 3]