function hideButton(button) {
  button.style.display = 'none';
}

function showButton(button) {
  button.style.display = 'block';
}

function update(location) {
  console.log("Updating location:", location); // Log the location data to check if it is correct

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
  console.log("Updated text content:", text.innerHTML); // Log the updated text content
}
