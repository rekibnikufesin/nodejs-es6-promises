'use strict';

let one = (opts) => {
    return new Promise(
        (resolve) => {
            setTimeout( () => {
                console.log(opts);
                resolve(opts);
            }, 300);
        }
    );
};

let two = (opts) => {
    return new Promise(
        (resolve, reject) => {
            if(opts === 1) {
                reject('Found an error');
            } else {
                setTimeout( () => {
                    opts++;
                    console.log(opts);
                    resolve(opts);
                }, 500);
            }
        }
    );
};

let three = (opts) => {
    return new Promise(
        (resolve) => {
            setTimeout( () => {
                opts++;
                console.log(opts);
                resolve(opts);
            }, 100);
        }
    );
};

let four = (opts) => {
    return new Promise(
        (resolve) => {
            setTimeout( () => {
                opts++;
                console.log(opts);
                resolve(opts);
            }, 200);
        }
    );
};

one(1)
.then(two)
.then(three)
.then(four)
.catch(err => {
    console.log(err);
});