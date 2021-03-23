
const btn =document.getElementById('#wcc')
let link=document.querySelector('a');
btn.addEventListener('click',getAttributes)
function getAttributes(){

    alert ('href = '+link.getAttribute('href')+'hreflang = ');
     alert(" link.getAttribute('hreflang')  ") ;
     alert( 'rel = '+link.getAttribute('rel')+'target = ' );
     alert("  link.getAttribute('target') ");
     alert(" 'type = '+link.getAttribute('href')  ");

}