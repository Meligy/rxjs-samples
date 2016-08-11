import "rxjs/Rx";
import { Observable, AsyncSubject } from "rxjs/Rx";
import * as fs from "fs";

interface Repository {
    name: string;
    html_url: string;
    has_wiki: boolean;
    language: string;
}

function readFile(fileName) {
    const subject = new AsyncSubject();

    fs.readFile(fileName, "utf8",  function handler(err, data) {
        if (err)
        {
            subject.error(err);
        } else {
            subject.next(data);
            subject.complete();
        }
    });

    return subject.asObservable();
}

const file$ = readFile( __dirname + "/08-oprators.json");

const repos$ =
    file$.switchMap((text : string) => {
        return JSON.parse(text) as Repository[];
    });

const tsRepos$ = repos$.filter(repo => repo.language == "TypeScript");

tsRepos$.subscribe((repo : Repository) => console.log(repo.name));

tsRepos$
    .count()
    .subscribe(n=> console.log(` -- ${n} repos found`));