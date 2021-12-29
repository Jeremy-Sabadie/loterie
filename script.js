
//ici on récupère les diférents éléments du DOM.
var WinnerNumbers = document.getElementById('win-numbers');
var MyNumbers = document.getElementById('my-numbers');
const VerifyButon = document.getElementById('verify');
const RegisterButon = document.getElementById('register');
//la fonction stock récupèrera les valeurs entrées dans les inputs et les tockera dans des tableaux.
function Stock(){
    var WinnerArrayNumbers = [];//ce tableau est initialisé vide pour y stocker les numéros rentés.
    var MyNumbersArray =[];//ce tableau est initialisé vide pour y stocker les numéros rentés.


    MyNumbersArray.push(MyNumbers.value);//On stocke la valeur de l'input dans le tableau.
    WinnerArrayNumbers.push(WinnerNumbers.value);//On stocke la valeur de l'input dans le tableau.
    console.log(WinnerArrayNumbers);
console.log(MyNumbersArray  );
}
RegisterButon.onclick=Stock //lors du clic sur le bouton enregistrer on exécute la fonction stock.
