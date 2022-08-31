<div class="main-container">
    🚀&nbsp;
    <a target="_blank" href="https://www.prototype-land.com">
   	 Go to all prototypes
   </a>
   {% assign titleParts = site.github.project_title| replace:"-", " " | split: "_" %}
   <h1 class="main-heading"> {{  titleParts[0] | capitalize }} // {{ titleParts[1] | capitalize }} {{ titleParts[2] | capitalize }}</h1>
   <div class="content-container">
      <div class="left-side">
         <h4 class="links-heading">Prototype Links
         </h4>
         <ol>
            {% for variation in site.variations %}
            <li>
               <a
                  target="_blank"
                  href="{{ variation.url }}"
                  >
               {{ variation.name }}
               </a>
               <div class="variation-description">
                  {{ variation.description }}
               </div>
            </li>
            {% endfor %}
         </ol>
         <div>
            <hr/>
            <h4 class="project-description-heading">Project Description</h4>
            <div class="project-description">{{ site.description }}</div>
            <div class="project-details">UX Owner : {{site.ux_owner}}</div>
            <div class="project-details">Prototyper : {{site.prototyper}}</div>
            <div class="project-details">Date Created : {{site.date_created}}</div>
            <h4 >Useful Links</h4>
            {% for link in site.useful_links %}
            <a target="_blank"
               href="{{ link.url }}">{{link.name}}</a>
            {% endfor %}
         </div>
      </div>
      <div>
         <div class="right-side">
            <img src="screenshot.png" />
         </div>
      </div>
   </div>
</div>
