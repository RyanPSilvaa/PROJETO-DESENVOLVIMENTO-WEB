// Dados iniciais dos bares
const bars = [
    { name: "Bar do Zé", rating: 4, image: "images/bar1.jpg" },
    { name: "Boteco do João", rating: 5, image: "images/bar2.jpg" },
    { name: "Bar da Praça", rating: 3, image: "images/bar3.jpg" },
    { name: "Happy Hour", rating: 4, image: "images/bar4.jpg" },
];

// Função para exibir o ranking
function displayBars() {
    const barListContainer = document.querySelector('.bar-list');
    barListContainer.innerHTML = ""; // Limpar a lista antes de exibir

    bars.forEach(bar => {
        const barItem = document.createElement('div');
        barItem.classList.add('bar-item');
        
        barItem.innerHTML = `
            <img src="${bar.image}" alt="${bar.name}">
            <div class="bar-info">
                <h3>${bar.name}</h3>
                <p class="rating">${'★'.repeat(bar.rating)}</p>
            </div>
        `;
        barListContainer.appendChild(barItem);
    });
}

// Adicionar um novo bar
const barForm = document.getElementById('bar-form');
barForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const barName = document.getElementById('bar-name').value;
    const barRating = parseInt(document.getElementById('bar-rating').value);
    
    if (barName && barRating >= 1 && barRating <= 5) {
        bars.push({ name: barName, rating: barRating, image: "images/bar1.jpg" }); // Usando uma imagem padrão para o bar
        displayBars(); // Atualizar o ranking
        barForm.reset(); // Limpar o formulário
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
});

// Exibir os bares inicialmente
displayBars();
