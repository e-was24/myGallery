// function dragAbout() {
//     clearAllOutputs();
//     document.getElementById("outputAbout").innerText = " About";
// } border-radius: 10px;

function clearAllOutputs() {
    document.getElementById("outputHome").innerText = "";
    // document.getElementById("outputAbout").innerText = "";
    document.getElementById("outputServices").innerText = "";
    document.getElementById("outputContact").innerText = "";
}

function dragHome() {
    clearAllOutputs();
    document.getElementById("outputHome").innerText = " Home";
    document.getElementById("outputHome").style.background = "rgb(14, 40, 52)";
    document.getElementById("outputHome").style.padding = "0rem 1rem";
    document.getElementById("outputHome").style.borderRadius = "5px";
}


function dragServ() {
    clearAllOutputs();
    document.getElementById("outputServices").innerText = " Services";
    document.getElementById("outputServices").style.background = "rgb(14, 40, 52)";
    document.getElementById("outputServices").style.padding = "0rem 1rem";
    document.getElementById("outputServices").style.borderRadius = "5px";
}

function dragContact() {
    clearAllOutputs();
    document.getElementById("outputContact").innerText = " Contact";
    document.getElementById("outputContact").style.background = "rgb(14, 40, 52)";
    document.getElementById("outputContact").style.padding = "0rem 1rem";
    document.getElementById("outputContact").style.borderRadius = "5px";
}

// Clear outputs when clicking outside the navbar
document.addEventListener("click", function (event) {
    const nav = document.querySelector("nav");
    if (!nav.contains(event.target)) {
        clearAllOutputs();
    }
});

function updateYear() {
    const dateTimeElement = document.getElementById('DateTime');
    if (dateTimeElement) {
        const currentYear = new Date().getFullYear(); // Mendapatkan tahun saat ini
        dateTimeElement.textContent = currentYear; // Menampilkan tahun di elemen
    }
}

// Panggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', updateYear);

document.addEventListener("scroll", function () {
    const footer = document.querySelector("footer");
    const nav = document.querySelector("nav");

    if (footer && nav) {
        const footerRect = footer.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();

        // Cek apakah footer terlihat di viewport
        if (footerRect.top <= window.innerHeight && footerRect.bottom >= 0) {
            nav.style.display = "none"; // Sembunyikan navbar
        } else {
            nav.style.display = "block"; // Tampilkan navbar
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const content = document.querySelector('.content-section');
    const copy = document.querySelector('.footer-content');
    let isDarkMode = false;

    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;

        if (isDarkMode) {
            document.body.style.backgroundColor = '#393939'; // Warna gelap
            document.body.style.color = '#ffffff'; // Teks putih
            content.style.color = '#ffffff'; // Teks putih
            copy.style.color = '#ffffff'; // Teks putih
            themeToggle.style.background ='linear-gradient(130deg, rgb(0, 225, 255), rgb(0, 0, 90))';
            themeIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            `;
        } else {
            document.body.style.backgroundColor = '#f4f4f4'; // Warna terang
            document.body.style.color = '#000000'; // Teks hitam
            content.style.color = '#000000'; // Teks putih
            copy.style.color = '#000000'; // Teks putih
            themeToggle.style.background = '#a6a6a6';
            themeIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            `;
        }
    });
});