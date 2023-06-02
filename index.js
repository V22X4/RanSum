var wrong = 1;

function restart() {

    document.getElementById("score-title").innerHTML = "Score";
    document.getElementById("random-number").innerHTML = "Random Number: ";
    document.getElementById("current-number").innerHTML = "Current Sum: 0";

    var content = document.getElementById("content");
    content.style.filter = "blur(5px)";

    document.addEventListener('keydown', removeBlur);
    wrong = 0;
}

function randomNum() {

    let x = Math.floor((Math.random() * 100) + 1);
    document.getElementById("random-number").innerHTML = "Random Number: " + x.toString();
    document.getElementById('submission').value = '';

}


function removeBlur(event) {

    if(event.keyCode != 13 || wrong) {

        var content = document.getElementById("content");
        var score = document.getElementById("score-title");

        content.style.filter = "blur(0px)";
        score.innerHTML = "Score: 0";

        randomNum();

        document.removeEventListener('keydown', removeBlur);
    }
}

document.addEventListener('keydown', removeBlur);

var numberInput = document.getElementById("submission");

numberInput.addEventListener('keydown', function(event) {

    if(event.keyCode === 13) {

        var submission = numberInput.value;
        
        if(submission === "") {
            restart();
        }
        else {

            var RandomNumx = parseInt(document.getElementById("random-number").innerHTML.slice(15));
            var currentSumx = parseInt(document.getElementById("current-number").innerHTML.slice(13));

            if(RandomNumx + currentSumx == submission) {
                
                var score = document.getElementById("score-title").innerHTML;

                var scorex = parseInt(score.slice(7));

                scorex = scorex + 1;
                currentSumx = RandomNumx + currentSumx;

                document.getElementById("score-title").innerHTML = "Score: " + scorex.toString();
                document.getElementById("current-number").innerHTML = "Current Sum: " + currentSumx.toString();
                document.getElementById('submission').value = '';
                
                randomNum();
            }
            else {
                wrong = 1;
                restart();
                document.getElementById('submission').blur();
            }
        }
    }
});


