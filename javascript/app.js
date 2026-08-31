import { Arow } from "./modules/Arow.mjs";
import { useState } from "./modules/Arow.mjs";

// components
import { Home } from "./components/Home.mjs"

const [activePage, setActivePage] = useState(Home());


Arow.templateFun = () => `
${activePage()}
`;

Arow.render();