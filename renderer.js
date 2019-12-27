Mousetrap.bind('ctrl+shift+q', function() {
    window.closeCurrentWindow();
});

colorMap = {0: "red", 1: "orange", 2: "gold", 3: "green", 4: "blue", 5: "indigo", 6: "violet"}

document.body.addEventListener('keydown', function(e) {
    e.preventDefault();
    if (e.key.length < 2){
        charCode = e.key.charCodeAt(0);
        document.getElementById("key").innerHTML = e.key;
        color = colorMap[charCode % 7];
        document.getElementById("key").style.color = color;
    } else { 
    	// Possibly handle non-character-keys differently.
    }
    return false;
});
