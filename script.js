var click_cheesecake, click_brownies;

document.getElementById('cheesecake_button').addEventListener('click', (event) => {
  click_cheesecake = (typeof click_cheesecake === 'number' ? click_cheesecake : 0) + 1;
  let element_click_cheesecake = document.getElementById('click-cheesecake');
  element_click_cheesecake.innerText = click_cheesecake;

});
click_cheesecake = 0;
click_brownies = 0;


document.getElementById('brownies_button').addEventListener('click', (event) => {
  click_brownies = (typeof click_brownies === 'number' ? click_brownies : 0) + 1;
  let element_click_brownies = document.getElementById('click-brownies');
  element_click_brownies.innerText = click_brownies;

});
