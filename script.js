$( ".start" ).click(function() {
  $( ".start" ).css( {"opacity": "0"})
  $( ".word" ).css( "transform", "rotate(20deg)" )
  $( ".spin" ).css( {"opacity": "1",
                      "z-index": "101"} )
  $( ".next, .lack"  ).css( {"display": "flex",
                              "opacity": "0"} )
  setTimeout(function(){
    $( ".start" ).css( {"display": "none"})
    $( ".next, .lack"  ).css( {"opacity": "1" } )
    $( ".word, .spin" ).css( {"transition": "5s"} )
  }, 6000);
})

$( ".next" ).click(function() {
  $( ".next" ).css( {"opacity": "0" } )
  $( ".word" ).css( "transform", "rotate(1155deg)" )
  $( ".spin" ).css( {"opacity": "1",
                      "z-index": "101"} )

  setTimeout(function(){
      $( ".next" ).css( {"display": "none" } )
      $( ".next p" ).css( {"display": "initial" } )
  }, 8000);
})

$( ".lack p" ).click(function() {
  $( ".lack, .spin, .word, .next" ).css( {"opacity": "0"})

  $( ".content" ).css( {"display": "block",
                        "opacity": "0"})
  $( ".content" ).css( {"transition": "5s"})
  $( ".text-3" ).css( {"transition": "5s"})
  $( ".text-2" ).css( {"transition": "5s"})
  $( ".text-4" ).css( {"transition": "5s"})

  generator(100, 120, -1)

  setTimeout(function(){
      $( ".lack, .spin, .word, .next" ).css( {"display": "none" } )
  }, 7000);
  setTimeout(function(){
      $( ".content" ).css( {"opacity": "1"})
      $( ".text-1" ).css( {"opacity": "1"})

  }, 1000);
  setTimeout(function(){
      $( ".text-2" ).css( {"opacity": "1"})

  }, 5700);
  setTimeout(function(){
      $( ".text-3" ).css( {"opacity": "1"})
      $( ".text-4" ).css( {"opacity": "1"})

  }, 7000);
 })


 generator = function (start_x, start_y, direction = 1, step = 3, y_step = 150){
   cards_collector = $( ".cards-collector:first" )
   let height = $(window).height()
   let width = $(window).width()
   let a = 0.03571428571428571
   let b = 8
   let c = 1100
   let x = start_x * 16.80
   console.log(x)
   let x_step = step * 1.68
   let offset = Math.sqrt(Math.abs((start_y * 9.71 * b - c)/a)) + x - width/4
   let delay = 0



   while ((x < 1680 * 1.5) && (x > -1680 * 0.2)) {
     x = x + x_step * direction
     let y = a * (x - offset ) * (x-offset) + c
     y = y/b
     let y_real = y * height/971
     let x_real = x * width/1680
     let new_card = $("<div class='card'></div>")
     new_card.css({"top": y_real + "px",
                  "left": x_real + "px",
                 "display": "none"})
     $( ".cards-collector" ).append(new_card)
     new_card.delay(delay).fadeIn(0)

     if (y < 1150) {
       delay = delay + 27}
     else {
       offset = x + direction * Math.sqrt(Math.abs((y * b - c)/a))
     }
   }}
