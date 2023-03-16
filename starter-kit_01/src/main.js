$(document).ready(function() {

  $('.gfpp-main-action[type="Manage-Media"] > span').text('Quick Edit');
  $('.gfpp-main-action[type="Change-Text"] > span').text('Create AI Text');
  $('.gfpp-main-action[type="Change-Vector-Art"] > span').text('Change Strip Background');
  $('.gfpp-main-action[type="Change-Design"] > span').text('Manage Columns');
  $('.gfpp-main-action[type="Settings"] > span').text('Change Column Background');
  $('.draggable').removeClass('draggable');

  elementEvents();

  $(document).on('click', '.category-name-wrapper', function functionName() {
    let content = $(this).attr('add-item');
    $('.show-add-content').removeClass('show-add-content');
    $(`.second-sub-list[second-content="${content}"]`).addClass('show-add-content');
    $('.add-panel-content').attr('content', `${content}`);
    $('.panel-wrapper.add-panel').attr('content', `${content}`);

    $('.add-panel-content img').attr('src', `../images/add-panel-${content}.png`);
    selectAddPanelItem($(this).parent())
  });

  $(document).on('click', '.gfpp-btn[type="layout"]', function functionName() {
    $('.columns').removeClass('hide');
  });

  // go to preview & hide the workspace
  $('.preview').click(function functionName() {
    $('[preview-mode]').attr('preview-mode', 'on');
    clearSelect();
    convertWidth();
    convertPxToPrecent();
  });

  // go to editor & return the workspace
  $('.back-to-editor-btn').click(function functionName() {
    $('[preview-mode]').attr('preview-mode', 'off');
    $('.text-element').css('width', 'fit-content');
    fixSectionActionsRight();
    $('.template').css('zoom', 'unset');
    $('.template').removeClass('zooming');
  });

  $(document).on('click', '.add-panel-content[content="strip"]', function functionName() {
    clearSelect();
    $('.strip').removeClass('hide');
    $('.strip').css('top', '0px');
    $('.strip').css('left', '0px');
    $('[hat="Column 1"]').addClass('selected');
    state.leftPanel = false;
  })

  $(document).on('click', '.add-panel-content[content="image"]', function functionName() {
    clearSelect();
      $('#e6').removeClass('hide');
      $('#e6').addClass('selected');
      $('#e6').css('top', '70px');
      $('#e6').css('left', '200px');
      $("#s2").insertAfter("#s3");

    state.leftPanel = false;
  })

  $(document).on('click', '.add-panel-content[content="button"]', function functionName() {
    clearSelect();
    if($('.strip').hasClass('hide') || !$('#b100').hasClass('hide')) { // without strip
      $('#b200').removeClass('hide');
      $('#b200').addClass('selected');
      $('#b200').css('top', '70px');
      $('#b200').css('left', '200px');
      $("#s2").insertAfter("#s3");
    } else {
      $('#b100').removeClass('hide');
      $('#b100').addClass('selected');
      $('#b100').css('top', '70px');
      $('#b100').css('left', '200px');
    }
    state.leftPanel = false;
  })

  $(document).on('click', '.Add-Section', function functionName(e) {
    e.stopPropagation();
    let thisID = $(this).attr('id');
    console.log(thisID)
  });

  $(document).on('click', '.add-h1-btn', function functionName(e) {
    clearSelect();
    if($('.strip').hasClass('hide') || !$('#e1').hasClass('hide')) { // without strip
      $('#e4').removeClass('hide');
      $('#e4').css('top', '70px');
      $('#e4').css('left', '200px');
      $('#e4').addClass('selected');
      $("#s2").insertAfter("#s3");
    } else {
      $('#e1').removeClass('hide');
      $('#e1').css('top', '70px');
      $('#e1').css('left', '-220px');
      $('#e1').addClass('selected');
    }
    state.leftPanel = false;
  });

  $(document).on('click', '.add-para-btn', function functionName(e) {
    clearSelect();
    if($('.strip').hasClass('hide') || !$('#e2').hasClass('hide')) { // without strip
      $('#e5').removeClass('hide');
      $('#e5').css('top', '70px');
      $('#e5').addClass('selected');
      $("#s2").insertAfter("#s3");
    } else {
      $('#e2').removeClass('hide');
      $('#e2').css('top', '70px');
      $('#e2').addClass('selected');
    }
    state.leftPanel = false;
  });

  fixSectionActionsRight();
  $('.preview').trigger('click');
  setTimeout(function functionName() {
    $('.back-to-editor-btn').trigger('click');
  }, 50)


});

