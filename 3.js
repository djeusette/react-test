// We'd like to change the title present in the Header
// everytime the App is rendered.
// Is passing the setPageTitle function
// with the props the way to go?
// What are the alternatives? Give a few pros and cons.
// Secondly, the App contains a BurgerMenu. The content
// of that menu depends on the mounted children of the App.
// For instance, if the current page is "Payments",
// the corresponding link is disabled.
// If the current page is "Onboarding", only "Profile" is displayed.
// How would you handle that burger menu, and its dynamic content?

import React, { useState } from "react";

const App = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("My app");

  return (
    <div>
      <Header title={pageTitle} />
      <BurgerMenu />
      {React.cloneElement(children, { setPageTitle: setPageTitle })}
      <Footer />
    </div>
  );
};

const Header = ({ title }) => <h2>{title}</h2>;

const BurgerMenu = () => {
  // ...

  return <div>{/* ... */}</div>;
};

const Footer = () => ({
  /* ... */
});
