var number = 13195;
var factors = [];
var primeFactors = [];

var primeTest = function(input) {
    var innerFactors = [];
    for (var i=2; i<=input/2; i++) {
		if (input%i===0) {
			innerFactors.push(i);
		}
	}
	if (innerFactors.length<1) {
		return true;
	}
	else {
		return false;
	}
};

for (var potentialFactor=0; potentialFactor<number/2; potentialFactor++) {
	if (number%potentialFactor===0) {
		factors.push(potentialFactor);
	}
}


for (var i=factors.length-1; i>=1; i--) {
	if (primeTest(factors[i]) === true) {
		primeFactors.push(factors[i]);
	}
}

console.log(primeFactors[0]);