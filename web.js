const $ = h => document.getElementById(h);
setInterval(() => {
    const remn = new Date("2027-02-06 00:00:00") - new Date();
    if (remn) {
        const f = [Math.floor(remn/(1000*60*60*24)),Math.floor(remn/(1000*60*60)%24),Math.floor(remn/(1000*60)%60),Math.floor(remn/(1000)%60)];
        for ( let i = 1; i < 5; i++) $(`Js${i}`).innerHTML = f[i-1];
    } else for (let i = 1; i < 5; i++) $(`Js${i}`).innerHTML = 0
}, 1000);
