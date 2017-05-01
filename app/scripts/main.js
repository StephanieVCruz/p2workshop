$(document).ready(function() {
  $('#fullpage').fullpage({

  anchors: ['page1', 'page2', 'page3', 'page4','page5'],
  sectionsColor: ['#fce4ec', '#efebe9', '#C0C0C0', '#ADD8E6'],

  //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors:['firstPage', 'secondPage'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['firstSlide', 'secondSlide'],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',

}); //end fullpage

   $('.tooltipped').tooltip({delay: 50});

}); //end document.ready(function())
