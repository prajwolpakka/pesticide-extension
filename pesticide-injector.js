(function () {
  'use strict';

  // inject the pesticide CSS and JS
  function toggleAssets() {
    try {
      const pesticideCSS = document.getElementById("pesticideCSS");
      const pesticideJS = document.getElementById("pesticideJS");
      const pesticideResult = document.getElementById("pesticide-for-chrome-result");

      if (pesticideCSS && pesticideJS) {
        // Remove Pesticide assets if they exist
        pesticideCSS.remove();
        pesticideJS.remove();
        if (pesticideResult) pesticideResult.remove();
        console.log("Pesticide assets removed.");
      } else {
        // Inject Pesticide assets
        const newPesticideCSS = document.createElement("link");
        newPesticideCSS.rel = "stylesheet";
        newPesticideCSS.type = "text/css";
        newPesticideCSS.href = chrome.runtime.getURL("pesticide.min.css");
        newPesticideCSS.id = "pesticideCSS";
        document.head.appendChild(newPesticideCSS);

        const newPesticideJS = document.createElement("script");
        newPesticideJS.type = "text/javascript";
        newPesticideJS.src = chrome.runtime.getURL("pesticide.js");
        newPesticideJS.id = "pesticideJS";
        document.head.appendChild(newPesticideJS);

        const newPesticideResult = document.createElement("div");
        newPesticideResult.id = "pesticide-for-chrome-result";
        document.body.appendChild(newPesticideResult);

        console.log("Pesticide assets injected.");
      }
    } catch (error) {
      console.error("Error in toggleAssets:", error);
    }
  }

  // Listen for the action button click
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting
      .executeScript({
        target: { tabId: tab.id },
        function: toggleAssets,
      })
      .catch((error) => console.error("Script execution error:", error));
  });
})();
