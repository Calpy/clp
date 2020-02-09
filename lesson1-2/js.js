var money = prompt("Ваш бюджет", "1000"); 
var name  = prompt("Название вашего магазина", "");
var time = 17;

console.log("1. " + name + " " + money);

mainList = {
	shopBudget: money,
	shopName: name,
	shopGoods: [],
	employers: {
		name: "Kirill",
		old: 18, 
	},
	open: false
}

for (let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50 && a != "" ) {
		mainList.shopGoods [i] = a;
	} else {
		i--;
	}
}


// mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
// mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
// mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");
console.log(mainList.shopGoods);

if (time < 0 ) {
	console.log("Такого просто не может быть");
} else if (time > 8 && time < 20) {
	console.log("Время работать!");
} else if(time < 24) {
	console.log("Уже слишком поздно");
} else {
	console.log("В сутках только 24 часа");
}; 


alert("Бюджет на 1 день: " + mainList.shopBudget/30);