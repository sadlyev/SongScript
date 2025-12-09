

class Card {
  constructor(title, artist, lyrics, mp3) {
    this.title = title
    this.artist = artist
    this.mp3 = mp3
    this.lyrics = lyrics
  }

  createCard() {
     const ulEl =  document.querySelector('.music_list')
    this.liEl = document.createElement('li')
    this.liEl.classList.add('music_item')

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
             
              <audio class="music_card-audio visually-hidden" controls>
                <source src="${this.mp3}" type="audio/mpeg">
                Your browser does not support the audio element.
              </audio>
          </div>
    `

    ulEl.append(this.liEl)
    this.audioCard = this.liEl.querySelector('.music_card')
    this.liEl.addEventListener('click', () => {
       this.audioEl = this.audioCard.querySelector('.music_card-audio')
        this.audioEl.play()
        
    })
  }

}

export async function renderCards() {
   const ulEl =  document.querySelector('.music_list')
   ulEl.innerHTML = ""

  const songsList = await fetch("./js/data.json")
  const songsData = await songsList.json()
  songsData.forEach((song) => {
    const card =  new Card(song.title, song.artist, song.lyrics, song.mp3)
    card.createCard()
  })
}

