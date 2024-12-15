let readmore = document.getElementById("readmore");
let readmore1 = document.getElementById("readmore1");
let readmore2 = document.getElementById("readmore2");
let readmore3 = document.getElementById("readmore3");
let texthidden = document.getElementById("texthidden");
let texthidden1 = document.getElementById("texthidden1");
let texthidden2 = document.getElementById("texthidden2");
let texthidden3 = document.getElementById("texthidden3");

readmore.onclick = () => {
  if (texthidden.style.display === "none") {
    texthidden.style.display = "inline"; 
    readmore.innerText = "Read Less"; 
  } else {
    texthidden.style.display = "none"; 
    readmore.innerText = "Read More"; 
  }
};



readmore1.onclick = () => {
  if (texthidden1.style.display === "none") {
    texthidden1.style.display = "inline"; 
    readmore1.innerText = "Read Less"; 
  } else {
    texthidden1.style.display = "none"; 
    readmore1.innerText = "Read More"; 
  }
};



readmore2.ondblclick = () => {
  if (texthidden2.style.display === "none") {
    texthidden2.style.display = "inline"; 
    readmore2.innerText = "Read Less"; 
  } else {
    texthidden2.style.display = "none"; 
    readmore2.innerText = "Read More";
  }
};



readmore3.onclick = () => {
  if (texthidden3.style.display === "none") {
    texthidden3.style.display = "inline"; 
    readmore3.innerText = "Read Less"; 
  } else {
    texthidden3.style.display = "none"; 
    readmore3.innerText = "Read More"; 
  }
};