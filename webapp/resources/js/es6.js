var es6 = (function() {
	
	var testObj1 = {
		name: 'testObj1',
		color: 'blue',
		state: 'oregon'
	}
	
	var init = function() {
		console.log('es6 => init()');
		$('#value1').text('es6 testing');
	};
	
	var stringInterpolation = function() {
		var string = 'This is ${testObj1.name}, color is ${testObj1.color}, state is ${testObj1.state}';
		$('#stringInterpolation').text(string);
	};
	
	var arrows = function() {
		var nums = ['one', 'two', 'three', 'four'];
		var result = '=> ';
		nums.forEach(v => {
			result += ', ';
			result += v;
		});
		$('#arrows').text(result);
	};
	
	var defaultParam = function(param = 'abc') {
		$('#defaultParam').text(param);
	};
	
	var extendedParam = function() {
		var a = [123, 'test', true];
		var aBroker = [1, 2, ...a];
		var breaker = 'JOSHUA';
		var broker = [...breaker];
		var result = broker +' || '+ aBroker;
		$('#extendedParam').text(result);
	};
	
	var numberFormatting = function(lang) {
		var fmt, result;
		var input = $('#numberFormattingInput').val();
		if(lang == 'en') {
			fmt = new Intl.NumberFormat("en-US");	
		} else {
			fmt = new Intl.NumberFormat("de-DE");	
		}
		result = fmt.format(input);	
		$('#numberFormatting').text(result);
	};
	
	var currencyFormatting = function(lang) {
		var fmt, result;
		var input = $('#currencyFormattingInput').val();
		if(lang == 'en') {
			fmt = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
		} else {
			fmt = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });
		}
		result = fmt.format(input);
		$('#currencyFormatting').text(result);
	};

	var dateFormatting = function(lang) {
		var fmt, result;
		var input = $('#dateFormattingInput').val();
		if(lang == 'en') {
			fmt = new Intl.DateTimeFormat("en-US");
		} else {
			fmt = new Intl.DateTimeFormat("de-DE");
		}
		result = fmt.format(new Date(input));
		$('#dateFormatting').text(result);
	};
	
	var userClassTest = function() {
		var testUser = new User("Josh", "30");
		console.log("TestUser => ", testUser);
		console.log("toString() => ", testUser.toString());
		var testName = testUser.getName();
		console.log("testName => ", testName);
		var testAge = testUser.getAge();
		console.log("testAge => ", testAge);
		testUser.increaseAge();
		console.log("increaseAge() => ", testUser.getAge());
		
	};
	
	return {
		init: init,
		stringInterpolation: stringInterpolation,
		arrows: arrows,
		defaultParam: defaultParam,
		extendedParam: extendedParam,
		numberFormatting: numberFormatting,
		currencyFormatting: currencyFormatting,
		dateFormatting: dateFormatting,
		userClassTest: userClassTest
	}
	
})();