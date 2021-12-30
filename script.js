
//ici on récupère les diférents éléments du DOM.
var WinnerNumbers = document.getElementById('win-numbers');//input pour entrer les numéros gagnants.
var MyNumbers = document.getElementById('my-numbers');//input pour entrer mes numéros.
const VerifyButon = document.getElementById('verify');//bouton de vérification.
const WinRegisterButon = document.getElementById('win-register');//bouton pour enregistrer le numéro gagnant entré.
const MyRegisterButon = document.getElementById('my-register');//bouton pour enregistrer le notre numéro entré.
constMessage = document.getElementsByName('h1');
//la fonction stock récupèrera les valeurs entrées dans les inputs et les tockera dans des tableaux.
function StockWinner(){
    var WinnerNumbersArray = [];//ce tableau est initialisé vide pour y stocker les numéros gagnantsrentés.
   


    
    WinnerNumbersArray.push(WinnerNumbers.value);//On stocke la valeur de l'input dans le tableau.
    WinnerNumbersArray.push(WinnerNumbers.value);//On stocke la nouvelle valeur de l'input dans le tableau.
    console.log(WinnerNumbersArray);

}
function MyStockNumber(){
    var MyNumbersArray = [];//Ce tableau vide servira à stocker nos numéros.
    MyNumbersArray.push(MyNumbers.value); //On stocke la valeur de l'input dans le tableau.
    MyNumbersArray.push(MyNumbers.value); //On stocke la nouvelle valeur de l'input dans le tableau.
    console.log(MyNumbersArray);
}
function verify(){
    GlobalTable = MyNumbersArray.concat(WinnerNumbersArray);
    console.log(GlobalTable);
    GlobalTable.forEach(element =>console.log(element));
    //if(ily a concordance){
        //message.innerHHTML('numéro gagnant')
    }
        
    
WinRegisterButon.onclick=StockWinner
MyRegisterButon.onclick=MyStockNumber
VerifyButon.onclick=verify

