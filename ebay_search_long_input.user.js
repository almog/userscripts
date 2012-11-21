// ==UserScript==
// @name        Ebay long search input
// @namespace   http://www.ebay.com/*
// @version     1
// @include     http://*.ebay.com/*
// ==/UserScript==
$('#_fsb_nkw, #gh-ac').attr('maxlength', 50000)
