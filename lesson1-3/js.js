var money, name, time, price;
var time = 17;

function start() {
	money = prompt("Ваш бюджет", "1000"); 
	while(isNaN(money) || money == '' || money == null) {
		money = prompt("Ваш бюджет", "1000"); 
	}
	name  = prompt("Название вашего магазина", "");
}
start();

console.log("1. " + name + " " + money);

mainList = {
	shopBudget: money,
	shopName: name,
	shopGoods: [],
	employers: {
	},
	open: false,
	price: 100000,
	discount: true
}

function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?");
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50 && a != "" ) {
			mainList.shopGoods [i] = a;
		} else {
			i--;
		}
	}
}
chooseGoods();

console.log(mainList.shopGoods);

function workTime(time) {
if (time < 0 ) {
		console.log("Такого просто не может быть");
	} else if (time > 8 && time < 20) {
		console.log("Время работать!");
	} else if(time < 24) {
		console.log("Уже слишком поздно");
	} else {
		console.log("В сутках только 24 часа");
	}; 
}
workTime(time);

function daily() {
	alert("Бюджет на 1 день: " + mainList.shopBudget/30);
}
daily();

function price() {
	if (mainList.discount) {
		mainList.price = mainList.price/100*80;
		console.log(mainList.price);
	}	
}
price();

function addEmployers() {
	mainList.employers["01"] = prompt('Введите имя')
	mainList.employers["02"] = prompt('Введите имя')
	mainList.employers["03"] = prompt('Введите имя')
	mainList.employers["04"] = prompt('Введите имя')
}

addEmployers();
console.log(mainList.employers)