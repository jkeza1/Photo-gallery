document.addEventListener("DOMContentLoaded", () => {
    const images = [
        { src: "https://source.unsplash.com/random/800x600?sig=1", title: "FENNEC FOX", subtitle: "India" },
        { src: "https://source.unsplash.com/random/800x600?sig=2", title: "HUMPBACK WHALE", subtitle: "South Africa" },
        { src: "https://source.unsplash.com/random/800x600?sig=3", title: "COMMON BROWN BABOON", subtitle: "South Africa" },
        { src: "https://source.unsplash.com/random/800x600?sig=4", title: "SPOTTED DEER", subtitle: "Amazon" }
    ];

    const gallery = document.querySelector(".gallery");

    // Dynamically create and append image elements with overlays
    images.forEach(image => {
        const item = document.createElement("div");
        item.className = "gallery-item";

        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.title;

        const overlay = document.createElement("div");
        overlay.className = "overlay";

        const title = document.createElement("h3");
        title.textContent = image.title;

        const subtitle = document.createElement("p");
        subtitle.textContent = image.subtitle;

        const moreInfo = document.createElement("div");
        moreInfo.className = "more-info";

        const link = document.createElement("a");
        link.href = "#";
        link.textContent = "Know more →";
        link.className="text-link";
        const imageinfo= document.createElement("div")
        imageinfo.className= "imageinfo";

        moreInfo.appendChild(link);
        

        imageinfo.appendChild(title);
        imageinfo.appendChild(subtitle);
        imageinfo.appendChild(moreInfo);
        item.appendChild(imageinfo);

        item.appendChild(img);
        item.appendChild(overlay);

        gallery.appendChild(item);
    });
});

