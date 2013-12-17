// ==UserScript==
// @name Seller recently completed listings
// @include http://www.ebay.co*/itm/*
// ==/UserScript== 

sellerId = document.querySelector(".mbg-nw").innerHTML
href = "http://www.ebay.com/sch/" + sellerId + "/m.html?_ipg&_from&_nkw&_armrs=1&rt=nc&LH_PrefLoc=0&LH_Complete=1"


isOriginalListingPage = document.querySelector(".vi-cvip-prel5 a") ? false : true
if (isOriginalListingPage) {
  completedItemsDiv = '<div class="si-pd-a si-pd-move"><a href="' + href + '">Completed listings</a></div>'
  sellerInfoDiv = document.querySelector(".si-bdg.si-pd-eu")
}
else {
  completedItemsDiv = '<span class="watchPipe " style="display: inline;padding-left:0px;">|</span> <div style="display: inline"><a href="' + href + '">Completed listings</a></div>'
  sellerInfoDiv = document.querySelector(".si-content.si-mini-sinfo")
}
sellerInfoDiv.innerHTML += completedItemsDiv
