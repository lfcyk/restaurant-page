function createDishesPage() {
    const content = document.querySelector("div#content");

    const dishes = document.createElement("div")
    dishes.setAttribute('id', "dishes");
    dishes.classList.add("restaurant-details");
    
    const dishesUl = document.createElement("ul");

    const menu1 = document.createElement("li");
    menu1.classList.add("dish");
    const menu1Name = document.createElement("h4");
    menu1Name.textContent = "Mediterranean Fusion Pizza";
    const menu1Desc = document.createElement("p");
    menu1Desc.textContent = "Thin-crust pizza topped with sun-dried tomatoes, olives, feta cheese, and a drizzle of balsamic glaze."
    menu1.appendChild(menu1Name);
    menu1.appendChild(menu1Desc);

    const menu2 = document.createElement("li");
    menu2.classList.add("dish");
    const menu2Name = document.createElement("h4");
    menu2Name.textContent = "Sushi Burritos";
    const menu2Desc = document.createElement("p");
    menu2Desc.textContent ="Oversized sushi rolls filled with fresh sashimi, avocado, and pickled vegetables, wrapped in seaweed and rice paper."
    menu2.appendChild(menu2Name);
    menu2.appendChild(menu2Desc);

    const menu3 = document.createElement("li");
    menu3.classList.add("dish");
    const menu3Name = document.createElement("h4");
    menu3Name.textContent = "Thai Basil Pasta";
    const menu3Desc = document.createElement("p");
    menu3Desc.textContent ="Spaghetti tossed with stir-fried vegetables, Thai basil, and chili-infused olive oil, served with a side of garlic bread."
    menu3.appendChild(menu3Name);
    menu3.appendChild(menu3Desc);
    
    dishesUl.appendChild(menu1);
    dishesUl.appendChild(menu2);
    dishesUl.appendChild(menu3);

    dishes.appendChild(dishesUl);
    content.appendChild(dishes);
}

export { createDishesPage }