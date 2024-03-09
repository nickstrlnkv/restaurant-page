console.log("hello world");
import './style.css';
import './normalize.css';
import Icon from './icon.png';
import Instagram from './instagram.png';
import Spotify from './spotify.png';
import FirstImage from './first.jpg';
import SecondImage from './second.jpg';
import ThirdImageOne from './third1.jpg';
import ThirdImageTwo from './third1-2.jpg';
import FourthImageOne from './fouth1.jpg';
import FourthImageTwo from './fouth2.jpg';
import RestaurantMap from './map.jpg';
import IconTitle from './favicon.png';
import 'animate.css';

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
  aHome.classList.add('animate__animated');
  aHome.classList.add('animate__fadeInLeft');
  aHome.classList.add('home');
  aEat.text = 'Eat';
  aEat.classList.add('animate__animated');
  aEat.classList.add('animate__fadeInLeft');
  aDrink.text = 'Drink'
  aDrink.classList.add('animate__animated');
  aDrink.classList.add('animate__fadeInLeft');
  aHappy.text = 'Happy';
  aHappy.classList.add('animate__animated');
  aHappy.classList.add('animate__fadeInLeft');
  
  // creating icon and svgs
  const MyIcon = new Image();
  MyIcon.classList.add('wrapper--header--icon');
  MyIcon.classList.add('animate__animated');
  MyIcon.classList.add('animate__flash');
  MyIcon.src = Icon;

  const SpotifyIcon = new Image();
  SpotifyIcon.classList.add('wrapper--header--svg');
  SpotifyIcon.src = Instagram;


  const InstagramIcon = new Image();
  InstagramIcon.classList.add('wrapper--header--svg');
  InstagramIcon.src = Spotify;

  // creating button
  const reservationButton = document.createElement('button');
  reservationButton.classList.add('wrapper--header--button');
  reservationButton.classList.add('animate__animated');
  reservationButton.classList.add('animate__pulse');
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

  // adding content
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('wrapper--content');


  const wrapperImg1 = document.createElement('div');
  wrapperImg1.id = 'wrapper-img1';
  const wrapperText1 = document.createElement('div');
  wrapperText1.id = 'wrapper-text1';

  const wrapperText1_h4 = document.createElement('h4');
  wrapperText1_h4.classList.add('animate__animated')
  wrapperText1_h4.classList.add('animate__fadeInLeft');
  wrapperText1_h4.id = 'wrapper-text1_h4';
  wrapperText1_h4.textContent = 'Mexico City Food & Vibes | Mezcal & Cocktails | Natural Wines | Delivery | Events |';

  const wrapperText1_h4_2 = document.createElement('h4');
  wrapperText1_h4_2.id = 'wrapper-text1_h4_2';
  wrapperText1_h4_2.classList.add('animate__animated')
  wrapperText1_h4_2.classList.add('animate__fadeInLeft');
  wrapperText1_h4_2.textContent = 'Last chance to attend Jueves Mezcalero with an all-female lineup';


  wrapperText1.appendChild(wrapperText1_h4);
  wrapperText1.appendChild(wrapperText1_h4_2);


  const wrapperImg2 = document.createElement('div');
  wrapperImg2.id = 'wrapper-img2';

  const wrapperImg3 = document.createElement('div');
  wrapperImg3.id = 'wrapper-img3';
  const wrapperImg3_2 = document.createElement('div');
  wrapperImg3_2.id = 'wrapper-img3-2';

  const wrapperText4 = document.createElement('div');
  wrapperText4.id = 'wrapper-img4';

  const wrapperImg4 = document.createElement('div');
  wrapperImg4.id = 'wrapper-img4-2';

  const wrapperText5 = document.createElement('div');
  wrapperText5.id = 'wrapper-text5';

  const wrapperText5_p = document.createElement('p');
  wrapperText5_p.classList.add('wrapperText5_p');
  wrapperText5_p.textContent = 'hola@hola@barraunionsquare.com';
  wrapperText5.appendChild(wrapperText5_p);

  const wrapperText5_p2 = document.createElement('p');
  wrapperText5_p2.classList.add('wrapperText5_p');
  wrapperText5_p2.textContent = '23a Bow St., Somerville, MA.';
  wrapperText5.appendChild(wrapperText5_p2);

  const wrapperText5_p3 = document.createElement('p');
  wrapperText5_p3.classList.add('wrapperText5_p');
  wrapperText5_p3.id = 'wrapperText5_id';
  wrapperText5_p3.textContent = 'WINTER HOURS';
  wrapperText5.appendChild(wrapperText5_p3);

  const wrapperText5_p4 = document.createElement('p');
  wrapperText5_p4.classList.add('wrapperText5_p');
  wrapperText5_p4.textContent = 'Wed-Thu 5 to 9 - bar until 10 PM';
  wrapperText5.appendChild(wrapperText5_p4);

  const wrapperText5_p5 = document.createElement('p');
  wrapperText5_p5.classList.add('wrapperText5_p');
  wrapperText5_p5.textContent = 'Fri & Sat 5 to 10 - bar until 11 PM';
  wrapperText5.appendChild(wrapperText5_p5);

  const wrapperText5_p6 = document.createElement('p');
  wrapperText5_p6.classList.add('wrapperText5_p');
  wrapperText5_p6.textContent = 'Sun 5 to 9 PM';
  wrapperText5.appendChild(wrapperText5_p6);

  const wrapperText5_p7 = document.createElement('p');
  wrapperText5_p7.classList.add('wrapperText5_p');
  wrapperText5_p7.textContent = 'Monday and Tuesday closed';
  wrapperText5.appendChild(wrapperText5_p7);

  




  const wrapperImg5 = document.createElement('div');
  wrapperImg5.id = 'wrapper-img5';

  const mapImage = new Image();
  mapImage.src = RestaurantMap;
  mapImage.id = 'map-image';
  wrapperImg5.appendChild(mapImage);



  contentDiv.appendChild(wrapperImg1);
  contentDiv.appendChild(wrapperText1);
  contentDiv.appendChild(wrapperImg2);
  contentDiv.appendChild(wrapperImg3);
  contentDiv.appendChild(wrapperImg3_2);
  contentDiv.appendChild(wrapperText4);
  contentDiv.appendChild(wrapperImg4);
  contentDiv.appendChild(wrapperText5);
  contentDiv.appendChild(wrapperImg5)


  const BottomDiv = document.createElement('div');
  BottomDiv.classList.add('wrapper--bottom');
  
  const BottomText = document.createElement('p');
  BottomText.id = 'bottom-text';
  BottomText.textContent = 'We’re always looking… If you want to join our team, email us!';

  BottomDiv.appendChild(BottomText);

  


  // addint content to wrapper
  wrapperDiv.appendChild(contentDiv);
  // adding bottom to wrapper
  wrapperDiv.appendChild(BottomDiv);
  return wrapperDiv;
}

function addingTitleIcon() {
  const setFavicon = document.createElement('link');
  setFavicon.setAttribute('rel','shortcut icon');
  setFavicon.setAttribute('href',IconTitle);

  return setFavicon;

}

document.body.appendChild(component());
document.head.appendChild(addingTitleIcon());