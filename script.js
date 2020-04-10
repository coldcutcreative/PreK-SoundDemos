const main = document.querySelector('main');
const audio = document.getElementById('audio');

const data = [
    {
      image: './img/a.jpg',
      text: "Apple", 
      audio: './audio/A.mp3'
    },
    {
      image: './img/b.jpg',
      text: "Bat",
      audio: './audio/B.mp3'
    },
    {
      image: './img/c.jpg',
      text: "Cat",
      audio: './audio/C.mp3'
    },
    {
      image: './img/d.jpg',
      text: "Dog",
      audio: './audio/D.mp3'
    },
    {Í
      image: './img/e.jpg',
      text: "Ed",
      audio: './audio/E.mp3'
    },
    {
      image: './img/f.jpg',
      text: "Fun",
      audio: './audio/F.mp3'
    },
    {
      image: './img/g.jpg',
      text: "Game",
      audio: './audio/G.mp3'
    },
    {
      image: './img/h.jpg',
      text: "Hat",
      audio: './audio/H.mp3'
    },
    {
      image: './img/i.jpg',
      text: 'Itch',
      audio: './audio/I.mp3'
    },
    {
      image: './img/j.jpg',
      text: 'Jug',
      audio: './audio/J.mp3'
    },
    {
      image: './img/k.jpg',
      text: 'Kite',
      audio: './audio/K.mp3'
    },
    {
      image: './img/l.jpg',
      text: 'Lamp',
      audio: './audio/L.mp3'
    },
    {
      image: './img/m.jpg',
      text: "Man",
      audio: './audio/M.mp3'
    },
    {
      image: './img/n.jpg',
      text: "Nut",
      audio: './audio/N.mp3'
    },
    {
      image: './img/o.jpg',
      text: "Octopus",
      audio: './audio/O.mp3'
    },
    {
      image: './img/p.jpg',
      text: "Pan",
      audio: './audio/P.mp3'
    },
    {
      image: './img/qu.jpg',
      text: "Queen",
      audio: './audio/Q.mp3'
    },
    {
      image: './img/r.jpg',
      text: "Rat",
      audio: './audio/R.mp3'
    },
    {
      image: './img/s.jpg',
      text: "Snake",
      audio: './audio/S.mp3'
    },
    {
      image: './img/t.jpg',
      text: "Top",
      audio: './audio/T.mp3'
    },
    {
      image: './img/u.jpg',
      text: 'Up',
      audio: './audio/U.mp3'
    },
    {
      image: './img/v.jpg',
      text: 'Van',
      audio: './audio/V.mp3'
    },
    {
      image: './img/w.jpg',
      text: 'Wind',
      audio: './audio/W.mp3'
    },
    {
      image: './img/x.jpg',
      text: 'Fox',
      audio: './audio/X.mp3'
    },
    {
      image: './img/y.jpg',
      text: 'Yellow',
      audio: './audio/Y.mp3'
    },
    {
      image: './img/z.jpg',
      text: 'Zebra',
      audio: './audio/Z.mp3'
    }
  ];

  data.forEach(createBox);

  // Create speech boxes
  function createBox(item) {
      const box = document.createElement('div');

      const { image, text, audio } = item;

      box.classList.add('box');
      box.innerHTML = `
        <img src="${image}" alt="${text}" />
        <p class="info">${text}</p>
        <audio id="${audio}" src="${audio}></audio>
      `;

      box.addEventListener('click', () => {
        setTextMessage(text);
        new Audio(item.audio).play();
        
        // Add active effect
        box.classList.add('active');
        setTimeout(() => box.classList.remove('active'), 800);
      });

      main.appendChild(box);
  };

// Init speech synth
 const message = new SpeechSynthesisUtterance();

// Set text
function setTextMessage(text) {
    message.text = text;
}

getVoices();