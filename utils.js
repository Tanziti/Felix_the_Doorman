// utils.js

export function update(location) {
  monsterStats.style.display = "none";

  const buttons = [button1, button2, button3, button4];

  buttons.forEach((button, index) => {
      if (index < location['button text'].length) {
          button.innerText = location['button text'][index];
          button.onclick = location['button functions'][index];

          if (location['button visibility'][index]) {
              showButton(button);
          } else {
              hideButton(button);
          }
      } else {
          hideButton(button);
      }
  });

  text.innerHTML = location.text;
}
  
  export function getMonsterAttackValue(level) {
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    return hit > 0 ? hit : 0;
  }
  
  export function isMonsterHit() {
    return Math.random() > .2 || health < 20;
  }
  
  export function hideButton(button) {
    button.style.display = 'none';
  }
  
  export function showButton(button) {
    button.style.display = 'block';
  }
