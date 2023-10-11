(()=>{"use strict";function e(){const e=document.querySelector("div#content"),t=document.createElement("h1");t.setAttribute("id","restaurant-name"),t.textContent="Gastronome's Haven";const n=document.createElement("div");n.setAttribute("id","cuisine"),n.classList.add("restaurant-details"),n.innerHTML="<h2>Cuisine</h2><p>Gastronome's Haven specializes in modern fusion cuisine, combining flavors and techniques from around the world. The menu is a gastronomic journey, offering a diverse range of dishes from Italian pasta infused with Thai spices to Japanese sushi with a Mediterranean twist. The chef takes pride in sourcing fresh, local ingredients, ensuring each dish bursts with flavors that delight the senses.</p>";const a=document.createElement("div");a.setAttribute("id","ambiance"),a.classList.add("restaurant-details"),a.innerHTML="<h2>Ambiance</h2><p>The restaurant offers a cozy, intimate ambiance, perfect for romantic dinners and family gatherings alike. Soft jazz music plays in the background, enhancing the relaxed atmosphere. On one side, there's a glass wall adorned with lush greenery, providing a serene view of a small garden, adding a touch of nature to the dining experience.</p>",e.appendChild(t),e.appendChild(n),e.appendChild(a)}const t=document.querySelector("div#navBar");function n(){document.querySelector("div#content").innerHTML=""}(function(){const a=document.createElement("nav");a.setAttribute("id","menubar");const i=document.createElement("button");i.classList.add("menu-item","menu-home","active"),i.textContent="Home";const s=document.createElement("button");s.classList.add("menu-item","menu-dish"),s.textContent="Signature Dish";const d=document.createElement("button");function o(){i.classList.remove("active"),s.classList.remove("active"),d.classList.remove("active")}d.classList.add("menu-item","menu-about-us"),d.textContent="About Us",a.appendChild(i),a.appendChild(s),a.appendChild(d),t.appendChild(a),i.addEventListener("click",(()=>{o(),n(),e(),i.classList.add("active")})),s.addEventListener("click",(()=>{o(),n(),function(){const e=document.querySelector("div#content"),t=document.createElement("div");t.setAttribute("id","dishes"),t.classList.add("restaurant-details");const n=document.createElement("ul"),a=document.createElement("li");a.classList.add("dish");const i=document.createElement("h4");i.textContent="Mediterranean Fusion Pizza";const s=document.createElement("p");s.textContent="Thin-crust pizza topped with sun-dried tomatoes, olives, feta cheese, and a drizzle of balsamic glaze.",a.appendChild(i),a.appendChild(s);const d=document.createElement("li");d.classList.add("dish");const o=document.createElement("h4");o.textContent="Sushi Burritos";const c=document.createElement("p");c.textContent="Oversized sushi rolls filled with fresh sashimi, avocado, and pickled vegetables, wrapped in seaweed and rice paper.",d.appendChild(o),d.appendChild(c);const r=document.createElement("li");r.classList.add("dish");const l=document.createElement("h4");l.textContent="Thai Basil Pasta";const u=document.createElement("p");u.textContent="Spaghetti tossed with stir-fried vegetables, Thai basil, and chili-infused olive oil, served with a side of garlic bread.",r.appendChild(l),r.appendChild(u),n.appendChild(a),n.appendChild(d),n.appendChild(r),t.appendChild(n),e.appendChild(t)}(),s.classList.add("active")})),d.addEventListener("click",(()=>{o(),n(),function(){const e=document.querySelector("div#content"),t=document.createElement("div");t.setAttribute("id","restaurant-description"),t.classList.add("restaurant-details","about-us");const n=document.createElement("h2");n.textContent="Description";const a=document.createElement("p");a.textContent="Gastronome's Haven is a quaint yet vibrant restaurant located in the heart of the city, nestled between cobblestone streets and historic buildings. As you step inside, you are enveloped in the warm aroma of freshly baked bread and exotic spices. The restaurant boasts a fusion of rustic charm and modern elegance, with wooden beams on the ceiling, soft ambient lighting, and walls adorned with culinary-themed artwork.",t.appendChild(n),t.appendChild(a);const i=document.createElement("div");i.setAttribute("id","location"),i.classList.add("restaurant-details","about-us");const s=document.createElement("h2");s.textContent="Location";const d=document.createElement("p");d.textContent="Gastronome's Haven is conveniently located on Gourmet Lane, a bustling food district in the city, surrounded by art galleries and boutique shops. Its central location makes it a popular choice for both locals and tourists seeking a unique dining experience.",i.appendChild(s),i.appendChild(d);const o=document.createElement("div");o.setAttribute("id","marketing"),o.classList.add("restaurant-details","about-us");const c=document.createElement("h2");c.textContent="Marketing and Community Engagement";const r=document.createElement("p");r.textContent="Gastronome's Haven actively engages with the community by hosting monthly themed nights, where local artists display their work, and a portion of the proceeds goes to charity. They have a strong online presence, regularly updating their social media profiles with tantalizing food photos, behind-the-scenes glimpses of the kitchen, and chef's special recipes.",o.appendChild(c),o.appendChild(r),e.appendChild(t),e.appendChild(i),e.appendChild(o)}(),d.classList.add("active")}))})(),e()})();