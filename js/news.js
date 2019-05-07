

function newsDisplay() {
    news();

};

// Function to run when the button is clicked
function news() {
    var api_key = "b7864e77cbca46e68dae6627855def48";
    var q = "autism";
    var newRow = "";
    var date = "201-01-01";
    var sort = "publishedAt";
    //var category = "health";
    var lang = "en";
    var page = "20";



    var queryURL = "https://newsapi.org/v2/everything?q=" + q + "&from" + date + "&sortBy=" + sort + "&apiKey=" + api_key + "&language=" + lang + "&pagesize=" + page;

    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "json"
    }).then(function (response) {
        var displaySourceTitle = response.articles[2].title;
        //var displaySourceName = response.articles[0].source.name;
        //var displaySourceDesc = response.articles[3].description;
        var displaySourceSite = response.articles[4].url;

        var newRow = $("<tr>").append(
            $("<td>").html(displaySourceTitle),
            //$("<td>").html(displaySourceDesc),
            //$("<td>").html(displaySourceName),
            $("<td>").html(displaySourceSite)
        );


        //$("#article-table > tbody").append(newRow);

        $("#article").html(newRow);
    });
};