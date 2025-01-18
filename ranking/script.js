// Dados iniciais dos bares
const bars = [
    {
        name: "Pub Bela Vista",
        location: "Rua das Flores, 123",
        rating: 4.5,
        specialties: ["Chopp gelado", "Petiscos variados"],
    },
    {
        name: "Resenha Beer",
        location: "Av. Central, 456",
        rating: 4.8,
        specialties: ["Caipirinha", "Caldinho de feijão"],
    },
    {
        name: "Bar da Vilma",
        location: "Rua Amazonas, 789",
        rating: 4.7,
        specialties: ["Cervejas artesanais", "Hambúrguer gourmet"],
    },
    {
        name: "Bar do Juba",
        location: "Rua Amazonas, 789",
        rating: 4.7,
        specialties: ["Cervejas artesanais", "Hambúrguer gourmet"],
    },
    {
        name: "Bar Século XX",
        location: "Rua Amazonas, 789",
        rating: 4.7,
        specialties: ["Cervejas artesanais", "Hambúrguer gourmet"],
    },
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
