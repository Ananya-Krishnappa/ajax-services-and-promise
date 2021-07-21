/**
 * Demonstrate Async
nature of JavaScript 
 */
function showTime() {
    const date = new Date();
    return date.getHours + "Hrs:" + date.getMinutes + "Mins:" + date.getSeconds + "Secs:";
}

function showSessionsExpire() {
    console.log("Activity-B: Your session expired at" + showTime());
}

console.log("Activity-A: Trigerring Acitivity B at " + showTime());
setTimeout(showSessionsExpire, 5000);
console.log("Activity-A: Trigerring Acitivity B at " + showTime() + "will execute after 5 seconds");