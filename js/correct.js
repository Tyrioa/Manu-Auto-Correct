var textNode;
const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT,null,false);
const rExp = new RegExp('uwu|'+
	'UWU|'+
	'uwu|'+
	'OWO|'+
	'owo|')
	

;while(textNode=walk.nextNode()) {
    textNode.nodeValue = textNode.nodeValue.replace(rExp, 'Je suis un attardé');
}

document.title = document.title.replace(rExp, 'Je suis une gros attardé');
