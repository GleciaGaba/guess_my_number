'use strict';
//Pour faciliter les tests pendant le développement du jeu, affichez
//le secretNumber dans la page au lieu du « ? » de base.

//Ici l’objectif est de mettre en place la logique du jeu. Tout d’abord, tout en
//haut de votre code, créez une const « secretNumber » qui créera un nombre
//aléatoire de 1 à 20.

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

//Nous allons maintenant créer la logique du HighScores. Créez
//tout d’abord sous la variable score, une variable « highScore »
//initialisé à 0.
let highScore = 0;

//Un Event est une action qui se passe sur la page, par
//exemple une action au clic, une action quand la souris se
//déplace, etc …
//Nous allons ici créer un listener au clic sur le bouton « check »
//et logger la valeur de l’input correspondant à la classe
//« guess ».

//Nous allons maintenant stocker la valeur de retour de l’input et la
//stocker dans une constante « guess », puis il faudra logger dans la
//console la valeur de « guess » et son type.

//Plus tard nous devrons
//comparer la valeur de l’input avec un élément de type Number, que
//faut-il faire pour transformer la valeur de « guess » dans le bon type ?
//Faites une première condition dans le block-scope du listener : si la
//valeur de l’input est inexistante renvoyer un message « ⛔ No
//number! » à la place du message de base correspondant à la classe
//« message ».
//Cliquez sur « check », le message s’affiche-t’il?

const check = document.querySelector('.check');

//À présent, travaillons sur la logique du jeu, il y aura 3 scénarios :

//- le nombre « guess » est égale au nombre « secretNumber », le joueur a
//donc gagné, le message a affiché sera « � Correct Number ! »

//- le nombre « guess » est plus grand que « secretNumber », le message
//« � Too high ! » doit apparaître, le score doit être réduit de 1 et doit être
//mis à jour

//- le nombre « guess » est plus petit que « secretNumber », le message
//« � Too low ! » doit apparaître, le score doit être réduit de 1 et doit être
//mis à jour
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

check.addEventListener('click', event => {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No Number');
  } else if (guess === secretNumber) {
    //Nous allons changer, en cas de victoire du joueur, la couleur de
    //fond de la page et augmenter la largeur de la fenêtre contenant
    //le « secretNumber ».
    //La style du background de l’élément body devra être #60b347 et
    //la largeur de la fenêtre contenant le « secretNumber » devra être
    //30rem.
    // Cachez à présent la valeur du « secretNumber » et
    //affichez-la simplement , en cas de victoire du joueur.
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    displayMessage('Correct Number !');

    //Créez maintenant une fonction « displayMessage » en dessous
    //de la variable highScore, au début de votre code.

    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too high !' : 'Too low !');
    score--;
    if (score > 1) {
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('body').style.backgroundColor = 'orange';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Nous avons vu comment manipuler des éléments du DOM mais
//il est aussi possible de manipuler le style des éléments du
//DOM ! Et ça grâce à la propriété style disponible en tapant :
//document.querySelector(unSélécteur).style

//Implémentez une nouvelle fonctionnalité : la réinitialisation du jeu, afin que le joueur puisse faire une nouvelle
//partie !
//Vos tâches :
//Sélectionnez l'élément avec la classe 'again' et attachez un gestionnaire d'événements de clic
//Dans la fonction du gestionnaire, restaurez les valeurs initiales des variables 'score' et ‘secretNumber'
//Restaurez les conditions initiales des champs de message, de number, de score et de guess
//Restaurez également la couleur d'arrière-plan d'origine (#222) et la largeur du number (15rem)

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});

//Implement Highscores
//JavaScript dans le navigateur
//DOM & Events

//Maintenant, l’objectif est de mettre à jour le meilleur score du
//joueur dans highScore.

//Il faudra pour cela créer un if dans le
//bloc où le jour a gagné. La condition est simple, si le score du
//joueur est supérieur au highscore alors …
