var link = document.querySelector(".search-button");
var popup = document.querySelector(".search-window");
var close = popup.querySelector(".close-search-window");
var form = popup.querySelector("form");
var check_in_date = popup.querySelector("[name=check-in]");
var check_out_date = popup.querySelector("[name=check-out]");
var adult_amount = popup.querySelector("[name=adults-amt]");
var children_amount = popup.querySelector("[name=children-amt]");


link.addEventListener("click", function(event) {
  event.preventDefault();
  if (close==1) {
    popup.classList.remove("close-search-window");
    close=0;
  /*  console.log(close); */
  }
  else {
    popup.classList.add("close-search-window");
    close=1;
/*    console.log(close); */
  }
});
