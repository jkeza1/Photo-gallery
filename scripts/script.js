document.addEventListener("DOMContentLoaded", () => {
    const images = [
        {
            src: 'fennex fox.jpeg',
            title: 'Fennec Fox',
            location: 'India'
        },
        {
            src: 'humpback-whale.jpg',
            title: 'Humpback Whale',
            location: 'South Africa'
        },
        {
            src: 'baboonnn.jpeg',
            title: 'Common Brown Baboon',
            location: 'South Africa'
        },
        {
            src: 'spotted deer.jpeg',
            title: 'Spotted Deer',
            location: 'Amazon'
        }
    ];

    function createGallery() {
        const gallery = document.querySelector('.gallery');

        images.forEach(image => {
            const item = document.createElement("div");
            item.className = "gallery-item";

            const img = document.createElement("img");
            img.src = image.src;
            img.alt = image.title;

            const overlay = document.createElement("div");
            overlay.className = "overlay";

            const text = document.createElement("div");
            text.className = "text";

            const title = document.createElement("h3");
            title.textContent = image.title;

            const location = document.createElement("p");
            location.textContent = image.location;

            const link = document.createElement("span");
            link.textContent = "Know more →";
            link.className = "text-link";

            text.appendChild(title);
            text.appendChild(location);
            item.appendChild(link);

            item.appendChild(text);
            item.appendChild(img);
            item.appendChild(overlay);

            gallery.appendChild(item);
        });
    }

    createGallery();
});
