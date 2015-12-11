// Saves options to localStorage.
function save_options() {

  var url_suffix = document.getElementById("url_suffix").value;
  if(!url_suffix){
    return;
  }
  localStorage["url_suffix"] = url_suffix;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {

  var default_url_suffix = ".gate1.inist.fr";

  var select = document.getElementById("url_suffix");
  var url_suffix = localStorage.getItem("url_suffix");
  select.value = url_suffix;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
