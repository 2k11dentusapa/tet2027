 function Eventsadd(g, q, w) {
     g.addEventListener(q, w)
 }

 function getIdsElement(h) {
     return document.getElementById(h)
 }
 document.querySelectorAll("#list").forEach(n => {
     const dx = n.style;
     n.addEventListener("mouseover", function() {
         dx.transform = "scale(1.07)";
         dx.filter = "brightness(1.1)";
         dx.transition = "transform 0.35s";
     });
     n.addEventListener("mouseout", function() {
         dx.transform = "rotate(0deg) scale(1.00)";
         dx.filter = "brightness(1.05)";
     });
 });
