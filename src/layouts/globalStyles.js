/* eslint-disable */
import { createGlobalStyle } from 'styled-components';
import { fp, fontSmoothing } from '../mixins/common';
import { hoverFocus } from '../mixins/hover';

export default createGlobalStyle`
  :root {
    --white:  #fff;
    --black:  #000;
    
    --gray-darker:               #121212;
    --gray-dark:                 #191919;
    --gray:                      #898989;
    --gray-light:                #a7a7a7;
    --gray-lighter:              #e0e1e2;
    --gray-lightest:             #f7f7f9;
    
    --brand:                     #c51f3d;
    --brand-2:                   #000;
    
    --enable-rounded:            true;
    --enable-shadows:            false;
    --enable-gradients:          false;
    --enable-transitions:        true;
    --enable-hover-media-query:  false;
    --enable-grid-classes:       true;
    --enable-print-styles:       true;
    
    --spacer:   1rem;
    --spacer-x: var(--spacer);
    --spacer-y: var(--spacer);
    --spacers: (
      0: (
        x: 0,
        y: 0
      ),
      1: (
        x: (var(--spacer-x) * .25),
        y: (var(--spacer-y) * .25)
      ),
      2: (
        x: (var(--spacer-x) * .5),
        y: (var(--spacer-y) * .5)
      ),
      3: (
        x: var(--spacer-x),
        y: var(--spacer-y)
      ),
      4: (
        x: (var(--spacer-x) * 1.5),
        y: (var(--spacer-y) * 1.5)
      ),
      5: (
        x: (var(--spacer-x) * 3),
        y: (var(--spacer-y) * 3)
      )
    );

    --border-width: 1px;
    
    --sizes: (
      25: 25%,
      50: 50%,
      75: 75%,
      100: 100%
    );
    
    --body-bg:       var(--white);
    --body-color:    var(--brand);
    
    --link-color:            var(--brand);
    --link-decoration:       none;
    --link-hover-color:      var(--link-color);
    --link-hover-decoration: none;
    
    --grid-breakpoints: (
      xs: 0,
      sm: 576px,
      md: 768px,
      lg: 992px,
      xl: 1150px
    );
    
    --container-max-widths: (
      // sm: 540px,
      // md: 720px,
      // lg: 960px,
      xl: 1150px
    );
    
    --grid-columns:               12;
    --grid-gutter-width-base:     30px;
    --grid-gutter-widths: (
      xs: var(--grid-gutter-width-base),
      sm: var(--grid-gutter-width-base),
      md: var(--grid-gutter-width-base),
      lg: var(--grid-gutter-width-base),
      xl: var(--grid-gutter-width-base)
    );
    
    --font-lato:             'latoregular', sans-serif;
    --font-lato-bold:        'latobold', sans-serif;
    --font-lato-bold-italic: 'latobold_italic', sans-serif;
    --font-family-base:      var(--font-lato);
    
    --font-weight-normal:   normal;
    --font-weight-bold:     bold;
    --font-size-base:       1.6rem;
    --line-height-base:     1.25;
    
    --font-size-h1: 5rem;
    --font-size-h2: 4.5rem;
    --font-size-h3: 4rem;
    --font-size-h4: 2.7rem;
    --font-size-h5: 2.4rem;
    --font-size-h6: 1.8rem;
    
    --headings-color:         var(--brand-2);
    --headings-font-family:   var(--font-family-base);
    --headings-font-weight:   normal;
    --headings-line-height:   1;
    --headings-margin-bottom: 20px;
    
    --small-font-size: 80%;
    
    --hr-border-width: 1px;
    --hr-border-color: var(--gray);
    
    --list-inline-padding: 10px;
    
    --form-input-color:                #4e5151;
    --form-input-placeholder-color:    var(--form-input-color);
    --form-input-font-family:          var(--font-family-base);
    --form-input-font-size:            20px;
    --form-input-line-height:          normal;
    --form-input-height:               45px;
    --form-input-border:               1px solid rgba(#9fa1a2,0.8);
    --form-input-radius:               0;
    --form-input-bg-color:             rgba(var(--white),0.8);
    --form-input-padding-x:            15px;
    --form-input-padding-y:            0;
    
    --form-select-placeholder-color:   transparent;
    --form-select-font-size:           var(--form-input-font-size);
    --form-select-padding:             15px var(--form-input-padding-x) 8px;
    --form-select-line-height:         1;
    --form-select-arrow-color:         #606060;
    --form-select-arrow-width:         12px;
    --form-select-arrow-height:        10px;
    
    --form-dropdown-height:            35px;
    --form-dropdown-color:             var(--form-input-color);
    --form-dropdown-font-size:         var(--form-input-font-size);
    --form-dropdown-line-height:       1;
    --form-dropdown-text-transform:    none;
    --form-dropdown-letter-spacing:    normal;
    --form-dropdown-padding:           11px var(--form-input-padding-x) 4px;
    --form-dropdown-bg-color:          var(--white);
    --form-dropdown-border:            var(--form-input-border);
    --form-dropdown-radius:            var(--form-input-radius);
    --form-dropdown-selected-color:    var(--white);
    --form-dropdown-selected-bg-color: var(--brand);
    
    
    --border-radius:          .25rem;
    --border-radius-lg:       .3rem;
    --border-radius-sm:       .2rem;
    
    --transition-base:        all .2s ease-in-out;
    --transition-fade:        opacity .15s linear;
    --transition-collapse:    height .35s ease;
    
    --linear:         cubic-bezier(0.250, 0.250, 0.750, 0.750);
    --easeInQuad:     cubic-bezier(0.550, 0.085, 0.680, 0.530);
    --easeInCubic:    cubic-bezier(0.550, 0.055, 0.675, 0.190);
    --easeInQuart:    cubic-bezier(0.895, 0.030, 0.685, 0.220);
    --easeInQuint:    cubic-bezier(0.755, 0.050, 0.855, 0.060);
    --easeInSine:     cubic-bezier(0.470, 0.000, 0.745, 0.715);
    --easeInExpo:     cubic-bezier(0.950, 0.050, 0.795, 0.035);
    --easeInCirc:     cubic-bezier(0.600, 0.040, 0.980, 0.335);
    --easeInBack:     cubic-bezier(0.600, 0, 0.735, 0.045);
    
    --easeOutQuad:    cubic-bezier(0.250, 0.460, 0.450, 0.940);
    --easeOutCubic:   cubic-bezier(0.215, 0.610, 0.355, 1.000);
    --easeOutQuart:   cubic-bezier(0.165, 0.840, 0.440, 1.000);
    --easeOutQuint:   cubic-bezier(0.230, 1.000, 0.320, 1.000);
    --easeOutSine:    cubic-bezier(0.390, 0.575, 0.565, 1.000);
    --easeOutExpo:    cubic-bezier(0.190, 1.000, 0.220, 1.000);
    --easeOutCirc:    cubic-bezier(0.075, 0.820, 0.165, 1.000);
    --easeOutBack:    cubic-bezier(0.175, 0.885, 0.320, 1);
    
    --easeInOutQuad:  cubic-bezier(0.455, 0.030, 0.515, 0.955);
    --easeInOutCubic: cubic-bezier(0.645, 0.045, 0.355, 1.000);
    --easeInOutQuart: cubic-bezier(0.770, 0.000, 0.175, 1.000);
    --easeInOutQuint: cubic-bezier(0.860, 0.000, 0.070, 1.000);
    --easeInOutSine:  cubic-bezier(0.445, 0.050, 0.550, 0.950);
    --easeInOutExpo:  cubic-bezier(1.000, 0.000, 0.000, 1.000);
    --easeInOutCirc:  cubic-bezier(0.785, 0.135, 0.150, 0.860);
    --easeInOutBack:  cubic-bezier(0.680, 0, 0.265, 1);
  }

  @font-face {
    font-family: 'latoregular';
    font-weight: normal;
    font-style: normal;
    src: url(${require('../assets/fonts/lato-regular-webfont.ttf')});
  }

  @font-face {
    font-family: 'latoitalic';
    font-weight: normal;
    font-style: normal;
    src: url(${require('../assets/fonts/lato-italic-webfont.ttf')});
  }

  @font-face {
    font-family: 'latobold';
    font-weight: normal;
    font-style: normal;
    src: url(${require('../assets/fonts/lato-bold-webfont.ttf')});
  }

  @font-face {
    font-family: 'latobold_italic';
    font-weight: normal;
    font-style: normal;
    src: url(${require('../assets/fonts/lato-bolditalic-webfont.ttf')});
  }

  @font-face {
    font-family: 'wink';
    font-weight: normal;
    font-style: normal;
    src: url(${require('../assets/fonts/wink.ttf?l6ereq')});
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    outline: none;
  }

  html {
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  @media (max-width: 699px) {
    html {
      font-size: ${(14 / 25.6) * 100}%;
    }
  }
  @media (min-width: 700px) and (max-width: 1199px) {
    html {
      font-size: ${(15 / 25.6) * 100}%;
    }
  }
  @media (min-width: 1200px) {
    html {
      font-size: ${(16 / 25.6) * 100}%;
    }
  }

  body,
  html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-width: 320px;
    background-color: var(--body-bg);
  }

  body {
    font-family: var(--font-family-base);
    color: var(--body-color);
    ${fontSmoothing}
    text-rendering: optimizeSpeed;
    overflow-x: hidden;
    &.overflow-hidden {
      height: 100%;
      width: 100%;
      overflow: hidden !important;
    }
  }

  ::-moz-selection {
    color: var(--white);
    background-color: var(--brand);
    text-shadow: none;
  }

  ::selection {
    color: var(--white);
    background-color: var(--brand);
    text-shadow: none;
  }

  [tabindex="-1"]:focus {
    outline: none !important;
  }

  /* Abbreviations*/
  abbr[title],
  abbr[data-original-title] {
    cursor: help;
  }

  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  dd {
    margin-bottom: 0.5rem;
    margin-left: 0; /* Undo browser default*/
  }

  blockquote {
    margin: 0 0 1rem;
  }

  a {
    color: var(--link-color);
    text-decoration: var(--link-decoration);

    ${hoverFocus`
      color: var(--link-hover-color);
      text-decoration: var(--link-hover-decoration);
      -moz-outline-style: none;
      outline: 0;
    `}
  }

  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    outline: 0;

    ${hoverFocus`
      color: inherit;
      text-decoration: none;
      -moz-outline-style: none;
      outline: 0;
    `}

    &:focus {
      -moz-outline-style: none;
      outline: 0;
    }
  }

  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }

  figure {
    margin: 0 0 1rem;
  }

  img {
    vertical-align: middle;
    display: block;
    max-width: 100%;
    height: auto;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  [role="button"] {
    cursor: pointer;
  }

  a,
  area,
  button,
  [role="button"],
  input,
  label,
  select,
  summary,
  textarea {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }

  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  input,
  button,
  select,
  textarea {
    line-height: inherit;
  }

  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"] {
    -webkit-appearance: listbox;
  }

  textarea {
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
  }

  input[type="search"] {
    -webkit-appearance: none;
  }

  output {
    display: inline-block;
  }

  [hidden] {
    display: none !important;
  }

  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6 {
    margin-bottom: var(--headings-margin-bottom);
    font-family: var(--headings-font-family);
    font-weight: var(--headings-font-weight);
    line-height: var(--headings-line-height);
    color: var(--headings-color);
    letter-spacing: normal;
    margin: 2rem 0;
  }

  h1, .h1 { font-size: var(--font-size-h1); }
  h2, .h2 { font-size: var(--font-size-h2); }
  h3, .h3 { font-size: var(--font-size-h3); }
  h4, .h4 { font-size: var(--font-size-h4); }
  h5, .h5 { font-size: var(--font-size-h5); }
  h6, .h6 { font-size: var(--font-size-h6); }

  p {
    color: #636363;
    font-weight: normal;
    line-height: 1.294em;
    letter-spacing: 0.05em;
    margin: 0;
    ${fp('font-size', 15, 17)};

    word-wrap: break-word;
    b, strong {
      font-family: var(--font-family-base);
      font-weight: normal;
    }
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  ol, ul {
    li {
      strong {
        font-weight: normal;
      }
    }
  }

  hr {
    margin-top: var(--spacer-y);
    margin-bottom: var(--spacer-y);
    border: 0;
    border-top: var(--hr-border-width solid $hr-border-color);
  }

  small,
  .small {
    font-size: var(--small-font-size);
    font-weight: normal;
  }

  .list-unstyled {
    padding-left: 0;
    list-style: none;
  }

  .list-inline {
    padding-left: 0;
    list-style: none;
  }
  .list-inline-item {
    display: inline-block;

    &:not(:last-child) {
      margin-right: var(--list-inline-padding);
    }
  }
`;
/* eslint-enable */
