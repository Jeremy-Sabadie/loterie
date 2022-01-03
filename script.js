
//ici on récupère les diférents éléments du DOM.
var WinnerNumbers = document.getElementById('win-numbers');//input pour entrer les numéros gagnants.
var MyNumbers = document.getElementById('my-numbers');//input pour entrer mes numéros.
const VerifyButon = document.getElementById('verify');//bouton de vérification.
const WinRegisterButon = document.getElementById('win-register');//bouton pour enregistrer le numéro gagnant entré.
const MyRegisterButon = document.getElementById('my-register');//bouton pour enregistrer le notre numéro entré.
const Message = document.querySelectorAll('h1');
var MyNumbersArray = [];//Ce tableau vide servira à stocker nos numéros.
var WinnerNumbersArray = [];//ce tableau est initialisé vide pour y stocker les numéros gagnantsrentés.
//la fonction stock récupèrera les valeurs entrées dans les inputs et les tockera dans des tableaux.

function StockWinner(){
    
   


    
    WinnerNumbersArray.push(WinnerNumbers.value);//On stocke la valeur de l'input dans le tableau.
    
    console.log('les numéros gagnants sont : '+WinnerNumbersArray);

}
function MyStockNumber(){
    
    MyNumbersArray.push(MyNumbers.value); //On stocke la valeur de l'input dans le tableau.
    
    console.log('mes numéros  sont :'+MyNumbersArray);
    

}
  var CompareArrays = WinnerNumbersArray===MyNumbersArray;
    
    function verify(){
        if(CompareArrays==true){
            alert('win');
            Message.innerHTML='you win';
        }
        else{
            alert('loose');
            Message.innerHTML='loose';
        }



    /*console.log(GlobalTable);
    GlobalTable.forEach(element =>console.log(element));
    if(ily a concordance){
        message.innerHHTML('numéro gagnant')*/
}
        

   
WinRegisterButon.onclick=StockWinner
MyRegisterButon.onclick=MyStockNumber
VerifyButon.onclick=verify

    


