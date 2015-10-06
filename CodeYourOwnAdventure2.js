//greeting   //FIXED 9/30/15
var greeting = prompt("What is your name?");
if (greeting !== null) {
    alert("Hello " + greeting + ", are you ready to begin?");
}
var two = prompt("If your ready, then take this pill to start your adventure (Take Pill)").toUpperCase();

//inventory  //removed variable 'var door = 0'
var hasKey = 0;
var ladder = 0;
var janitorKey = 0;
var string = 0;
var visitHallway = 0;
var magnet = 0;
var ventKey = 0;

//ventKey function

function ventKeyChances() {
    var tossing = true;
    var points = 0;
    var ventKey = 0;

    while (tossing === true) {
        if (points < 1) {
            var toss = prompt("Do you toss the magnet towards the key? (Yes/No)").toUpperCase();

            if (toss === "YES") {
                var points2 = Math.floor(Math.random() * 2);
                if (points2 === 1) {
                    points = 1;
                }
                if (points2 === 0) {
                    alert("You missed the key.");
                }
            }

            if (toss == "NO") {
                alert("You decide to not toss the magnet.");
                break;
            }
        } else {
            alert("The key got stuck on the Magnet! You pull it back to you.");
            tossing = false;
            ventKey = 1;
        }
    }
    return ventKey;
}

//necessary to run Main loop
var inRoom = false;

function enterRoom() {
    inRoom = true;
}

function enterRoom2() {
    inRoom2 = true;
}

function enterRoom3() {
    inRoom3 = true;
}

function leaveRoom() {
    inRoom = false;
}

function leaveRoom2() {
    inRoom2 = false;
}

function leaveRoom3() {
    inRoom3 = false;
}

