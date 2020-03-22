---
title: Using Typescript for themed components
date: "2020-03-22"
description: How to use typescript to hint your theme values, for example colour or sizes
type: blog
---

With Typescript the **union** type allows one to have better intellisense for the components you create.

As a very simplified example:


```jsx
type ButtonProps = {
  color?: "red" | "blue" | "green";
};

const Button: React.FunctionComponent<ButtonProps> = props => (
  <button
    style={{ backgroundColor: props.color }}
  >
    {props.children}
  </button>
);
```

![See how hinting works](./hinting.png)

<iframe
     src="https://codesandbox.io/embed/hintingwithtype-r3rk2?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="hinting_with_type"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>
   
Note: the red underline goes away when you actually pick an option.

Using the `|` union operator will allow `red`, `blue`, or `green` but not say, `yellow` or `purple`.

But what happens if we're using components that have a theme, with something like [styled-system](https://styled-system.com/) or [theme-ui](https://theme-ui.com/)? Or even, what if we want the string `red` to be something more like a role name, like `PrimaryButtonBackground`?

A theme is an object that maps names (strings) to values. In the case of colours, it's the hex codes:

```
const theme = {
  colors: {
    Primary: '#4ec9ff',
    Secondary: '#ffc139',
    Danger: '#ff8150'
  }
}
```

When using a styled function, like emotion:

```
type ButtonProps = {
  backgroundColor?: "Primary" | "Secondary" | "Danger";
};

const Button = styled.button<ButtonProps>`
  ${color}
`
```

The resulting intellisense hinting:

![See the role hinting](role-colors.png)

<iframe
     src="https://codesandbox.io/embed/typehintingstyledsystem-4mxl8?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="type_hinting_styled_system"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>
