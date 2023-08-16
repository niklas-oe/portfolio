export default class ImageModal {
    constructor() {
        this.init();
    }

    init() {
        var modal = document.getElementById("img-modal");
    
        // Get the image and insert it inside the modal - use its "alt" text as a caption
        Array.from(document.getElementsByClassName("render")).forEach(
            function(element, index, array) {
                var modalImg = document.getElementById("modal-img");
                var captionText = document.getElementById("caption");
                element.onclick = function() {
                    modal.style.display = "block";
                    modalImg.src = this.src;
                    captionText.innerHTML = this.alt;
                }
            }
        );
    
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
    
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() { 
            modal.style.display = "none";
        }
    }
}