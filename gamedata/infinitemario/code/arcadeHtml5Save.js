/*
 * Infinite Mario Bros
 *
 * @SMF Arcade: html5 v2 save type
 * @PHP-Quick-Arcade: ibp save type
 *
 */
function saveHtml5GameSmf(newhighscore, saveSystem)
{
	var checkSessid = parent.document.getElementById("gameSmfToken") ? parent.document.getElementById("gameSmfToken") : (document.getElementById("gameSmfToken") ? document.getElementById("gameSmfToken") : "");
	window.myScoreTrig = typeof window.myScoreTrig == "undefined" ? 0 : window.myScoreTrig;

	if (window.myScoreTrig == 1)
		return false;

	window.myScoreTrig = 1;
	if (saveSystem == "smfhtml5" && checkSessid != "")
	{
		var gameSmfFullscreen = document.getElementById("gameSmfFullscreen") != undefined ? document.getElementById("gameSmfFullscreen").value : 0;
		if (parseInt(gameSmfFullscreen) == 1)
		{
			if (newhighscore != "undefined")
			{
				var sessid = document.getElementById("gameSmfToken");
				var gameForm = document.getElementById("gameForm");
				var vargamescore = document.createElement("INPUT");
				var vargamesessid = document.createElement("INPUT");
				vargamescore.type = "hidden";
				vargamescore.id = "score";
				vargamescore.name = "score";
				vargamescore.value = parseInt(newhighscore);
				gameForm.appendChild(vargamescore);
				vargamesessid.type = "hidden";
				vargamesessid.id = "gamesessid";
				vargamesessid.name = "gamesessid";
				vargamesessid.value = sessid.value;
				gameForm.appendChild(vargamesessid);
				setTimeout(gameForm.submit(), 1000);
				// setTimeout(function(){ window.location = gameForm.action; }, 3000);
				return true;
			}
			else
			{
				var noSmfScore = document.getElementById("noSmfScore").val ? document.getElementById("noSmfScore").val : "No score to save!";
				alert(noSmfScore);
				return false;
			}
		}
		else
		{
			if (newhighscore != "undefined")
			{
				var sessid = parent.document.getElementById("gameSmfToken");
				var gameForm = parent.document.getElementById("gameForm");
				var vargamescore = parent.document.createElement("INPUT");
				var vargamesessid = parent.document.createElement("INPUT");
				vargamescore.type = "hidden";
				vargamescore.id = "score";
				vargamescore.name = "score";
				vargamescore.value = parseInt(newhighscore);
				gameForm.appendChild(vargamescore);
				vargamesessid.type = "hidden";
				vargamesessid.id = "gamesessid";
				vargamesessid.name = "gamesessid";
				vargamesessid.value = sessid.value;
				gameForm.appendChild(vargamesessid);
				gameForm.submit();

				// this popup trick should force the child window to close even if it is blocked
				var myArcadeWindowX = window.open();
				if(myArcadeWindowX && !myArcadeWindowX.closed)
				{
					myArcadeWindowX.document.open();
					myArcadeWindowX.document.close();
					myArcadeWindowX.close();
				}

				// setTimeout(function(){ window.parent.location = gameForm.action; }, 3000);
				// throw new Error("<<< SAVING SCORE >>>");
				return true;
			}
			else
			{
				var noSmfScore = parent.document.getElementById("noSmfScore").val ? parent.document.getElementById("noSmfScore").val : "No score to save!";
				alert(noSmfScore);
				return false;
			}
		}

		return false;
	}
	else
	{
		// IBP save system
		var gscore = newhighscore;
		var gname = "marioinfinite";
		
		var post_data = {'gname':gname, 'gscore':gscore};
		//send data using jQuery $.post()
		$.post('index.php?act=Arcade&do=newscore', post_data, function(data) {
			console.log("Saving score for Infinite Mario Bros");
		}).fail(function(err) {
		});
	}
}
