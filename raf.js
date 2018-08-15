if (document.cookie.indexOf("wtprom") == -1) {
  var ready = function() {
    // If the 'main' element exist
    if (document.querySelector("main")) {
      // Run your code here...
      document.querySelector("main").insertAdjacentHTML("afterBegin",'<div class="wt-prom-wrapper"><div class="wt-prom-banner"></div></div>');
      //window.alert("cookie does not exist");
      // Return so that we don't call requestAnimationFrame() again
      return;
    }

    // If the body element isn't found, run ready() again at the next pain
    window.requestAnimationFrame(ready);
  };

  // Initialize our ready() function
  window.requestAnimationFrame(ready);
  
}

// clear cookie
// document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
