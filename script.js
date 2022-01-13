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
const BtnReset = document.querySelector('#reset');
TheWinnerNumber=[];
//fin de la récupération des différents éléments.result-container
var MyNumbersArray = [];
var WinNumbersArray = [];







function MyStock(){
    if(parseInt(MyNumberInput.value)){
      MyNumbersArray.join('|');
    MyNumbersArray.push((parseInt(MyNumberInput.value)));}
    
    MyListNumber.innerHTML= "vos numéros sont : "+MyNumbersArray;
    MyNumberInput.value="";
    
}
function WinStock(){
    if(parseInt(WinNumberInput.value)){
      WinNumbersArray.push((parseInt(WinNumberInput.value)));}
    
    WinListNumber.innerHTML="les numéros tirés sont : "+WinNumbersArray;
    WinNumberInput.value="";
}

    
            
        
function TheReponse() {
  console.log('TestLog');
    if (MyNumbersArray.length >= 1 && WinNumbersArray >= 1) {
       TheWinnerNumber = [];
      Win = false;
      MyNumbersArray.forEach((element) => {
        if (WinNumbersArray.includes(element)) {
          console.log('yes');
          console.log(element);
          TextResult.innerHTML =
          "vous avez gagné avec le numéro: " + element;
          TextResult.style.color="green";
          win = true;
          TheWinnerNumber.push(element);
        }
        else{console.log('loose');
        TextResult.innerHTML = ":(Vous n'avez pas gagné!";
        TextResult.style.color="red";}
      });
      
        
        //TheWinnerNumber.push(element);//problème d'accès à l'élément element.
      
        



      }
        
      
        
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
VerifyButton.onclick=  TheReponse;
BtnReset.onclick= Reset;