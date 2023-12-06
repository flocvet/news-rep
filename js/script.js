
$.get('http://data.fixer.io/api/latest?access_key=3df93674193b7b6a7b9330354f7f1bac&format=1',
	function(response){
		$('.exchange-usd').html((response.rates.RUB / response.rates.USD).toFixed(2));
		$('.exchange-eur').html((response.rates.RUB / response.rates.EUR).toFixed(2));
			});


