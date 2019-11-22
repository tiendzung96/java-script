function adjustRating(value) {
    let engagementLevel;

    if (value === "0"){
        engagementLevel = "0 - 25%";
    } else if (value === "1"){
        engagementLevel = "25 - 50%";
    } else if (value === "2"){
        engagementLevel = "50 - 80%";
    } else{
        engagementLevel = "80 - 100%";
    }
    document.getElementById("engagement-level-value").innerHTML = engagementLevel;
}