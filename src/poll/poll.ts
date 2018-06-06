export function poll(func: Function, timeout: number, interval: number): Promise<any> {
    const endTime: Number = Number(new Date()) + (timeout || 2000);
    interval = interval || 100;

    const checkCondition = function(resolve: Function, reject: Function) {
        // If the condition is met, we're done! 
        let result: Function = func();
        if(result) {
            resolve(result);
        }
        // If the condition isn't met but the timeout hasn't elapsed, go again
        else if (Number(new Date()) < endTime) {
            setTimeout(checkCondition, interval, resolve, reject);
        }
        // Didn't match and too much time, reject!
        else {
            reject(new Error('timed out for ' + func + ': ' + arguments));
        }

    };

    return new Promise<any>(checkCondition);
}