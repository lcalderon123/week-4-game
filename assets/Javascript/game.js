


var randomNumber;
var losses = 0;
var wins = 0;
var previousNumber = 0;




var startGame = function() {

	$(".crystals").empty();


var images = [
			'https://thumbs.gfycat.com/WeightyAgreeableDanishswedishfarmdog-max-1mb.gif',
			'http://31.media.tumblr.com/224595f52671895de1608de69012d1d6/tumblr_nfk2itZtPn1tqou9go1_500.gif',
			'http://pictures.willowsgraphics.com/compybackup/pics/animatedicons/shootingstar.gif', 
			'https://media.giphy.com/media/yfoeIMBjzVw52/giphy.gif',
			];
	
	randomNumber = Math.floor(Math.random() * 101) + 19;

	
	$("#result").html('Catch this many stars: ' + randomNumber);

	

	for (var i=0; i < 4; i++) {

		var cardRandom = Math.floor(Math.random() * 11) + 1;

		var crystal = $("<div>");

		

			crystal.attr({
				"class": 'crystal',
				"data-random" : cardRandom
			});

			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover",
				"background-position":"center"

			});



			$(".crystals").append(crystal);
			

			$("#previous").html("Total Score: " + previousNumber);

			
	}

	


}

startGame();

$(document).on("click", '.crystal', function() {

	var num = parseInt($(this).attr('data-random'));

	var loopImages = function(){

         $('.crystals').fadeOut(1500, function(){

                   $('.crystals').fadeIn(1500, loopImages);           
         });
    }
    
    loopImages();

	previousNumber += num;

	$("#previous").html("Total Score: " + previousNumber);

		if (previousNumber > randomNumber) {

			losses++;

			
			$("#losses").html("Your Losses: " + losses);

			previousNumber = 0;

			startGame();


		}

		else if(previousNumber === randomNumber) {

			wins++;

		$("#wins").html("Your Wins: " + wins);

		previousNumber = 0;

		startGame();

	}

	});


