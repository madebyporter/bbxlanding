var js = js || {},
  body = $('body');

// Scripts
js.main = {
  init: function () {
    this.externalLinks();
  },
  externalLinks: function() {
    function externalLinks() {
      var anchors = document.querySelectorAll( 'a' );
      for( var i = 0; i < anchors.length; i++ ) {
        if ( anchors[i].hostname !== window.location.hostname ) {
            anchors[i].setAttribute( 'target', '_blank' );
        }
      }
    }
    externalLinks();
  }
};

document.addEventListener('DOMContentLoaded', function(){
  js.main.init();
});