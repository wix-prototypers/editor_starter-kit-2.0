//icons and images

import * as icons from './icons.js';

const header = (title) =>
  `<div class="panel-header">
<div class="title">${title}</div>
<div class="actions">
  <div class="panel-header-buttons">
    <div class="button help-button">
      <span>?</span>
    </div>
    <div class="button close-panel">
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        class="symbol symbol-headerCloseButton"
      >
        <path
          d="M11.793 12.5L8.146 8.854 7.793 8.5l.707-.707.354.353 3.646 3.647 3.646-3.647.354-.353.707.707-.353.354-3.647 3.646 3.647 3.646.353.354-.707.707-.354-.353-3.646-3.647-3.646 3.647-.354.353-.707-.707.353-.354 3.647-3.646z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  </div>
</div>
</div>`;

export const addPanelContent = `<div class="panel-wrapper add-panel" type="regular">
${header('Add Elements')}
<div class="panel-content">
  <ul class="sub-category-list" style="background-color:#F7F8F8">
    <li class="category pages ">
      <span id="pages" class="category-name-wrapper ">
        <span class="category-name">Personalized</span>
      </span>
    </li>
    <li class="category text">
      <span id="text" class="category-name-wrapper">
        <span class="category-name">Welcome</span>
      </span>
    </li>
    <li class="category text selected">
      <span id="text" class="category-name-wrapper">
        <span class="category-name">About</span>
      </span>
    </li>

    <li class="category image">
      <span id="image" class="category-name-wrapper">
        <span data-hint-id="AddImage" class="category-name"></span>Contact
      </span>
    </li>
    <li class="category image">
      <span id="image" class="category-name-wrapper">
        <span data-hint-id="AddImage" class="category-name"></span>Pricing
        Plans
      </span>
    </li>
    <li class="category image">
      <span id="image" class="category-name-wrapper">
        <span data-hint-id="AddImage" class="category-name"></span>Promotional
      </span>
    </li>
    <li class="category image">
      <span id="image" class="category-name-wrapper">
        <span data-hint-id="AddImage" class="category-name"></span>Subscribe
      </span>
    </li>
    <li class="category image">
      <span id="image" class="category-name-wrapper">
        <span data-hint-id="AddImage" class="category-name"></span>
        Testemonials
      </span>
    </li>
    <hr class="cat-hr" />
    <li class="category image">
      <span id="image" class="category-name-wrapper">
        <span data-hint-id="AddImage" class="category-name"></span>Blank
      </span>
    </li>
    <li class="category image">
      <span id="image" class="category-name-wrapper">
        <span data-hint-id="AddImage" class="category-name"></span>Text
      </span>
    </li>

    <li class="category image">
      <span id="image" class="category-name-wrapper">
        <span data-hint-id="AddImage" class="category-name"></span>Gallery
      </span>
    </li>
    <li class="category image">
      <span id="image" class="category-name-wrapper">
        <span data-hint-id="AddImage" class="category-name"></span>Lists
      </span>
    </li>
    <li class="category image">
      <span id="image" class="category-name-wrapper">
        <span data-hint-id="AddImage" class="category-name"></span>Social
      </span>
    </li>
    <li class="category image">
      <span id="image" class="category-name-wrapper">
        <span data-hint-id="AddImage" class="category-name"></span>Form
      </span>
    </li>
  </ul>
  <div class="category-content" value="add-text">
    <div class=" section-title-bar flex justify-between">
      <span class="panel-section-title">About</span>
      <img src="${icons.iIcon}" />
    </div>
    <ul class="content-list flex column">
      <li id="bg2" class="content-item section"></li>
      <li id="bg1" class="content-item section "></li>
      <li id="bg3" class="content-item section"></li>
      <li id="bg4" class="content-item section"></li>
      <li id="bg5" class="content-item section"></li>
    </ul>
  </div>
</div>
</div>

`;
export const designPanelContent = `
<div class="panel-wrapper design-panel">
  <div class="panel-header">
    <div class="title">
      Site Design
    </div>
    <div class="actions">
      <div class="panel-header-buttons">
        <div class="button help-button">
          <span>?</span>
        </div>
        <div class="button close-panel">
          <svg width="25" height="25" viewbox="0 0 25 25" class="symbol symbol-headerCloseButton">
          <path d="M11.793 12.5L8.146 8.854 7.793 8.5l.707-.707.354.353 3.646 3.647 3.646-3.647.354-.353.707.707-.353.354-3.647 3.646 3.647 3.646.353.354-.707.707-.354-.353-3.646-3.647-3.646 3.647-.354.353-.707-.707.353-.354 3.647-3.646z" fill="currentColor"></path></svg>
        </div>
      </div>
    </div>
  </div>
  <div class="design-panel-content unkits">
    <div class="kit">
      <div class="panel-section-title" style="margin:0px 0px 20px 0px;">
        Current Theme
      </div>
      <div class="design-kit selected">
        <div class="design-suggestion" id="" style="overflow:visible;">
          <svg style="position:absolute; right:-9px; top:-9px; z-index:99999;" width="25" height="24" viewbox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.5483 12C24.5483 5.37258 19.1758 0 12.5483 0C5.92092 0 0.54834 5.37258 0.54834 12C0.54834 18.6274 5.92092 24 12.5483 24C19.1758 24 24.5483 18.6274 24.5483 12Z" fill="#146DFF"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4876 8.82953C15.7805 8.53664 16.2554 8.53664 16.5483 8.82953C16.8412 9.12243 16.8412 9.5973 16.5483 9.89019L11.0483 15.3902L8.54828 12.8902C8.25539 12.5973 8.25539 12.1224 8.54828 11.8295C8.84118 11.5366 9.31605 11.5366 9.60894 11.8295L11.0483 13.2689L15.4876 8.82953Z" fill="white"></path></svg>
          <div class="_-4m4q" style="height:100%; background: linear-gradient(90deg, #071545 0%, #071545 59%, #e03a3a 6%, #e03a3a 73%, #385eaa 0%, #385eaa 87%, #4feaff 0%, #4feaff 94%, #e3c51e 0%, #e3c51e 100%); border-radius:3px;">
            <div class="fonts">
              <div id="heading" class="sla" style="color:white;">
                Heading
              </div>
              <div id="running-text" class="sla" style="color:white;">
                Paragraph
              </div>
            </div>
          </div>
        </div>
        <div class="btns flex">
          <div class="ed-btn">
            Edit Fonts
          </div>
          <div class="ed-btn">
            Edit Colors
          </div>
        </div>
      </div>
      <div class="panel-section-title" style="margin:20px 0px;">
        Featured Themes
      </div>
      <div class="design-kit">
        <div class="design-suggestion" id="new-design" style="overflow:visible;">
          <svg style="position:absolute; right:-9px; top:-9px; z-index:99999;" width="25" height="24" viewbox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.5483 12C24.5483 5.37258 19.1758 0 12.5483 0C5.92092 0 0.54834 5.37258 0.54834 12C0.54834 18.6274 5.92092 24 12.5483 24C19.1758 24 24.5483 18.6274 24.5483 12Z" fill="#146DFF"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4876 8.82953C15.7805 8.53664 16.2554 8.53664 16.5483 8.82953C16.8412 9.12243 16.8412 9.5973 16.5483 9.89019L11.0483 15.3902L8.54828 12.8902C8.25539 12.5973 8.25539 12.1224 8.54828 11.8295C8.84118 11.5366 9.31605 11.5366 9.60894 11.8295L11.0483 13.2689L15.4876 8.82953Z" fill="white"></path></svg>
          <div class="_-4m4q" style="height:100%; background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 59%, rgb(56, 74, 211) 6%, rgb(56, 74, 211) 73%, rgb(237, 88, 41) 0%, rgb(237, 88, 41) 87%,#FBB500 0%, #FBB500 94%, #4E78BE 0%, #4E78BE 100%); border-radius:3px">
            <div class="fonts">
              <div id="heading" class="pop">
                Heading
              </div>
              <div id="running-text" class="pop">
                Paragraph
              </div>
            </div>
          </div>
        </div>
        <div class="btns flex">
          <div class="ed-btn">
            Edit Fonts
          </div>
          <div class="ed-btn">
            Edit Colors
          </div>
        </div>
      </div>
      <div class="design-kit">
        <div class="design-suggestion" style="overflow:visible;">
          <svg style="position:absolute; right:-9px; top:-9px; z-index:99999;" width="25" height="24" viewbox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.5483 12C24.5483 5.37258 19.1758 0 12.5483 0C5.92092 0 0.54834 5.37258 0.54834 12C0.54834 18.6274 5.92092 24 12.5483 24C19.1758 24 24.5483 18.6274 24.5483 12Z" fill="#146DFF"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4876 8.82953C15.7805 8.53664 16.2554 8.53664 16.5483 8.82953C16.8412 9.12243 16.8412 9.5973 16.5483 9.89019L11.0483 15.3902L8.54828 12.8902C8.25539 12.5973 8.25539 12.1224 8.54828 11.8295C8.84118 11.5366 9.31605 11.5366 9.60894 11.8295L11.0483 13.2689L15.4876 8.82953Z" fill="white"></path></svg>
          <div class="_-4m4q" style="height:100%; background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 59%, #E03B44 6%, #E03B44 73%, #87E5DC 0%, #87E5DC 87%, #1989F0 0%, #1989F0 94%, #5F5A55 0%, #5F5A55 100%); border-radius:3px">
            <div class="fonts">
              <div id="heading" class="ser">
                Heading
              </div>
              <div id="running-text" class="md">
                Paragraph
              </div>
            </div>
          </div>
        </div>
        <div class="btns flex">
          <div class="ed-btn">
            Edit Fonts
          </div>
          <div class="ed-btn">
            Edit Colors
          </div>
        </div>
      </div>
      <div class="design-kit">
        <div class="design-suggestion" id="new-design" style="overflow:visible;">
          <svg style="position:absolute; right:-9px; top:-9px; z-index:99999;" width="25" height="24" viewbox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.5483 12C24.5483 5.37258 19.1758 0 12.5483 0C5.92092 0 0.54834 5.37258 0.54834 12C0.54834 18.6274 5.92092 24 12.5483 24C19.1758 24 24.5483 18.6274 24.5483 12Z" fill="#146DFF"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4876 8.82953C15.7805 8.53664 16.2554 8.53664 16.5483 8.82953C16.8412 9.12243 16.8412 9.5973 16.5483 9.89019L11.0483 15.3902L8.54828 12.8902C8.25539 12.5973 8.25539 12.1224 8.54828 11.8295C8.84118 11.5366 9.31605 11.5366 9.60894 11.8295L11.0483 13.2689L15.4876 8.82953Z" fill="white"></path></svg>
          <div style="height:100%; background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 59%, #FFAA81 6%, #FFAA81 73%, #F9DED3 0%, #F9DED3 87%, #74928E 0%, #74928E 94%, #34435D 0%, #34435D 100%); border-radius:3px">
            <div class="fonts">
              <div id="heading" class="mono">
                Heading
              </div>
              <div id="running-text" class="md">
                Paragraph
              </div>
            </div>
          </div>
        </div>
        <div class="btns flex">
          <div class="ed-btn">
            Edit Fonts
          </div>
          <div class="ed-btn">
            Edit Colors
          </div>
        </div>
      </div>
      <div class="design-kit">
        <div class="design-suggestion" id="new-design" style="overflow:visible;">
          <svg style="position:absolute; right:-9px; top:-9px; z-index:99999;" width="25" height="24" viewbox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.5483 12C24.5483 5.37258 19.1758 0 12.5483 0C5.92092 0 0.54834 5.37258 0.54834 12C0.54834 18.6274 5.92092 24 12.5483 24C19.1758 24 24.5483 18.6274 24.5483 12Z" fill="#146DFF"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4876 8.82953C15.7805 8.53664 16.2554 8.53664 16.5483 8.82953C16.8412 9.12243 16.8412 9.5973 16.5483 9.89019L11.0483 15.3902L8.54828 12.8902C8.25539 12.5973 8.25539 12.1224 8.54828 11.8295C8.84118 11.5366 9.31605 11.5366 9.60894 11.8295L11.0483 13.2689L15.4876 8.82953Z" fill="white"></path></svg>
          <div class="_-4m4q" style="height:100%; background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 59%, #E3815F 6%, #E3815F 73%, #96DBCD 0%, #96DBCD 87%, #BBD16D 0%, #BBD16D 94%, #6D77A8 0%, #6D77A8 100%); border-radius:3px">
            <div class="fonts">
              <div id="heading" class="dance">
                Heading
              </div>
              <div id="running-text" class="md">
                Paragraph
              </div>
            </div>
          </div>
        </div>
        <div class="btns flex">
          <div class="ed-btn">
            Edit Fonts
          </div>
          <div class="ed-btn">
            Edit Colors
          </div>
        </div>
      </div>
    </div>
    <div class="unkit">
      <div class="section-title-bar flex justify-between"><span class="panel-section-title">Color Them & Text</span> ${icons.iIcon}</div>
      <div class="design-suggestion" id="">
        <div class="customize">
          <div class="cust-btn">
            Customize
          </div>
        </div>
        <div class="_-4m4q" style="height:100%; background: linear-gradient(90deg, #071545 0%, #071545 59%, #e03a3a 6%, #e03a3a 73%, #385eaa 0%, #385eaa 87%, #4feaff 0%, #4feaff 94%, #e3c51e 0%, #e3c51e 100%); border-radius:3px;">
          <div class="fonts">
            <div id="heading" style="color:white">
              Heading
            </div>
            <div id="running-text" style="color:white">
              Paragraph
            </div>
          </div>
        </div>
      </div>
      <div style="margin-bottom:40px"></div>
      <div class="section-title-bar flex justify-between"><span class="panel-section-title">Page Background</span> ${icons.iIcon}</div>
      <div class="design-suggestion" id="">
        <div class="_-4m4q flex" style="height:100%; align-items:flex-end;">
          <span style="margin:8px;"><svg width="10px" height="14px" viewbox="0 0 10 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>01 Foundation / Icon Small 18 / 11 Composer / 05 Tools / 01 Color Drop Copy 25</title>
          <defs>
            <rect id="path-1" x="0" y="0" width="250" height="80" rx="2"></rect>
            <filter id="filter-3">
              <fecolormatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.000000 0 0 0 0 0.000000 0 0 0 0 0.000000 0 0 0 1.000000 0"></fecolormatrix>
            </filter>
          </defs>
          <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Panels-/-Design-Copy-3" transform="translate(-40.000000, -333.000000)">
              <rect fill="#FFFFFF" x="0" y="0" width="300" height="692"></rect>
              <g id="Group" transform="translate(0.000000, 219.000000)">
                <g id="Group-12" transform="translate(24.000000, 60.000000)">
                  <g id="Color-/-01-Copy-2-+-Color-/-01-Copy-3-+-Color-/-01-Copy-4-+-Color-/-01-Copy-5-+-Color-/-01-Copy-6-Mask">
                    <mask id="mask-2" fill="white">
                      <use xlink:href="#path-1"></use>
                    </mask>
                    <rect stroke="#DFE5EB" x="-0.5" y="-0.5" width="251" height="81" rx="2"></rect>
                  </g>
                  <g id="Group" transform="translate(12.000000, 53.000000)" opacity="0.900000036">
                    <g filter="url(#filter-3)" id="01-Foundation-/-Icon-Small-18-/-11-Composer-/-05-Tools-/-01-Color-Drop--Copy-25">
                      <g>
                        <path d="M5,10.1363636 C5,12.2170985 6.91939144,14 9,14 C11.0806086,14 13,12.2170985 13,10.1363636 C13,8.37874017 11.6767411,6.05957632 9,3.22316699 C6.32325892,6.05957632 5,8.37874017 5,10.1363636 Z M14,10.1363636 C14,12.7865375 11.6170859,15 9,15 C6.38291411,15 4,12.7865375 4,10.1363636 C4,7.97447635 5.67777896,5 9,1.78188207 C12.3485281,5 14,7.97447635 14,10.1363636 Z M10,8 C11.1045695,8 12,8.8954305 12,10 C12,11.1045695 11.1045695,12 10,12 L10,8 Z" id="Color" fill="#FFFFFF"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g></svg>&nbsp;FFFFFF</span>
        </div>
      </div>
      <div style="margin-bottom:40px"></div>
      <div class="section-title-bar flex justify-between"><span class="panel-section-title">Page Transitions</span> ${icons.iIcon}</div>
      <div class="design-suggestion flex align-center" id="">
        <svg style="margin-left:6px;" width="69" height="68" viewbox="0 0 69 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.762085" y="0.613525" width="68" height="67.0666" rx="3" fill="#ECF2FE"></rect>
        <path d="M64.605 5.06268L6.58541 62.4691" stroke="#F44C42" stroke-width="1.5"></path></svg> <span style="margin-left:20px">None</span>
      </div>
    </div>
  </div>
</div>



`;

