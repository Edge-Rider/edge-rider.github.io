const padlock = document.querySelector('#padlock');
const message = document.querySelector('#message');

padlock.addEventListener('mouseenter', () => {
  //message.classList.remove('hidden');
  //message.className = 'message'
  message.classList.toggle('hidden')
});

padlock.addEventListener('mouseleave', () => {
  //message.classList.add('hidden');
  //message.className = 'message hidden'
  message.classList.toggle('hidden')
});

/*
const padlock = document.querySelector('#padlock');

const toggleHide = () => {
  const message = document.querySelector('#message');
  message.classList.toggle('hidden');
};

padlock.addEventListener('mouseenter', toggleHide);
padlock.addEventListener('mouseleave', toggleHide);
*/
