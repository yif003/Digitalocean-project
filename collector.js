var SessionID = getCookie();
if(SessionID == ""){
  SessionID = setCookie();
  POST_request_SessionID(SessionID);
}
var ID =loadID(SessionID);


let agent = navigator.userAgent;
let language = navigator.language;
let cookieEnabled = navigator.cookieEnabled;
let imageDisabled = noimage();

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
function POST_request_SessionID(SessionID){
    let xhr = new XMLHttpRequest();
    let url = '/api/sessions';
    
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify({"SessionID": SessionID}));
}
async function loadID(SessionID) {
  const response = await fetch('/api/sessions');
  const sessions = await response.json();
  for(key in sessions){
    if(sessions[key].SessionID == SessionID){
      return sessions[key].id;
    }
  }
}
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
  