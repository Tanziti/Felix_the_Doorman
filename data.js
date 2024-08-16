// data.js
export const peoples = [
    { name: "Magic Salesman", type: "salesman" },
    { name: "Johnson", type: "resident" },
    { name: "Alice", type: "resident" },
    { name: "Clint", type: "postman" },
    { name: "Al", type: "superintendent" },
    { name: "Ben", type: "elevator repairman" },
    { name: "Chris", type: "contractor" }
  ];
  
  export const weapons = [
    { name: "pen", power: 2},
    { name: "phone", power: 5 },
    { name: "keys", power: 30 },
    { name: "bat", power: 50 },
    { name: "sword", power: 100 }
  ];
  
  export const enemys = [
    { name: "slime", level: 2, health: 15 }, //change to cockroaches
    { name: "fanged beast", level: 8, health: 60 }, //change to deranged wandering lunatic
    { name: "dragon", level: 20, health: 300 }
  ];
  
  export const locations = [
    {
      name: "Tralfagar Lobby",
      "button text": ['Go to desk', 'Go to basement', 'Stand outside', 'Stats'],
      'button functions': ['goStore', 'goBasement', 'fightDragon', 'viewStats'],
      text: "You are in the lobby of the Tralfagar"
    },
    {
      name: "Apartment",
      "button text": ["Do house chores", "Order delivery", "Go to the bar", 'Stats'],
      "button functions": ['buyHealth', 'buyWeapon', 'goTown', 'viewStats'],
      text: "You are home."
    },
    {
      name: 'Basement',
      "button text": ["Clean/Mop floors", "Speak to Porter", "Knock on Al's door", 'Stats'],
      "button functions": ['fightSlime', 'fightBeast', 'goTown', 'viewStats'],
      text: 'You enter the basement. It has a funky smell.'
    },
    {
      name: 'Stats',
      "button text": ["Go Back"],
      "button functions": ['goBack'],
      text: 'These are your stats... SLAYYYY.I should definitely add some stat features'
    },
    {
      name: "Lose",
      "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
      "button functions": ['restart', 'restart', 'restart'],
      text: "You die. &#x2620;"
    },
    {
      name: "Win",
      "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
      "button functions": ['restart', 'restart', 'restart'],
      text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;"
    },
    {
      name: 'porter',
      "button text": ["chat", "tasks", "leave"],
      "button functions": ['restart', 'restart', 'restart'],
      text: 'You enter the porters workshop. "Hey Felix, how can I help ya?"'
    }
  ];
  