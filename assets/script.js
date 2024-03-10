// Declaração do array que irá armazenar os itens do carrinho
let cartItems = [];

// Função para adicionar um item ao carrinho
function addItem(name, price) {
    // Adiciona um objeto representando o item ao array cartItems
    cartItems.push({ name: name, price: price });
    // Chama a função para exibir o carrinho
    showCart();
}

// Função para remover um item do carrinho
function removeItem(index) {
    // Remove o item do array cartItems usando o método splice
    cartItems.splice(index, 1);
    // Chama a função para exibir o carrinho
    showCart();
}

// Função para exibir o carrinho na interface
function showCart() {
    // Obtém as referências aos elementos HTML relevantes
    const cartItemsElement = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    let total = 0;

    // Limpa o conteúdo atual do elemento que lista os itens do carrinho
    cartItemsElement.innerHTML = "";

    // Itera sobre os itens do carrinho
    cartItems.forEach((item, index) => {
        // Cria um elemento de lista para cada item do carrinho
        const li = document.createElement("li");
        // Define o texto do elemento de lista com o nome e o preço do item
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        // Cria um botão de remoção para o item
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remover";
        // Adiciona um evento de clique ao botão de remoção para chamar a função removeItem com o índice do item
        removeBtn.onclick = () => removeItem(index);
        // Adiciona o botão de remoção ao elemento de lista
        li.appendChild(removeBtn);
        // Adiciona o elemento de lista ao elemento que lista os itens do carrinho
        cartItemsElement.appendChild(li);
        // Atualiza o total com o preço do item
        total += item.price;
    });

    // Define o texto do elemento que exibe o total do carrinho
    cartTotalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Função para finalizar a compra
function checkout() {
    // Exibe um alerta com o total da compra
    alert("Compra finalizada! Total: R$ " + cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2));
    // Limpa o carrinho após finalizar a compra
    cartItems = [];
    // Atualiza a exibição do carrinho
    showCart();
}

// Inicializa a exibição do carrinho
showCart();
