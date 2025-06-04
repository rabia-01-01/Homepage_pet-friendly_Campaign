// Smooth scroll to section by id
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}
// Toggle mobile menu visibility
function toggleMenu() { 
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('hidden');
}

// Simple Pet Adoption Carousel
const pets = [
    {
        name: "Bella 🐶",
        img: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=200&q=80",
        bio: "Playful, loves belly rubs. 2 years old. Looking for a forever home!"
    },
    {
        name: "Simba 🐱",
        img: "https://cdn.pixabay.com/photo/2023/05/28/16/59/ai-generated-8024170_1280.jpg",
        bio: "Gentle, cuddly, and curious. 1 year old. Purr-fect companion!"
    },
    {
        name: "Rocky 🐕",
        img: "https://masterbundles.com/wp-content/uploads/edd/2023/02/ai-generated-beautiful-dog-306-490x490.png",
        bio: "Energetic and loyal. Loves long walks. 3 years old."
    },
    {
        name: "Milo 🐾",
        img: "https://www.collegetips.in/pfc/images/header-img-2-cats.jpg",
        bio: "Shy at first, but loves treats! 4 years old."
    },
    {
        name: "Luna 🐦",
        img: "https://cdn.pixabay.com/photo/2024/02/26/06/07/ai-generated-8597214_960_720.jpg",
        bio: "Sweet and playful. Loves to chase butterflies. 1 year old."
    }
];

let petIndex = 0;
function renderPets() {
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = '';
    for (let i = 0; i < 2; i++) {
        const idx = (petIndex + i) % pets.length;
        const pet = pets[idx];
        const card = document.createElement('div');
        card.className = 'pet-card';
        card.innerHTML = `
      <img src="${pet.img}" alt="${pet.name}" class="pet-img">
      <div class="pet-name">${pet.name}</div>
      <div class="pet-bio">${pet.bio}</div>
    `;
        carousel.appendChild(card);
    }
}
function prevPet() {
    petIndex = (petIndex - 1 + pets.length) % pets.length;
    renderPets();
}
function nextPet() {
    petIndex = (petIndex + 1) % pets.length;
    renderPets();
}
renderPets();

// Volunteer form handler (demo only)
document.querySelector('.volunteer-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for joining the movement! 🐾');
    this.reset();
});