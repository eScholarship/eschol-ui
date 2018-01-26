
# The eScholarship UI Library

This repository contains all UI elements for the eScholarship website. It serves as a proof of concept for demonstrating the UI apart from its integration into the [main eScholarship project](https://github.com/eScholarship/jschol). It is built upon the React framework and developed using a customized Gulp toolkit.

## Using the Gulp Toolkit

### Software Requirements

* [Node and npm](https://nodejs.org/en)

* [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

### Toolkit Installation

1. Clone this repo and cd to `eschol-ui`

2. Run `$ npm install` to install Gulp plugins

### Running the Toolkit

* Cd to `eschol-ui`

* While developing files in **/app**, run `$ gulp` to watch and process live changes to the code

* To create a finished build of the UI Library, run the `$ gulp build` task. Run `$ gulp deploy` to publish it to GitHub Pages at [https://cdlib.github.io/eschol-ui](https://cdlib.github.io/eschol-ui)

#### Other Tasks

* After adding new images to **/images**, run `$ gulp minify-images` to optimize them

## Getting Familiar with the Library's Assets

Within this repository, the files and folders directly related to creating and maintaining UI elements are listed below. All other files and folders can be ignored:

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
└── scss
    ├── _[component or object].scss
    ├── _mixins.scss
    ├── _variables.scss
    └── main.scss
```

### Components

Components make up the largest gorup of UI pieces in the library. Each component is  distinct. They are not usually related to each other, except in a few cases where there is a React parent/child relationship. Changes to one component should not affect another. Except in rare cases, they are not mixed together.

Component files are named in Pascal case, starting with the component name, and ending with "Comp". For example, see the [Well Component](https://github.com/cdlib/eschol-ui/blob/master/app/jsx/components/WellComp.jsx).

### Display

The display folder contains files that each import a single component or object for rendering on a single page within the UI library, for reference. Occasionally, sample content is included for highlighting the proof of concept. These files are not included in the build process.

Display files are named in Pascal case, starting with the display name, and ending with "Disp". For example, see the [Checkbox Display](https://github.com/cdlib/eschol-ui/blob/master/app/jsx/display/CheckboxDisp.jsx).

### Layouts

Layout files each render a single page that include many ojects, components, and sample content.

Object files are named in Pascal case, starting with the layout name, and ending with "Layout". For example, see the [Home Layout](https://github.com/cdlib/eschol-ui/blob/master/app/jsx/layouts/HomeLayout.jsx).

### Objects

Objects are generally smaller pieces of the UI compared to components and are typically used in multiple places within components.

Object files are named in Pascal case, starting with the object name, and ending with "Obj". For example, see the [Text Link Object](https://github.com/cdlib/eschol-ui/blob/master/app/jsx/objects/TextlinkObj.jsx).

### Styles

Sass files within the scss folder contain all project CSS. They include:

* **\_component.scss** or **\_object.scss** where the filename is named according to the component or object. There is only one component/object Sass file for each component/object. Note that there are no Sass files for layout files.

* **\_utilities.scss** contain large chunks of styles that are included across many components and objects. They are written as Sass Placeholders and Mixins.

* **\_variables.scss** contain global Sass variables used throughout components and objects. These variables generally represent small values - like colors and spacing - and not blocks of styles, as within utilities.scss.

* **main.scss** is where all Sass files get imported and compiled via Gulp. It also contains a short section of "global" styles. This is the only Sass file that is not prepended by an underscore.

See below for more information about authoring styles.

## How Styles are Constructed

For basic CSS concepts, please see [CSS Syntax and Selectors](https://www.w3schools.com/css/css_syntax.asp).

### Naming Styles

CSS selectors in this UI library are named using the [BEM method](https://css-tricks.com/bem-101). With BEM, CSS selectors are written as classes and named as blocks, elements, and modifiers. In the UI library, components and objects always feature a BEM block, while BEM elements and modifiers may be optional.

In the UI library, the block is named after the object, component, or utility and is prepended with either a `-c`, `-o`, or `-u` to designate it as such.

Here is a plain example of a component named "flower" with BEM:

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

### Nesting Styles

Selectors in this UI library often contain nested parts - [a feature of Sass](http://sass-lang.com/guide#topic-3).

#### Media Query Rules

The most common nested parts are media query rules, which allow changes to component/object styles at certain screen widths for responsive design. These "breakpoints" are written as [Sass mixins](https://github.com/cdlib/eschol-ui#sass-mixins) and include Sass variables, such as `screen1`, `screen2`, `screen3`, which define the screen size.

Media query rules are organized in a "mobile-first" fashion, in that each one in the CSS declaration adds to or overrides the CSS written above it.

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

#### CSS Combinators

The other common set of nested parts are [CSS combinators](https://www.w3schools.com/css/css_combinators.asp). These selectors typically target specific HTML elements within the component/object.

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

Other, less-common nested parts in the UI library include [pseudo-classes](https://www.w3schools.com/css/css_pseudo_classes.asp) and [pseudo-elements](https://www.w3schools.com/css/css_pseudo_elements.asp).

### Chunks of Common Styles

Components and objects frequently have chunks of common styles used within them. This is made possible by Sass placeholders and mixins.

#### Sass Placeholders

A Sass placeholder looks like a normal CSS class, except that it starts with a percent sign instead of a period, like this: `%c-block`. It gets applied to regular, class-based selectors by using the Sass directive `@extend` with the name of the placeholder class.

For example, `%c-flower` is the placeholder and its background style gets applied to `.c-flower__pedals`:

```scss
%c-flower {
  background: red;
}

.c-flower__pedals {
  @extend: %c-flower;
}
```

Placeholders are especially common in UI library object CSS. Within a single object, multiple placeholders are often defined, so that their various styles can be extended out to other component CSS. Sometimes, a placeholder will extend another set of placeholders. For example:

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

This would produce two placeholder classes - `%o-object__number-1` and `%o-object__number-2` - that both contain 15 pixels of margin and either a red or blue background, depending on the placeholder.

If we wanted to apply the object styles of `%o-object__number-2` within a component, that could look like this:

```scss
.c-flower__element {
  @extend: %o-object__number-2;
  font-weight: bold;
}
```

This would produce a class `.c-flower__element` with 15 pixels of margin, a blue background, and a bold font.

For a real-world example of this pattern, see the [Text Link object Sass](https://github.com/cdlib/eschol-ui/blob/master/app/scss/_textlink.scss).

#### Sass Mixins

Sass mixins are similar as placeholders - they contain one or more CSS declarations that can get applied in many places in the UI. However, mixins are written a bit differently, like this:

```scss
@mixin flower() {
  background: red;
}

.c-flower__pedals {
  @include flower();
}
```

The most common application of mixins in the UI library are [media query rules](https://github.com/cdlib/eschol-ui#media-query-rules).

Mixins typically contain complex CSS declarations, sass variables, and logic for compilation. They are used sparingly and mostly appear in [**\_utilities.scss**].

## Supported Browsers

The following browsers are officially supported in the UI library:

* Chrome (last 2 versions)
* Firefox (last 2 versions)
* Internet Explorer 11 (test via CrossBrowserTesting.com)
* Safari (last 2 versions)

These browsers are also specified within the [browserslist definition within the UI library's package.json file](https://github.com/cdlib/eschol-ui/blob/master/package.json#L63), which configures Gulp development and build processes.

UI elements [do not need to look exactly the same](http://dowebsitesneedtolookexactlythesameineverybrowser.com) across these browsers, but they should render as close as possible to the eScholarship design and UX specifications.

## Creating a New Element

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

1. Open **main.scss** within the **scss** folder and add a new import rule referring to **\_new.scss**:
```scss
@import 'new';
```
2. Open **Home.jsx** and add a UI library link to the component:
```html
<li><a href="#new">New</a></li>
```
3. Open **app.jsx**, import the display, and and add a new route:
```javascript
import AlertDisp from './display/NewDisp.jsx'
...
<Route path="/new" component={NewDisp} />
```
Upon saving **app.jsx** after adding these changes, the UI library should automatically rebuild without errors. If you get errors, then double-check your filenames and JSX component names.

4. From the UI library home page, click the "new" link to browse to the new component.

You should see the text, "New component content to go here" on the page, with a green border around it. This confirms that you have successfully added a new component and connected stylesheet into the UI library.

## Updating an Existing Elements's HTML or Styles

The component, `c-subheader` will be used as an example.

1. [Run](https://github.com/cdlib/eschol-ui#running-the-toolkit) the UI library toolkit.
2. From the UI library home page, browse to the subheader element.
3. In the UI library, open the **jsx** and **scss** files related to the subheader component. These two files will be **SubHeaderComp.jsx** and **\_subheader.scss** based on the file naming conventions [listed here](https://github.com/cdlib/eschol-ui#getting-familiar-with-the-librarys-assets).
4. Update the HTML within **SubHeaderComp.jsx** and/or update the styles within **\_subheader.scss**
5. Save your changes and review them on the display page as they are automatically applied.
6. If everything looks good across the [supported browsers](https://github.com/cdlib/eschol-ui#supported-browsers), commit your changes to the repo and create a [finished build](https://github.com/cdlib/eschol-ui#running-the-toolkit).
7. Pull the commited UI library changes and reintegrate them into jSchol.

## Integrating UI Library Updates into jSchol Project

[the jSchol details below need clarification by the jSchol team]

1. Pull any updated UI library CSS from the eschol-ui repo.
2. Copy and paste UI library element HTML into jSchol templates and view changes in local server [or via jSchol dev server?]
3. Verify that there are no integration errors by visualy diffing the layout between the UI library and jSchol dev server in the [supported browsers](https://github.com/cdlib/eschol-ui#supported-browsers).

Any problems? Continue to [Troubleshooting jSchol Integrations](https://github.com/cdlib/eschol-ui#troubleshooting-jschol-integrations).

## Troubleshooting jSchol Integrations

When something doesn't look right in the UI from the jSchol project or eScholarship website, follow these steps:

1. Visually compare the UI between the UI library and jSchol from the same browser. Is the problem appearing in both projects?
   * If it's in both projects, then the problem is within the UI library. Fix the problem there, then reintegrate into jSchol.
   * If it's only appearing on jSchol, then there is a mismatch of the HTML between jSchol and the UI library. Continue to Step 3:
2. Open your browser's developer tools and visually diff the HTML between the UI library and jSchol. If you can't visually see any differences between the two projects, copy both sources of code into a file comparison tool to highlight the differences.

## Best Practices

* Write CSS selectors in the [BEM method](https://css-tricks.com/bem-101) to help keep styles scoped to each component and CSS specificity flat.

* Follow [this Sass style guide](https://css-tricks.com/sass-style-guide) when writing Sass.
