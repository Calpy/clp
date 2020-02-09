var text = "урок-3-был слишком легким";

function ucFirst (text) {
	if (!text) return text; 
	return  text[0].toUpperCase() + text.slice(1);
} 

text = ucFirst(text);
console.log(text);
text = text.replace('Урок-3-был', 'Урок 3 был');
text = text.replace('легким', '');

text = text.slice(0, text.length-3);
text= text + "00" 


console.log(text);

var arr = [20, 33, 1, "Человек", 2, 3];


function action(arr) {
	sum = 0;
	for(i = 0; i < arr.length - 1; i++) {
		if ( typeof arr[i] ==  'number') {
			sum = sum + arr[i]**2;
		}
	}
	return sum**0.5
}

console.log(action(arr));