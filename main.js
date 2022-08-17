// (1) (INPUT) Runners age at registration
let age = 27;

// (2) (INPUT) Early or not by true (early) or false (late)
let adultEarly = false;


// Generates a random number from 0-999
let raceNumber = Math.floor(Math.random()*1000);

// (OUTPUT) Early Adult Runner
if (age >= 18 && adultEarly === true ) {
    console.log ( `Your race is at 9:30am and race number is ${raceNumber + 1000}`); 
}

// (OUTPUT)for Late Adult Runner
else if (age >= 18 && adultEarly !== true) {
    console.log ( `Your race is at 11:00am and your race number is ${raceNumber}`);
}

// (OUTPUT) Child Runner
else if (age < 18){
    console.log ( `Your race is at 12:30pm and your race number is ${raceNumber}`)
}
