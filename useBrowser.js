	var userAgent = navigator.userAgent.toLowerCase();
	console.log(userAgent)
	var Mozila = /firefox/.test(userAgent);
	var Chrome = /chrome/.test(userAgent);
	var Safari = /safari/.test(userAgent);
	var Opera  = /opera/.test(userAgent);
	console.log(Mozila);
    console.log(Chrome);
    console.log(Safari);
    console.log(Opera);
	var InternetExplorer = false;
	if((/mozilla/.test(userAgent) && !/firefox/.test(userAgent) && !/chrome/.test(userAgent) && !/safari/.test(userAgent) && !/opera/.test(userAgent)) || /msie/.test(userAgent))
		InternetExplorer = true;
    console.log(InternetExplorer);