var slide_index = 1;  
displaySlides(slide_index);    
function nextSlide(n)
{  
displaySlides(slide_index += n);  
}    
function currentSlide(n)
{  
 displaySlides(slide_index = n);  
}  
function displaySlides(n) {  
var i;  
var slides = document.getElementsByClassName("showSlide");  
if (n > slides.length) { slide_index = 1 }  
if (n < 1) { slide_index = slides.length }  
for (i = 0; i < slides.length; i++) {  
slides[i].style.display = "none";   
}  
slides[slide_index - 1].style.display = "block";
}

// our auto slider
(function autoSlider(){
$('.slider .active').each(function(){
    if(!$(this).is(':last-child'))
    {
        $(this).delay(4000).fadeOut(1000,function(){
        $(this).removeClass('active').next().addClass('active').fadeIn();
        autoSlider();
        });
    }
    
    else
    {
        $(this).delay(4000).fadeOut(1000,function(){
           $(this).removeClass('active');
           $('.slider div').eq(0).addClass('active').fadeIn();
           autoSlider();
        });
    }
})
}()); 








