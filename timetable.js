(function (d) {
    if (d.location.host == 'admlu65.ust.hk') {
        var liTags = d.getElementsByTagName("li");
        for (let element of liTags) {
            if (element.hasAttribute("data-year")) element.setAttribute("data-year", (new Date()).getFullYear().slice(-2));
        }
        var aTags = d.getElementsByTagName("a");
        for (let element of aTags) {
            if (element.textContent == ((new Date()).getMonth() > 5 ? "Fall" : "Spring")) {
                element.removeAttribute("disabled");
                element.classList.add("selected");
                element.click();
                break;
            }
        }
    }
    else console.log("this bookmarklet is only applicable to the hkust timetable planner website");
})(document)