$(document).ready(function(){
    $("#designMain").click(function(){
      $(".designImg").hide();
      $("#design").toggle();
    });
});

$(document).ready(function(){
  $("#developmentMain").click(function(){
    $(".developmentImg").hide();
    $("#development").show();
  });
});

$(document).ready(function(){
  $("#productionMain").click(function(){
    $(".productionImg").hide();
    $("#production").show();
  });
});