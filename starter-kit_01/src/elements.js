function elementEvents() {
  $('.image-element .resizers').remove();
  $('.element-container:not(.undraggable)').draggable( {
    containment: ".template", 
    stop: function( event, ui ) {
      convertPxToPrecent();
    }
  }
  );
  $('.image-element').resizable({
    aspectRatio: false,
    handles: "n, e, s, w, ne, se, sw, nw",
    stop: function( event, ui ) {
      let w = ($(this).width() / 1280) * 100 + "%";
      let h = ($(this).height() / parseFloat($(this).parent().height())) * 100 + "%";
      $(this).css('width', w)
      $(this).css('height', h)
    }
  }
  );
}

function convertWidth() {
  setTimeout(function() {
    $('.precent-element:not(.image-element)').each(function(index) {
      let w = ($(this).width() / $(this).parent().width()) * 105 + "%";
      $(this).css('width', w)
    });
  }, 50);
}
