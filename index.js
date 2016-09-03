// JavaScript File


    /*<img src='myphoto.jpg' id="image_1" style="position: absolute;" />
    <img src='myfriendandme.jpg' id="image_2" style="opacity: 0; filter: alpha(opacity=0); position: absolute;" />
    <img src='back.jpg' id="image_3" style="opacity: 0; filter: alpha(opacity=0); position: absolute;" />
    <img src='aboutme.jpg' id="image_4" style="opacity: 0; filter: alpha(opacity=0); position: absolute;" />
     </div>*/

/*var total_pics_num = 4; // колличество изображений
  var interval = 5000;    // задержка между изображениями
  var time_out = 1;       // задержка смены изображений
  var i = 0;
  var timeout;
  var opacity = 100;
  function fade_to_next() {
    opacity--;
    var k = i + 1;
    var image_now = 'image_' + i;
    if (i == total_pics_num) k = 1;
    var image_next = 'image_' + k;
    document.getElementById(image_now).style.opacity = opacity/100;
    document.getElementById(image_now).style.filter = 'alpha(opacity='+ opacity +')';
    document.getElementById(image_next).style.opacity = (100-opacity)/100;
    document.getElementById(image_next).style.filter = 'alpha(opacity='+ (100-opacity) +')';
    timeout = setTimeout("fade_to_next()",time_out);
    if (opacity==1) {
      opacity = 100;
      clearTimeout(timeout);
    }
  }
  setInterval (
    function() {
      i++;
      if (i > total_pics_num) i=1;
      fade_to_next();
    }, interval
  );*/
  
  function setBigImage(foto) {
    document.getElementById("bigimg").src = foto.src;
  }
 
   $(".zoom").loupe();