var parseNews = function (data) {
  var pattern = /<headline>([\s\S]+?)<\/headline>/g;
  var result = data.match(pattern);
  var replaceTag = function (e) {
    e = e.replace("<headline>", "<li class='sub_link'><a>");
    return e.replace("</headline>", "</a></li>");
  }
  var events = result.map(replaceTag).join("");
  $("#newsAndevents li:first").after(events);
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
  var data = fetchNews('http://cssa.mit.edu/forum/ssi.php?m=posts&a=topicposts&topic=35437&start=0&show=5&sort=DESC');
}

$(onLoad);
