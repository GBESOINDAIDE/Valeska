// Références aux éléments
const cartButton = document.getElementById('cart-button');
const cartDropdown = document.getElementById('cart-dropdown');
const cartContent = document.getElementById('cart-content');
const addToCartButtons = document.querySelectorAll('.add-to-cart'); // Sélectionne tous les boutons "Ajouter au panier"

// Gestion de l'affichage du menu déroulant
cartButton.addEventListener('click', () => {
    cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
});

// Gestion des clics sur les boutons "Ajouter au panier"
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.getAttribute('data-name');
        const itemPrice = button.getAttribute('data-price');
        const item = document.createElement('p');
        item.textContent = `${itemName} - ${itemPrice}`;
        cartContent.appendChild(item);
    });
});
