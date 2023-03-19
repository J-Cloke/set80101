function init() {
    document.title = "Hello Napier"

    var button = document.createElement("Button");
    button.innerHTML = "Hello";
    button.id = "hello_btn";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);

    document.getElementById('hello_btn').onclick = function(){
        var text_node = document.createTextNode('napier!');
        document.body.appendChild(text_node);
    };
};
window.onload=init;