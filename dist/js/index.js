"use strict";var sliders=document.querySelectorAll(".slide");sliders.forEach((function(e){e.addEventListener("click",(function(s){sliders.forEach((function(e){e.classList.remove("active")})),e.classList.toggle("active")}))}));