function createAboutUsPage() {
    const content = document.querySelector("div#content");

    const restaurantDesc = document.createElement("div");
    restaurantDesc.setAttribute('id',"restaurant-description");
    restaurantDesc.classList.add("restaurant-details", "about-us");
    const restaurantDescTitle = document.createElement("h2");
    restaurantDescTitle.textContent = "Description";
    const restaurantDescContent = document.createElement("p");
    restaurantDescContent.textContent = "Gastronome's Haven is a quaint yet vibrant restaurant located in the heart of the city, nestled between cobblestone streets and historic buildings. As you step inside, you are enveloped in the warm aroma of freshly baked bread and exotic spices. The restaurant boasts a fusion of rustic charm and modern elegance, with wooden beams on the ceiling, soft ambient lighting, and walls adorned with culinary-themed artwork.";

    restaurantDesc.appendChild(restaurantDescTitle);
    restaurantDesc.appendChild(restaurantDescContent);
    
    const restaurantLoc = document.createElement("div");
    restaurantLoc.setAttribute('id',"location");
    restaurantLoc.classList.add("restaurant-details", "about-us");
    const restaurantLocTitle = document.createElement("h2");
    restaurantLocTitle.textContent = "Location";
    const restaurantLocContent = document.createElement("p");
    restaurantLocContent.textContent = "Gastronome's Haven is conveniently located on Gourmet Lane, a bustling food district in the city, surrounded by art galleries and boutique shops. Its central location makes it a popular choice for both locals and tourists seeking a unique dining experience."

    
    restaurantLoc.appendChild(restaurantLocTitle);
    restaurantLoc.appendChild(restaurantLocContent);

    const restaurantMarketing = document.createElement("div");
    restaurantMarketing.setAttribute('id',"marketing");
    restaurantMarketing.classList.add("restaurant-details", "about-us");
    const restaurantMarketingTitle = document.createElement("h2");
    restaurantMarketingTitle.textContent = "Marketing and Community Engagement";
    const restaurantMarketingContent = document.createElement("p");
    restaurantMarketingContent.textContent = "Gastronome's Haven actively engages with the community by hosting monthly themed nights, where local artists display their work, and a portion of the proceeds goes to charity. They have a strong online presence, regularly updating their social media profiles with tantalizing food photos, behind-the-scenes glimpses of the kitchen, and chef's special recipes.";

    restaurantMarketing.appendChild(restaurantMarketingTitle);
    restaurantMarketing.appendChild(restaurantMarketingContent);

    content.appendChild(restaurantDesc);
    content.appendChild(restaurantLoc);
    content.appendChild(restaurantMarketing);
}

export { createAboutUsPage }