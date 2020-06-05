function randy(){    
    var ip;
    fetch('https://api.ipify.org/?format=json')
    .then(results => results.json())
    .then(data => {
	   ip=data.ip;
	   const check = document.getElementById('check').innerText;  
	   if(check=="true"){
		  const randyNumber = Math.floor(Math.random()*200)+0;
		  document.getElementById('randy').innerText = randyNumber;
		  const ipString = ip.toString(); // '192.168.1.1'
		  var sumi = 0;// 0 
		  var i=0;
		  while(i< ipString.length){
			 if(ipString[i]!='.'){
				sumi = sumi + parseInt(ipString[i]);
				i++;
			 }else{
				i++;
			 }
		  } 
		 
		  $('.increaser').each(function () {
			 $(this).prop('Counter',0).animate({
				Counter: $(this).text(),
			 }, {
				duration: 5000,
				easing: 'swing',
				step: function (now) {
				    $(this).text(Math.ceil(now));
				}
			 })
		  }); 
			 // Runnig equiment function to wonnder or looser
			 $(document).ready(function(){
				setTimeout(function(){
				    equiment(randyNumber, sumi);                        
				}, 5000);
			 })
			 
			 document.getElementById('check').innerHTML = 123;
	   }else{
		  window.alert('شما شانس خود را قبلا امتحان کرده اید!'); 
	   }
    });
    function equiment (randyNumber, sumi) {
	   if(sumi==randyNumber)
		  document.getElementById('pResult').innerText='شمابردید';
	   else    
		  document.getElementById('pResult').innerText='شما باختید';
    }

}
var ip;
fetch('https://api.ipify.org/?format=json')
.then(result => result.json())
.then(data => {
    var realIp = data.ip;
    const ipString = realIp.toString(); // '192.168.1.1'
var sumi = 0;// 0 
var i=0;
while(i< ipString.length){
    if(ipString[i]!='.'){
	   sumi = sumi + parseInt(ipString[i]);
	   i++;
    }else{
	   i++;
    }
}
    document.getElementById('pResult').innerText=data.ip;
});
 
Window.alert(sumi);