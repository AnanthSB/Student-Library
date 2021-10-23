    // on mouseEnter
function logoutBtn0(){
    document.getElementById('logoutBtn').style.background = "#343a40 !important";
    document.getElementById('logoutBtn').style.color = "#fff";
    document.getElementById('logoutBtn').style.border = "1px solid #ffffff7d";
    document.getElementById('logoutBtn').style.boxShadow = "0px 0px 0px 1px #ffffff7d";                        
}
    // on mouseLeave
function logoutBtn1(){
    document.getElementById('logoutBtn').style.background = "#0000";
    document.getElementById('logoutBtn').style.color = "#ffffff6b";
    document.getElementById('logoutBtn').style.border = "1px solid #00ced182";
    document.getElementById('logoutBtn').style.boxShadow = "0px 0px 0px 1px #d2691e96";                        
}
    //on mouseDown
function logoutBtn2() {
    document.getElementById('logoutBtn').style.background = "#000";
    document.getElementById('logoutBtn').style.color = "#fff";
    document.getElementById('logoutBtn').style.border = "1px solid #00ced182";
    document.getElementById('logoutBtn').style.boxShadow = "0px 0px 5px 0px #f1eeec";
}
    //on mouseUp
function logoutBtn3() {
    document.getElementById('logoutBtn').style.background = "#0000";
    document.getElementById('logoutBtn').style.color = "#ffffff6b";
    document.getElementById('logoutBtn').style.border = "1px solid #00ced182";
    document.getElementById('logoutBtn').style.boxShadow = "0px 0px 0px 1px #d2691e96";
}

/* --------------------------------------Mouse on logout button-------------------------------------------------*/

    // onMouseEnter
function searchBtn0(){
    document.getElementById('searchBtn').style.background = "#0000 !important";
    document.getElementById('searchBtn').style.color = "#06eb06";
    document.getElementById('searchBtn').style.border = "1px solid #07d207";
    document.getElementById('searchBtn').style.boxShadow = "0px 0px 0px 1px #079807";
}
    // mouseLeave
function searchBtn1(){
    document.getElementById('searchBtn').style.background = "#0000";
    document.getElementById('searchBtn').style.color = "green";
    document.getElementById('searchBtn').style.border = "1px solid green";
    document.getElementById('searchBtn').style.boxShadow = "0px 0px 0px 1px green";                        
}
    // mouseDown
function searchBtn2() {
    document.getElementById('searchBtn').style.background = "rgb(21, 47, 4) none repeat scroll 0% 0%";
    document.getElementById('searchBtn').style.color = "#fff";
    document.getElementById('searchBtn').style.border = "1px outset green";
    document.getElementById('searchBtn').style.boxShadow = "0px 0px 5px 1px #e1e6e15e";
    document.getElementById('searchBtn').style.textShadow = "0px 0px 2px";
}
    // mouseUp
function searchBtn3() {
    document.getElementById('searchBtn').style.background = "#0000";
    document.getElementById('searchBtn').style.color = "green";
    document.getElementById('searchBtn').style.border = "1px solid green";
    document.getElementById('searchBtn').style.boxShadow = "0px 0px 0px 1px green";
    document.getElementById('searchBtn').style.textShadow = "0px 0px 0px";
}

// darkMode/whiteMoad button
var clck = 1;
function darkM(){
    clck = clck + 1;
    let icn = document.getElementById('darkM');
    let elem1 = $('body');
    let elem2 = $('#tr4Th');
    let hr = $('#hr');
    if (clck % 2 == 0) {
        icn.style.transform = 'rotate(180deg)';
        elem1.css({ 'background-color': 'black', 'color': 'antiqueWhite' });
        elem2.css({ 'background-color': '#282525', 'color': 'antiqueWhite' });
        hr.css({'color':'#fff'});
    } else {
        icn.style.transform = 'rotate(0deg)';
        elem1.css({ 'background-color': '#fff', 'color': 'black' });
        elem2.css({ 'background-color': 'antiquewhite', 'color': 'black' });
        hr.css({'color':'black'});
    }
};
