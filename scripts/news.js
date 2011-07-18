var parseNews = function (data) {
  var xmlDoc = $.parseXML(data);
  var $xml = $(xmlDoc);
  var $headline = $xml.find("headline");
  console.log($headline.text());
  $("#newsAndevents li:first").
      after("<li class='sub_link'><a>" + $headline.text() + "</a></li>");
}

var fetchUrl = function (url) {
  $.ajax({
    url: url,
    success: function (data) {
      parseNews(data);
    }
  });
}

var onLoad = function () {
  var data = fetchUrl('http://cssa.mit.edu/forum/ssi.php?m=posts&a=topicposts&topic=35437&start=0&show=5&sort=DESC');
}

$(onLoad);
