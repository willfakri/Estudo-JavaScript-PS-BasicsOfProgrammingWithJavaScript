
/*
comprar telefone ate acabar o dinheiro da conta bancaria;
tambem pode comprar acessorio para cada telefone;
depois de calcular o preço, adicionar uma taxa e formatar saida do valor
no final, verifica se tem o dinheiro para pagar

const:
tax rate
phone price
acessory price
quer pagar quanto?
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