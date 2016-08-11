import { Observable } from "rxjs";

const smallNumbers$ =
    Observable.interval(500)
        .take(5);

const largeNumbers$ = Observable.range(101, 10);

const numberRange$ = smallNumbers$.concat(largeNumbers$);

const even$ = numberRange$.filter(num => (num % 2 == 0));

even$.subscribe(num => console.log(num));