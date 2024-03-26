
// MODAL BOX MAGAZINE
function openModal() {

          let modal = document.getElementById("myModal");
          // Get the <span> element that closes the modal
          let span = document.getElementsByClassName("close")[0];

          modal.style.display = "inline-block";

          // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
              modal.style.display = "none";
             }

          window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
           }

}

//E-BookVol-1
function openModalEbook() {

  let modal = document.getElementById("Ebook1");
  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  modal.style.display = "inline-block";

  // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
     }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
   }

}

//E-BookVol-2
function openModalEbook2() {

  let modal = document.getElementById("Ebook2");
  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  modal.style.display = "inline-block";

  // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
     }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
   }

}