// update sectionActions position
$(window).resize(function functionName() {
  fixSectionActionsRight();
  if($(window).width() <= 800 && $('[preview-mode]').attr('preview-mode') == "on") {
    let stageZoom = (($(window).width()) / 800) * 100 ;
    stageZoom >= 150 ? stageZoom = 150 : '';
    $('.template').css('zoom', stageZoom + "%");
    $('.template').addClass('zooming');
  } else {
    $('.template').css('zoom', 'unset');
    $('.template').removeClass('zooming');
  }
});

$('html').keyup(function(e){
    if(e.keyCode == 8 || e.keyCode == 46) {
      if($('.element-container.selected').length > 0) {
        $('.element-container.selected:not(#s2):not(#s3)').addClass('hide')
      }
    }
});

function fixSectionActionsRight() {
  console.log($('.template').offset().left)
  let newRight = $('.template').offset().left + 1280;
  newRight = newRight - 19; // add 50% of the SectionActoins width
  $('.sectionActions').css('left', newRight);
  if($(window).width() < 1380) {
    $('.sectionActions').css('left', 'unset');
    $('.sectionActions').css('right', '24px');
  }
}

function selectAddPanelItem(element) {
  $('.category').not('.second-category').removeClass('selected');
  element.addClass('selected');
}

