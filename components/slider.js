function slider(){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SLIDER</title>
    <style>
         * {box-sizing: border-box}
        body {font-family: Verdana, sans-serif; margin:0}
        .mySlides {display: none}
        img {vertical-align: middle;}
        
        .rectangleMain {
          max-width: 1000px;
          position: relative;
          margin: auto;
        }
        .prev, .next {
          cursor: pointer;
          position: absolute;
          top: 50%;
          width: auto;
          padding: 16px;
          margin-top: -22px;
          color: white;
          font-weight: bold;
          font-size: 18px;
          transition: 0.6s ease;
          border-radius: 0 3px 3px 0;
          user-select: none;
        }
        .next {
          right: 0;
          border-radius: 3px 0 0 3px;
        }
        .prev:hover, .next:hover {
          background-color: rgba(0,0,0,0.8);
        }
        .theImage {
          color: #f2f2f2;
          font-size: 12px;
          padding: 8px 12px;
          position: absolute;
          top: 0;
        }
        .dot {
          cursor: pointer;
          height: 15px;
          width: 15px;
          margin: 0 2px;
          background-color: #bbb;
          border-radius: 50%;
          display: inline-block;
          transition: background-color 0.6s ease;
        }
        .active, .dot:hover {
          background-color: #717171;
        }
        .fade {
          -webkit-animation-name: fade;
          -webkit-animation-duration: 1.5s;
          animation-name: fade;
          animation-duration: 1.5s;
        }
        @media only screen and (max-width: 300px) {
          .prev, .next {font-size: 11px}
        }
    </style>
        </head>
        <body>
        <div class="rectangleMain">
        
        <div class="images fade">
          <div class="theImage"></div>
          <img src="https://images-static.nykaa.com/uploads/831b1fd8-6558-4588-bcdb-7271efadeacc.jpg?tr=w-1200,cm-pad_resize" style="width:100%">
        </div>
        
        <div class="images fade">
          <div class="theImage"></div>
          <img src="https://images-static.nykaa.com/uploads/7252f111-5163-4a57-95e0-f3de1d5250e5.jpg?tr=w-1200,cm-pad_resize"style="width:100%">
        </div>
        
        <div class="images fade">
          <div class="theImage"></div>
          <img src="https://images-static.nykaa.com/uploads/66ce6cfa-9ce4-4198-b9d7-571732d5a374.jpg?tr=w-1200,cm-pad_resize" style="width:100%">
        </div>

        <div class="images fade">
            <div class="theImage"></div>
            <img src="https://images-static.nykaa.com/uploads/fcf41727-3334-4373-890b-8417ec100563.jpg?tr=w-1200,cm-pad_resize" style="width:100%">
          </div>
        
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
        
        </div>
        <br>
        
        <div style="text-align:center">
          <span class="dot" onclick="currentSlide(1)"></span> 
          <span class="dot" onclick="currentSlide(2)"></span> 
          <span class="dot" onclick="currentSlide(3)"></span> 
          <span class="dot" onclick="currentSlide(4)"></span> 
        </div>
        
        <script>
        var slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          var slides = document.getElementsByClassName("images");
          var dots = document.getElementsByClassName("dot");
          if(n > slides.length){
              slideIndex = 1;
          }if(n < 1){
              slideIndex = slides.length;
          }

          for(var i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
          }

          for(var i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }

          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";

        }
        </script>
        
        </body>
        </html> 
        `
}
export default slider