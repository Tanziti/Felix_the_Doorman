// game.js

import { locations, peoples, weapons, enemys } from './data.js';
import { update, hideButton, showButton } from './utils.js';

export let day = 1;
export let action = 9;
export let charm = 0;
export let charmXp = 0;
export let strength = 0;
export let strengthXp = 0;
export let xp = 0;
export let health = 100;
export let gold = 200;
export let currentItem = 0;
export let fighting;
export let monsterHealth;
export let inventory = ["stick"];

const monsterStats = document.getElementById('monsterStats');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const text = document.getElementById('text');
const goldText = document.getElementById('goldText');
const healthText = document.getElementById('healthText');
const xpText = document.getElementById('xpText');
const monsterName = document.getElementById('monsterName');
const monsterHealthText = document.getElementById('monsterHealth');

button1.onclick = goBasement;
button2.onclick = goStore;
button3.onclick = fightDragon;
button4.onclick = viewStats;


function viewStats() {
  update(locations[3]);
}

function goBack() {
  // goes back to previous location
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goBasement() {
  update(locations[2]);
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {
  if (currentItem < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentItem++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentItem].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentItem = inventory.shift();
    text.innerText = "You sold a " + currentItem + ".";
    text.innerText += " In your inventory you have: " + inventory + ".";
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}

function goFight() {
  update(locations[3]);
  monsterHealth = enemys[fighting].health;
  monsterStats.style.display = 'block';
  monsterName.innerText = enemys[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
  fighting = 2;
  goFight();
}

