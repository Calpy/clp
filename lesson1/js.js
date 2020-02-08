var money = prompt("Ваш бюджет", "1000"); 
var name  = prompt("Название вашего магазина", "");

console.log("1. " + name + " " + money);

shop = {
	budget: money,
	name: name,
	shopGoods: [],
	employers: {
		name: "Kirill",
		old: 18, 
	},
	open: false
}

shop.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
shop.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
shop.shopGoods[2] = prompt("Какой тип товаров будем продавать?");
console.log(shop.shopGoods);

alert("Бюджет на 1 день: " + shop.budget/30);