(function($) {
  	$.mourn = function(options) {
  		var settings = $.extend({
            ribbon: true,
            ribbonSize: 'large',
            ribbonPosition: 'top-right',
            gray: true,
            grayscale:0.9
      }, options);

      // set gray scale
      if(settings.gray){        
        grayscale = settings.grayscale*100+'%';
        var styles = {
          'filter' : 'gray',
          'filter': 'grayscale('+grayscale+')',
          '-moz-filter': 'grayscale('+grayscale+')',
          '-webkit-filter': 'grayscale('+grayscale+')'
        };
        $('html').css(styles);
      }else{
        var styles = {
          'filter' : 'initial',
          'filter': 'initial',
          '-moz-filter': 'initial',
          '-webkit-filter': 'initial'
        };
        $('html').css(styles);
      }

      if(settings.ribbon){
        if(settings.ribbonSize == 'small'){

        }else if(settings.ribbonSize == 'large'){
          $('body').append(
            '<div class="mourn-ribbon">'
              + '<div class="ribbon-top"></div>'

              + '<div class="ribbon-wing ribbon-left">'
                + '<div class="ribbon-outside"></div>'
                + '<div class="ribbon-inside"></div>'
              + '</div>'

              + '<div class="ribbon-wing ribbon-right">'
                + '<div class="ribbon-outside"></div>'
                + '<div class="ribbon-inside"></div>'
              + '</div>'
            + '</div>'
          );
        }        
        if(settings.ribbonPosition=='top-right'){
          // setting css
          var styles = {
            'position' : 'fixed',
            'right': 0,
            'top': 0
          };
          $('.mourn-ribbon').css(styles);
        }else if(settings.ribbonPosition=='top-left'){
          var styles = {
            'position' : 'fixed',
            'left': 0,
            'top': 0
          };
        }else if(settings.ribbonPosition=='bottom-right'){
          var styles = {
            'position' : 'fixed',
            'bottom': 0,
            'right': 0
          };
        }else if(settings.ribbonPosition=='bottom-left'){
          var styles = {
            'position' : 'fixed',
            'bottom': 0,
            'left': 0
          };
        }
        $('.mourn-ribbon').css(styles);
      }
  	};
}(jQuery));
