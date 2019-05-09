document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
    news();
});



// Function to run when the window is loaded
function news() {
    var api_key = "b7864e77cbca46e68dae6627855def48";
    var q = "autism spectrum";
    var date = "1990-01-01";
    var sort = "relevancy";
    var lang = "en";
    var page = "8";
    var queryURL = "https://newsapi.org/v2/everything?q=" + q + "&from" + date + "&sortBy=" + sort + "&apiKey=" + api_key + "&language=" + lang + "&pagesize=" + page;

    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "json"
    }).then(function (response) {
        for (var i = 0; i < response.articles.length; i++) {
            // console.log(response.articles.length);
            var displaySourceTitle = response.articles[i].title;
            var displaySourceSite = response.articles[i].url
            var displayContent = response.articles[i].content
            //var displaySourceSiteImg = response.articles[i].urlToImage;

            var html = `
            <li>
            <div class="collapsible-header"><i class="material-icons">filter_drama</i>${displaySourceTitle}</div>
            <div class="collapsible-body"><a href="${displaySourceSite}">${displayContent}</a></div>
            </li>
        `
            $(".collapsible").append(html);
        };

    });
};