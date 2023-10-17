# IST 363 Advanced Web Design - Fall 2023

## 09 - SASS

### Objectives:
* Learn how to use SASS to write more efficient CSS

### Outline:
* Install SASS
* Create a SASS file
* Create a SASS variable
* Turn on SASS watch and test to see it compiled the file correctly
* Learn about SASS nesting
* Learn about SASS mixins (time-permitting)
* Learn about SASS partials (time-permitting)

### Reading / Viewing:
* Read [Sass Official Site](https://sass-lang.com/) by SASS

### Install SASS

You only have to do this once.

On a Mac with Homebrew:
```
brew install sass/sass/sass
```

On a Windows with Chocolatey:
```
choco install sass
```

### Create a SASS file

The compiler can only process .scss files.  It cannot process .css files.

- Rename your CSS folder "SASS".
- Create a new file in the SASS folder called "style.scss".

### Create a SASS variable

Variables allow you to store information that you want to reuse throughout your stylesheet.

- Create a variable in the file called "$primary-color" and set it to "#ff0000".
- Use the variable in the body selector: `body { background-color: $primary-color; }`

### Turn on SASS watch

The SASS "watch" command will watch your SASS folder and compile it to the CSS folder.

- Open a terminal window and navigate to your project folder.
- Change directory into your /sass folder. `cd sass`
- Run the command `sass --watch style.scss:style.css` to watch the SASS file and compile it into the CSS file.

### SASS nesting

Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. 

```scss
header {
  background-color: $primary-color;
  h1 {
    font-size: 2rem;
  }
}
```

This will compile to:

```css
header {
  background-color: #ff0000;
}
header h1 {
  font-size: 2rem;
}
```

SASS nesting also works with pseudo-selectors:

```scss
// <button class="btn">
.btn {
  background-color: $primary-color;
  &:hover {
    background-color: #0000ff;
  }
}
```

SASS nesting also works with compound selectors:

```scss
// <button class="btn active">
.btn {
  background-color: $primary-color;
  &.active {
    background-color: #0000ff;
  }
}
```

### SASS mixins

Mixins allow you to define groups of styles that can be re-used throughout your stylesheet. 

Basic example:

```scss
@mixin fontProperties() {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}
```

You can then use the mixin in your CSS:

```scss
h1 {
  @include fontProperties();
}
```

This will compile to:

```css
h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}
```

Mixins can also take arguments:

```scss
@mixin fontProperties($font-size, $font-weight) {
  font-family: Arial, Helvetica, sans-serif;
  font-size: $font-size;
  font-weight: $font-weight;
  line-height: 1.5;
}
```

You can then use the mixin in your CSS:

```scss
h1 {
  @include fontProperties(2rem, 700);
}
```

This will compile to:

```css
h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.5;
}
```

### SASS partials

Partials allow you to break your CSS into smaller files.  

Partials are files that begin with an underscore.  For example, "_vars.scss".

- Create a new subdirectory in your SASS folder called "abstracts".
- Create a new file in the abstracts subdirectory called "_vars.scss".
- Move the variable from the style.scss file to the _vars.scss file.
- Import the _variables.scss file into the style.scss file: `@use "abstracts/vars";`
- Use the variable like this: `body { background-color: vars.$primary-color; }`

What is "vars." in "vars.$primary-color"?  It's called a namespace. Mixins and variables are namespaced by default. Namespace is a way to group related code together and prevent naming collisions.

### Attendance

Commit your code to your repository on Github.  Please label the commit "Attendance 10/3/2023: Installed SASS".

### Next steps

- Create variants of your components using SASS nesting and compound selectors
- Learn more about how to utilize mixins
- Learn more about partials and folder organization
