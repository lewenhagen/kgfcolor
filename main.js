(function() {
    let floorDiv = document.getElementsByClassName("main")[0];
    let pipeDiv = document.getElementsByClassName("pipe")[0];
    let mattamidDiv = document.getElementsByClassName("matta-mid")[0];
    let mattamainDiv = document.getElementsByClassName("matta")[0];

    let floorInput = document.getElementById("main");
    let pitMiddleInput = document.getElementById("matta-mid");
    let pitSidesInput = document.getElementById("sidor");
    let ansatsInput = document.getElementById("ansats");


    floorInput.addEventListener("input", function(event) {
        floorDiv.style.backgroundColor = "#" + event.target.value;
    });

    pitMiddleInput.addEventListener("input", function(event) {
        mattamidDiv.style.backgroundColor = "#" + event.target.value;
    });

    pitSidesInput.addEventListener("input", function(event) {
        mattamainDiv.style.backgroundColor = "#" + event.target.value;
    });

    ansatsInput.addEventListener("input", function(event) {
        pipeDiv.style.backgroundColor = "#" + event.target.value;
    });


})();
