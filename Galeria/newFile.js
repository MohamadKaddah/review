document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        {
            title: "Scarface",
            poster: "images/Scarface.jpg" , // Path to your local JPEG image
            description: "A thief who steals corporate secrets through the use of dream-sharing technology..."
        },
        {
            title: "The Dark Knight",
            poster: "images/batman.jpg", // Path to your local JPEG image
            description: "When the menace known as the Joker emerges from his mysterious past..."
        },
        {
            title: "Peaky fuking Blinders",
            poster: "images/chalabi.jpg", // Path to your local JPEG image
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival..."
        },
        // Add more movies as needed
        {
            title: "breaking bad",
            poster: "images/breaking bad.jpg", // Path to your local JPEG image
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival..."
        },
        {
            title: "The God Father",
            poster: "images/don vito.jpg", // Path to your local JPEG image
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival..."
        },
        {
            title: "Game of thrones",
            poster: "images/Game of thrones.jpg", // Path to your local JPEG image
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival..."
        },
        {
            title: "moon knight",
            poster: "images/moon knight.jpg", // Path to your local JPEG image
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival..."
        },
        {
            title: "الافضل ان تتصل بساؤول",
            poster: "images/saul.jpg", // Path to your local JPEG image
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival..."
        },
        {
            title: "Thor God of Thunder",
            poster: "images/Thor.jpg", // Path to your local JPEG image
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival..."
        },
        {
            title: "Joker",
            poster: "images/joker.jpg", // Path to your local JPEG image
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival..."
        },
        {
            title: "Mr Morals and big Stepper",
            poster: "images/kendrick.jpg", // Path to your local JPEG image
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival..."
        },
        {
            title: "squid Game",
            poster: "images/squide game.jpg", // Path to your local JPEG image
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival..."
        },
    ];

    const movieGrid = document.getElementById('movie-grid');

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="info">
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
                <div class="rating">
                    <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>
                </div>
            </div>
        `;

        movieGrid.appendChild(movieCard);
    });

    // Tooltip functionality for nav items
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        const tooltipText = item.getAttribute('data-tooltip');
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.innerText = tooltipText;
        item.appendChild(tooltip);

        item.addEventListener('mouseenter', () => {
            tooltip.style.display = 'block';
        });

        item.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    });
});
// parralex effect 
document.addEventListener('DOMContentLoaded', () => {
    const movieCards = document.querySelectorAll('.movie-card');

    movieCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const cardRect = card.getBoundingClientRect();
            const centerX = cardRect.left + cardRect.width / 2;
            const centerY = cardRect.top + cardRect.height / 2;
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;
            const percentX = deltaX / (cardRect.width / 2);
            const percentY = deltaY / (cardRect.height / 2);
            const rotateY = percentX * 10; // Adjust the rotation factor
            const rotateX = percentY * -10; // Adjust the rotation factor

            card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });
    });
});
// menu icon responsive
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const movieCards = document.querySelectorAll('.movie-card');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    movieCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const cardRect = card.getBoundingClientRect();
            const centerX = cardRect.left + cardRect.width / 2;
            const centerY = cardRect.top + cardRect.height / 2;
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;
            const percentX = deltaX / (cardRect.width / 2);
            const percentY = deltaY / (cardRect.height / 2);
            const rotateY = percentX * 10; // Adjust the rotation factor
            const rotateX = percentY * -10; // Adjust the rotation factor

            card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });
    });
});

