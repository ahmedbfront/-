var email=document.getElementById("formEmail");$("[required]").on("blur",function(){""==$(this).val()?$(this).next("span").fadeIn():$(this).next("span").fadeOut()}),$(".auto-direction").on("keyup",function(){$(this).val().charCodeAt(0)<200?$(this).css("direction","ltr"):$(this).css("direction","rtl")}),$(".main-text").length&&$(".main-text").animatedHeadline({animationType:"clip"}),$(".header .call-to-actions-home .section-about").on("click",function(e){e.preventDefault(),$(".navbar .section-about").addClass("active").siblings().removeClass("active")}),$(".header .call-to-actions-home .section-port").on("click",function(e){e.preventDefault(),$(".navbar .section-port").addClass("active").siblings().removeClass("active")}),$(function(){"use strict";var e=$(".home-site");$(document).on("click",".nav-btn",function(){var t=$(this).attr("data-target");Modernizr.csstransforms?(e.removeClass(function(e,t){return(t.match(/(^|\s)active-page\S+/g)||[]).join(" ")}),e.addClass("active-page"+t)):e.animate({top:"-"+100*(t-1)+"%"},1e3)}),$(".cd-nav-trigger").on("click",function(){$(".ahhm").css({height:0,padding:"27px"})})}),$(".navbar-collapse .collapse-toggle").on("click",function(){$(window).width()<992&&$(".navbar-collapse").collapse("toggle")}),$(".navbar .nav-item").on("click",function(e){e.preventDefault(),$(this).addClass("active").siblings().removeClass("active")}),$(".nav-phone a").on("click",function(e){e.preventDefault()}),$(".nav-port li").on("click",function(){$(this).addClass("active").siblings().removeClass("active"),$(".show-portfolio > section").hide(),$($(this).data("section")).fadeIn(300)}),$(document).on("click","#accordion-1>li>a",function(){$(this).siblings(".box").addClass("active"),$(this).closest("li").siblings("li").find(".box").removeClass("active")}),$("#accordion-1").on("click","li>a",function(e){e.preventDefault(),$("#accordion-1 li a.active").removeClass("active"),$(this).addClass("active")});var showAccordion=document.getElementsByClassName("show-accordion");for(i=0;i<showAccordion.length;i++)showAccordion[i].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"});var slideImg=Array.from(document.querySelectorAll(".slider-container img")),slideCount=slideImg.length,currentSlide=1,slideNumberElement=document.getElementById("slide-number"),nextButton=document.getElementById("next"),prevButton=document.getElementById("prev");nextButton.onclick=nextSlide,prevButton.onclick=prevSlide;var paginationElement=document.createElement("ul");paginationElement.setAttribute("id","pagination-ul"),paginationElement.setAttribute("class","list-unstyled");for(var i=1;i<=slideCount;i++){var paginationItem=document.createElement("li");paginationItem.setAttribute("data-index",i),paginationItem.appendChild(document.createTextNode(i)),paginationElement.appendChild(paginationItem)}document.getElementById("indicators").appendChild(paginationElement);var paginationBullets=Array.from(document.querySelectorAll("#pagination-ul li"));for(i=0;i<paginationBullets.length;i++)paginationBullets[i].onclick=function(){currentSlide=parseInt(this.getAttribute("data-index")),theChecker()};function nextSlide(){nextButton.classList.contains("disabled")||(currentSlide++,theChecker())}function prevSlide(){prevButton.classList.contains("disabled")||(currentSlide--,theChecker())}function theChecker(){slideNumberElement.textContent="Slide #"+currentSlide+" of "+slideCount,removeAllActive(),slideImg[currentSlide-1].classList.add("active"),paginationElement.children[currentSlide-1].classList.add("active"),1==currentSlide?prevButton.classList.add("disabled"):prevButton.classList.remove("disabled"),currentSlide==slideCount?nextButton.classList.add("disabled"):nextButton.classList.remove("disabled")}function removeAllActive(){slideImg.forEach(function(e){e.classList.remove("active")}),paginationBullets.forEach(function(e){e.classList.remove("active")})}theChecker();