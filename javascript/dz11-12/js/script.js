$(document).ready(function () {

//----------carouselka
(function () {
  var leftBtn = $('div.carousel-arrow-left');
  var rightBtn = $('div.carousel-arrow-right');
  var elementsList = $('ul.carousel-list');
  var pixelOffset = 490;
  var currentLeftValue = 0;
  var elementsCount = elementsList.find('li').length;
  var minimumOffset = - ((elementsCount - 2) * pixelOffset);
  var maximumOffset = 0;

  leftBtn.click(function () {
    if (currentLeftValue != maximumOffset) {
      currentLeftValue += 490;
      elementsList.animate({left : currentLeftValue + "px"}, 800);
      }
  });
  rightBtn.click(function () {
    if (currentLeftValue != minimumOffset) {
      currentLeftValue -= 490;
      elementsList.animate({left : currentLeftValue + "px"}, 800);
      }
  });
})();
//-------finita del carousel


// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();

(function () {
  var html = $('#test').html();
  var candidatesInfo = [
    {
    name: 'Semen',
    job_title: 'manager',
    company: 'good company',
    salary: 'USD 1000',
    family_status: 'sole'
    },
    {
    name: 'Anton',
    job_title: 'super manager',
    company: 'awfull company',
    salary: 'USD 100',
    family_status: 'egoist'
    },
    {
    name: 'Luda',
    job_title: 'traffic manager',
    company: 'mega company',
    salary: 'USD 1500',
    family_status: 'free'
    }
  ];
  var content = tmpl(html, {data: candidatesInfo});

  $('.templating').append(content);

})();

});
