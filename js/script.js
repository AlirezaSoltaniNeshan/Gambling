
                function randy(){    
                    var ip;
                    fetch('https://api.ipify.org/?format=json')
                    .then(results => results.json())
                    .then(data => {
                        ip=data.ip
                        const check = document.getElementById('check').innerText;  
                        if(check=="true"){
                            const randyNumber = Math.floor(Math.random()*9999)+100;
                            document.getElementById('randy').innerText = randyNumber;
                            $('.increaser').each(function () {
                                $(this).prop('Counter',0).animate({
                                    Counter: $(this).text()
                                }, {
                                    duration: 100,
                                    easing: 'swing',
                                    step: function (now) {
                                        $(this).text(Math.ceil(now));
                                    }
                                });
                            });  
                            document.getElementById('check').innerHTML = 123;
                        }else{
                            window.alert('شما شانس خود را قبلا امتحان کرده اید!'); 
                        }
                    });

                }
