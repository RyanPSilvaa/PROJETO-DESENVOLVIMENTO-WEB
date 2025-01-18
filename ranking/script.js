// Dados iniciais dos bares
const bars = [
    {
        name: "Pub Bela Vista",
        location: "Rua das Flores, 123",
        rating: 4.5,
        specialties: ["Chopp gelado", "Petiscos variados"],
        image: "images/Bela Vista.jpeg", // Imagem padrão adicionada
    },
    {
        name: "Resenha Beer",
        location: "Av. Central, 456",
        rating: 4.8,
        specialties: ["Caipirinha", "Caldinho de feijão"],
        image: "images/Resenha.jpeg",
    },
    {
        name: "Bar da Vilma",
        location: "Rua Amazonas, 789",
        rating: 4.7,
        specialties: ["Cervejas artesanais", "Hambúrguer gourmet"],
        image: "images/Bar Vilma.jpeg",
    },
    {
        name: "Bar do Juba",
        location: "Rua Amazonas, 789",
        rating: 4.7,
        specialties: ["Cervejas artesanais", "Hambúrguer gourmet"],
        image: "images/Juba.jpeg",
    },
    {
        name: "Bar Século",
        location: "Rua Amazonas, 789",
        rating: 4.7,
        specialties: ["Cervejas artesanais", "Hambúrguer gourmet"],
        image: "images/Seculo.jpeg",
    },
];

// Função para exibir o ranking
function displayBars() {
    const barListContainer = document.querySelector('.bar-list');
    if (!barListContainer) {
        console.error("Elemento '.bar-list' não encontrado.");
        return;
    }

    barListContainer.innerHTML = ""; // Limpar a lista antes de exibir

    bars.forEach(bar => {
        const barItem = document.createElement('div');
        barItem.classList.add('bar-item');
        
        barItem.innerHTML = `
            <img src="${bar.image}" alt="${bar.name}" class="bar-image">
            <div class="bar-info">
                <h3>${bar.name}</h3>
                <p class="rating">${'★'.repeat(Math.floor(bar.rating))}</p>
                <p class="specialties">${bar.specialties.join(', ')}</p>
            </div>
        `;
        barListContainer.appendChild(barItem);
    });
}

// Adicionar um novo bar
const barForm = document.getElementById('bar-form');
if (barForm) {
    barForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const barName = document.getElementById('bar-name').value.trim();
        const barRating = parseFloat(document.getElementById('bar-rating').value);

        if (barName && barRating >= 1 && barRating <= 5) {
            const newBar = {
                name: barName,
                location: "Local não especificado", // Local padrão
                rating: barRating,
                specialties: ["Especialidade não especificada"], // Especialidade padrão
                image: "default-image.jpg", // Imagem padrão
            };
            bars.push(newBar); // Adicionar o novo bar ao array
            displayBars(); // Atualizar o ranking
            barForm.reset(); // Limpar o formulário
        } else {
            alert("Por favor, preencha todos os campos corretamente.");
        }
    });
} else {
    console.error("Formulário 'bar-form' não encontrado.");
}

// Exibir os bares inicialmente
displayBars();
