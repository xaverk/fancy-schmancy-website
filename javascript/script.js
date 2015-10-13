var initalSizeChange = true;
var loaded = false;

window.addEventListener('resize', function(event) {
	checkWindowSize();
});

function checkWindowSize() {
	var sideBar = document.getElementById("sideBar");
	if (document.documentElement.clientWidth > 700) {
		if (sideBar.className != "") {
			sideBar.className = "";
			document.getElementById("content").className = "";
		}
		initalSizeChange = true;
	} else if (initalSizeChange == true) {
		sideBar.className = "retracted" + (loaded == true ? " animated" : "");
		initalSizeChange = false;
	}
}

function toggleSideBar() {
	var className = document.getElementById("sideBar").className;
	if (className == "animated") {
		document.getElementById("sideBar").className = "retracted animated";
		document.getElementById("content").className = "animated";
	} else {
		document.getElementById("sideBar").className = "animated";
		document.getElementById("content").className = "disabled animated";;
	}
}

function goTo(URL) {
	var delay = 0;
	var sideBar = document.getElementById("sideBar");
	if (document.documentElement.clientWidth < 700 && sideBar.className == "animated")
	{
		delay = 0.35;
		toggleSideBar();
	}
	
	window.setTimeout( function() { window.location = URL }, delay*1000);
}

checkWindowSize();
loaded = true;
