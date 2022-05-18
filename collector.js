var Sessionid = getCookie();
var ID;
if(Sessionid == ""){
  Sessionid = setCookie();
  POST_request_SessionID("static",Sessionid);
  POST_request_SessionID("performance",Sessionid);
  POST_request_SessionID("activity",Sessionid);
}
//static data
var staticDataArray = {};

staticDataArray.agent = navigator.userAgent;
staticDataArray.language = navigator.language;
staticDataArray.cookieEnabled = navigator.cookieEnabled;
staticDataArray.imageDisabled = noimage();
staticDataArray.cssEnabled = checkDummy();
staticDataArray.screenSize = screen.width + " X "+ screen.height;
staticDataArray.windowsSize = window.innerWidth + " X "+ window.innerHeight;
staticDataArray.connectionType = navigator.connection.effectiveType;
staticDataArray.jsEnabled = true;
staticDataArray.SessionID = Sessionid;
var staticData = JSON.stringify(staticDataArray);

//put request to update (final step)
var url  = "api/static";
var xhr  = new XMLHttpRequest()
xhr.open('GET', url, true)
xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
		for(i in users){
      if(users[i].SessionID == Sessionid){
        var ID = users[i].id;
        PUT_request("static",staticData, ID);
      }
    }
	} else {
		console.error(users);
	}
}
xhr.send(null);
//performance data

var getTime = function() {
  var performanceDataArray ={};
  let startTime=window.performance.timing.navigationStart;
  let endTime = window.performance.timing.domContentLoadedEventEnd;
  let loadTime = endTime -startTime;
  performanceDataArray["loadTime"] = loadTime;
  performanceDataArray["startTime"] = startTime;
  performanceDataArray["endTime"] = endTime;
  performanceDataArray["timing_object"] = window.performance;
  performanceDataArray.SessionID = Sessionid;
  var performanceData = JSON.stringify(performanceDataArray)
  var url  = "api/performance";
  var xhr  = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      for(i in users){
        if(users[i].SessionID == Sessionid){
          var ID = users[i].id;
          PUT_request("performance",performanceData, ID);
        }
      }
    } else {
      console.error(users);
    }
  }
  xhr.send(null);
  return performanceData;
}
window.onload = function(){
  getTime();
}
//activity
var activityDataArray={};
var mousePosition=[];
var mouseClicks=[];
var scrollpositon=[];
var key=[];
document.onmousemove = function(event) {
	let pointerX = event.pageX;
	let pointerY = event.pageY;
  let mousePosition_ = pointerX +", "+pointerY;
  mousePosition.push(mousePosition_);
}
document.onmousedown = function(event){
  if(event.button == 0){
    button = "left mouse";
  }
  else{
    button = "right mouse";
  }
  mouseClicks.push(button);
}
document.onwheel=function(event){
  scrollpositon.push(event.deltaY);
}
document.onkeypress = function(event) {
  key.push(event.code);
}
document.onkeydown = function(event) {
  key.push(event.code);
}
var breakEnd = '';
var breakTime = '';

onInactive(2000, function breaking() {
  const start = Date.now();
  
  window.onmousemove = window.mousedown = window.mouseup = window.onkeydown = window.onkeyup=function (){
    const end = Date.now();
    breakEnd = end+' ms';
    breakTime = 2000 + end - start + ' ms';
    onInactive(2000, breaking());
  };
});
function onInactive(ms, cb) {

  var wait = setTimeout(cb, ms);

  window.onmousemove = window.mousedown = window.mouseup = window.onkeydown = window.onkeyup= function () {
      clearTimeout(wait);
      wait = setTimeout(cb, ms);

  };
}
var currentPage = "index";
var timeEnterPage ='';
var timeLeftPage='';
var anchors = document.getElementsByTagName("a");
for (var i = 0, length = anchors.length; i < length; i++) {
  var anchor = anchors[i];
  timeEnterPage = Date.now();
  anchor.addEventListener('click', function() {
    currentPage = this.getAttribute('href');
    timeLeftPage = Date.now();
    setTimeout(500);
  }, true);
};

setInterval(function () {
  activityDataArray.mouseClicks = mouseClicks;
  activityDataArray.mousePosition = mousePosition;
  activityDataArray.scrollpositon = scrollpositon;
  activityDataArray.key = key;
  activityDataArray.breakEnd = breakEnd;
  activityDataArray.breakTime = breakTime;
  activityDataArray.currentPage = currentPage;
  activityDataArray.timeEnterPage = timeEnterPage;
  activityDataArray.timeLeftPage = timeLeftPage;
  activityDataArray.SessionID = Sessionid;
  var activityData = JSON.stringify(activityDataArray);
  var url  = "api/activity";
  var xhr  = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      for(i in users){
        if(users[i].SessionID == Sessionid){
          var ID = users[i].id;
          PUT_request("activity",activityData, ID);
        }
      }
    } else {
      console.error(users);
    }
  }
  xhr.send(null);
}, 400);


//set a cookie by name SessionID
function setCookie() {
    const d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    let sessionid = "SessionID";
    let cvalue = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    document.cookie = sessionid + "=" + cvalue + ";" + expires + ";path=/";
    return cvalue;
}
//get cookie by name SessionID
function getCookie() {
    let name = "SessionID"+ "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function POST_request_SessionID(place,SessionID){
    let xhr = new XMLHttpRequest();
    let url = '/api/'+place;
    
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify({"SessionID": SessionID}));
}
function PUT_request(place, data, ID){
  var url = "/api/"+place+"/"+ID;

  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url, true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      console.table(users);
    } else {
      console.error(users);
    }
  }
  xhr.send(data);
}

function Delete(input){
  var url = "/api/";
  var xhr = new XMLHttpRequest();

  xhr.open("DELETE", url+input, true);
  xhr.onload = function () {
      var users = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "200") {
          console.table(users);
      } else {
          console.error(users);
      }
  }
  xhr.send(null);
}

//-----------------------------------------------------------------------------
//static
//-----------------------------------------------------------------------------
function noimage()
{
  if ((document.getElementById('flag').offsetWidth==1 
        && document.getElementById('flag').readyState=='complete')
        ||(document.getElementById('flag').offsetWidth==1
        && document.getElementById('flag').readyState==undefined))
  {
        return true;
  }
  else{
        return false;
  }
}
//check for css
function checkDummy()
{	
	let val;
	let el=document.getElementById("checkDummy");

  if(el.style.marginTop && el.style.marginTop == "1px"){
    return true;
  }
  else{
    return false;
  }
	
}


  