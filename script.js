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

var cheesecake;


cheesecake = ['https://www.simplyrecipes.com/thmb/Pwih6jSR7e2HMXjH3bT4nbOcytE=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Oreo-Cheesecake-LEAD-03-24366907c2d94f4c9efc00c28654c478.jpg', 'https://www.simplyrecipes.com/thmb/wGnu6SWNbG-jj4hOjY7se4ydWRo=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__Chocolate-Cheesecake-LEAD-03-152eb153535b4c59b6bd1fc431365a61.jpg', 'https://www.simplyrecipes.com/thmb/xzWg_9yIes5iRXl8_ARNDzoJv8Y=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__08__Chocolate-Chip-Cheesecake-LEAD-VERTICAL-69307a046dae454d81804251c8aac8bb.jpg', 'https://www.simplyrecipes.com/thmb/PfC9oQLZKsKFdAUK7u-O_xEM9GI=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Perfect-Cheesecake-LEAD-6-97a8cb3a60c24903b883c1d5fb5a69d3.jpg'];
let element_images = document.getElementById('images');
element_images.setAttribute("src", cheesecake[0]);


document.getElementById('next').addEventListener('click', (event) => {
  let element_images2 = document.getElementById('images');
  cheesecake.push(cheesecake[0]);
  element_images2.setAttribute("src", cheesecake.shift());

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_images3 = document.getElementById('images');
  cheesecake.unshift(cheesecake.slice(-1)[0]);
  element_images3.setAttribute("src", cheesecake.pop());

});

var shop_list, to_do_list, item;



document.getElementById('addbread').addEventListener('click', (event) => {
  let element_current = document.getElementById('current');
  let new_li = document.createElement('li');
  new_li.innerText = 'Bread';

  element_current.appendChild(new_li);

});

document.getElementById('addmilk').addEventListener('click', (event) => {
  let element_current2 = document.getElementById('current');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'Milk';

  element_current2.appendChild(new_li2);

});

document.getElementById('addtea').addEventListener('click', (event) => {
  let element_current3 = document.getElementById('current');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'Tea';

  element_current3.appendChild(new_li3);

});
shop_list = ['Eggs', 'Bacon', 'Sausages'];
to_do_list = ['clean house', 'wash dishes', 'do shopping'];
let element_shopping_list = document.getElementById('shopping-list');
shop_list.forEach((item) => {
  let new_li4 = document.createElement('li');
  new_li4.innerText = item;
  let new_span = document.createElement('span');
  let new_button = document.createElement('button');
  new_button.innerText = 'add to cart';
  new_button.setAttribute("id", item);

  new_span.appendChild(new_button);

  new_li4.appendChild(new_span);

  element_shopping_list.appendChild(new_li4);
});
let element_to_do = document.getElementById('to-do');
to_do_list.forEach((item) => {
  let new_li5 = document.createElement('li');
  new_li5.innerText = item;
  new_li5.setAttribute("id", item);

  element_to_do.appendChild(new_li5);
});


document.getElementById('Eggs').addEventListener('click', (event) => {
  let element_current4 = document.getElementById('current');
  let new_li6 = document.createElement('li');
  new_li6.innerText = 'Eggs';

  element_current4.appendChild(new_li6);

});

document.getElementById('Bacon').addEventListener('click', (event) => {
  let element_current5 = document.getElementById('current');
  let new_li7 = document.createElement('li');
  new_li7.innerText = 'Bacon';

  element_current5.appendChild(new_li7);

});

document.getElementById('Sausages').addEventListener('click', (event) => {
  let element_current6 = document.getElementById('current');
  let new_li8 = document.createElement('li');
  new_li8.innerText = 'Sausages';

  element_current6.appendChild(new_li8);

});

document.getElementById('wash dishes').addEventListener('click', (event) => {
  event.target.style.backgroundColor = '#000000';

});

document.getElementById('clean house').addEventListener('click', (event) => {
  event.target.style.backgroundColor = '#000000';

});

document.getElementById('do shopping').addEventListener('click', (event) => {
  event.target.style.backgroundColor = '#000000';

});
