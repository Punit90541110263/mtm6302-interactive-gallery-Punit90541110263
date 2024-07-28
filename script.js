const gallery = document.getElementById('gallery');

// Dynamically create the images array
const images = [];
for (let i = 1; i <= 20; i++) {
    images.push({
        thumbnail: `images/${i}.jpeg`, // Ensure the path matches the actual file names
        full: `images/${i}.jpeg`,      // Ensure the path matches the actual file names
        title: `Image Title ${i}`,
        description: `Description of Image ${i}`
    });
}

images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.thumbnail;
    imgElement.alt = image.title;
    imgElement.className = 'thumbnail';

    imgElement.addEventListener('error', () => {
        console.error(`Failed to load image: ${image.thumbnail}`);
    });

    imgElement.addEventListener('click', () => {
        showModal(image);
    });

    // Log each image path to verify correctness
    console.log(`Adding image: ${image.thumbnail}`);
    gallery.appendChild(imgElement);
});

function showModal(image) {
    const modal = document.createElement('div');
    modal.className = 'modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const fullImage = document.createElement('img');
    fullImage.src = image.full;
    fullImage.alt = image.title;

    const title = document.createElement('h2');
    title.textContent = image.title;

    const description = document.createElement('p');
    description.textContent = image.description;

    modalContent.appendChild(fullImage);
    modalContent.appendChild(title);
    modalContent.appendChild(description);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    modal.style.display = 'flex';

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.removeChild(modal);
    });
}
