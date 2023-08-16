import EventEmitter from "events";

export default class Language extends EventEmitter {
    constructor() {
        super();

        this.language = "german";
        
        this.toggleButton = document.querySelector(".toggle-button");
        this.toggleCircle = document.querySelector(".toggle-circle");
        this.englishText = document.querySelectorAll(".en");
        this.germanText = document.querySelectorAll(".de");

        this.setEventListeners();
        this.init();
    }

    init() {
        this.toggleLanguage(this.englishText, false);
    }

    setEventListeners() {
        this.toggleButton.addEventListener("click", () => {
            this.toggleCircle.classList.toggle("slide");
            this.language = this.language == "english" ? "german" : "english";
            this.toggleLanguage(this.englishText, this.language == "english");
            this.toggleLanguage(this.germanText, this.language == "german");
        })
    }

    toggleLanguage(lan, visible) {
        var index = 0, length = lan.length;
        for ( ; index < length; index++) {
            lan[index].style.display = visible ? "block" : "none";
        }
    }
}