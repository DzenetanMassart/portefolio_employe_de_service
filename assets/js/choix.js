function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "flex";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}
function openPage_arrow(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "flex";


}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

document.onkeydown = checkKey;

function checkKey(e) {
e = e || window.event;

    if (e.keyCode == '37') {
        openPage_arrow('prat', this, 'red');
        document.querySelectorAll(".tablink")[0].style.backgroundColor = "red";
    }
    else if (e.keyCode == '38') {
        openPage_arrow('meto', this, 'green');
        document.querySelectorAll(".tablink")[1].style.backgroundColor = "green";

    }
    else if (e.keyCode == '39') {
        openPage_arrow('theo', this, 'blue');
        document.querySelectorAll(".tablink")[2].style.backgroundColor = "blue";


    }}