/*
* using cross platform mp3 library ion.sound.js https://plugins.jquery.com/ion-sound/
*/

var mp3files = {
	"title" : "title",
	"map" : "map",
	"background" : "background",
	"overground" : "overground",
	"underground" : "underground",
	"castle" : "castle",
};

ion.sound({
    sounds: [
        {
            name: "title"
        },
		{
            name: "map"
        },
		{
            name: "background"
        },
		{
            name: "overground"
        },
		{
            name: "underground"
        },
		{
            name: "castle"
        },
    ],
    volume: 0.9,
    path: "mp3/",
	loop: true,
    preload: true
});

Mario.PlayMusic = function(name) {
	if(name in mp3files)
	{
		if (window.mySoundFile != "")
			ion.sound.stop(window.mySoundFile);

		ion.sound.play(name);
		window.mySoundFile = name;
	}else{
		console.error("Cannot play music track: " + name);
	}
};

Mario.PlayTitleMusic = function() {
	Mario.PlayMusic("title");
};

Mario.PlayMapMusic = function() {
	Mario.PlayMusic("map");
};

Mario.PlayOvergroundMusic = function() {
	Mario.PlayMusic("background");
};

Mario.PlayUndergroundMusic = function() {
	Mario.PlayMusic("underground");
};

Mario.PlayCastleMusic = function() {
	Mario.PlayMusic("castle");
};

Mario.StopMusic = function() {
	if (window.mySoundFile != "")
		ion.sound.stop(window.mySoundFile);
};
