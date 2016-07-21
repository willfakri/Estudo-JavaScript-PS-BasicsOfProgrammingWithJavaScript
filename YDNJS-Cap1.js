/*
https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/ch1.md
- Write a program to calculate the total price of your phone purchase. 
You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. 
You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
- After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
- Finally, check the amount against your bank account balance to see if you can afford it or not.
- You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold,"
 as well as a variable for your "bank account balance.""
- You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
- Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. 
You may prompt the user for their bank account balance, for example. Have fun and be creative!


comprar telefone ate acabar o dinheiro da conta bancaria;
tambem pode comprar acessorio para cada telefone;
depois de calcular o preço, adicionar uma taxa e formatar saida do valor
no final, verifica se tem o dinheiro para pagar
consts:
tax rate
phone price
acessory price
quanto esta disposto a pagar
saldo banco
*/

const TAX_RATE = 0.08; //Percent
const PHONE_PRICE = 200.00;
const ACESSORY_PRICE = PHONE_PRICE * 0.10;
var BANK_ACCOUNT_BALANCE = prompt("Quanto você tem de dinheiro no banco?");

var spending_Threshould = (prompt("Quantos porcento você está disposto a gastar?") * BANK_ACCOUNT_BALANCE) / 100;
var total = 0;

var hasMoney = true;
while(hasMoney){
    var phoneFinalPrice = calculateTax(PHONE_PRICE);
    if(spending_Threshould > phoneFinalPrice){
        spending_Threshould -= phoneFinalPrice;
        total += phoneFinalPrice;
        console.log("1 Celular no valor de " + formatAmount(phoneFinalPrice));        
    }
    
    var acessoryFinalPrice = calculateTax(ACESSORY_PRICE);
    if(spending_Threshould > acessoryFinalPrice){
        spending_Threshould -= acessoryFinalPrice;
        total += ACESSORY_PRICE;
        console.log("1 acessório de celular no valor de " + formatAmount(acessoryFinalPrice));
    }
    else{
        hasMoney = false;
        console.log("Total da compra: " + formatAmount(total));
        console.log("Quanto sobrou: " + formatAmount(BANK_ACCOUNT_BALANCE - total));
    }
}

function calculateTax(price){
    return price + (price * TAX_RATE);
}

function formatAmount(amount){
    return "R$" + amount.toFixed(2);
}