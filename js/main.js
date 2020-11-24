$(document).ready(
  function() {

    $(".prev").click(
      function(){
        prevImg();
      }
    )

    $(".next").click(
      function(){
        nextImg();
      }
    )

    $(document).keydown(
      function(){
        if(event.which == 37){      // 37 risulta la freccia sinistra della tastiera

          prevImg();

        }else if(event.which == 39){  // 39 risulta la freccia destra della tastiera

          nextImg();

        }
      }
    )
  }
)


function nextImg() {
  var activeImg = $(".images img.active");
  var activeCircle = $(".nav i.active")
  activeImg.removeClass("active");                        //tolgo la classe active all'immagine
  activeCircle.removeClass("active");
  if (activeImg.hasClass("last")) {
    $(".images img:first-child").addClass("active");
    $(".nav i.first").addClass("active");                 // questo if controlla che una volta arrivati all'ultima img
  }else{                                                  // rida' alla prima immagine la classe active cosi da creare uno slider infinito

    activeImg.next().addClass("active");                  // e la inserisco nella successiva cosi da creare lo slider
    activeCircle.next().addClass("active");
  }


}

function prevImg() {
  var activeImg = $(".images img.active");
  var activeCircle = $(".nav i.active")

  activeImg.removeClass("active");                        //tolgo la classe active all'immagine
  activeCircle.removeClass("active");

  if (activeImg.hasClass("first")) {
    $(".images img.last").addClass("active");
    $(".nav i.last").addClass("active");                  // questo if controlla che una volta arrivati alla prima img
  }else{                                                  // rida' all'ultima immagine la classe active cosi da creare uno slider infinito

    activeImg.prev().addClass("active");                  // e la inserisco nella precedente cosi da creare lo slider
    activeCircle.prev().addClass("active");
  }
}
