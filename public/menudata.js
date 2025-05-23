document.addEventListener("DOMContentLoaded", () => {
    fetch("data/menudata.json")
        .then(response => response.json())
        .then(data => {
            const mainContent = document.querySelector(".main-content");

            data.menu.forEach(section => {
                // Create menu section
                const menuSection = document.createElement("div");
                menuSection.classList.add("menu-section");

                // Section title
                const sectionTitle = document.createElement("h2");
                sectionTitle.textContent = section.category;
                menuSection.appendChild(sectionTitle);

                // Menu items
                section.items.forEach(item => {
                    const menuItem = document.createElement("div");
                    menuItem.classList.add("menu-item");

                    const menuItemDetails = document.createElement("div");
                    menuItemDetails.classList.add("menu-item-details");

                    const itemImageContainer = document.createElement("div");
                    itemImageContainer.classList.add("menu-item-image");

                    const itemImage = document.createElement("img");
                    itemImage.src = item.image;
                    itemImage.alt = item.name;
                    itemImageContainer.appendChild(itemImage);

                    const itemText = document.createElement("div");
                    itemText.classList.add("menu-item-text");

                    const itemName = document.createElement("h3");
                    itemName.textContent = item.name;
                    itemText.appendChild(itemName);

                    const itemDescription = document.createElement("p");
                    itemDescription.textContent = item.description;
                    itemText.appendChild(itemDescription);

                    menuItemDetails.appendChild(itemImageContainer);
                    menuItemDetails.appendChild(itemText);

                    const itemPrice = document.createElement("div");
                    itemPrice.classList.add("menu-item-price");
                    itemPrice.textContent = item.price;

                    menuItem.appendChild(menuItemDetails);
                    menuItem.appendChild(itemPrice);
                    menuSection.appendChild(menuItem);
                });

                mainContent.appendChild(menuSection);
            });
        })
        .catch(error => console.error("Error loading menu data:", error));
});
