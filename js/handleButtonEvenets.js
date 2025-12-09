export function playSong() {
    const cards = document.querySelectorAll(".music_item") 

    let currentSong = null

    cards.forEach((card) =>{
        card.addEventListener("click", function(e) {
        let song = e.target.closest(".music_card-audio")

        if (currentSong === song) {
            if (song.paused) {
                song.play()
            } else {
                song.pause()
                return
            }
        }

        if (currentSong) {
            currentSong.pause()
            currentSong.currentTime = 0
        }

        song.play()
        currentSong = song

    })
    })
}
