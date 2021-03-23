let btn =document.getElementById('changeStyle')
let parparagraph = document.getElementById('text')
paragraph.addEventListener('click',changeStyle)
function changeStyle(){
    parparagraph.style.fontFamily=  'Courier New' ;
    parparagraph.style.fontSize='30px';
    parparagraph.style.backgroundColor= "rgb(247, 134, 93)";
    parparagraph.style.color= "rgb(50, 83, 12)";
}