console.log("hello world");
import './style.css';
import './normalize.css';
import Icon from './icon.png';
import Instagram from './instagram.svg';
import Spotify from './spotify.svg';

/* function component() {
    const element = document.createElement('div'); 
   // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = Icon;
 
   element.appendChild(myIcon);
 
    return element;
  }
  */

function component() {
  const wrapperDiv = document.createElement('div');
  const headerDiv = document.createElement('div');

  // adding classes
  wrapperDiv.classList.add('wrapper');
  headerDiv.classList.add('wrapper--header')

  // creating links to other page
  const aHome = document.createElement('a');
  const aEat = document.createElement('a');
  const aDrink = document.createElement('a');
  const aHappy = document.createElement('a');

  // adding text to <a>
  aHome.text = 'Home';
  aEat.text = 'Eat';
  aDrink.text = 'Drink'
  aHappy.text = 'Happy';
  
  // creating icon and svgs
  const MyIcon = new Image();
  MyIcon.classList.add('wrapper--header--icon');
  MyIcon.src = Icon;

  const SpotifyIcon = new Image();
  SpotifyIcon.classList.add('wrapper--header--svg');
  SpotifyIcon.src = Spotify;


  const InstagramIcon = new Image();
  InstagramIcon.classList.add('wrapper--header--svg');
  InstagramIcon.src = Instagram;

  // creating button
  const reservationButton = document.createElement('button');
  reservationButton.classList.add('wrapper--header--button')
  reservationButton.textContent = 'Reservation';

  // adding every element to header
  headerDiv.appendChild(aHome);
  headerDiv.appendChild(aEat);
  headerDiv.appendChild(aHappy);
  headerDiv.appendChild(MyIcon);
  headerDiv.appendChild(SpotifyIcon);
  headerDiv.appendChild(InstagramIcon);
  headerDiv.appendChild(reservationButton);

  // adding header to wrapper
  wrapperDiv.appendChild(headerDiv);

  return wrapperDiv;
}
  document.body.appendChild(component());