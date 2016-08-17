var slide, timer;

initSpacer();
initSlideShow();

$(window).bind("load", function() {//wait for entire page to finish loading first, executes last
   // code here
   initCardHeights();
   if (window.innerWidth<=767){
        initMobileFooter();
    }
    if (window.innerWidth>767){
        initStandardFooter();
    }
});

$( window ).resize(function() {
    initSpacer();
    initCardHeights();
    if (window.innerWidth<=767){
        initMobileFooter();
    }
    if (window.innerWidth>767){
        initStandardFooter();
    }

 });

//set the height of spacer to height of navigation bar
function initSpacer(){
    if (window.innerWidth<=767){
        document.getElementById("spacer").style.height = document.getElementById("collapsedNavbar").offsetHeight+"px";
    }
    else{
        document.getElementById("spacer").style.height = document.getElementById("nav").offsetHeight+"px";
    }
}

//slideshow functions
function initSlideShow(){
    slide=0;
    showSlide(slide);
}
function prevSlide(){

    if (slide==0){
        slide = (document.getElementsByClassName("slideContent").length) - 1;
    }
    else{
        slide = slide - 1;
    }
    showSlide(slide);
}
function nextSlide(){
    if (slide == (document.getElementsByClassName("slideContent").length - 1)){
        slide = 0;
    }
    else{
        slide++;
    }
    showSlide(slide);
}
function showSlide(n){
    clearTimeout(timer);
    var i;
    var slides = document.getElementsByClassName("slideContent");
    var dots = document.getElementsByClassName("slidePicker");

    slide=n;//re-sync values of slide and n (values may differ when user skips to a certain slide using slide selectors)
    for (i=0; i<slides.length; i++){
        slides[i].style.display="none";
        dots[i].style.backgroundColor="grey";
        dots[i].style.border="none"
    }
    slides[n].style.display="block";
    dots[n].style.backgroundColor="#cadb2c";
    dots[n].style.border="3px solid grey"
    timer = setTimeout(nextSlide, 5000);
}

//find the card height with the greatest height
function getMaxCardHeight(){
    var cards = document.getElementsByClassName("serviceCard");
    var i;
    var height=0;
    
    for (i=0; i<cards.length; i++){//find the card with greatest height
        cards[i].style.height = "auto";
        if (height < cards[i].offsetHeight){
            height = cards[i].offsetHeight;
        }
    }
    return height;
}

function initCardHeights(){
    var cards = document.getElementsByClassName("serviceCard");
    var cardLinks = document.getElementsByClassName("serviceCardLink");
    var i;
    var h = getMaxCardHeight()+"px";

    for (i=0; i<cards.length; i++){
        cards[i].style.height = h;
        cardLinks[i].style.bottom="15px";
    }
}

function test(){
    console.log(window.innerWidth);
}

//collapse or expand mobile footers

function initStandardFooter(){
    var lists = document.getElementsByClassName("footerList");
    var i;
    for (i=0; i<lists.length; i++){
        lists[i].style.display="block";
    }
}

//initialize all footer lists to have no display.
//  for some reason this is necessary for javascript.
function initMobileFooter(){
    var lists = document.getElementsByClassName("footerList");
    var i;
    for (i=0; i<lists.length; i++){
        lists[i].style.display="none";
    }
}

function toggleFooterList(id){
    if (window.innerWidth>767){
        return;
    }
    var lists = document.getElementsByClassName("footerList");
    var element = document.getElementById(id);

    if (document.getElementById(id).style.display==='none'){
        document.getElementById(id).style.display="block";
    }
    else if (document.getElementById(""+id).style.display==="block"){
        document.getElementById(id).style.display="none";
    }
}