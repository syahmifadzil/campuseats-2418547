# Week 1 Reflection

1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?
Imperative UI means manually writing instructions to create and update HTML elements.
Declarative UI in React means describing how the UI should look, and React updates it when the data changes.

2. Why must a component name start with a capital letter?
A component name must start with a capital letter so React can identify it as a custom component instead of a
 normal HTML element. For example, `Header` is a React component, while `header` is an HTML element.

3. What does a fragment `<>...</>` do, and why not just use a `<div>`?
A fragment (`<>...</>`) groups multiple elements together without adding an extra HTML tag like `<div>`.
This keeps the HTML structure cleaner.

4. Name one benefit of splitting the UI into small components.
Splitting the UI into small components makes the code easier to maintain and reuse.
For example, a `Header` component can be used on different pages without writing the same code again.
