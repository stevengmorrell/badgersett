/*
Bones Scripts File
Author: Eddie Machado

This file should contain any js scripts you want to add to the site.
Instead of calling it in the header or throwing it inside wp_head()
this file will be called automatically in the footer so as not to
slow the page load.

*/

// IE8 ployfill for GetComputed Style (for Responsive Script below)
if (!window.getComputedStyle) {
    window.getComputedStyle = function(el, pseudo) {
        this.el = el;
        this.getPropertyValue = function(prop) {
            var re = /(\-([a-z]){1})/g;
            if (prop == 'float') prop = 'styleFloat';
            if (re.test(prop)) {
                prop = prop.replace(re, function () {
                    return arguments[2].toUpperCase();
                });
            }
            return el.currentStyle[prop] ? el.currentStyle[prop] : null;
        }
        return this;
    }
}

// as the page loads, call these scripts
jQuery(document).ready(function($) {

	if ($('.single-list_guides, .single-unit_guides').length > 0) { 
		$( ".single-list_guides #ez-toc-container, .single-unit_guides #ez-toc-container" ).clone().prependTo( ".sidebar .table-contents" );
	};
	
	if ($('.list').length > 0) { 
		$( ".total" ).appendTo( ".list" );
		$('.list p').each(function() {
	        var fid = $(this).text().slice(0, 1);
	        if(((fid == '–') || (fid == '-'))) {
		        $(this).addClass('inset');
	        }
	    });
	    $('p:empty').remove();
	};
    
    if ($('.slide').length > 0) { 
	    $('.slide').slick({arrows: true,
		  autoplay: true,
		  autoplaySpeed: 8000,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  infinite: true,
		  speed: 300});
	};
  
	if ($('.wpuf-label').length > 0) { 
		$(".wpuf-label").html(function (i, html) {
		    return html.replace(/&nbsp;/g, '');
		});
	};
	
	$(".menu-icon").click(function() { 
		$("header.header").toggleClass("active");
	});
	
	$("header.header .logged-in > a").click(function(event) {
		event.preventDefault(); 
		$("header.header .logged-in").toggleClass("active");
	});
	
	if ($('.list-selector').length > 0) { 
	$(".list-selector span").click(function(event) {
		event.preventDefault(); 
		$(".list-selector").toggleClass("expand");
	});
	};
	
	$(".hamburger").click(function() { 
		$("header.header").toggleClass("active");
		$(this).toggleClass("is-active");
	});
	
	
	
	if ($('.page-template-page-form').length > 0) { 
		$('.category-wrap #lvl0 select').prepend('<option selected value="0">Grand Alliance</option>');
	};
	if ($('.page-template-page-form, .page-template-page-edit').length > 0) { 
		$(".page-template-page-form .wpuf-el.accordion .wpuf-label label, .page-template-page-edit .wpuf-el.accordion .wpuf-label label").click(function() { 
			$(this).parent().parent().toggleClass("expand");
		});
	};
	
    /*
    
    
    Responsive jQuery is a tricky thing.
    There's a bunch of different ways to handle
    it, so be sure to research and find the one
    that works for you best.
    */
    
    /* getting viewport width */
    var responsive_viewport = $(window).width();
    
    /* if is below 481px */
    if (responsive_viewport < 481) {
    
    } /* end smallest screen */
    
    /* if is larger than 481px */
    if (responsive_viewport > 481) {
        
    } /* end larger than 481px */
    
    /* if is above or equal to 768px */
    if (responsive_viewport >= 768) {
    
        /* load gravatars */
        $('.comment img[data-gravatar]').each(function(){
            $(this).attr('src',$(this).attr('data-gravatar'));
        });
        
    }
    
    /* off the bat large screen actions */
    if (responsive_viewport > 1030) {
        
    }
    
	
	// add all your scripts here
	
 
}); /* end of as page load scripts */


/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
(function(w){
	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){ return; }
    var doc = w.document;
    if( !doc.querySelector ){ return; }
    var meta = doc.querySelector( "meta[name=viewport]" ),
        initialContent = meta && meta.getAttribute( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
		x, y, z, aig;
    if( !meta ){ return; }
    function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true; }
    function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false; }
    function checkTilt( e ){
		aig = e.accelerationIncludingGravity;
		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );
		// If portrait orientation and in one of the danger zones
        if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			if( enabled ){ disableZoom(); } }
		else if( !enabled ){ restoreZoom(); } }
	w.addEventListener( "orientationchange", restoreZoom, false );
	w.addEventListener( "devicemotion", checkTilt, false );
})( this );