const getIdsElement = document.getElementById, getClassElements = document.getElementsByClassName;
setInterval(() => {
    const timeRemaining = (new Date("2027-02-06 00:00:00") - (new Date());
    if (timeRemaining) {
        const ngay = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
              gio = Math.floor(timeRemaining / (1000 * 60 * 60) % 24),
              phut = Math.floor(timeRemaining / (1000 * 60) % 60),
              giay = Math.floor(timeRemaining / (1000) % 60),
              f = [ngay, gio, phut, giay];
        for ( let i = 1; i < 5; i++) {
            getIdsElement(`Js${i}`).innerHTML = f[i];
        }
    } else {
        for (let i = 1; i < 5; i++) {
            getIdsElement(`Js${i}`).innerHTML = 0;
        }
    }
}, 1000);
 getClassElements('csscount').forEach(h => {
     const g = h.style;
     h.addEventListener("mouseover", function() {
         g.transform = "rotate(3deg) scale(1.04)";
         g.filter = "brightness(1.01)";
         g.transition = "transform 0.35s";
         g.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.32)";

     });
     h.addEventListener("mouseout", function() {
         g.transform = "rotate(0deg) scale(1.00)";
         g.filter = "brightness(1.00)";
         g.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
     });
 });
 getClassElements('.btn').forEach(n => {
     const g = n.style;
     n.addEventListener("mouseover", function() {
         g.transform = "scale(1.07)";
         g.filter = "brightness(1.1)";
         g.transition = "transform 0.35s";
     });
     n.addEventListener("mouseout", function() {
         g.transform = "rotate(0deg) scale(1.00)";
         g.filter = "brightness(1.05)";
     });
 });
