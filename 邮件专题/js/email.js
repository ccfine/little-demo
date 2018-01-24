window.onload = function () {
  var navs = document.getElementsByClassName("nav"),
      edits = document.getElementsByClassName("edit");

  for (var i = 0; i < navs.length; i++) {
    navs[i].addEventListener("click", function (e) {
      e.preventDefault();
      var id = this.getAttribute("href").slice(1),
          top = document.getElementById(id).offsetTop;
      $("html, body").animate({scrollTop: top}, 600);
    });
  }

  for (var j = 0; j < edits.length; j++) {
    edits[j].addEventListener("dblclick", function () {
      var _this = this;
      var txt = _this.innerHTML,
          input = document.createElement("input");
      input.value = txt;
      input.style.width = "120px";
      _this.parentNode.replaceChild(input, _this);
      input.addEventListener("keydown", function (e) {
        if (e.which == 13) {  //enter
          _this.innerHTML = this.value;
          this.parentNode.replaceChild(_this, this);
        } 
        if (e.which == 27) {  //esc
          this.parentNode.replaceChild(_this, this);
        }
      });
    })
  }
};

// $(function () {
//   $(".nav").on("click", function (e) {
//     e.preventDefault();
//     var id = $(this).attr("href");
//     var top = $(id).offset().top;
//     $("html, body").animate({scrollTop: top}, 600); 
//   });

//   $(".edit").on("dblclick", function () {
//     var $this = $(this);
//     var txt = $this.text();
//     $this.html("<input value='"+ txt +"' style='width:120px'>");
//     $("input").on("keydown", function (e) {
//       if (e.which == 13) {  //enter 
//         $this.html($(this).val());
//       }
//       if (e.which == 27) {  //esc
//         $this.html(txt);
//       }
//     });
//   });
// });