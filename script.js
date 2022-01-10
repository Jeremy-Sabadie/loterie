//début de la récupération des élément de notre côté.
var MyNumberInput = document.querySelector('#my-numbers');

const MyRegisterButton =document.querySelector('#my-register');
var MyListNumber = document.querySelector('#my-list');
//début de la récupération des élément du côté des nombres gagnants.
var WinNumberInput = document.querySelector('#winner-numbers');
//récupération des éléléments de vérifiation
const WinRegisterButton =document.querySelector('#win-register');
var WinListNumber = document.querySelector('#win-list');
const VerifyButton = document.querySelector('#reponse');
const TextResult = document.querySelector('#result');
const Reset = document.querySelector('#reset');
TheWinnerNumber=[];
//fin de la récupération des différents éléments.result-container
var MyNumbersArray = [];
var WinNumbersArray = [];
function MyStock(){
    if(parseInt(MyNumberInput.value)){
    MyNumbersArray.push(MyNumberInput.value);}
    MyNumbersArray= MyNumbersArray.join('|');
    MyListNumber.innerHTML= "vos numéros sont : "+MyNumbersArray;
    MyNumberInput.value="";
    
}
function WinStock(){
    if(parseInt(WinNumberInput.value)){
    WinNumbersArray.push(WinNumberInput.value);}
    WinNumbersArray=WinNumbersArray.join('|');
    WinListNumber.innerHTML="les numéros tirés sont : "+WinNumbersArray;
}
function TheReponse(){
    
}
    
            
        
        
            
        
        
        
      

        
        
        


function Reset(){
    WinNumbersArray=[];
    MyNumbersArray= [];
    TextResult.innerHTML="";
    WinListNumber.innerHTML="";
    MyListNumber.innerHTML="";
}





MyRegisterButton.onclick=MyStock;
WinRegisterButton.onclick=WinStock;
VerifyButton.onclick= TheReponse;
Reset.onclick= Reset;