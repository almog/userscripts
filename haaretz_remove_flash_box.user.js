// ==UserScript==
// @name        Remove the flash-box from haaretz articles
// @version     1
// @include     http://www.haaretz.co.il/*
// ==/UserScript==

Array.prototype.forEach.call(
  document.querySelectorAll(".blockUI"),
  function(node){
    node.parentNode.removeChild(node)
  }
)
