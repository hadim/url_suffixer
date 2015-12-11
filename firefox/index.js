var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var preferences = require("sdk/simple-prefs").prefs;

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  var url_suffix = preferences["url_suffix"];
  var current_url = tabs.activeTab.url;
  var sp = current_url.split("/");
  var new_url = sp[0] + "//" + sp[2] + url_suffix + "/" + sp.slice(3).join('/');
  tabs.activeTab.url = new_url;
}