//start of game        //FIXED 9/30/15
if (two === "TAKE PILL") {
    alert("After you take the pill, you imediately become drowsy and everything blurrs. You're out before you hit the ground.");
    alert("You open your eyes and wake up in a stiff bed.");
    alert("As you look around you see that you are in a hospital room. Your vitals beap at a steady rate on a machine next to you.");
    alert("As you get out of the bed you become restricted when you notice an IV in your arm.");
    alert("On the IV is a sticky note that read 'Time is running out. Better hurry!' You probably shouldn't take the IV out.");
    alert("You take a closer look at your surroundings to find a desk with a computer on top, a set of drawers and cabinets, and door that leads out of the room.");
    enterRoom();

    //Main loop activated when inRoom = true  //removed win message
    while (inRoom === true) {
        search = function(answer) {
            if (answer == "INSPECT CABINETS" && hasKey != 1) {
                alert("After searching all the cabinets and drawers you only see a key, and a scrap of paper with the numbers 38495 on it.");
                var question = function(answer) {
                    if (answer === "YES") {
                        hasKey = 1;
                        alert("Added Key to inventory.");
                    } else if (answer === "NO") {
                        alert("You leave the materials alone.");
                    }
                };
                question(prompt("Do you want to take the key? (Yes/No)").toUpperCase());
            } else if (answer === "GET ON COMPUTER") {
                alert("You get on the computer ");
                var passcode = (prompt("Computer requires a passcode to continue:"));
                if (passcode == "38495") {
                    alert("You got in!");
                    alert("A message appears on the computer...");
                    alert("Welcome my hospital. If you want to live or figure out why this is happening, get out of this place. Be warned however, this will be no easy task.");
                } else {
                    alert("Wrong Password");
                }
            } else if (answer === "INSPECT DESK" && hasKey === 1) {
                alert("You already looked at this. There is nothing else of importance, except for that paper with the numbers 38495");
            } else if (answer === "OPEN DOOR" && hasKey === 1) {
                alert("The door opened!");
                leaveRoom();

            } else if (answer === "OPEN DOOR" && hasKey < 1) {
                alert("The door is locked, you need a key.");
            }
        };
        search(prompt("What do you want to do? (Inspect Cabinets/Open Door/Get On Computer)").toUpperCase());
    }
    alert("You made it out of the room! However this victory is short lived because you now find yourself in an empty hallway with two doors accross from you and a set of double doors to your right. There is nothing at the end of the hallway to your left.");

    enterRoom2();
    while (inRoom2 === true) {
        roomTwo = function(answer) {
            if (answer === "INSPECT DOOR 1") {
                alert("The door is locked and there is no label.");
            } else if (answer === "INSPECT DOOR 2" && janitorKey < 1) {
                alert("The door is locked, but you see a label on the wall. This is the Janitors closet.");
            } else if (answer === "INSPECT DOOR 2" && janitorKey == 1 && ladder === 1) {
                alert("You already looked in here.");
            } else if (answer === "INSPECT DOOR 2" && janitorKey == 1 && ladder === 0) {
                alert("You use the key to unlock the door. You open it to find a shallow room filled with common cleaning materials, but a ladder in the back corner stands out to you and on one of the steps is a little bar magnet.");
                var wantLadder = function(answer) {
                    if (answer === "YES") {
                        ladder = 1;
                        magnet = 1;
                        alert("Ladder and magnet added to inventory.");
                        alert("Ladder added to inventory.");
                    } else if (answer === "NO") {
                        alert("You left the ladder alone");
                    }
                };
                wantLadder(prompt("Want to take the ladder and the magnet? (Yes/No)").toUpperCase());
            } else if (answer === "INSPECT DOUBLE DOORS") {
                alert("The door was unlocked.");
                openDoubleDoors = function(answer) {
                    if (answer === "YES") {
                        alert("The doors lead to a lobby area with some chairs and a reception desk. There is another set of double doors on the left side of the room. You then notice a faint cold breeze above you.");
                        enterRoom3();
                        while (inRoom3 === true) {
                            lobbyDirectory = function(answer) {
                                if (answer === "INSPECT CHAIRS") {
                                    alert("You make your way to the series of chairs near the double doors. There are just standard waiting room objects like magazines, pamplets, and other useless reading material. However, you do see a small string at the legs of one of the chairs. It could be useful.");
                                    takeString = function(answer) {
                                        if (answer === "YES") {
                                            alert("String added to inventory.");
                                            string = 1;
                                        } else if (answer === "NO") {
                                            alert("You choose to leave the string alone.");
                                        }
                                    };
                                    takeString(prompt("Do you want to take the string? (Yes/No)").toUpperCase());
                                }
                                if (answer === "INSPECT RECEPTION DESK") {
                                    if(janitorKey === 1){
                                        alert("You already searched here. The only thing of use was that key to the Janitor's closet.");
                                    }
                                    if (janitorKey === 0) {
                                        alert("You head over to the the reception desk. On the desk is a computer, some everyday office materials, and next to the keyboard lays a key.");
                                        takeJanitor = function(answer) {
                                            if (answer === "YES") {
                                                janitorKey = 1;
                                                alert("You found the key to the janitors closet and added it to your inventory.");
                                            } else if (answer === "NO") {
                                                alert("You choose not to grab the key. Who cares what's in that janitor room.");
                                            }
                                        };
                                        takeJanitor(prompt("Want to grab the key? (Yes/No)").toUpperCase());
                                    }

                                }
                                if (answer === "INSPECT BARRED DOUBLE DOORS" && ventKey == 1) {
                                    alert("The key you found fits perfectly in the lock of the barred door.");
                                    escape = function(answer) {
                                        if (answer == "YES") {
                                            alert("You open the door and take your first step into freedom. You are free for now... but there is more coming soon!.");
                                            throw 'End Of Game';
                                        }
                                        if (answer == "NO") {
                                            alert("You decide that the outside world is too unpredictable. You stay inside the only safe place you know of, the hospital.");
                                        }
                                    };
                                    escape(prompt("Do you want to open the door and exit the hospital? (Yes/No)").toUpperCase());
                                }
                                if (answer === "INSPECT BARRED DOUBLE DOORS" && ventKey == 0) {
                                    alert("The door appears to be locked but you see light coming from the crack underneath the door.");
                                }
                                if (answer == "GO BACK TO HALLWAY") {
                                    visitHallway = 1;
                                    leaveRoom3();
                                }
                                if (answer == "TRY TO FIGURE OUT WHERE THE COLD BREEZE IS COMING FROM") {
                                    alert("You look up to the source of the breeze and notice that it comes from an open vent. The vent is too high to reach.");
                                    if (ladder === 1) {
                                        alert("You could probably use the ladder to get up and look closer at the vent!");
                                        useLadder = function(answer) {
                                            if (answer == "YES") {
                                                alert("You set up the ladder and climb up just high enough to peek into the vent. A couple feet inside the vent you notice a key, but it is too far to reach and if you try to get it you might fall.");
                                                if (magnet == 1 && string === 0) {
                                                    alert("You could probably use your magnet and attach the key to it, but its too far and you would have to toss it. If only there was some way to get the magnet back after it caught the key.");
                                                } else if (magnet == 1 && string === 1) {
                                                    //code to combine magnet and string and then throw to get key //function on bottom
                                                    alert("You can use your magnet and string to make a lasso type tool to retrieve the key!");
                                                    retrieve = function(answer) {
                                                        if (answer === "YES") {
                                                            alert("You made the tool and your ready to use it.");
                                                            ventKeyChances();
                                                            ventKey = 1;
                                                        } else if (answer === "NO") {
                                                            alert("You choose to keep the two objects separate.");
                                                        }
                                                    };
                                                    retrieve(prompt("Want to make the tool? (Yes/No)").toUpperCase());
                                                }
                                            } else if (answer === "NO") {
                                                alert("You decide to save the ladder for another day and continue looking around the lobby of the hospital.");
                                            }
                                        };
                                        useLadder(prompt("Want to use the ladder? (Yes/No)").toUpperCase());
                                    }
                                }
                            };
                            lobbyDirectory(prompt("What do you want to do? (Go Back To Hallway/Inspect Chairs/Inspect Reception Desk/Try To Figure Out Where The Cold Breeze Is Coming From/ Inspect Barred Double Doors)").toUpperCase());
                        }
                    }
                };
                openDoubleDoors(prompt("Want to go in? (Yes/No)").toUpperCase());
            }
        };
        roomTwo(prompt("What do you want to do? (Inspect Door 1, Inspect Door 2, Inspect Double Doors)").toUpperCase());

    }
} else if (two !== "TAKE PILL") {
    alert("You don't take the pill. You lose."); //add text
}

//Daucen, Calvin, and I worked together on this.//