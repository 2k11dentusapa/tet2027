 function Eventsadd(g, q, w) {
     g.addEventListener(q, w)
 }

 function getIdsElement(h) {
     return document.getElementById(h)
 }

 function ScriptJava() {
     const timeCurrent = new Date();
     const timeTet = new Date("2027-02-06 00:00:00");
     const timeRemaining = timeTet - timeCurrent;
     const ngay = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
     const gio = Math.floor(timeRemaining / (1000 * 60 * 60) % 24);
     const phut = Math.floor(timeRemaining / (1000 * 60) % 60);
     const giay = Math.floor(timeRemaining / (1000) % 60);
     getIdsElement("Js1").innerText = `${ngay}`;
     getIdsElement("Js2").innerText = `${gio}`;
     getIdsElement("Js3").innerText = `${phut}`;
     getIdsElement("Js4").innerText = `${giay}`;
 }
 getIdsElement("Js1").innerText = `${0}`;
     getIdsElement("Js2").innerText = `${0}`;
     getIdsElement("Js3").innerText = `${0}`;
     getIdsElement("Js4").innerText = `${0}`;
 document.querySelectorAll("#X").forEach(h => {
     const dx = h.style;
     h.addEventListener("mouseover", function() {
         dx.transform = "rotate(3deg) scale(1.04)";
         dx.filter = "brightness(1.01)";
         dx.transition = "transform 0.35s";
         dx.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.32)";
     });
     h.addEventListener("mouseout", function() {
         dx.transform = "rotate(0deg) scale(1.00)";
         dx.filter = "brightness(1.00)";
         dx.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
     });
 });
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
 document.addEventListener("keydown", function(e) {
     if (e.ctrlKey && e.key === "c") {
         e.preventDefault();
     }
 });
 document.addEventListener("contextmenu", function(e) {
     e.preventDefault();
 });
