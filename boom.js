(function () {
    "use strict";

    document.onmousedown = handleMouseMove;
    function handleMouseMove(event) {
        var dot, eventDoc, doc, body;
        event = event || window.event; // IE-ism
        // If pageX/Y aren't available and clientX/Y
        // are, calculate pageX/Y - logic taken from jQuery
        // Calculate pageX/Y if missing and clientX/Y available
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;
            event.pageX = event.clientX +
                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
                (doc && doc.scrollTop || body && body.scrollTop || 0) -
                (doc && doc.clientTop || body && body.clientTop || 0);
        }

        // Add an explosion to follow the cursor
        explosion = document.createElement('img');
        explosion.src = "https://i.gifer.com/origin/d7/d7ac4f38b77abe73165d85edf2cbdb9e_w200.gif";
        explosion.style.position = "absolute";
        explosion.style.zIndex = 99999;
        explosion.style.left = event.pageX - 100 + "px";
        explosion.style.top = event.pageY - 100 + "px";
        document.body.appendChild(explosion);
        console.log("boom");
        setTimeout(function () {
            explosion.remove();
        }, 1200);
    }
})();