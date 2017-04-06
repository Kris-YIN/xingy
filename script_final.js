// what should be observed? -> if profile-image has been added
var observer = new MutationSummary({
    callback: handleElementAdded,
    rootNode: document.body,
    queries: [{ element: ".component-user-card.component-user-card-48" }]
});


// function that is invoked if an image has loaded
function handleElementAdded(summaries) {
    MSummary = summaries[0]
    console.log(MSummary)
    MSummary.added.forEach(function(element){
        var imageUrl = element.children["0"].children["0"].children["0"].dataset.imgSrc
        console.log("imageUrl: " + imageUrl)  
        var string_with_id = imageUrl.split('/')[8]
        var x = string_with_id.split('.')[1]
        var profile_id = x.split(',')[0]
        var event_url = "https://www.xing.com/events/widgets/organized/" + profile_id
        console.log("event_url: " + event_url)
        var target = element.children[1].childNodes[1].innerHTML
        console.log ("target: " + target)

        fetch(event_url)
        .then(function(response) {
            return response.text();
        })
        .then(function(text) {
            url_title = (/<title>(.*?)<\/title>/m).exec(text)[1]
            name = url_title.replace('Events von ', '').replace(' | Events bei XING', '');
            console.log(name)
            console.log("Target before :" + target)
            target = name
            console.log("Target after change :" + target)

        })
    })
};

// Text in Summary object is changed, but actual HTML not
// find 







// .component-user-card.component-user-card-48
// Image Src.:
// ["0"].added["0"].firstElementChild.firstElementChild.children["0"].currentSrc
// ["0"].added["0"].childNodes[1].children["0"].children["0"].currentSrc
// ["0"].added["0"].children["0"].children["0"].children["0"].currentSrc


//"Einer Ihrer Kontakte"
// ["0"].added["0"].children[1].childNodes[1].innerText








// .user-card-information
// Image Src.:
// ["0"].added["0"].previousElementSibling.attributes["0"].ownerElement.childNodes[1].childNodes[1].currentSrc


//"Einer Ihrer Kontakte"
// added: 3 > 0 ul.user-card-information > child nodes 1: li innertext 

// ["0"].added["0"].childNodes[1]