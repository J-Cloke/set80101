/* function add_message() {
    document.getElementById("red_para").style.color = "blue";
}
*/

var current="red";

function color_changer() {

    if (current === "red")
        current = "blue";
    else if (current === "blue")
        current = "green";
    else if (current === "green")
        current="purple"
    else
        current = "red";
    
    document.getElementById("red_para").style.color = current;
}