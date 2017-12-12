var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var recommendations = JSON.parse(this.responseText);
        console.log(recommendations);
    }
};
xhttp.open("GET", "https://cse104.kraigh.com/recommendations?api_key=123xyz", true);
xhttp.send();
// Setting variables for form inputs (get from HTML form)
var name = "Some Name";
var text = "Some Text";
var api_key = "123abc";
// Initalize AJAX Request
var xhttp2 = new XMLHttpRequest();
// Response handler
xhttp2.onreadystatechange = function() {
    // Wait for readyState = 4
    if (this.readyState == 4 && this.status == 200) {
        // If this.status == 200, good reponse from server
        var recommendation = JSON.parse(this.responseText);
        console.log(recommendation.name);
        console.log(recommendation.text)
    } else if (this.readyState == 4) {
        // this.status !== 200, error from server
        console.log(this.responseText);
    }
};
xhttp2.open("POST", "https://cse104.kraigh.com/recommendations", true);
xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp2.send("api_key="+api_key+"&name="+name+"&text="+text);
