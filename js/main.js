console.log("Initializating...");
document.getElementById("shotButton").addEventListener("click", takeScreenshot, false); 

function takeScreenshot(event) {
  event.preventDefault();
  console.log("Lets take a screenshot.");
  html2canvas(document.body, {
    allowTaint: true,
    taintTest: false,
    onrendered: function(canvas) {
      document.body.appendChild(canvas);
    }
  });
}