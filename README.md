# Front-End Ironhack Challenge

I built and deployed a fully responsive website usign HTML, CSS and Vanilla JavaScript. I followed a mobile first approach and some agile methodologies. From beginning to end, the project took approximately 35h.

<br>
<p align="center">
  <img src="/images/readme/homepage.gif"/>
</p>

## Wireframes

Before starting to code, I reframed the initial [Figma wireframe](https://www.figma.com/file/89fwdyWh1ooKZXavQLKcAB/mid-term-project?node-id=0%3A1&t=RTv7gOcl6xLsTsJe-0) I was given by making a few smaller box-based models using both Miro and pen and paper.

Making those models helped me:

- Gain a greater understanding of how the pages could be developed following DRY and KISS principles.
- Write sustainable and reusable code, by spotting shared components and styles accross pages and coding accordingly.
- Create a mobile wireframe following the brand design system.
- Reflect on user journeys, thinking what the ideal experience and functionality of the pages should be.
- Establish a reliable timeframe and plan for the project to ensure a deployed MPV on time.

## Technologies used

**Languages:**

- HTML
- CSS
- JavaScript

**Deployment and control system:**

- Netlify
- Git
- GitHub

**Additional tools:**

- Figma
- Miro
- Google Suite
- Slack
- VSC

## Components and Pages structure

This website has a homepage, a contact page and a projects page. Additionaly, there's a page where users are redirected to once they've submited the contact form in the contact page.

By using JavaScript, the shared components accross site or between pages can be used as HTML elements. These are top nav, footer and CTA section, and can be found on the _components.js file_.

Regarding the pages' structure it's worth mentioning that this website does some **data fetching from an external API**. This allows us to retrieve data for each project from this [endpoint](https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects) when clicking on the projects cards and create the relevant page thanks to some DOM manipulation.

The data we fetch is also used in the homepage to load the most recent projects cards from the API, and to provide a random project to the user when they click projects in the top navigation bar.

### Main funtionalities:

- Responsiveness (flex, media queries), the site adapts to different screen sizes
- Dynamic content due to data fetching from API
- Engaging experience owed to animations, smooth transitions and hover effects
- Contact forms with built in and JS validation
- Burguer menu
- Whole-site consistent design system
- Navigation between pages

## Demo

**Mobile first responsive design**
<br>
<br>

<p align="center">
  <img src="/images/readme/mobile-preview.gif"/>
</p>
<br>

**Data fetching from API**
<br>
<br>

<p align="center">
  <img src="/images/readme/projects-behaviour.gif"/>
</p>
<br>

**Interactiveness**
<br>
<br>

<p align="center">
  <img src="/images/readme/interactiveness.gif"/>
</p>
<br>

**Contact form validation**
<br>
<br>

<p align="center">
  <img src="/images/readme/form-validation.gif"/>
</p>
<br>

## Project link

The deployed page can be checked out [here](https://circle-mockup.netlify.app/html/index.html).

## Future work

There are a few iterations that could make this project even better:

- Polish media queries to ensure the best experience for 4k monitors
- Reduce images size to achieve faster loading
- Increase the site's accesibility features
- Provide a 404 page to improve error handling
- Polish contact forms behaviour, adding more validations and feedback
- Testing
- Review HTML to see if more semantic tags could be used
- Create a loading page

## Resources

- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Team members

I built this project with the advice and assistance of my IronHack mentors:

- [Shaun](https://github.com/IronhackShaun)
- [Raymon](https://github.com/RaymondMaroun)
