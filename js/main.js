import {navFunc, doSongPage, createfavoriteList, handleSearch} from "./handleButtonEvenets.js"


document.addEventListener('DOMContentLoaded', () => {

    navFunc("songs")
    doSongPage()
    createfavoriteList()
    handleSearch()
   
})