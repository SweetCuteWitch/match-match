(()=>{"use strict";var e={373:(e,t,n)=>{n.r(t)}},t={};function n(s){var a=t[s];if(void 0!==a)return a.exports;var l=t[s]={exports:{}};return e[s](l,l.exports,n),l.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n(373);let e=0,t=4,s="birds",a=30,l=1;const i=[],c=[],o=[],r=[],d=[];let p,u;const m=document.getElementsByClassName("container"),_=document.getElementsByClassName("nav-element"),v=document.getElementsByClassName("header__button"),g=document.getElementsByClassName("difficulty"),b=document.getElementsByClassName("theme"),f=document.getElementsByClassName("popup__content__buttons__button"),y=document.getElementsByName("userForm"),h=document.getElementsByClassName("gameArea"),L=document.getElementsByClassName("section-container"),E=document.getElementsByClassName("card"),A=document.getElementsByClassName("gameArea__img__front"),T=document.getElementsByClassName("score-list"),M=document.getElementsByClassName("time-input");document.body.innerHTML='\n  <header class="header">\n    <h1 class="logo">\n      <p class="logo-text">MATCH</p>\n      <p class="logo-text">MATCH</p>\n    </h1>\n    <nav>\n      <div class="nav-element">\n        <p class="nav-element__question">?</p>\n        <label class="nav-element__text">About Game</label>\n      </div>\n      <div class="nav-element">\n        <img src="./assets/star.svg" alt="best score picture" class="nav-element__picture">\n        <label class="nav-element__text">Best Score</label>\n      </div>\n      <div class="nav-element">\n        <img src="./assets/gear.svg" alt="settings picture" class="nav-element__picture">\n        <label class="nav-element__text">Game Settings</label>\n      </div>\n    </nav>\n    <button class="header__button">REGISTER NEW PLAYER</button>\n  </header>\n  <main>\n    <div class="container">\n    </div>\n  </main>\n  <footer></footer> \n',m[0].innerHTML='\n  <div class="section-container">\n  <div class="popup">\n  <div class="popup__content">\n  <p class="popup__content__title">Register New Player</p>\n  <form class="popup__content__form" name="userForm">\n  <ul class="popup__content__fields">\n  <li>\n  <input class="firstName popup__content__fields__field" type="text" name="firstName" placeholder="First Name" autocomplete="off" required>\n  </li>\n  <li>\n  <input class="lastName popup__content__fields__field" type="text" name="lastName" placeholder="Last Name" autocomplete="off" required>\n  </li>\n  <li>\n  <input class="email popup__content__fields__field" type="text" name="email" placeholder="E-mail" autocomplete="off" required>\n  </li>\n  </ul>\n  <input type="submit" class="popup__content__button" value="ADD PLAYER">\n  </form>\n  <div class="popup__content__buttons">\n  <button class="popup__content__buttons__button">CANCEL</button>\n  </div>\n  </div>\n  </div>\n  </div>\n\n  <div class="section-container">\n    <p class="about-title">How to play?</p>\n    <section class="about-section">\n      <div class="about-section__description">\n        <p class="about-section__description__number">1</p>\n        <p class="about-section__description__text">Register new player in game</p>\n      </div>\n      <img src="assets/about game/1.png" alt="registration demonstration picture" width="25%">\n    </section>\n    <section class="about-section">\n      <div class="about-section__description">\n        <p class="about-section__description__number">2</p>\n        <p class="about-section__description__text">Configure your game settings</p>\n      </div>\n      <img src="assets/about game/2.png" alt="settings button demonstration picture">\n    </section>\n    <section class="about-section">\n      <div class="about-section__description">\n        <p class="about-section__description__number">3</p>\n        <p class="about-section__description__text">\n          Start your new game! Remember card positions and match it before time\'s up\n        </p>\n      </div>\n      <img src="assets/about game/3.png" alt="game field demonstration picture" width="25%">\n    </section>\n  </div>\n  \n  <div class="section-container">\n    <p class="score-title">Best players</p>\n    <ul class="score-list">\n    </ul>\n  </div>\n\n  <div class="section-container">\n    <p class="setup-title">Difficulty</p>\n    <ul class="setup">\n      <li class="difficulty">\n        <input type="radio" name="cards" value="4" id="4cards" checked>\n        <label for="4cards">4x4 cards</label>\n      </li>\n      <li class="difficulty">\n        <input type="radio" name="cards" value="6" id="6cards">\n        <label for="6cards">6x6 cards</label>\n      </li>\n    </ul>\n    <p class="setup-title">Cards type</p>\n    <ul class="setup">\n      <li class="theme">\n        <input type="radio" name="theme" value="4" id="animals" checked>\n        <label for="animals">Birds theme</label>\n      </li>\n      <li class="theme">\n        <input type="radio" name="theme" value="6" id="cars">\n        <label for="cars">Ocean theme</label>\n      </li>\n    </ul>\n    <div class="setup">\n      <p class="setup-title">Delay time</p>\n      <p class="time-input__title">30 seconds</p>\n      <input class="time-input" type="range" min="1" max="60" value="30">\n    </div>\n  </div>\n\n  <div class="section-container">\n    <div class="timer">0 minutes&#44 0 secundes</div>\n    <div class="gameArea">\n    </div>\n  </div>\n';for(let e=0;e<L.length;e++)L[e].setAttribute("style","display: none");function N(){for(let e=0;e<_.length;e++)_[e].classList.remove("navActive");for(let e=0;e<L.length;e++)L[e].setAttribute("style","display: none")}function k(){clearTimeout(p),clearTimeout(u),document.getElementsByClassName("timer")[0].innerHTML="0 minutes 0 seconds",h[0].innerHTML="",o.splice(0,o.length),c.splice(0,c.length),r.splice(0,c.length),d.splice(0,c.length),l=0,e=0,"STOP GAME"===v[0].innerHTML&&(v[0].innerHTML="REGISTER NEW PLAYER")}function C(e){let t="";for(let n=0;n<e.length;n++)t+=`\n      <li class="score-list__element">\n        <div class="score-list__element__name">\n          <p class="name">\n            ${e[n][0]} ${e[n][1]}\n          </p>\n          <p class="email">\n            ${e[n][2]}\n          </p>\n        </div>\n        <div class="score-list__element__score">\n          <p class="title">Score:</p>\n          <p class="value">${e[n][3]}</p>\n        </div>\n      </li>\n    `;return t}function H(){for(let e=0;e<E.length;e++)A[e].removeAttribute("style"),E[e].classList.contains("active")&&(c.push(o[e]),r.push(e));if(c.length<2&&(c.splice(0,c.length),r.splice(0,r.length)),c.length>2){c[0]===c[1]?(A[r[0]].classList.add("validCard"),E[r[0]].classList.add("valid"),A[r[1]].classList.add("validCard"),E[r[1]].classList.add("valid"),c.splice(0,c.length),r.splice(0,r.length)):(A[r[0]].setAttribute("style","background: red"),A[r[1]].setAttribute("style","background: red"),c.splice(0,c.length),r.splice(0,r.length),e-=1);for(let e=0;e<E.length;e++)E[e].classList.remove("active")}for(let e=0;e<A.length;e++)A[e].classList.contains("validCard")&&d.push(0);if(d.length===Math.pow(t,2)){e=100*e-10*l,e<0&&(e=0),alert(`Your score is ${e}`);const t=i.pop();t.pop(),t.push(`${e}`),i.push(t),T[0].innerHTML=C(i),k(),N(),_[1].classList.add("navActive"),L[2].setAttribute("style","display: block")}d.splice(0,d.length)}L[1].setAttribute("style","display: block"),_[0].classList.add("navActive"),M[0].oninput=function(){a=+M[0].value,document.getElementsByClassName("time-input__title")[0].innerHTML=`${a} seconds`},y[0].addEventListener("submit",(function(t){t.preventDefault();const n=new FormData(y[0]);i.push([`${n.get("firstName")}`,`${n.get("lastName")}`,`${n.get("email")}`,`${e}`]),y[0].reset(),L[0].setAttribute("style","display: none"),v[0].innerHTML="START GAME"})),_[0].addEventListener("click",(()=>{k(),N(),_[0].classList.add("navActive"),L[1].setAttribute("style","display: block")})),_[1].addEventListener("click",(()=>{k(),N(),_[1].classList.add("navActive"),L[2].setAttribute("style","display: block"),T[0].innerHTML=C(i)})),_[2].addEventListener("click",(()=>{k(),N(),_[2].classList.add("navActive"),L[3].setAttribute("style","display: block"),g[0].addEventListener("click",(()=>{t=4})),g[1].addEventListener("click",(()=>{t=6})),b[0].addEventListener("click",(()=>{s="birds"})),b[1].addEventListener("click",(()=>{s="sea"}))})),v[0].addEventListener("click",(()=>{if("REGISTER NEW PLAYER"===v[0].innerHTML)L[0].setAttribute("style","display: block"),f[0].addEventListener("click",(()=>{L[0].setAttribute("style","display: none")}));else if("START GAME"===v[0].innerHTML){N(),L[4].setAttribute("style","display: block"),h[0].setAttribute("style",`grid-template-columns: repeat(${t}, 1fr);`),h[0].innerHTML="",o.splice(0,o.length),c.splice(0,c.length),r.splice(0,c.length),d.splice(0,c.length);const i=function(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[n],e[n]=s}return e}(function(e){const t=[];let n=1;for(let s=0;s<e;s+=2)t[s]=n,t[s+1]=n,n++;return t}(Math.pow(t,2)));for(let e=0;e<i.length;e++)o.push(i[e]);for(let e=0;e<Math.pow(t,2);e++)h[0].innerHTML+=(n=o[e],`\n    <div class="card active">\n      <div class="gameArea__img">\n        <img src="assets/themes/${s}/back.png" alt="back side of the card" class="gameArea__img__back">\n        <img src="assets/themes/${s}/0${n}.svg" alt="back side of the card" class="gameArea__img__front"></img>  \n      </div>\n    </div>\n  `);v[0].innerHTML="STOP GAME",p=setTimeout((()=>{l=0,e=Math.pow(t,2)/2;for(let e=0;e<E.length;e++)E[e].classList.remove("active");u=setInterval((()=>{document.getElementsByClassName("timer")[0].innerHTML=`\n        ${Math.trunc(l/60)} minutes, ${l%60} seconds`,l++}),1e3);for(let e=0;e<E.length;e++)E[e].addEventListener("click",(()=>{E[e].classList.add("active"),H()}))}),1e3*a)}else"STOP GAME"===v[0].innerHTML&&(k(),N(),_[1].classList.add("navActive"),L[2].setAttribute("style","display: block"));var n}))})()})();