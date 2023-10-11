
function createHomePage() {
    const content = document.querySelector("div#content");

    const restaurantName = document.createElement("h1");
    restaurantName.setAttribute('id', "restaurant-name");
    restaurantName.textContent = "Gastronome's Haven";

    const cuisine = document.createElement("div")
    cuisine.setAttribute('id', "cuisine");
    cuisine.classList.add("restaurant-details");
    cuisine.innerHTML = "<h2>Cuisine</h2><p>Gastronome's Haven specializes in modern fusion cuisine, combining flavors and techniques from around the world. The menu is a gastronomic journey, offering a diverse range of dishes from Italian pasta infused with Thai spices to Japanese sushi with a Mediterranean twist. The chef takes pride in sourcing fresh, local ingredients, ensuring each dish bursts with flavors that delight the senses.</p>";

    const ambiance = document.createElement("div")
    ambiance.setAttribute('id', "ambiance");
    ambiance.classList.add("restaurant-details");
    ambiance.innerHTML = "<h2>Ambiance</h2><p>The restaurant offers a cozy, intimate ambiance, perfect for romantic dinners and family gatherings alike. Soft jazz music plays in the background, enhancing the relaxed atmosphere. On one side, there's a glass wall adorned with lush greenery, providing a serene view of a small garden, adding a touch of nature to the dining experience.</p>";

    content.appendChild(restaurantName);
    content.appendChild(cuisine);
    content.appendChild(ambiance);
}

export { createHomePage }