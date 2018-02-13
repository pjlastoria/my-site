var boxes = document.getElementsByClassName("box");
var search = document.getElementById("search-box");
var header = document.getElementById("header-text");
search.addEventListener("click", handleSearchClick);

var sortTabs = document.getElementsByClassName("center-text");
sortTabs[0].addEventListener("click", handleClick);
sortTabs[1].addEventListener("click", handleClick);
var currActive = 0;

var leftNavLinks = document.getElementsByClassName("left-nav-link");
leftNavLinks = [].slice.call(leftNavLinks);

leftNavLinks.forEach(function(ele) {
  ele.addEventListener("click", changeTitle)
});

window.addEventListener('resize', updateGrid);

function handleSearchClick() {
  this.value = "";
}

/*function changeTitle(ele) {
  var newTitle = ele.target.firstChild.innerHTML;
  header.innerHTML = newTitle;
}*/

function handleClick(evt) {
  if(evt.target.className === "top-nav-text center-text active") {
    return;
  }
  
  sortTabs[currActive].className = "top-nav-text center-text"
  currActive = ( currActive === 0 ? 1 : 0 );
  sortTabs[currActive].className = "top-nav-text center-text active";
}

function updateGrid() {
  if(window.innerWidth < 1102 || window.innerWidth >= 1148 && window.innerWidth <= 1321) { // 4 based grid
    return optimize4ColGrid();//928-1102 1148-1321 4grid, 1102-1147 5grid
  }
  
  optimize5ColGrid(); // else, organize 5 based grid, no need to worry about 3 based or lower
}

function optimize5ColGrid() {
  for(var i = 0; i < boxes.length; i++) {
    if(i%5 === 0 || (i-1)%5 === 0) {
      boxes[i].children[0].className = "movie-profile-right";
      boxes[i].children[0].children[0].className = "left-arrow";
    }
    
    if((i+3)%5 === 0 || (i+2)%5 === 0 || (i+1)%5 === 0) {
      boxes[i].children[0].className = "movie-profile-left";
      boxes[i].children[0].children[0].className = "right-arrow";
    }
  }
}

function optimize4ColGrid() {
  
  for(var i = 0; i < boxes.length; i++) {
    if(i%4 === 0 || (i-1)%4 === 0) {
      boxes[i].children[0].className = "movie-profile-right";
      boxes[i].children[0].children[0].className = "left-arrow";
    }
    
    if((i+2)%4 === 0 || (i+1)%4 === 0) {
      boxes[i].children[0].className = "movie-profile-left";
      boxes[i].children[0].children[0].className = "right-arrow";
    }
  }
  
}