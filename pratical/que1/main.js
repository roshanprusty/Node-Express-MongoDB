const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");
const para3 = document.getElementById("para3");

addEventListener("mouseover", function() {
  para1.textContent = "This is the new text for the first paragraph.";
});

para2.addEventListener("mouseover", function() {
  para2.textContent = "This is the new text for the second paragraph.";
});

para3.addEventListener("mouseover", function() {
  para3.textContent = "This is the new text for the third paragraph.";
});

