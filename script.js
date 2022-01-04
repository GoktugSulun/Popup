let btnEl = document.querySelector('#cta-6d972b1');
let popupEl = document.getElementById('popup');
let containerEL = document.querySelector('.containerXYZ');
let closeEl = document.querySelector('.close');
let contactTitleEl = document.querySelector('.contact-informations-title');
let contactIconEls = document.querySelectorAll('.contact-icon');
let youtubeLinkEl = document.getElementById('youtube-link');
let instagramLinkEl = document.getElementById('instagram-link');
let twitterLinkEl = document.getElementById('twitter-link');
let hotmailLinkEl = document.getElementById('hotmail-link');
let telLinkEl = document.getElementById('tel-link');

youtubeLinkEl.href = 'https://www.youtube.com';
instagramLinkEl.href = 'https://www.instagram.com';
twitterLinkEl.href = 'https://twitter.com';
hotmailLinkEl.href = 'mailto:';
// telLinkEl.href = '';

window.addEventListener('resize', () => {
   designPopup();
});

btnEl.addEventListener('click', () => {
   
   popupEl.style.display = 'block';
   designPopup();

});

function designPopup(){

   let height = window.innerHeight; // 722
   let width = window.innerWidth; // 1536

   let left = width/4;
   let top = height/4;

   // console.log('width ', width);
   // console.log('height ', height);

   // console.log("!!!!!!!!!!!");

   if(width < 800 && width > 410){
      width = width-50;
      left = 25;
      contactIconEls.forEach(contactIconEl => { 
         contactIconEl.style.display = 'flex';
      });
   }else if(width <= 410 && width > 374){
      width = width-20;
      left = 5;
      contactIconEls.forEach(contactIconEl => { 
         contactIconEl.style.display = 'flex';
      });
   }else if(width <= 374){
      width = width-20;
      left = 5;
      contactIconEls.forEach(contactIconEl => { 
         contactIconEl.style.display = 'none';
      });
   }else {
      width = width / 2;
      contactIconEls.forEach(contactIconEl => { 
         contactIconEl.style.display = 'flex';
      });
   }

 

   if(width <= 460){
      containerEL.style.padding = 0;
   }else {
      containerEL.style.padding = 20 + 'px';
   }

   if(height <= 585){
      contactTitleEl.style.display = 'none';
   }else {
      contactTitleEl.style.display = 'block';
   }


   // console.log('width ', width);
   // console.log('height ', height);
   // console.log('left ', left);
   // console.log('top ', top);

   containerEL.style.width = width + 'px';
   containerEL.style.height = height/2 + 'px';
   containerEL.style.left = left + 'px';
   containerEL.style.top = top + 'px';

}

closeEl.addEventListener('click', () => {
   popupEl.style.display = 'none';
});