

function newsDisplay() {
    news()
    console.log(newRow);
}

// Function to run when the button is clicked
function news() {
    var api_key = "b7864e77cbca46e68dae6627855def48";
    var q = "autism";
    var newRow = "";


    var queryURL = "https://newsapi.org/v2/everything?q=kids%autism&from=2019-04-30&sortBy=publishedAt&apiKey=b7864e77cbca46e68dae6627855def48&limit=3";

    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "json"
    }).then(function (response) {
        var displaySourceTitle = response.articles[2].title;
        var displaySourceName = response.articles[0].source.name;
        var displaySourceDesc = response.articles[3].description;
        var displaySourceSite = response.articles[4].url;

        var newRow = $("<tr>").append(
            $("<td>").html(displaySourceTitle),
            $("<td>").html(displaySourceDesc),
            $("<td>").html(displaySourceName),
            $("<td>").html(displaySourceSite)
        );
        console.log(newRow);

        //$("#article-table > tbody").append(newRow);

        $("#article").html("Source: " + displaySourceName + " Title: " + displaySourceTitle + "Description: " + displaySourceDesc + "Website: " + displaySourceSite);
    });
};