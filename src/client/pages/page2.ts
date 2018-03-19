/* page2.ts */
import $ = require('jquery');

function asyncReady(): Promise<null> {
    return new Promise(async (resolve, reject) => {
        setTimeout(() => {
            console.log('ready!');
            resolve();
        }, 0);
    });
}

export function dummyFunction() {
    let a = 1 + 1;
}

$(async () => {
    await asyncReady();
    console.log(process.env);
});