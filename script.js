var click_count;


click_count = 0;


document.getElementById('cheesecake_button').addEventListener('click', (event) => {
  click_count = (typeof click_count === 'number' ? click_count : 0) + 1;
  let element_click_counter = document.getElementById('click-counter');
  element_click_counter.innerText = click_count;

});  
  
  
var click_count;


click_count = 0;


document.getElementById('brownies_button').addEventListener('click', (event) => {
  click_count = (typeof click_count === 'number' ? click_count : 0) + 1;
  let element_click_counter = document.getElementById('click-counter');
  element_click_counter.innerText = click_count;


});
