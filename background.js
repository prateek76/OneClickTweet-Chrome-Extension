var list = ["selection","link","image","page"];

for(var i = 0;i<list.length;i++) {
	var context = list[i];
	var titleX = "twitter share : share this "+context+" on your twitter account";
	chrome.contextMenus.create({
		"title": titleX,
		"contexts": [context],
		"id": context
	});
}

var clickHandler = function(data, tab) {
	switch(data.menuItemId) {
		case 'selection':
		chrome.windows.create({
			url: "https://twitter.com/share?text="+encodeURIComponent(data.selectionText),
			type: "panel"
		});
		break;
		case 'link':
		chrome.windows.create({
			url: "https://twitter.com/share?text="+encodeURIComponent(data.linkUrl),
			type: "panel"
		});
		break;
		case 'image':
		chrome.windows.create({
			url: "https://twitter.com/share?text="+encodeURIComponent(data.srlUrl),
			type: "panel"
		});
		break;
		case 'page':
		chrome.windows.create({
			url: "https://twitter.com/share?text="+encodeURIComponent(tab.title)+"&url="+(data.pageUrl),
			type: "panel"
		});
		break;
	}
    
}
//addListener must be used
chrome.contextMenus.onClicked.addListener(clickHandler);