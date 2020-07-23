var number_hasDone = 0, 
	number_left = 100000, 
	days_left = 0, 
	currentTime;
const number_toGo = 100000, 
	  number_hasDone_nonAutomatic = 21323, 
	  days_left_constant = 32,
	  currentTime_nonAutomatic = new Date('23 Jul 2020 18:30:00');

function addZero(i) { 
	if (i < 10) return "0"+i.toString(); 
	else return i.toString();
}


/* countUp.js */

import { CountUp } from '../library/countUp.min.js';

var countUpJS_options_hasDone = { startVal: 0, duration: 1.75, suffix: '명' }, 
	countUpJS_options_left = { startVal: number_toGo, duration: 1.75, suffix: '명' };


function redraw_graph() {
	
	var timeJsonURL = "http://3.34.208.197/crawling";
//	$.getJSON( timeJsonURL, function(data) {
//		
//		number_hasDone = data.count_hasDone;
//		number_left = number_toGo - number_hasDone;
//		
//		currentTime = new Date(data.time);
//		days_left = days_left_constant - currentTime.getDate() - 31*( currentTime.getMonth()+1-7 );
//		
//		
//		$("object#d-day-integer").attr('data', `@asset/image/number-${days_left.toString()}.svg`);
//		$("span#currentTime").html( `2020-0${currentTime.getMonth()+1}-${addZero(currentTime.getDate())} ${addZero(currentTime.getHours())}:${addZero(currentTime.getMinutes())}:${addZero(currentTime.getSeconds())}` );
//
//
//
//		var percent_hasDone = number_hasDone / number_toGo * 100;
//		var percent_left = number_left / number_toGo * 100;
//
//		setTimeout( function() {
//			$("object#d-day-integer").attr({ width: "", height: ""});
//
//			$("div#leftToGo-section").css("height", percent_left+"%"); 
//			$("div#hasDone-section").css("height", percent_hasDone+"%");
//			$("span.number-hasDone").each( function(i, ele) {
//				new CountUp(ele, number_hasDone, countUpJS_options_hasDone).start();
//			});
//			$("span.number-left").each( function(i, ele) {
//				new CountUp(ele, number_left, countUpJS_options_left).start();
//			});
//		}, 200 );
//	});
	
	number_hasDone = number_hasDone_nonAutomatic;
	number_left = number_toGo - number_hasDone;

	currentTime = currentTime_nonAutomatic;
	days_left = days_left_constant - currentTime.getDate() - 31*( currentTime.getMonth()+1-7 );


	$("object#d-day-integer").attr('data', `@asset/image/number-${days_left.toString()}.svg`);
	$("span#currentTime").html( `2020-0${currentTime.getMonth()+1}-${addZero(currentTime.getDate())} ${addZero(currentTime.getHours())}:${addZero(currentTime.getMinutes())}:${addZero(currentTime.getSeconds())}` );



	var percent_hasDone = number_hasDone / number_toGo * 100;
	var percent_left = number_left / number_toGo * 100;

	setTimeout( function() {
		$("object#d-day-integer").attr({ width: "", height: ""});

		$("div#leftToGo-section").css("height", percent_left+"%"); 
		$("div#hasDone-section").css("height", percent_hasDone+"%");
		$("span.number-hasDone").each( function(i, ele) {
			new CountUp(ele, number_hasDone, countUpJS_options_hasDone).start();
		});
		$("span.number-left").each( function(i, ele) {
			new CountUp(ele, number_left, countUpJS_options_left).start();
		});
	}, 200 );
}
	

// CORS로 블록당함. 국회 네이노오오오오옹오오오ㅗ오오오오ㅗㅇㅁ

$(document).ready( function() { setTimeout( redraw_graph, 500 ) });

$(document).on("load", redraw_graph);

$(document).resize( redraw_graph );