var body = document.querySelector("body");
var navBtns = document.getElementsByClassName("nav-btns");
var rightNavBtns = document.querySelector(".right");
var aboutSection = document.getElementById("about");
var menu = document.createElement("div");
var navY = 50, projectSectH, projectSectY, projectSectScroll;

window.addEventListener("scroll", updateProjectSectY);

(function highlightNavBtns(i) {
	if(i > 3) {return;}
	
	navBtns[i].addEventListener("click", scroll);
	navBtns[i].addEventListener("mouseover", navLightToggle);
	navBtns[i].addEventListener("mouseout", navLightToggle);

	highlightNavBtns(++i);
}(0))

function updateProjectSectY() {
	projectSectH = window.getComputedStyle(aboutSection).height;
	projectSectY = projectSectH.substring(0, projectSectH.length-2);
	projectSectScroll = projectSectY-navY;
}
	
function navLightToggle(ele) {
	if(!ele.target.style.color) {
		if(window.scrollY >= projectSectScroll) {
			return ele.target.style.color = "#18CAE6";
		}
		return ele.target.style.color = "#173361";
	}
	ele.target.style.color = "";
}

function scroll(ele) {
	if(ele.target.innerHTML === "Projects") {
		return window.scrollTo(0, projectSectScroll);
	}
	
	if(ele.target.innerHTML === "Contact") {
		return window.scrollTo(0, document.body.scrollHeight); //bottom
	}
	
	window.scrollTo(0, 0);
}