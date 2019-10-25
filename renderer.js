Mousetrap.bind('shift+q', function() {
    window.closeCurrentWindow();
});
document.body.addEventListener('keydown', function(e) {
    e.preventDefault();
    document.getElementById("key").innerHTML = e.key;
    return false;
});
