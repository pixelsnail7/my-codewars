import { Arow } from "./modules/Arow.mjs";
import { useState } from "./modules/Arow.mjs";
import { injection } from "./modules/Arow.mjs";

// components
import { Home } from "./components/Home.mjs";
import { Dashboard } from "./components/Dashboard.mjs";

const [activePage, setActivePage] = useState(Dashboard());


Arow.templateFun = () => `
${activePage()}
`;

Arow.render();

// ----- App Events -----
// --- render dashboard to page ---
Arow.event("#go-to-dashboard-button", "click", () => {
    setActivePage(Dashboard());
    Arow.update();
})