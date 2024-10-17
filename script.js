'use strict';
//Pour faciliter les tests pendant le développement du jeu, affichez
//le secretNumber dans la page au lieu du « ? » de base.

//Ici l’objectif est de mettre en place la logique du jeu. Tout d’abord, tout en
//haut de votre code, créez une const « secretNumber » qui créera un nombre
//aléatoire de 1 à 20.

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

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
const message = document.querySelector('.message');

//À présent, travaillons sur la logique du jeu, il y aura 3 scénarios :

//- le nombre « guess » est égale au nombre « secretNumber », le joueur a
//donc gagné, le message a affiché sera « � Correct Number ! »

//- le nombre « guess » est plus grand que « secretNumber », le message
//« � Too high ! » doit apparaître, le score doit être réduit de 1 et doit être
//mis à jour

//- le nombre « guess » est plus petit que « secretNumber », le message
//« � Too low ! » doit apparaître, le score doit être réduit de 1 et doit être
//mis à jour

check.addEventListener('click', event => {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = 'No Number';
  } else if (guess === secretNumber) {
    //Nous allons changer, en cas de victoire du joueur, la couleur de
    //fond de la page et augmenter la largeur de la fenêtre contenant
    //le « secretNumber ».
    //La style du background de l’élément body devra être #60b347 et
    //la largeur de la fenêtre contenant le « secretNumber » devra être
    //30rem.
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    message.textContent = 'Correct Number !';
  } else if (guess > secretNumber) {
    message.textContent = 'Too high !';
    score--;
    if (score > 1) {
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You lost the game!';
      document.querySelector('body').style.backgroundColor = 'orange';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    message.textContent = 'Too low !';
    score--;
    if (score > 1) {
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You lost the game!';
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

const again = document.querySelector('.btn again');
again.addEventListener('click', function () {});
