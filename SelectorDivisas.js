
//Una vez vinculada la API de divisas, creo el botón selector que permitirá cambiar de divisa.
const basicPrice = document.getElementById ("basicPrice")
const professionalPrice = document.getElementById ("professionalPrice")
const premiumPrice = document.getElementById ("premiumPrice")
const priceCard = document.getElementById("price")
const buttonCard = document.getElementById("buttonCard")
const options = [
    { value: 'USD', text: 'USD'},
    { value: 'EUR', text: 'EUR'},
    { value: 'GBP', text: 'GBP'}
];
//Busco las opciones que tiene el selector de divisas.
options.forEach(optionData => {
    const option = document.createElement("option")
    option.value = optionData.value;
    option.textContent = optionData.text;
    buttonCard.appendChild(option);
});
const GetDataFromApi = async () =>{
    const currency = await fetch ("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json");
    const dataFromApi = await currency.json();
    console.log(dataFromApi.eur.usd);
    
    buttonCard.addEventListener("change", (event) => {
    
        if(buttonCard.value === 'EUR'){
            basicPrice.innerText="€ 0"
            professionalPrice.innerText = "€" + Math.floor(25 / dataFromApi.eur.usd) 
            premiumPrice.innerText = "€" + Math.floor(60 / dataFromApi.eur.usd) 
        } else if (buttonCard.value === 'GBP'){
            basicPrice.innerText="£ 0"
            professionalPrice.innerText = "£" + Math.floor(dataFromApi.eur.gbp * 25)
            premiumPrice.innerText = "£" + Math.floor(dataFromApi.eur.gbp * 60)
        } else if (buttonCard.value === 'USD'){
            basicPrice.innerText = "$ 0 "
            professionalPrice.innerText = "$ 25"
            premiumPrice.innerText = "$ 60" 
        }  
    })  
} 

GetDataFromApi();