function addPanel() {
  return {
    panelName: 'My Add Panel',
    template: `<ul class="sub-category-list" style="background-color:#F7F8F8;width: 150px;">
    <li class="category selected">
      <span id="pages" class="category-name-wrapper" add-item="text">
        Text
      </span>
    </li>
    <li class="category">
      <span id="text" class="category-name-wrapper" add-item="image">
        Image
      </span>
    </li>
    <li class="category">
      <span id="text" class="category-name-wrapper" add-item="button">
        Button
      </span>
    </li>
    <li class="category">
      <span class="category-name-wrapper" add-item="strip">
        Strip
      </span>
    </li>
    <li class="category">
      <span class="category-name-wrapper" add-item="none">
        Decorative
      </span>
    </li>
    <li class="category">
      <span class="category-name-wrapper" add-item="none">
        Box
      </span>
    </li>
    <li class="category">
      <span class="category-name-wrapper" add-item="none">
        Gallery
      </span>
    </li>
    <li class="category">
      <span class="category-name-wrapper" add-item="none">
        Menu & Anchor
      </span>
    </li>
    <li class="category">
      <span class="category-name-wrapper" add-item="none">
        Contact & Forms
      </span>
    </li>
    <li class="category">
      <span class="category-name-wrapper" add-item="none">
        Video & Music
      </span>
    </li>
    <li class="category">
      <span class="category-name-wrapper" add-item="none">
        Interactive
      </span>
    </li>
    <li class="category">
      <span class="category-name-wrapper" add-item="none">
        List
      </span>
    </li>
    <li class="category">
      <span class="category-name-wrapper" add-item="none">
        Embed Code
      </span>
    </li>
    <li class="category">
      <span class="category-name-wrapper" add-item="none">
        Social
      </span>
    </li>
    <li class="category">
      <span class="category-name-wrapper" add-item="none">
        Content Manager
      </span>
    </li>
    <li class="category">
      <span class="category-name-wrapper" add-item="none">
        Community
      </span>
    </li>
  </ul>
  <ul class="sub-category-list second-sub-list show-add-content" second-content="text">
  <li class="category second-category selected">
    <span id="pages" class="category-name-wrapper ">
      Themed Text
    </span>
  </li>
  <li class="category second-category">
    <span id="text" class="category-name-wrapper">
      Titles
    </span>
  </li>
  <li class="category second-category">
    <span id="text" class="category-name-wrapper">
      Paragraphs
    </span>
  </li>
</ul>
<ul class="sub-category-list second-sub-list" second-content="strip">
<li class="category second-category selected">
  <span class="category-name-wrapper ">
    Classic
  </span>
</li>
<li class="category second-category">
  <span class="category-name-wrapper">
    Featured
  </span>
</li>
<li class="category second-category">
  <span class="category-name-wrapper">
    About
  </span>
</li>
<li class="category second-category">
  <span class="category-name-wrapper">
    Services
  </span>
</li>
<li class="category second-category">
  <span class="category-name-wrapper">
    Contact
  </span>
</li>
<li class="category second-category">
  <span class="category-name-wrapper">
    Welcome
  </span>
</li>
<li class="category second-category">
  <span class="category-name-wrapper">
    Testimonials
  </span>
</li>
<li class="category second-category">
  <span class="category-name-wrapper">
    Team
  </span>
</li>
</ul>
<ul class="sub-category-list second-sub-list" second-content="image">
<li class="sub-title">MY IMAGES</li>
<li class="category second-category selected">
  <span id="pages" class="category-name-wrapper ">
   Upload & Import
  </span>
</li>
<li class="sub-title">EXPLORE IMAGES</li>
<li class="category second-category">
  <span id="text" class="category-name-wrapper">
    Free from Wix
  </span>
</li>
<li class="category second-category">
  <span id="text" class="category-name-wrapper">
    Free Wix Illustrations
  </span>
</li>
</ul>
<ul class="sub-category-list second-sub-list" second-content="button">
<li class="sub-title">BUTTONS</li>
<li class="category second-category selected">
  <span id="pages" class="category-name-wrapper selected">
   Themed Buttons
  </span>
</li>
<li class="category second-category">
  <span id="text" class="category-name-wrapper">
    Text & Icon Buttons
  </span>
</li>
<li class="category second-category">
  <span id="text" class="category-name-wrapper">
    Icon Buttons
  </span>
</li>
<li class="category second-category">
  <span id="text" class="category-name-wrapper">
    Image Buttons
  </span>
</li>
<li class="category second-category">
  <span id="text" class="category-name-wrapper">
    Document Buttons
  </span>
</li>
<li class="category second-category">
  <span id="text" class="category-name-wrapper">
    iTunes Buttons
  </span>
</li>
</ul>
<div class="add-panel-content" content="text"><img src="../images/add-panel-text.png"/>
<div class="add-h1-btn"></div>
<div class="add-para-btn"></div>
</div>`,
    methods: {
      example(addPanelContainer) {
      },
    },
  };
}

function onGfppClick() {
  // add columns
  if(this.buttonType == "layout") {
    $('.columns').removeClass('hide');
    $('.column[hat="Column 1"]').addClass('selected')
  }

  // change column background
  if(this.buttonType == "Settings") {
    $('.column[hat="Column 1"]').addClass('background-added');
  }

  if(this.buttonType == "Change-Section-Background") {
    $('.section.selected').css('background', '#F5F8FD');

  }
}

function clearSelect() {
  $('.element-container.selected').removeClass('selected');
  $('.parent-select').removeClass('parent-select');
}

function convertPxToPrecent() {
  $('.element-container:not(.section):not(.header-item)').each(function(index) {
    var l = (100 * parseFloat($(this).position().left / parseFloat($(this).parent().width()))) + "%";
    var t = (100 * parseFloat($(this).position().top / parseFloat($(this).parent().height()))) + "%";
    $(this).css("left", l);
    $(this).css("top", t);
  })
}
