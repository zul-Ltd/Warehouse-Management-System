document.getElementById('item-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const itemName = document.getElementById('item-name').value;
    const itemQuantity = document.getElementById('item-quantity').value;

    addItemToList(itemName, itemQuantity);

    // Clear the input fields
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';
});

function addItemToList(name, quantity) {
    const itemList = document.getElementById('items');
    const listItem = document.createElement('li');
    listItem.textContent = `${name} - Quantity: ${quantity}`;
    itemList.appendChild(listItem);
}
