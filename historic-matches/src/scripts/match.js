function readJsonData (file) {
    $.getJSON(file, function(data) {
        dataString = JSON.stringify(data);
        console.log(dataString);
    });
}