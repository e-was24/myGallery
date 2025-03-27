function clearAllOutputs() {
  document.getElementById("outputHome").innerText = "";
  document.getElementById("outputMusik").innerText = "";
  document.getElementById("outputContact").innerText = "";
}

function dragHome() {
  clearAllOutputs();
  document.getElementById("outputHome").style.padding = "0rem 1rem";
  document.getElementById("outputHome").style.borderRadius = "5px";
}


function dragContact() {
    clearAllOutputs();
    document.getElementById("outputContact").style.padding = "0rem 1rem";
    document.getElementById("outputContact").style.borderRadius = "5px";
}



// Function to clear previous outputs if needed
function clearAllOutputs() {
    // Clear the content inside any previous outputs
    document.getElementById("outputMusik").innerHTML = '';
}

// Global variable to store the currently playing audio
let currentAudio = null;

// Function to display the music list
function dragMusik() {
    // Clear any previous outputs
    clearAllOutputs();

    // Set the title and styling for the Musik output
    document.getElementById("outputMusik").innerText = "Musik";
    document.getElementById("outputMusik").style.background = "linear-gradient(to bottom, #002168d9,  #06a0ffc6 60%)";
    document.getElementById("outputMusik").style.padding = "0rem 1rem";
    document.getElementById("outputMusik").style.borderRadius = "5px";
    document.getElementById("outputMusik").style.color = "white";  // Text color
    document.getElementById("outputMusik").style.fontSize = "medium";
    document.getElementById("outputMusik").style.maxWidth = "250px";  // Limit the width of the menu
    document.getElementById("outputMusik").style.position = "absolute";  // Make it appear above the icon
    document.getElementById("outputMusik").style.zIndex = "1000";  // Ensure it's on top of other elements
    document.getElementById("outputMusik").style.filter = "brightness(80%)";

    // Array of music items
    const musicList = [
        { name: "Dremin", audioFile: "dreamin.mp3" },
        { name: "The News", audioFile: "the news.mp3" },
        { name: "Too Many Nights", audioFile: "Too Many Nights.mp3" }
    ];
    
    // Create the music list dynamically
    let musicHTML = "<ul style='list-style-type: none; padding: 0; margin: 0;'>";
    musicList.forEach(music => {
        musicHTML += `
            <li style="padding: 10px; border-bottom: 1px solid #ddd;">
                <button class="music-item" onclick="playMusic('${music.audioFile}')">${music.name}</button>
            </li>
        `;
    });
    musicHTML += "</ul>";
    
    // Insert the music list into the output
    document.getElementById("outputMusik").innerHTML += musicHTML;
}

// Function to play music
function playMusic(audioFile) {
    // If there is an audio playing, pause it and reset its position
    if (currentAudio) {
        currentAudio.pause();  // Pause the current song
        currentAudio.currentTime = 0;  // Reset the playback position
    }

    // Create a new audio object for the new song
    const audio = new Audio(audioFile);

    // Store this new audio as the current audio
    currentAudio = audio;

    // Handle errors with the audio file loading
    audio.onerror = function() {
        console.error("Error loading the audio file:", audioFile);
        alert("There was an error loading the audio. Please check the file path.");
    };

    // Try playing the audio and handle errors
    audio.play().catch(error => {
        console.error("Error playing the audio file:", error);
        alert("There was an error playing the music.");
    });
}

// Clear outputs when clicking outside the navbar
document.addEventListener("click", function (event) {
    const nav = document.querySelector("nav");
    if (!nav.contains(event.target)) {
      clearAllOutputs();
      document.getElementById("outputMusik").style.background = "transparent";
    }
  });
  


























function updateYear() {
  const dateTimeElement = document.getElementById("DateTime");
  if (dateTimeElement) {
    const currentYear = new Date().getFullYear(); // Mendapatkan tahun saat ini
    dateTimeElement.textContent = currentYear; // Menampilkan tahun di elemen
  }
}

// Panggil fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", updateYear);

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

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const content = document.querySelector(".content-section");
  const copy = document.querySelector(".footer-content");
  const navbar = document.getElementById("navbar");
  const pAvatar = document.getElementById("p-Avatar");
  const imgAvatar = document.getElementById("img-Avatar");
  let isDarkMode = false;

  themeToggle.addEventListener("click", () => {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
      document.body.style.backgroundColor = "#1c2338"; // Warna gelap
      document.body.style.color = "#ffffff"; // Teks putih
      content.style.color = "#ffffff"; // Teks putih
      copy.style.color = "#ffffff"; // Teks putih
      themeToggle.style.background =
        "linear-gradient(130deg, rgb(0, 225, 255), rgb(0, 0, 90))";
      navbar.style.background =
        " linear-gradient(to bottom, #6106ffc6, #0a0060d9 60%)";
      themeIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            `;
        pAvatar.style.color = "#aaaaaa";
        imgAvatar.style.borderColor = " #06a0ffc6";
    } else {
      document.body.style.backgroundColor = "#f4f4f4"; // Warna terang
      document.body.style.color = "#000000"; // Teks hitam
      content.style.color = "#000000"; // Teks putih
      copy.style.color = "#000000"; // Teks putih
      themeToggle.style.background = "#a6a6a6";
      navbar.style.background =
        " linear-gradient(to bottom, #06a0ffc6, #002168d9 60%)";
      themeIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            `;
            pAvatar.style.color = "black";
            imgAvatar.style.borderColor = "#1c2338";
    }
  });
});
