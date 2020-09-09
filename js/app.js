//can change the name of the class if needed
class BoredApi {
    //filled when the ajax call is finished
    content = ""

    // function for calling the API
    getActivity() {
        //ajax code to call the API and change the screen
        let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let randomActivity = JSON.parse(this.responseText);
                document.getElementById("boredContent").innerHTML = randomActivity.activity;
                this.content = randomActivity.activity;
            } else if (this.readyState != 4) {
                document.getElementById("boredContent").innerHTML = "Loading...";
            } else {
                document.getElementById("boredContent").innerHTML = "OOPS, SOMETHING IS WRONG!";
            }

        }
        ajax.open("GET", "http://www.boredapi.com/api/activity/", true);
        ajax.send();
    }
}

function act() {
    bored.getActivity();
}

let bored = new BoredApi();
//this needs to be a button that generated an activity
document.getElementById("button").addEventListener("click", act);


//     //bonus stuff

//     getGroupActivity() {
//         //ajax code for group activities to the API
//http://www.boredapi.com/api/activity?participants=4

//     }

//     getFreeActivity() {
//         //ajax code for free activities to the API

//     }

//     getRecreationalActivity() {
//         //ajax code for recreational activities to the API
//     }
// }