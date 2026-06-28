document
.getElementById("start")
.onclick=function(){

document.body.style.opacity="0";

setTimeout(function(){

document.body.innerHTML=`

<div style="
display:flex;
justify-content:center;
align-items:center;
height:100vh;
font-size:35px;
font-family:Arial;
background:#111;
color:white;
">

Loading Memories...

</div>

`;

},800);

}
