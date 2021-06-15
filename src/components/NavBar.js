import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const linkText = links.map((element) => {
return <a key={element} href={"#" + element}>{element}</a> 
})
  return <nav>{linkText}</nav>;
}

export default NavBar;
