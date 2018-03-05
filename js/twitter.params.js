// var config1 = {
//   id: '970381514440675328',
//   domId: 'twitter',
//   maxTweets: 1,
//   showUser: true,
//   showInteraction: false,
//   enableLinks: true
// };

// twitterFetcher.fetch(config1);

// setInterval(function() {}, 3000);

var config8 = {
  id: '970381514440675328',
  dataOnly: true,
  maxTweets: 1,
  customCallback: populateTpl
};

setInterval(function() {
  twitterFetcher.fetch(config8);
}, 3000);

function populateTpl(tweets) {
  var element = document.getElementById('twitter');
  var html = '<ul>';
  for (var i = 0, lgth = tweets.length; i < lgth; i++) {
    var tweetObject = tweets[i];
    html +=
      '<li>' +
      (tweetObject.image
        ? '<div class="tweet-img"><img src="' + tweetObject.image + '" /></div>'
        : '') +
      '<p class="tweet-content">' +
      tweetObject.tweet +
      '</p>' +
      '<p class="tweet-infos">' +
      tweetObject.time +
      ' by ' +
      tweetObject.author +
      '</p>' +
      '</li>';
  }
  html += '</ul>';
  element.innerHTML = html;
}
