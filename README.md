
# The eScholarship UI Library

This repository contains all UI elements for the eScholarship website. It serves as a proof of concept for demonstrating the UI apart from its integration into the [main eScholarship project](https://github.com/eScholarship/jschol). It is built upon the React framework and developed using the Webpack bundler.

**Content below is currently being edited and may be incomplete or innacurate.**

## Installing the UI Library

### Software Requirements

* [Node and npm](https://nodejs.org/en)

### Package Installation

1. Cd to `eschol-ui`

2. Run `$ npm install` to install Node packages

### Running Development Tasks

* Cd to `eschol-ui`

* Run `$ npm run watch` to process live changes to the code in **/app**. After an initial delay, the UI Library will load at a localhost URL in a browser and will automatically reload during code changes. This URL can also be used on "mobile" devices simultaneously to verify the UI on small screens.

* Run `$ npm run build` to create a finished build of the UI Library. This creates a **/dist** directory with all files optimized for deployment and integration.

* Run `$ npm run deploy` to publish a finished build to GitHub Pages (currently at: [https://cdlib.github.io/eschol-ui](https://cdlib.github.io/eschol-ui)). This feature may require that GitHub Pages is [configured](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/) on your GitHub account.

## Getting Familiar with the Library's Assets

Within this repository, the files and folders directly related to creating and maintaining UI elements are listed below. All other files and folders in the repo can be ignored:

```
app
├── images
├── jsx
|   ├── components
|   |   └── [component].jsx
|   ├── display
|   |   └── [display].jsx
|   ├── layouts
|   |   └── [layout].jsx
|   └── objects
|       └── [object].jsx
├── scss
|   ├── _[component or object].scss
|   ├── _mixins.scss
|   ├── _variables.scss
|   └── main.scss
└── template.html
dist (created during the build process)
```

### Images

There are two types of images in the UI library: those for icons and those for content.

Icons are small SVG background images that are part of the UI design. They originate in the images folder and are injected into the main stylesheet during the development or build processes - they are not outputted as separate images. These image filenames are prepended by **icon_**.

Content images are mostly placeholder images that highlight where images from the live eScholarship website will exist. These include logos, banners, and sample images, including journal covers. They are not stored in the repo but on a static assets directory hosted by eScholarship. The remote path to these images is set via a JavaScript and Sass variable.

### Components

Components make up the largest group of UI pieces in the library. Each component is  distinct. They are not related to each other, except in a few cases where there is a React parent/child relationship. Changes to one component should not affect another. Except in rare cases, they are not mixed together.

Component files are usually imported directy into layouts or a component's entire HTML is copied into them with sample content.

Component files are named in Pascal case, starting with the component name, and ending with "Comp", as in: **SubHeaderComp.jsx**

For example, see the [Well Component](https://github.com/cdlib/eschol-ui/blob/master/app/jsx/components/WellComp.jsx).

### Display

The display folder contains files that each import a single component or object for rendering on a single page within the UI library, for reference. Occasionally, sample content is included for highlighting the proof of concept. These files are not included in the build process.

Display files are named in Pascal case, starting with the display name, and ending with "Disp", as in **SubHeaderDisp.jsx**

For example, see the [Checkbox Display](https://github.com/cdlib/eschol-ui/blob/master/app/jsx/display/CheckboxDisp.jsx).

### Layouts

Layout files each render a single page that include many ojects, components, and sample content.

Unlike components and objects, they do not have a corresponding **scss** file.

Layout files are named in Pascal case, starting with the layout name, and ending with "Layout", as in **CampusLayout.jsx**.

For example, see the [Home Layout](https://github.com/cdlib/eschol-ui/blob/master/app/jsx/layouts/HomeLayout.jsx).

### Objects

Objects are generally smaller pieces of the UI compared to components. Unlike components, they usually have more than one version within them. Because of this, object files are usually not imported directly into layouts; only the specific versions within the object file are used by copying the HTML and extending the styles using [Sass Placeholders](https://github.com/cdlib/eschol-ui#sass-placeholders).

Object files are named in Pascal case, starting with the object name, and ending with "Obj", as in **ButtonObj.jsx**.

For example, see the [Text Link Object](https://github.com/cdlib/eschol-ui/blob/master/app/jsx/objects/TextlinkObj.jsx).

### Styles

Sass files within the **scss/** folder contain all project CSS. They include:

* **\_component.scss** or **\_object.scss** where the filename is named according to the component or object. There is only one component/object Sass file for each component/object. Note that there are no Sass files for layout files.

* **\_utilities.scss** contain large chunks of styles that are included across many components and objects. They are written as Sass Placeholders and Mixins.

* **\_variables.scss** contain global Sass variables used throughout components and objects. These variables generally represent small values - like colors and spacing - and not blocks of styles, as within utilities.scss.

* **main.scss** is where all Sass files get imported and compiled via Webpack. It also contains a short section of "global" styles. This is the only Sass file that is not prepended by an underscore.

See below for more information about [working with styles](https://github.com/cdlib/eschol-ui#working-with-styles).

### Template

Template.html contains static HTML used for the UI Library's single page React application. During the Watch and Build processes, Webpack automatically transforms it to **index.html** within the **dist/** directory and adds external script and stylesheet links.

### Dist

The **dist/** directory with production-ready files is automatically erased and re-created during the Watch and Build processes.

## Developing UI Library Assets

Whether you are updating an element's style or structure, it's often best to have the element's **jsx** file and related **scss** file open together at the same time. For example, this allows you verify that any class name changes made in the HTML are also made in the accompanying CSS, and vice-versa.

### Using Debugging Tools

Regularly testing the UI helps make sure you're creating or changing what you want without making larger mistakes that become harder to fix later on.

#### The Inspector Tool

A browser's Inspector tool is probably the most useful tool to verify and debug styles as you're building. Here's a common development practice:

1. Browse to the UI library component or layout.
2. Open your browser's dev tools and pick the Inspector.
3. Click on the UI element with your pointer and to highlight it.

From there, you can verify the component's name, style attributes, and parent/child HTML nodes. You can also change a style property or create a new one right in the browser to see its effect before you try it within the component's **scss** file in development.

#### Test Borders

Another useful tool is to apply a border within any part of your styles in order highlight an element on the screen. For example, if you're styling a component and you're not sure your styles are getting applied in the right place, you can temporarily paste any of these three border style properties with Sass variables within your styles:

* `border: $bred;` (produces a red border)
* `border: $bblue;` (produces a blue border)
* `border: $bgreen` (produces a green border)

These should only be used for testing and not committed into the repo.

#### Your Smartphone

The UI Library uses a responsive design throughout, so it's important to verify the UI on a small screen instead of simply your desktop screen.

The URL that's generated in your desktop browser during the Watch process can also be used on your smartphone browser at the same time.

### Updating an Existing Element

The component, `c-subheader` will be used as an example.

1. Run the [watch process](https://github.com/cdlib/eschol-ui#developing-files) the UI library toolkit.
2. From the UI library home page, browse to the subheader element.
3. In the UI library, open the **jsx** and **scss** files related to the subheader component. These two files will be **SubHeaderComp.jsx** and **\_subheader.scss** based on the file naming conventions [listed here](https://github.com/cdlib/eschol-ui#getting-familiar-with-the-librarys-assets).
4. Update the HTML within **SubHeaderComp.jsx** and/or update the styles within **\_subheader.scss**
5. Save your changes and review them on the display page as they are automatically applied. [Debug the UI](https://github.com/cdlib/eschol-ui#using-debugging-tools) if you're not sure.
6. If everything looks good across the [supported browsers](https://github.com/cdlib/eschol-ui#supported-browsers), commit your changes to the repo and create a [finished build](https://github.com/cdlib/eschol-ui#developing-files).
7. Pull the commited UI library changes and reintegrate them into jSchol.

### Creating a New Element

Throughout these steps, replace the word, "new" in the filenames and code with your component name.

Create the following 3 files:

1. For a new component, create a blank JSX file within the **components/** folder and rename it to **NewComp.jsx**. For a new object, do the same procedure, except from within the **object/** folder.
2. Create a blank JSX file within the **display/** folder and rename it with the new component or object name **NewDisp.jsx**
3. Create a blank SCSS file within **scss/** folder and rename it to the object or component name, beginning with an underscore: **\_new.scss**
4. Open **NewComp.jsx** and copy/paste the following code:
```javascript
// ##### New Component ##### //

import React from 'react'

class NewComp extends React.Component {
  render() {
    return (
      <div className="c-new">
        New component content to go here
      </div>
    )
  }
}

module.exports = NewComp;
```
5. Open `NewDisp.jsx` and copy/paste the following code:
```javascript
// ##### New Display ##### //

import React from 'react'
import NewComp from '../components/NewComp.jsx'

class NewDisp extends React.Component {
  render() {
    return (
      <div>
        <NewComp />
      </div>
    )
  }
}

module.exports = NewDisp;
```
6. Open **\_new.scss** and copy/paste the following code:
```scss
// ##### New Component ##### //

.c-new {
  border: $bgreen;
}
```

Update the following 3 files with these changes:

1. Open **scss/main.scss** and add a new import rule referring to **\_new.scss**:
```scss
@import 'new';
```
2. Open **display/Home.jsx** and add a link to the component:
```html
<li><a href="#new">New</a></li>
```
3. Open **app.jsx**, import the display, and and add a new route:
```javascript
import AlertDisp from './display/NewDisp.jsx'
...
<Route path="/new" component={NewDisp} />
```
4. Start the [Watch process](https://github.com/cdlib/eschol-ui#running-development-tasks).
5. Upon saving **app.jsx** after adding these changes, the UI library should automatically rebundle without errors. If you get errors, then double-check your filenames and JSX component names.
6. From the UI library home page, click the "new" link to browse to the new component. If successful, you should see the text, "New component content to go here" on the page, with a green border around it.
7. Double-check your work across the [supported browsers](https://github.com/cdlib/eschol-ui#supported-browsers).

### Integrating UI Library into jSchol Project

**[these details below need clarification by the jSchol team]**

1. Pull any updated UI library CSS from the eschol-ui repo.
2. Copy and paste UI library element HTML into jSchol templates and view changes in local server [or via jSchol dev server?]
3. Verify that there are no integration errors by visualy diffing the layout between the UI library and jSchol dev server in the [supported browsers](https://github.com/cdlib/eschol-ui#supported-browsers).

Any problems? Continue below.

### Troubleshooting jSchol Integrations

When something doesn't look right in the UI from the jSchol project or eScholarship website, follow these steps:

1. Visually compare the UI between the UI library and jSchol from the same browser. Is the problem appearing in both projects?
   * If it's in both projects, then the problem is within the UI library. Fix the problem there, then reintegrate into jSchol.
   * If it's only appearing on jSchol, then there is a mismatch of the HTML between jSchol and the UI library. Continue to Step 2:
2. Visually diff the HTML between the UI library and jSchol with [the Inspector tool](https://github.com/cdlib/eschol-ui#the-inspector-tool). If you can't visually see any differences between the two projects, copy both sources of code into a file comparison tool to highlight the differences.

## Working With Styles

For basic CSS concepts, please see [CSS Ruleset Terminology](https://css-tricks.com/css-ruleset-terminology/.

### Nesting Selectors

CSS rulesets in this UI library usually contain nested parts - [a feature of Sass](http://sass-lang.com/guide#topic-3). The following CSS topics use code examples with nested Sass.

### Naming Conventions

Selectors in this UI library are named using the [BEM method](https://css-tricks.com/bem-101). With BEM, CSS selectors are written as classes and named as blocks, elements, and modifiers. In the UI library, components and objects always feature a BEM block, while BEM elements and modifiers may be optional.

In the UI library, the block is named after the object, component, or utility and is prepended with either a `-c`, `-o`, or `-u` to designate it as such.

Here is a simple example of a component named "flower" with BEM:

```scss

.c-flower {
  property: value;
}

.c-flower__element {
  property: value;
}

.c-flower__element--modifier {
  property: value;
}
```

### Media Query Rules

Media query rules allow changes to component/object styles at certain screen widths for responsive design. In the UI library, These "breakpoints" are written as [Sass mixins](https://github.com/cdlib/eschol-ui#sass-mixins) and include Sass variables, such as `screen1`, `screen2`, `screen3`, which define the screen size.

Media queries in the UI library are usually nested in a "mobile-first" fashion, in that each one in the CSS declaration adds to or overrides the CSS written above it.

For example, with the "flower" component, the background is initially rendered as green on a small screen, then changes color to yellow, then red as the screen size gets wider:

```scss

.c-flower {
  background: green;

  @include bp(screen1) {
    background: yellow;
  }

  @include bp(screen2) {
    background: red;
  }

}
```

### CSS Combinators

[CSS combinators](https://www.w3schools.com/css/css_combinators.asp) are frequently applied within declaration blocks in order to easily target specific HTML elements within the component/object without having to write additional rulesets.

For example, the nested `a` in the flower component will render all links within the component as blue:

```scss

.c-flower {
  background: green;

  @include bp(screen1) {
    background: yellow;
  }

  @include bp(screen2) {
    background: red;
  }

  a {
    color: blue;
  }

}
```

Similar to CSS combinators are [pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp) and [pseudo-elements](https://www.w3schools.com/css/css_pseudo_elements.asp). These are less-common in the UI library.

### Sass Placeholders

Sass placeholders allow the chunking of common styles. They look like a normal CSS class, except that they start with a percent sign instead of a period, as in: `%c-block`. They get applied to regular, class-based rulesets by using the Sass directive `@extend` and named according to the placeholder class.

For example, `%c-flower` is the placeholder and its background style gets applied to `.c-flower__pedals`:

```scss
%c-flower {
  background: red;
}

.c-flower__pedals {
  @extend: %c-flower;
}
```

Placeholders are especially common in UI library Object CSS. Within a single object, multiple placeholders are often defined, so that their various styles can be extended out to other component CSS. Sometimes, a placeholder will extend another set of placeholders. For example:

```scss
%o-objects {
  margin: 15px;
}

%o-object__number-1 {
  @extend: %o-objects;
  background: red;
}

.o-object__number-1 {
  @extend: %o-object__number-1;
}

%o-object__number-2 {
  @extend: %o-objects;
  background: blue;
}

.o-object__number-2 {
  @extend: %o-object__number-2;
}
```

For a real-world example of this pattern, see the [Text Link object Sass](https://github.com/cdlib/eschol-ui/blob/master/app/scss/_textlink.scss).

### Sass Mixins

Sass mixins are similar as placeholders - they contain one or more CSS rulesets that get applied in many places in the UI. However, mixins are written a bit differently:

```scss
@mixin flower() {
  background: red;
}

.c-flower__pedals {
  @include flower();
}
```

Mixins typically contain complex CSS declarations and Sass logic for compilation to CSS. They are used sparingly and mostly appear in [**\_utilities.scss**].

### Background Images

Icons are SVG images applied as background images. Since they are part of the UI and not considered "content", They are not applied in the HTML as `img src`.

Images considered content are not contained in the UI library, but live on the eScholarship static server.

Background images will typically appear in the **SCSS** files in two ways:

1. `background-image: inline('../images/icon_image.svg')` as an icon, which gets injected into the stylesheet during the developent or build process.
2. `background-image: url('#{$media-path}image.svg')` as a content-based image, which references the image from the eScholarship static server via the `media-path` variable.

## Supported Browsers

The following browsers are officially supported in the UI library:

* Chrome (last 2 versions)
* Firefox (last 2 versions)
* Internet Explorer 11 (test via CrossBrowserTesting.com)
* Safari (last 2 versions)

UI elements [do not need to look exactly the same](http://dowebsitesneedtolookexactlythesameineverybrowser.com) across these browsers, but should render as close as possible to the eScholarship design and UX specifications.

These browsers are also specified within the [browserslist definition within the UI library's package.json file](https://github.com/cdlib/eschol-ui/blob/master/package.json#L63), which configures Webpack style generation.

## Best Practices

1. Aim to make components and objects as isolated chunks of the UI. The HTML and CSS of one component/object should not affect another.

2. [Verify and debug](https://github.com/cdlib/eschol-ui#using-debugging-tools) the UI frequently during development.

3. Test any UI changes and/or additions on small screens, not just at the large screen desktop sizes. At a minimum, load a layout within a desktop browser's "responsive design mode" and preferrably, load it in your phone's browser at the same URL used during the Watch process.

4. Create styles using the same conventions highlighted in [Working With Styles](https://github.com/cdlib/eschol-ui#working-with-styles). Refer to [this Sass style guide](https://css-tricks.com/sass-style-guide) for more examples of Sass conventions used in the UI Library. The Sass linter will remind you if you deviate from these patterns.

5. Use Sass variables and utilities when writing component/object styles as much as possible. For example, if you need to add margin to an element, use a Sass spacing variable, like `$spacing-md` instead of an arbitrary value, like "12px". In some cases, the sass linter will remind you to set values with sass variables, such as with setting colors.

6. Avoid inlining styles in the HTML using the style attribute - `<div style="...">`. This is a CSS antipattern and may be [considered a security risk](https://developers.google.com/web/fundamentals/security/csp/#inline_code_is_considered_harmful) depending on Content Security Policy configurations.

7. Minify any new images before adding to the UI Library (for icons) or the eScholarship static server (for content-based images). There are many free [online image optimization services](https://enviragallery.com/9-best-free-image-optimization-tools-for-image-compression/) to choose from.
