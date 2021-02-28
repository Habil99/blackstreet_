
///////////////////////////////////////////////////// Carousel part
$('#blogCarousel').carousel({
    interval: 3000
});



////////////////////////////////////////// Write Review button Part
// $(document).ready(function() {

  
//   $('[data-toggle="collapse"]').click(function() {
//     $(this).toggleClass( "active" );
//     if ($(this).hasClass("active")) {
//       $(this).text("Close Review");
//     } else {
//       $(this).text("Write Review");
//     }
//   });
    
    
//   // document ready  
//   });
  

//////////////////////////////////////////////  Countdown timer Part

  
var count = 518400;
var time = [6, 0, 0, 0]; //Days, hours, minutes, seconds
var labels = ["days", "hours", "minutes", "seconds"];

// Update the count down every 1 second
var x = setInterval(function() {

  // Time calculations for days, hours, minutes and seconds
  var newTime = [];
  newTime[0] = Math.floor(count / (60 * 60 * 24));
  newTime[1] = Math.floor((count % (60 * 60 * 24)) / (60 * 60));
  newTime[2] = Math.floor((count % (60 * 60)) / (60));
  newTime[3] = Math.floor(count % 60);

  // Decrement the count by 1 second
  count--;
  // console.log(count);

  // Check for changes and execute animation
  time.forEach(function(v, k) {
    if (time[k] != newTime[k]) {
        // console.log(time[k]);
        // console.log(newTime[k]);
        time[k] = newTime[k];
        var element = document.getElementById("js-" + labels[k]);
        // console.log(element);
        element.textContent = time[k].toString();
        element.classList.toggle('js-flip');

        element.onanimationend = () => {
            element.classList.toggle('js-flip');
        };
    }
  })

  // If the count down is finished, clearInterval
  if (count < 0) {
    clearInterval(x);
  }
}, 1000);


///Privacy Policy checkbox part 
$('#accept').click(function() {
	if ($('#submitbtn').is(':disabled')) {
    	$('#submitbtn').removeAttr('disabled');
    } else {
    	$('#submitbtn').attr('disabled', 'disabled');
    }
});



///for show hide images 

// $("#show").hover(function(){
//   $("#hide").show();
// },function(){
//   $("#hide").hide();
// });


// Sign css show hide wrong password alert
// $(".login").click(function() {
  
//   var alert = $(".login").text().trim();

//   if(alert == "Hide") {
//     $(".login").text("Show");
//     $(".alert").hide();
//   }
//   else {
//     $(".login").text("Hide");
//     $(".alert").show();
//   }
//  });

//  $(document).ready(function () {
//   $(".login").click(function () {
//       $(".alert").addClass("hide"); 
//   }, function () {
//       $(".alert").addClass("hide");
//   });
// });



//Breadcrumb and tabs relation in profile.html
// var activeBreadcrumb = $('.active-breadcrumb');

// $('.nav').on('click','.nav-link',function(){
//     var self = $(this);
//     activeBreadcrumb.attr('href',self.data('url'));
//     activeBreadcrumb.text(self.text());
// });

