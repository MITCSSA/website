var parseNews = function (data) {
  var headlinePattern = /<headline>([\s\S]+?)<\/headline>/g;
  var result = data.match(headlinePattern);
  var replaceTag = function (e) {
    e = e.replace("<headline>", "<li class='event sub_link'><a>");
    return e.replace("</headline>", "</a></li>");
  }
  var events = result.map(replaceTag).join("");
  $("#newsAndevents li:first").after(events);
  var newsPattern = /<news>([\s\S]+?)<\/news>/g;
  result = data.match(newsPattern);
  $("#newsAndevents .event").each(function(index) {
    $(this).click(function() {
      var e = result[index];
      e = e.replace("<news>", "<div class='event'>");
      e = e.replace("</news>", "</div>")
      $("#spot_text").html(e);      
    });
  });
}

var fetchNews = function (url) {
  $.ajax({
    url: url,
    success: function (data) {
      parseNews(data);
    }
  });
}

var onLoad = function () {
  fetchNews('http://cssa.mit.edu/forum/ssi.php?m=posts&a=topicposts&topic=35437&start=0&show=5&sort=DESC');
}

$(onLoad);
