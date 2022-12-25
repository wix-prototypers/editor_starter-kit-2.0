# **Wix Editor Prototoype Starter Kit 🚀**

![screnshot](https://github.com/wix-prototypers/editor_starter-kit-2.0/blob/master/screenshot.png)

### **Introduction**

The "Editor Starter Kit" project includes out-of-the-box functionality that can help creating prototypes of
features inside thr classic editor

### **1.Installation 🔗**

#### Local usage requires serving the HTML via live server:

`Atom:`
https://atom.io/packages/atom-live-server

`VS-code:`
https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

Add the following links in your prototype's index file.

```HTML
<script type="module" src="https://cdn.jsdelivr.net/gh/wix-prototypers/editor_starter-kit-2.0@0.9/src/App.js" />

```

The following HTML snippet will genrate the editor and a basic site (header,footer ,strip,element and floating panel):

```HTML
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title> Editor | Starter Kit </title>
      <link rel="stylesheet" href="./project.css" >
      <link rel="icon" href="./imagesfav.png" type="image/x-icon">
  <body>
      <div id="editor">
      <div id="stage" >
         <div class="template">
            <div class="element-container section header" type="header" id="s0" hat="Header" gfpp="Manage-Items animation">
               <div class="element-container draggable resizable logo top-menu-items" hat="Text"><span>Hello</span></div>
               <div class="element-container draggable resizable top-menu-items"  hat="Horizontal Menu">
                  <div class="menu-item" value="home">Home</div>
                  <div class="menu-item" value="upcoming-shows">Upcoming Shows</div>
                  <div class="menu-item" value="about">About</div>
                   <div class="menu-item" value="videos">Videos</div>
                  <div class="menu-item" value="gallery">Gallery</div>
                  <div class="menu-item" value="contact">Contact</div>
                  <div class="menu-item" value="writing">Writing</div>
               </div>
            </div>
            <div class="element-container section"  hat="Section : Hello" type="section"  id="s1" gfpp="Manage-Media strech design help">
               <div class="element-container draggable resizable" id="e0" hat="Title" gfpp="Manage-Media strech design help">
                  <div class="text-content">
                     Hello 2.0
                  </div>
               </div>
            </div>

            <div class="element-container section hero"hat="Section : Hello" id="s2" type="section" >
            </div>

            <div class="element-container section footer" type="footer" id="s4" hat="Header" gfpp="Manage-Items animation">
            </div>
         </div>
      </div>



   <div class="floating-panel" element="e0" top="0" left="0" gfpp-trigger="Manage-Media" data-data-title="Hello Panel" >
        Panel Content here
      </div>
   </div>
<script  src="../src/config.js"> </script>
<script type="module" src="../src/App.js"> </script>
<script src="./project.js"> </script>
</body>
</html>
```

### **2.Using Snippets 🔗**

#### To set up the editor and stage components, consider using the following structure in your `index.html`

```HTML
  <body>
      <div id="stage" >
         <div class="template">
   ... add site componrnts here(elements, strips,header footer etc..)
         </div>
      </div>
      <div id="editor"></div>

  ... add editor utilites here(mainly floating panels )
      </div>
  <body>
```

#### Stage Snippets

##### Elemement - Creates a fullwidth strip

```HTML
 <div class="element-container resizable draggable" id="e0" hat="Title" gfpp="Edit-Text animation design help" style="top:50px; left:30px;">
     Your Content Here, The size of the content will determine the size of the container
</div>
```

##### Strip snippet - Creates a fixed (not draggable) fullwidth strip

```HTML
  <div class="element-container strip hero"  hat="Strip" id="s0" >
 </div>
```

##### Adding Gfpp Buttons To stage elements :

```HTML
  <div class="element-container" gfpp=...
```

Full Supported values list :

##### Main Actions (Text Buttons)

- Edit-Text
- Change-Background
- Change-Text
- Edit-Button
- Settings
- Manage-Menu
- Manage-Media
- Change-Design
- Manage-Items
- Change-Basic-Shape
- Change-Vector-Art
- Change-Strip-Background
- Change-Section-Background
- Change-Image

##### Icon buttons

- <img width="40" height="40" align="center" alt="Screen Shot 2022-02-01 at 11 34 32" src="https://user-images.githubusercontent.com/61973635/151944350-dfa9041b-1713-43c4-b1ce-daa12d113658.png" style="top:50px;"> design
- <img width="40" height="40" align="center" alt="Screen Shot 2022-02-01 at 11 43 35" src="https://user-images.githubusercontent.com/61973635/151945687-08d8ff45-28db-4b58-97ae-a27ae77a45b1.png"> effects
- <img width="40" height="40" align="center" alt="Screen Shot 2022-02-01 at 11 44 08" src="https://user-images.githubusercontent.com/61973635/151945757-aed9a233-6262-437f-976b-3e2ecacc354a.png"> elipssis
- <img width="40" height="40" align="center" alt="Screen Shot 2022-02-01 at 11 44 44" src="https://user-images.githubusercontent.com/61973635/151945862-5f37d349-1c59-4db3-83ae-58df9f326e9e.png"> strech
- <img width="40" height="40" align="center" alt="Screen Shot 2022-02-01 at 11 47 34" src="https://user-images.githubusercontent.com/61973635/151946324-9dea81c9-b210-428e-a5e3-f3a7bf88bcfd.png"> data
- <img  width="40" height="40" align="center"  alt="Screen Shot 2022-02-01 at 11 48 24" src="https://user-images.githubusercontent.com/61973635/151946468-65db25a7-44ab-447e-9306-cc98c28dff6b.png"> crop
- <img  width="40" height="40" align="center"  alt="Screen Shot 2022-02-01 at 11 49 28" src="https://user-images.githubusercontent.com/61973635/151946649-41c37393-e3ad-46ca-9e31-4695de9e5c89.png"> help
- <img  width="40" height="40" align="center"  alt="Screen Shot 2022-02-01 at 11 49 55" src="https://user-images.githubusercontent.com/61973635/151946720-d7ba7bac-4593-40d9-81a3-cfd69d27b60f.png"> hover
- <img  width="40" height="40" align="center"  alt="Screen Shot 2022-02-01 at 11 50 37" src="https://user-images.githubusercontent.com/61973635/151946832-1aabd683-419f-44cf-9bc4-f3983b9073b4.png"> transition
- <img  width="40" height="40" align="center"  alt="Screen Shot 2022-02-01 at 11 50 57" src="https://user-images.githubusercontent.com/61973635/151946883-db21cac4-8437-4801-bc28-d7287076aa28.png"> settingsIcon

##### Custom Gfpp Function

In your JS file, define a function that will be invoked each time a Gfpp is clicked, the function will have access to the element container id, and gfpp button type in the context (this). example:

```JavaScript
function onGfppClick() {
  console.log(
    `GFPP button was clicked. parent-element:${this.elementContainerId} gfpp button :${this.buttonType}`
  );
}
```

##### On Element Select Custom

your in your JS file, define a function that will be invoked each time an element is selected, the function will have access to the HTML element , and the element container id in the context (this) of the selected element. example:

```JavaScript
function onElementSelect() {
  console.log(
    `Element was selected. element:${this.eleme} element id:${this.elemeId}`
  );
}
```

### Editor snippets

#### Floating Panel

```HTML
 <div class="floating-panel" element="e0" gfpp-trigger="Edit-Text" data-title="Hello Panel" >
         Panel Content Here
</div>
```

Floating panels are triggered by gfpp buttons of stage elements.
Change the `element` attribute to be the `id` of the desired stage-element, and the `gfpp-trigger` to the button triggering the panel.
please make sure the button you choose exists and defined(see instructions above

##### Postion panel absolutly, relative to screen

```HTML
 <div class="floating-panel" element="e0" gfpp-trigger="Edit-Text" data-title="Hello Panel" top="0" left="0" >
         Panel Content Here
</div>
```

##### Panel close function

in your JS file define a function that will be invoked each time a floating panel closes, like so:

```JavaScript
function onFloatingPanelHide() {
  console.log("Will be invoked on floating panel close");
}
```

In the current version the same function is invoked regardless of the panel's parent element.

### 3.Using The Prototype API

<table>
  <tr>
   <td>
    Property
   </td>

   <td>
    DESCRIPTION
   </td>
   <td>
    Values
   </td>
  </tr>
  <tr>
   <td>
      state.leftPanel
   </td>

   <td>Open one one of the left panels, or close the panel
   </td>
   <td>
  add | pages | design | media | apps | bussiness | false
   </td>
  </tr>
  <tr>
     <td>state.zoomMode

   </td>
   <td>Toggle Zoom Out view
   </td>
   <td>
     true | false 
   </td>
  </tr>

  <tr>
     <td>state.selectedElement

   </td>
   <td> fetch selected element from stage or trigger selection
   </td>
   <td>
  JS element
   </td>
  </tr>
  
</table>

### 4.More Functions and Entry Points

#### Custom Top-bar and Left-Bar

in your JS file define a function that will return an object containing template and methods, replacing the default top or left bar:

##### For Top-Bar

```JavaScript
 function topbar() {
  return {
    template: `<div id="topbar" style="top:0px; left:50%; position:absolute;">Topbar</div>`,
    methods: {
      topBarClick(template) {
        template.querySelector("#topbar").onclick = (e) => {
          console.log("Topbar clicked!");
        };
      },
    },
  };
```

##### For Left-Bar

```JavaScript
 function leftbar() {
  return {
    template: `<div id="leftbar" style="top:0px; position:absolute;">LeftBar</div>`,
    methods: {
      leftbarClick(template) {
        template.querySelector("#leftbar").onclick = (e) => {
          console.log("Leftbar clicked!");
        };
      },
    },
  };
```

#### Custom Left Panels

in your JS file define a functions replacing default panels with custom panels with template and methods:

```JavaScript
function addPanel() {
  return {
    panelName: 'My Add Panel',
    template: `<span>Hello</span>`,
    methods: {
      example(addPanelContainer) {
        console.log(addPanelContainer);
      },
    },
  };
}

function addSectionsPanel() {
  return {
    panelName: 'My Sections Panel',
    template: `<span>Hello</span>`,
    methods: {
      example(addPanelContainer) {
        console.log(addSectionsContainer);
      },
    },
  };
}

function siteDesignPanel() {
  return {
    panelName: 'My Site Design Panel',
    template: `<span>Hello</span>`,
    methods: {
      example(designContainer) {
        console.log(designContainer);
      },
    },
  };
}

function myBizPanel() {
  return {
    panelName: 'My My Biz',
    template: `<span>Hello</span>`,
    methods: {
      example(myBizPanelContainer) {
        console.log(myBizPanelContainer);
      },
    },
  };
}

function pagesPanel() {
  return {
    panelName: 'My Pages Panel',
    template: `<span>Hello</span>`,
    methods: {
      example(pagesPanelContainer) {
        console.log(pagesPanelContainer);
      },
    },
  };
}

function appsPanel() {
  return {
    panelName: 'My Apps Panel',
    template: `<span>Hello</span>`,
    methods: {
      example(appsPanelContainer) {
        console.log(appsPanelContainer);
      },
    },
  };
}

```
