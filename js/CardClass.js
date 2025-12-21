import { playSong } from "./handleButtonEvenets.js";

class Card {
  constructor(title, artist, lyrics, mp3, liked) {
    this.title = title;
    this.artist = artist;
    this.mp3 = mp3;
    this.lyrics = lyrics;
    this._liked = liked;
  }

  createCard() {
    const ulEl = document.querySelector(".music_list");
    this.liEl = document.createElement("li");
    this.liEl.classList.add("music_item");

    this.liEl.innerHTML = `
          <div class="music_card">
            <div class="music_card-top">
              <svg class="music_card-icon" width="50"height="50" aria-hidden="true">
                <use href="./img/sprite.svg#web-logo"></use>
              </svg>
              <div class="music_card-descrb">
                <span class="music_card-title">${this.title}</span>
                <span class="music_card-name">${this.artist}</span>
              </div>
            </div>
            <p class="music_card-lyric">
                ${this.lyrics}
            </p>
             <svg class="music_card-quot" width="50"height="50" aria-hidden="true">
                <use href="./img/sprite.svg#quatation-icon"></use>
              </svg>
             
              <audio class="music_card-audio " controls>
                <source src="${this.mp3}" type="audio/mpeg">
                Your browser does not support the audio element.
              </audio>
             <label class="music_card-likedLabel">
                <input class="music_card-likedCheck visually-hidden" type="checkbox">
                <svg
                  class="music_card-likedIcon"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <use href="./img/sprite.svg#web-like"></use>
                </svg>
              </label>
    `;

    const checkLiked = this.liEl.querySelector(".music_card-likedCheck")
    checkLiked.addEventListener("change", () => {
      if (checkLiked.checked) {
        console.log("checked")

      } 
    })



    ulEl.append(this.liEl);
  }
}

export async function renderCards() {
  const ulEl = document.querySelector(".music_list");
  const searchInput = document.querySelector(".header_menu-inputSearch");

  const songsList = await fetch("./js/data.json");
  const songsData = await songsList.json();

  ulEl.innerHTML = "";

  searchInput.addEventListener("input", function (e) {
    ulEl.innerHTML = "";

    const filtered = songsData.filter((el) =>
      el.title
        .trim()
        .toLowerCase()
        .includes(searchInput.value.trim().toLowerCase())
    );
    doRender(filtered);
    playSong();
  });

  function doRender(list) {
    list.forEach((song) => {
      const card = new Card(
        song.title,
        song.artist,
        song.lyrics,
        song.mp3,
        song.liked
      );
      card.createCard();
 
    });
  }

  doRender(songsData);

  playSong();

  
    
}
