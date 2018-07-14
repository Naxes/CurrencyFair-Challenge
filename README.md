# CurrencyFair Coding Challenge

The following document is representative of the presentation aspect of the challenge presented with respect to the process followed during the development of the UI in line with the provided mockups and assets. To reiterate on the stipulations enforced: 

* Cannot use a UI framework
* UI should be functional on mobile devices
* Should use an SPA framework (e.g. AngularJS, VueJS, React)
* Code should be commented and easy to maintain/iterate on

## Overview

The challenge as provided was to realise the UI presented via the mockups in accordance with the stipulations as aforementioned in which, hypothetically, they may then be passed to a back end developer to integrate.

### Technologies

To complete this challenege I have opted to make use of the following technologies:

* [React](https://reactjs.org) - SPA Framework
* [Visual Studio Code](https://code.visualstudio.com) - IDE

I have chosen specifically to use React as this is the technology used internally.

## Process

### 1. Create React App

Created a new react project using the appropriate command line tool:
```
create-react-app CurrencyFair
```

### 2. Color Palette & Assets

Took the mockup PDF file provided into Photoshop in order to extract the color hex values of several elements for use in the project. The following are those as used:

* #adadad - Grey
* #31313b - Black
* #ffd079 - Orange
* #e0e0e0 - Light Grey
* #6dc0e6 - Light Blue
* #5ba0bf - Dark Blue

Additionally, fonts were provided. Specifically, variations of the PostGrotesk font in many formats. Notably, I opted to use WOFF (Web Open Font Format) due to it's better browser compatability when viewed comparatively to the others. In relation to the variations of the font, italicized versions were provided but are not used in the mockup, thusly those are excluded. In essence, those utilised are:

* PostGrotesk Bold
* PostGrotesk Book
* PostGrotesk Light
* PostGrotesk Medium

I segregated assets to the following location which are then imported into the main app.css file:
```
src/fonts/fonts.css
```
This file defines font sizes, colors, alignments, and general element preset classes.

### 3. Defining Components

Analysing the mockup further, I noted down the following elements as components:

* Button
* Card (Right margin affixed element)
* Geotag (Left margin flag/currency type within sections)
* Section (Left margin sender and receiver boxes)
* Splitter (Left margin footer separator)
* Steps (Left margin transaction steps)

The step-by-step process to creating/implementing each:

* Import React
* Import Components (if required)
* Import Stylesheets (if required)
* Define & Export Component
* Implement Render

### 4. Site Layout/Design

One of the more challenging aspects was certainly to not rely on any UI framework, even for a simple grid system, but  instead build each component from the ground-up with their own dedicated styling.

#### Flexbox Grid System

Created a set of classes in CSS using flexboxes for the purposes of site layout conjunctively with media queries for elements that should stack and or be presented differently on mobile devices: 

* .grid (Container similar to a row)
* .col-xs (Extra small column)
* .col-s (Small column)
* .col-m (Medium column)

The sizes of each column are governed by a differing flex value: 
```
src/App.css

/* Flexbox Grid */
.grid {
  display: flex;   
}

/* Flexbox Column (Extra Small) */
.col-xs {
  flex: .2;
}

/* Flexbox Column (Small) */
.col-s {
  flex: .5;
}

/* Flexbox Column (Medium) */
.col-m {
  flex: 1;
}
```
These are used in most cases with the exception of the main left and right margins that act as the containers for all of the main content. In said cases, the left section is given a flex-basis value, while the right will then take up the remaining screen space represented by the flex-grow value. I found this to be very similar to the implementation as presented in the mockups visually:
```
src/App.css

/* Left Section (Transaction Setup) */
.left-section {  
  flex-basis: 60%;                
}

/* Right Section (Sending/Receiving Details) */
.right-section {
  flex-grow: 1; 
}
```

#### Sidebar Height

An aspect of the grey sidebar was to ensure that it remains the height of the screen. This was achieved using the VH (view height) value of 100, meaning that it will be 100% the height of the given viewport.
```
src/App.css

/* Right Section (Details) */
.right-section {
  height: 100vh; 
}
```

### 5. Affixing the Card Component

One feature of the UI was that the right sections card encompassing a number of numerical details must remain affixed to it's position at all times, meaning if there is vertical scrollable space in the viewport, that this will remain in place. This was achieved by applying the following to the card class:
```
src/components/Card/card.css

/* Card Container */
.card {
    top: 8vh;   
    position: sticky;
}
```
The top value ensures that there is a margin gap between the card and the top of the viewport when it becomes affixed and matches the height of the navbar. In essence, scrolling the navbar just out of view will trigger the affixed state of the card component.

### 6. Mobile & Media Queries

Due to the nature of the grid system made with flexboxes, displaying elements encapsulated within it at all times with a CSS property of 'display: flex' meant that items would not stack given access on a mobile device. Thusly, media queries were utilised to alter the grid and other elements to display in appropriate ways. 

In some cases, this meant displaying as a block in order to achieve stacking columns. In others, such as with the 'Steps' component, remaining in flex as opposed to stacking looks and functions much better regardless of if on mobile or desktop:
```
src/App.css

/* Flexbox Grid (Desktop) */
.grid {
  display: flex;   
}

/* Flexbox Grid (Mobile) */
@media (max-width: 700px) {
  .grid {
    display: block;
  }
}
```
The resulting changes were tested both via [IP Address]:3000 on a mobile device and with the browsers responsive desing mode, respectively.