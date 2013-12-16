// ==UserScript==
// @name Seller recently completed listings
// @include http://www.ebay.co*/itm/*
// ==/UserScript== 

sellerId = document.querySelector(".mbg-nw").innerHTML
href = "http://www.ebay.com/sch/" + sellerId + "/m.html?_ipg&_from&_nkw&_armrs=1&rt=nc&LH_PrefLoc=0&LH_Complete=1"
completedItemsDiv = '<div class="si-pd-a"><a href="' + href + '">Completed listings</a></div>'

sellerOtherItemsDiv = document.getElementsByClassName("si-bdg si-pd-eu")[0]
sellerOtherItemsDiv.innerHTML += completedItemsDiv
