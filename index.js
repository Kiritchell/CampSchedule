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
  const boxes = document.getElementsByClassName('Tech');
  for (const box of boxes) {box.style.display = 'none';}
};

function hideAdmin(){
  const boxes = document.getElementsByClassName('Admin');
  for (const box of boxes) {box.style.display = 'none';}
};

function hideBand(){
    const boxes = document.getElementsByClassName('Band');
    for (const box of boxes) {box.style.display = 'none';}
  };
  
function showTech(){
    const boxes = document.getElementsByClassName('Tech');
    for (const box of boxes) {box.style.display = 'inherit';}
  };

function showAdmin(){
    const boxes = document.getElementsByClassName('Admin');
    for (const box of boxes) {box.style.display = 'inherit';}
  };

function showBand(){
    const boxes = document.getElementsByClassName('Band');
    for (const box of boxes) {box.style.display = 'inherit';}
  };

  function encourage(){
      alert ("You can do all things through Him who gives you strength. Philippians 4:13")
  }

  function showTuesdayHS(){
    var link = document.getElementById('HST');
    link.style.display='inherit';}
    
function hideTuesdayHS(){
    var link = document.getElementById('HST');
    link.style.display='none';}
      
function hideWedHS(){
     var link = document.getElementById('HSW');
    link.style.display='none';}

function showWedHS(){
     var link = document.getElementById('HSW');
     link.style.display='inherit';}

     function hideThurHS(){
      var link = document.getElementById('HSTH');
     link.style.display='none';}
 
 function showThurHS(){
      var link = document.getElementById('HSTH');
      link.style.display='inherit';}
      
      function hideFriHS(){
        var link = document.getElementById('HSF');
       link.style.display='none';}
   
   function showFriHS(){
        var link = document.getElementById('HSF');
        link.style.display='inherit';}
        
        function decideTeam(){
          const boxes = document.getElementsByClassName('TeamBox');
          for (const box of boxes) {box.style.display = 'inherit';}
        };
  