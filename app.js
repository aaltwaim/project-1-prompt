//this is Java Script file project tic tac toe
$(document).ready(function () {


    // change the color of the box when the user hover with the mouse.

    let counter = 1;
    let boolean = true;
    let xWinner = 0;
    let oWinner = 0;
    let tie = 0;
    // varibles

    if ((localStorage.getItem('itemX')) || (localStorage.getItem('itemO')) || (localStorage.getItem('itemTie'))) {
        xWinner = JSON.parse(localStorage.getItem('itemX'))
        $(".xWins").text(xWinner);
        oWinner = JSON.parse(localStorage.getItem('itemO'))
        $(".oWins").text(oWinner);
        tie = JSON.parse(localStorage.getItem('itemTie'))
        $(".tie").text(tie);
        //to get the value of the game info which is stored in the local storage even if the page refresh.
    } else {
        xWinner = 0
        oWinner = 0;
        tie = 0;

    }
    function winnerCheck() {
        if (counter >= 3) {
            if ((theGame() != -1) && (theGame() != "")) {
                if (theGame() == "X") {
                    alert("X Player Wins");
                    xWinner = xWinner + 1;
                    $(".xWins").text(xWinner);
                    $(".box").empty();
                    counter = 1;
                    $(".playerName").text("X");
                    localStorage.setItem('itemX', JSON.stringify(xWinner))
                    const dataX = JSON.parse(localStorage.getItem('itemX'))
                    return true;
                    // check the function theGame() if X player is a winner
                }
                else if (theGame() == "O") {
                    alert("O Players Wins");
                    oWinner = oWinner + 1;
                    $(".oWins").text(oWinner);
                    $(".box").empty();
                    counter = 1;
                    localStorage.setItem('itemO', JSON.stringify(oWinner))
                    const dataO = JSON.parse(localStorage.getItem('itemO'))
                    return true;
                    // check the function theGame() if O player is a winner
                }

                boolean = false;
            }
            else if (counter === 10) {
                alert("It is tie");
                tie = tie + 1;
                $(".tie").text(tie)
                $(".box").empty();
                counter = 1;
                $(".playerName").text("X");
                localStorage.setItem('itemTie', JSON.stringify(tie))
                const dataTie = JSON.parse(localStorage.getItem('itemTie'))

                return true
                //check the function theGame() if it is tie.

            }
        }
    }


    function onePlayer() {

        $(".box").click(function () {



            if ($(this).text() == "" && boolean) {
                counter = 2;
                if ((counter % 2) == 0) {
                    $(this).append("X");

                    for (let i = 0; i < 10; i++) {
                        let rondomO = "#input" + Math.floor((Math.random() * 9) + 1);
                        console.log(rondomO)

                        if ($(rondomO).text() == "") {
                            $(rondomO).append("O");
                            break;

                        }
                    }

                }
                counter = counter + 2;
                winnerCheck();

            }

            // if($(".twoPlayer").click(twoPlayer)){
            // location.reload();
            // }

        });
    }

    $(".onePlayer").click(onePlayer)
    function twoPlayer() {

        $(".box").click(function () {
            if ($(this).text() == "" && boolean) {
                if ((counter % 2) == 1) {
                    $(this).append("X");
                    $(".playerName").text("O")
                    // adding X and changing the turn to O player
                }
                else {
                    $(this).append("O");
                    $(".playerName").text("X")
                    //adding O and changing the turn to X player
                }
                counter++;
                winnerCheck();
            }
        });
    }

    $(".twoPlayer").click(twoPlayer)
    // }

    function theGame() {
        //assigning a new veribale to each box in the container
        let box1 = $(".box:nth-child(1)").text();
        let box2 = $(".box:nth-child(2)").text();
        let box3 = $(".box:nth-child(3)").text();
        let box4 = $(".box:nth-child(4)").text();
        let box5 = $(".box:nth-child(5)").text();
        let box6 = $(".box:nth-child(6)").text();
        let box7 = $(".box:nth-child(7)").text();
        let box8 = $(".box:nth-child(8)").text();
        let box9 = $(".box:nth-child(9)").text();
        //variable text for each box


        if ((box1 == box2) && (box2 == box3)) {
            return box3;
        } else if ((box4 == box5) && (box5 == box6)) {
            return box6;
        } else if ((box7 == box8) && (box8 == box9)) {
            return box9;
        } else if ((box1 == box4) && (box4 == box7)) {
            return box7;
        } else if ((box2 == box5) && (box5 == box8)) {
            return box8;
        } else if ((box3 == box6) && (box6 == box9)) {
            return box9;
        } else if ((box1 == box5) && (box5 == box9)) {
            return box9;
        } else if ((box3 == box5) && (box5 == box7)) {
            return box7;
        }
        return -1;
        // condition for to check for a winner

    }
    function reset() {
        localStorage.clear();
    }
    $(".clearButton").click(reset)
    // to clear the value stored in the local storage



    // dark and light theme is Usman's code from the event class
    const changeToDarkTheme = function () {
        $('body').css({
            'background': 'black',
            'color': 'white',
        })
        $('.box').css({
            'background': 'black',
            'color': 'white',
            'border-color': 'white',

        });
        $(".box").hover(function () {
            $(this).css("background-color", "gray");
        }, function () {
            $(this).css("background-color", "black");
        });

    }
    $('.dark').on('click', changeToDarkTheme)

    const changeToLightTheme = function () {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        $('.box').css({
            'border-color': 'black',
            'background': 'white',
            'color': 'black',

        })

        $(".box").hover(function () {
            $(this).css("background-color", "gray");
        }, function () {
            $(this).css("background-color", "white");
        });
    }
    $('.light').on('click', changeToLightTheme)






});