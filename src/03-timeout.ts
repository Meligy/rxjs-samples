const promise =
    new Promise((resolve, reject) => {

        setTimeout(function() {
            const time =
                new Date().toLocaleTimeString();

            //Not rejecting

            resolve(time); // 1 call
        }, 1000)

    });

promise.then(console.log, console.error);
// 1 subscriber