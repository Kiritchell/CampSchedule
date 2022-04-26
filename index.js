//setting current time
var now = new Date();
var hours = now.getHours();

var currentTime = now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
});

function nextEvent(){

}


function hideTech(){
  const boxes = document.getElementsByClassName('eventTech');
  for (const box of boxes) {box.style.display = 'none';}
};

function showTech(){
    const boxes = document.getElementsByClassName('eventTech');
    for (const box of boxes) {box.style.display = 'inherit';}
  };

  function encourage(){
      alert ("You can do all things through Him who gives you strength. Philippians 4:13")
  }