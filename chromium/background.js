// React when a browser action's icon is clicked.
chrome.browserAction.onClicked.addListener(function(tab) {

  if("url_suffix" in localStorage){
    var url_suffix = localStorage["url_suffix"];
  }
  else{
    var url_suffix = ".gate1.inist.fr";
  }

  if (!url_suffix) {
    return;
  }

  var sp = tab.url.split("/");
  var newurl = sp[0] + "//" + sp[2] + url_suffix + "/" + sp.slice(3).join('/');
  chrome.tabs.update(tab.id, {url: newurl});

});
