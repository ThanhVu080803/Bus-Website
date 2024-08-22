window.addEventListener ('load', function(){

    var nav = document.getElementById("navjs");
    var navMenu = document.getElementById("menujs");
    
    navMenu.onclick = function() {
        var isClosed = nav.style.overflow == "hidden"
        if (isClosed) {
            nav.style.overflow = "visible";
        }
        else {
            nav.style.overflow = "hidden";
        }
    }

})