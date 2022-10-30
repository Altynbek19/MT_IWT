window.onscroll = function(){
    changeColor()
};
function changeColor(){
    if(document.documentElement.scrollTop>5){
        document.getElementById("head").style.backgroundColor="#0C131E"
    }
}
