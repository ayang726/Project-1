
window.onload = newsDisplay();

function newsDisplay() {
    news();
};

// Function to run when the window is loaded
function news() {
    var api_key = "b7864e77cbca46e68dae6627855def48";
    var q = "autism";
    var date = "2019-01-01";
    var sort = "relevancy";
    var lang = "en";
    var page = "20";

    var queryURL = "https://newsapi.org/v2/everything?q=" + q + "&from" + date + "&sortBy=" + sort + "&apiKey=" + api_key + "&language=" + lang + "&pagesize=" + page;

    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "json"
    }).then(function (response) {
        for (var i = 0; i < response.articles.length; i++) {
            console.log(response.articles.length);
            var displaySourceTitle = response.articles[i].title;
            var displaySourceSite = response.articles[i].url
            var displayContent = response.articles[i].content
            //var displaySourceSiteImg = response.articles[i].urlToImage;

            var newRow = $("<li>").append(
                $("<li>").html("Title: " + displaySourceTitle),
                $("<li>").html("Source: " + displaySourceSite),
                $("<li>").html("Content: " + displayContent)
            );
            $("#article").append(newRow).append('&nbsp;');
        };
    });
};