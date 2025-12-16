import { renderCards } from "./CardClass.js"
import {handleSearch} from "./handleButtonEvenets.js"


document.addEventListener('DOMContentLoaded', () => {
    renderCards()
    handleSearch()
})