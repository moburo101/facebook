var database = [
    {
        username: "moburo101",
        password: "moburo@14"
    },
    {
        username: "sidufineboy",
        password: "odeesidu00"
    },
    {
        username: "neogram",
        password: "2897"
    }
];

var newsfeed = [
    {
        username: "kenny",
        timeline: "I hate coding"
    },
    {
        username: "john",
        timeline: "Gonna be rich soon lol"
    },
    {
        username: "sidu",
        timeline: "life's shit"
    }
];

function isUservalid(username, password) {
    for (var i=0; i < database.length; i++){
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false
}

function signIn(username, password) {
    if (isUservalid(username, password)) {
        console.log(newsfeed);
    }
    else{
        alert("Wrong username and password")
    }    
}
var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");


signIn(userNamePrompt, passwordPrompt);