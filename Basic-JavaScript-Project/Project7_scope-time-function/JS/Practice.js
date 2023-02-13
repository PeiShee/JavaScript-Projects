function get_Data() {
    if (new Data().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}