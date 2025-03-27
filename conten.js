function createImageSection(containerId, imageUrl, altText, fallbackImage, descriptionText) {
    const container = document.getElementById(containerId);

    // Create section element
    const section = document.createElement('section');
    section.className = 'image-frame-section';

    // Create image frame div
    const imageFrame = document.createElement('div');
    imageFrame.className = 'image-frame';

    // Create image element
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = altText;
    img.className = 'frame-image';
    img.onerror = function () {
        this.src = fallbackImage;
        this.alt = 'Gambar error';
    };

    // Append image to image frame
    imageFrame.appendChild(img);

    // Create description div
    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'image-description';

    // Create description paragraph
    const description = document.createElement('p');
    description.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    description.style.textAlign = 'justify';
    description.style.fontSize = 'small';
    description.textContent = descriptionText;

    // Append paragraph to description div
    descriptionDiv.appendChild(description);

    // Append elements to section
    section.appendChild(imageFrame);
    section.appendChild(descriptionDiv);

    // Append section to container
    container.appendChild(section);
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    // Konten pertama
    createImageSection(
        'content-section', // ID of the container
        '#', // Image URL
        'Gambar tidak ditemukan', // Alt text
        'Mencari.png', // Fallback image
        'Gambar ini adalah placeholder yang digunakan untuk menunjukkan area gambar. Jika gambar tidak ditemukan, gambar default akan ditampilkan.' // Description text
    );

    // Konten kedua
    createImageSection(
        'content-section', // ID of the container
        '#', // Image URL
        'Gambar kedua tidak ditemukan', // Alt text
        'Mencari1.png', // Fallback image
        'Ini adalah gambar kedua dengan deskripsi berbeda. Gambar ini juga menggunakan placeholder.' // Description text
    );

    // Konten ketiga
    createImageSection(
        'content-section', // ID of the container
        '#', // Image URL
        'Gambar ketiga tidak ditemukan', // Alt text
        'Mencari2.png', // Fallback image
        'Ini adalah gambar ketiga dengan deskripsi tambahan. Placeholder digunakan jika gambar gagal dimuat.' // Description text
    );
});