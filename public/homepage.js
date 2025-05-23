window.onload = function() {
  fetch('/data/homepage.json')  // Ensure the path is correct
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
      })
      .then(data => displayMenu(data.menu))
      .catch(error => console.error('Error loading menu data:', error));
};

// This function dynamically creates HTML content for each menu item and appends it to the page.
function displayMenu(menu) {
  const menuContainer = document.getElementById('menu-container');  // Find the container for menu items
  menuContainer.innerHTML = ''; // Clear any existing content
  menu.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');

      menuItem.innerHTML = `
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p><strong>${item.price}</strong></p>
      `;

      menuContainer.appendChild(menuItem);  // Append the item to the container
  });
}