export const appsContent = `
<div class="panel-wrapper apps">
<div class="panel-header">
   <div class="title">Wix Apps Market</div>
   <div class="actions">
   
   <div class="panel-header-buttons">
      <div class="button help-button">
         <span>?</span>
      </div>
      <div class="button close-panel">
         <svg width="25" height="25" viewBox="0 0 25 25" class="symbol symbol-headerCloseButton">
            <path d="M11.793 12.5L8.146 8.854 7.793 8.5l.707-.707.354.353 3.646 3.647 3.646-3.647.354-.353.707.707-.353.354-3.647 3.646 3.647 3.646.353.354-.707.707-.354-.353-3.646-3.647-3.646 3.647-.354.353-.707-.707.353-.354 3.647-3.646z" fill="currentColor"></path>
         </svg>
      </div>
      </div>
      </div>
      </div>
   
<div class="panel-content">
<img src="https://cdn.jsdelivr.net/gh/wix-prototypers/editor_starter-kit@1.6/src/imagesapps.png" style="width: 100%; min-height:650px !important;   z-index:-10 !important;">
</div>
</div>`;

export const myBizContent = `
<div class="panel-wrapper my-biz-panel">
${header('My Business')}
<div class="panel-content">
</div>
</div>
`;

export const pagesPanel = `
<div panelcontent="pages" pages="default" class="panel-wrapper pages-panel">
${header('Site Pages')}
<div class="panel-content" style="margin-top:8px">
  <ul class="sub-category-list" style="background-color:#F7F8F8; width:150px; padding-top:16px; transform: translate(0px,-8px);">
    <li class="category pages selected">
      <section class="cm-trigger"></section><span id="pages" class="category-name-wrapper"><span class="category-name">Main Pages</span></span>
    </li>
    <hr style="background-color:none; border:none; border-top:1px solid #0000001c; margin:8px 0px; width:110px;"/>
    <li class="category text"><span id="text" class="category-name-wrapper"><span class="category-name">Page Transitions</span></span></li>
  </ul>
  <ul class="content-list flex column" style="width:100%; transform:translate(3px,0px)">
    <div class="flex column" style="width:100%;">
      <div class="backgorund-gray">
        <div class="panel-section-header">
          <div class="" style="font-weight:400; font-size:14px;">
            Main Menu
          </div>
          <div class="action" style="font-weight:300; font-size:14px; color:var(--blue--main)">
            + Add
          </div>
        </div>
        <ol class="sortable connectedSortable ui-sortable main-menu" value="default" style="max-height: 100vh; margin-top:16px;">
          <li class="menu-item selected" value="home">
            <div class="content flex align-center ui-sortable-handle">
              <section class="cm-trigger"></section><span class="icon-drag"><svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" style="transform:translate(0px,0px); margin-right:6px;" viewbox="0 0 5 8" class="symbol symbol-dragPage">
              <g id="Page-1" fill="none" fill-rule="evenodd">
                <g id="PAGES:-Page-List-Assets" fill="#116dff" transform="translate(-677 -338)">
                  <g id="Drag-Handle" transform="translate(677 338)">
                    <path id="Drag" d="M3 0h2v2H3V0zM0 0h2v2H0V0zm0 3h2v2H0V3zm0 3h2v2H0V6zm3-3h2v2H3V3zm0 3h2v2H3V6z"></path>
                  </g>
                </g>
              </g></svg></span> <span class="icon-page"><!--?xml version="1.0" encoding="UTF-8"?-->
               <svg width="16px" height="16px" style="transform:translate(-1px,2px)" viewbox="0 0 38 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <title>Group 12</title>
              <g id="First-Version" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                <g id="Group-12" transform="translate(3.500000, 2.000000)" stroke="#000000" stroke-width="2">
                  <path d="M3.5,11.5 L3.5,24.5 C3.5,25.6045695 4.3954305,26.5 5.5,26.5 L26.5,26.5 C27.6045695,26.5 28.5,25.6045695 28.5,24.5 L28.5,12.5 L28.5,12.5 L31.5,12.5 L16,0 L0,11.5 L3.5,11.5 Z" id="Line-2"></path>
                  <polyline id="Line-3" points="12 26 12 16.5 19.5 16.5 19.5 26"></polyline>
                </g>
              </g></svg></span> <span class="edit"><span>Home</span></span>
            </div>
          </li>
          <li class="menu-item" value="upcoming-shows">
            <div class="content flex align-center ui-sortable-handle">
              <section class="cm-trigger"></section><span class="icon-drag"><svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" style="transform:translate(0px,0px); margin-right:6px;" viewbox="0 0 5 8" class="symbol symbol-dragPage">
              <g id="Page-1" fill="none" fill-rule="evenodd">
                <g id="PAGES:-Page-List-Assets" fill="#828282" transform="translate(-677 -338)">
                  <g id="Drag-Handle" transform="translate(677 338)">
                    <path id="Drag" d="M3 0h2v2H3V0zM0 0h2v2H0V0zm0 3h2v2H0V3zm0 3h2v2H0V6zm3-3h2v2H3V3zm0 3h2v2H3V6z"></path>
                  </g>
                </g>
              </g></svg></span> <span class="icon-page"><svg width="14px" height="14px" viewbox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <title>Color</title>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Page-Item-2-Copy-12" transform="translate(-37.000000, 0.000000)" fill="#162D3D">
                  <g id="Icon-Copy-3" transform="translate(37.635457, 0.643781)">
                    <path d="M4.16666667,1.83333333 L1.66666667,1.83333333 C0.746666667,1.83333333 0,2.58 0,3.5 L0,6 L4.16666667,6 L4.16666667,1.83333333 Z M4.16666667,6.83333333 L4.16666667,11 L1.66666667,11 C0.746666667,11 0,10.2533333 0,9.33333333 L0,9.33333333 L0,6.83333333 L4.16666667,6.83333333 Z M9.16666667,6.83333333 L9.16666667,9.33333333 C9.16666667,10.2533333 8.42,11 7.5,11 L7.5,11 L5,11 L5,6.83333333 L9.16666667,6.83333333 Z M3.33333333,7.66666667 L0.833333333,7.66666667 L0.833333333,9.33333333 C0.833333333,9.7925 1.2075,10.1666667 1.66666667,10.1666667 L1.66666667,10.1666667 L3.33333333,10.1666667 L3.33333333,7.66666667 Z M8.33333333,7.66666667 L5.83333333,7.66666667 L5.83333333,10.1666667 L7.5,10.1666667 C7.95916667,10.1666667 8.33333333,9.7925 8.33333333,9.33333333 L8.33333333,9.33333333 L8.33333333,7.66666667 Z M9.16666667,0.166666667 C10.0866667,0.166666667 10.8333333,0.913333333 10.8333333,1.83333333 L10.8333333,1.83333333 L10.8333333,6 L5,6 L5,0.166666667 L9.16666667,0.166666667 Z M3.33333333,2.66666667 L3.33333333,5.16666667 L0.833333333,5.16666667 L0.833333333,3.5 C0.833333333,3.04083333 1.2075,2.66666667 1.66666667,2.66666667 L3.33333333,2.66666667 Z M9.16666667,1 L5.83333333,1 L5.83333333,5.16666667 L10,5.16666667 L10,1.83333333 C10,1.37416667 9.62583333,1 9.16666667,1 L9.16666667,1 Z" id="Color"></path>
                  </g>
                </g>
              </g></svg></span> <span class="edit"><span>Upcoming Shows</span></span>
            </div>
          </li>
          <li class="menu-item" value="about">
            <div class="content flex align-center ui-sortable-handle">
              <section class="cm-trigger"></section><span class="icon-drag"><svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" style="transform:translate(0px,0px); margin-right:6px;" viewbox="0 0 5 8" class="symbol symbol-dragPage">
              <g id="Page-1" fill="none" fill-rule="evenodd">
                <g id="PAGES:-Page-List-Assets" fill="#828282" transform="translate(-677 -338)">
                  <g id="Drag-Handle" transform="translate(677 338)">
                    <path id="Drag" d="M3 0h2v2H3V0zM0 0h2v2H0V0zm0 3h2v2H0V3zm0 3h2v2H0V6zm3-3h2v2H3V3zm0 3h2v2H3V6z"></path>
                  </g>
                </g>
              </g></svg></span> <span class="icon-page"><!--?xml version="1.0" encoding="UTF-8"?-->
               <svg width="15px" height="15px" style="transform:translate(0px,3px)" viewbox="0 0 23 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <title>Group 14</title>
              <g id="First-Version" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <g id="Group-14" transform="translate(1.000438, 1.000468)" stroke="#1D1D1B" stroke-width="2">
                  <line x1="14.5427616" y1="12.0262319" x2="5.54276155" y2="12.0262319" id="Stroke-1"></line>
                  <line x1="14.5427616" y1="6.02623187" x2="5.54276155" y2="6.02623187" id="Stroke-2"></line>
                  <path d="M2.54276155,0.0262318692 C0.413761555,0.806231869 -0.0392384453,2.40223187 0.00376155465,4.52723187 C0.117761555,10.1912319 0.146761555,15.8622319 0.00376155465,21.5252319 C-0.0802384453,24.8312319 1.23676155,26.1922319 4.54476155,26.0612319 C8.37176155,25.9102319 12.2117616,25.9552319 16.0427616,26.0492319 C18.9017616,26.1212319 20.1087616,24.8842319 20.0687616,22.0252319 C19.9837616,16.0272319 19.9837616,10.0252319 20.0687616,4.02623187 C20.1087616,1.16723187 18.9017616,-0.0597681308 16.0427616,0.00223186917 C11.7107616,0.0942318692 7.37576155,0.0262318692 3.04276155,0.0262318692" id="Stroke-3"></path>
                </g>
              </g></svg></span> <span class="edit"><span>About</span></span>
            </div>
          </li>
          <li class="menu-item" value="videos">
            <div class="content flex align-center ui-sortable-handle">
              <section class="cm-trigger"></section><span class="icon-drag"><svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" style="transform:translate(0px,0px); margin-right:6px;" viewbox="0 0 5 8" class="symbol symbol-dragPage">
              <g id="Page-1" fill="none" fill-rule="evenodd">
                <g id="PAGES:-Page-List-Assets" fill="#828282" transform="translate(-677 -338)">
                  <g id="Drag-Handle" transform="translate(677 338)">
                    <path id="Drag" d="M3 0h2v2H3V0zM0 0h2v2H0V0zm0 3h2v2H0V3zm0 3h2v2H0V6zm3-3h2v2H3V3zm0 3h2v2H3V6z"></path>
                  </g>
                </g>
              </g></svg></span> <span class="icon-page"><!--?xml version="1.0" encoding="UTF-8"?-->
               <svg width="15px" height="15px" style="transform:translate(0px,3px)" viewbox="0 0 23 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <title>Group 14</title>
              <g id="First-Version" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <g id="Group-14" transform="translate(1.000438, 1.000468)" stroke="#1D1D1B" stroke-width="2">
                  <line x1="14.5427616" y1="12.0262319" x2="5.54276155" y2="12.0262319" id="Stroke-1"></line>
                  <line x1="14.5427616" y1="6.02623187" x2="5.54276155" y2="6.02623187" id="Stroke-2"></line>
                  <path d="M2.54276155,0.0262318692 C0.413761555,0.806231869 -0.0392384453,2.40223187 0.00376155465,4.52723187 C0.117761555,10.1912319 0.146761555,15.8622319 0.00376155465,21.5252319 C-0.0802384453,24.8312319 1.23676155,26.1922319 4.54476155,26.0612319 C8.37176155,25.9102319 12.2117616,25.9552319 16.0427616,26.0492319 C18.9017616,26.1212319 20.1087616,24.8842319 20.0687616,22.0252319 C19.9837616,16.0272319 19.9837616,10.0252319 20.0687616,4.02623187 C20.1087616,1.16723187 18.9017616,-0.0597681308 16.0427616,0.00223186917 C11.7107616,0.0942318692 7.37576155,0.0262318692 3.04276155,0.0262318692" id="Stroke-3"></path>
                </g>
              </g></svg></span> <span class="edit"><span>Videos</span></span>
            </div>
          </li>
          <li class="menu-item" value="gallery">
            <div class="content flex align-center ui-sortable-handle">
              <section class="cm-trigger"></section><span class="icon-drag"><svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" style="transform:translate(0px,0px); margin-right:6px;" viewbox="0 0 5 8" class="symbol symbol-dragPage">
              <g id="Page-1" fill="none" fill-rule="evenodd">
                <g id="PAGES:-Page-List-Assets" fill="#828282" transform="translate(-677 -338)">
                  <g id="Drag-Handle" transform="translate(677 338)">
                    <path id="Drag" d="M3 0h2v2H3V0zM0 0h2v2H0V0zm0 3h2v2H0V3zm0 3h2v2H0V6zm3-3h2v2H3V3zm0 3h2v2H3V6z"></path>
                  </g>
                </g>
              </g></svg></span> <span class="icon-page"><!--?xml version="1.0" encoding="UTF-8"?-->
               <svg width="15px" height="15px" style="transform:translate(0px,3px)" viewbox="0 0 23 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <title>Group 14</title>
              <g id="First-Version" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <g id="Group-14" transform="translate(1.000438, 1.000468)" stroke="#1D1D1B" stroke-width="2">
                  <line x1="14.5427616" y1="12.0262319" x2="5.54276155" y2="12.0262319" id="Stroke-1"></line>
                  <line x1="14.5427616" y1="6.02623187" x2="5.54276155" y2="6.02623187" id="Stroke-2"></line>
                  <path d="M2.54276155,0.0262318692 C0.413761555,0.806231869 -0.0392384453,2.40223187 0.00376155465,4.52723187 C0.117761555,10.1912319 0.146761555,15.8622319 0.00376155465,21.5252319 C-0.0802384453,24.8312319 1.23676155,26.1922319 4.54476155,26.0612319 C8.37176155,25.9102319 12.2117616,25.9552319 16.0427616,26.0492319 C18.9017616,26.1212319 20.1087616,24.8842319 20.0687616,22.0252319 C19.9837616,16.0272319 19.9837616,10.0252319 20.0687616,4.02623187 C20.1087616,1.16723187 18.9017616,-0.0597681308 16.0427616,0.00223186917 C11.7107616,0.0942318692 7.37576155,0.0262318692 3.04276155,0.0262318692" id="Stroke-3"></path>
                </g>
              </g></svg></span> <span class="edit"><span>Gallery</span></span>
            </div>
          </li>
          <li class="menu-item" value="contact">
            <div class="content flex align-center ui-sortable-handle">
              <section class="cm-trigger"></section><span class="icon-drag"><svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" style="transform:translate(0px,0px); margin-right:6px;" viewbox="0 0 5 8" class="symbol symbol-dragPage">
              <g id="Page-1" fill="none" fill-rule="evenodd">
                <g id="PAGES:-Page-List-Assets" fill="#828282" transform="translate(-677 -338)">
                  <g id="Drag-Handle" transform="translate(677 338)">
                    <path id="Drag" d="M3 0h2v2H3V0zM0 0h2v2H0V0zm0 3h2v2H0V3zm0 3h2v2H0V6zm3-3h2v2H3V3zm0 3h2v2H3V6z"></path>
                  </g>
                </g>
              </g></svg></span> <span class="icon-page"><svg width="15px" height="15px" style="transform:translate(0px,3px)" viewbox="0 0 23 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <title>Group 14</title>
              <g id="First-Version" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <g id="Group-14" transform="translate(1.000438, 1.000468)" stroke="#1D1D1B" stroke-width="2">
                  <line x1="14.5427616" y1="12.0262319" x2="5.54276155" y2="12.0262319" id="Stroke-1"></line>
                  <line x1="14.5427616" y1="6.02623187" x2="5.54276155" y2="6.02623187" id="Stroke-2"></line>
                  <path d="M2.54276155,0.0262318692 C0.413761555,0.806231869 -0.0392384453,2.40223187 0.00376155465,4.52723187 C0.117761555,10.1912319 0.146761555,15.8622319 0.00376155465,21.5252319 C-0.0802384453,24.8312319 1.23676155,26.1922319 4.54476155,26.0612319 C8.37176155,25.9102319 12.2117616,25.9552319 16.0427616,26.0492319 C18.9017616,26.1212319 20.1087616,24.8842319 20.0687616,22.0252319 C19.9837616,16.0272319 19.9837616,10.0252319 20.0687616,4.02623187 C20.1087616,1.16723187 18.9017616,-0.0597681308 16.0427616,0.00223186917 C11.7107616,0.0942318692 7.37576155,0.0262318692 3.04276155,0.0262318692" id="Stroke-3"></path>
                </g>
              </g></svg></span> <span class="edit"><span>Contact</span></span>
            </div>
          </li>
          <li class="menu-item" value="writing">
            <div class="content flex align-center ui-sortable-handle">
              <section class="cm-trigger"></section><span class="icon-drag"><svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" style="transform:translate(0px,0px); margin-right:6px;" viewbox="0 0 5 8" class="symbol symbol-dragPage">
              <g id="Page-1" fill="none" fill-rule="evenodd">
                <g id="PAGES:-Page-List-Assets" fill="#828282" transform="translate(-677 -338)">
                  <g id="Drag-Handle" transform="translate(677 338)">
                    <path id="Drag" d="M3 0h2v2H3V0zM0 0h2v2H0V0zm0 3h2v2H0V3zm0 3h2v2H0V6zm3-3h2v2H3V3zm0 3h2v2H3V6z"></path>
                  </g>
                </g>
              </g></svg></span> <span class="icon-page"><svg width="20" height="20" style="transform:translate(0px,2px)" viewbox="0 0 20 20" class="symbol symbol-glaPageType page-entry-symbol">
              <g fill="#1D2D3C" fill-rule="evenodd">
                <path d="M7 3h5V2H7zM7 4l-2 6 4.5 8 4.5-8-2-6H7zm1.41 10.99l-.06-.87-2.37-4.21L7.65 4.9h3.7l1.67 5.01-2.37 4.21-.06.87-.59.28V11h1v-1h-1V9H9v1H8v1h1v4.27l-.59-.28z"></path>
              </g></svg></span> <span class="edit"><span>Writing</span></span>
            </div>
          </li>
          <ol class="title-ol"></ol>
        </ol>
      </div>
      <div class="panel-footer flex pp" value="default" style="width:336px">
        <span class="add-page-btn"><span style="font-size:20px;">+</span> Add Page</span>
      </div>
    </div>
  </ul>
</div>
</div>
`;

export const addSectionsContent = `
<div class="panel-wrapper add-sections">
${header('Add Sections')}
<div class="panel-content">
</div>
</div>`;
