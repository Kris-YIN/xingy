// what should be observed? -> if profile-image has been added
var observer = new MutationSummary({
    callback: handleImageNodeAdded,
    rootNode: document.body,
    queries: [{ element: ".user-card-information" }]
});


function handleImageNodeAdded(){


var imageUrls = Array.prototype.map.call(document.getElementsByClassName("foundation-imageonview-changed"), function (i) {
  return i.src;
});

// extract profile ids from image urls
// result: profile_ids = ["123","456","789"]

var profile_ids = [];
for (i = 0; i < imageUrls.length; i++) {
     var single_url = imageUrls[i]
     var string_with_id = single_url.split('/')[8]
     var x = string_with_id.split('.')[1]
     var y = x.split(',')[0]
     profile_ids.push(y)
}

var urls = {0: "https://www.xing.com/events/widgets/organized/" + profile_ids[0], 1: "https://www.xing.com/events/widgets/organized/" + profile_ids[1], 2: "https://www.xing.com/events/widgets/organized/" + profile_ids[2]}

function getName(url, order) {
     fetch(url)
          .then(function(response) {
               return response.text();
          })
          .then(function(text) {
                 url_title = (/<title>(.*?)<\/title>/m).exec(text)[1]
                 name = url_title.replace('Events von ','').replace(' | Events bei XING','');
                 var x = document.getElementsByClassName(„on-outer-hover")[order];
              var search = name.replace(/\s/g, "+");
              var link = "https://www.xing.com/search/members?hdr=1&keywords=" + search
              x.innerHTML += '<a href="'+link+'">'+name+'</a>';
            })
};

// call function
getName(urls[0], 0)
getName(urls[1], 1)
getName(urls[2], 2)


	

}

