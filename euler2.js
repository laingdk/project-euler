var beforePrevious = 1;
var previous = 2;
var sum = 2;

for (current = 3; current<=4000000; current=(beforePrevious+previous)) {
    if (current%2===0) {
		sum += current;
	}
	else {
		sum += 0;
	}
	beforePrevious = previous;
	previous = current;
}

console.log(sum);