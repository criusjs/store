
// indexdb
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
if(!window.indexedDB){
  console.log("你的浏览器不支持IndexedDB");
}

// database
if(window.openDatabase){ 
  console.log('浏览器支持DataBase'); 
}

// localStorage
if (!window.localStorage) {
  alert("Your browser don't adequate localStorage");
} else {
  try {
    localStorage.setItem('_','_')
  }catch(err){ // ios safrai
    alert("Your browser don't adequate localStorage");
  }
}


// cookie
navigator.cookieEnabled