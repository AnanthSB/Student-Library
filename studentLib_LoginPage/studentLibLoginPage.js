window.document.onload(()=>{
    $('#myform').reset();
});
function btnF(){
    let u_idd   = document.getElementById('u_id').value;
    let u_passs = parseInt(document.getElementById('u_password').value);
    /* if true then say nothing and take to main page*/
    if( (u_idd.toLowerCase() == 'abcd') && (u_passs == 123456)){
        document.getElementById('para2').innerHTML = "";
        document.getElementById('onSubmit').location = 
            location.href = "/studentLib_MainPage/studentLib_MainPage_html.html";
    }else{
        document.getElementById('para1').style.visibility = 'visible';
        document.getElementById('para2').innerHTML = "Incorrect Credentials";
        var m_block = document.getElementById('para1');
        setTimeout(function (){ m_block.style.visibility = 'hidden'}, 1500)
    };
}
