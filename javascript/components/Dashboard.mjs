import { useState } from "../modules/Arow.mjs";
import { codewarsLink } from "./CodewarsLink.mjs";

const [data, setData] = useState(["A,1", "B,2", "C,3"]);

async function getData() {
    const request = await fetch("../database.csv");
    const response = (await request.text()).trim();
    const parsedData = response.split("\n").map((item) => {
        return item.split(",");
    });

    setData(parsedData)
} await getData();

class DataRender {
    static #render(data, mode="") {
        return data.map((item) => codewarsLink({link: item[0], name: item[1], level: item[2]})).join("");
    }

    static renderAll() {
        return DataRender.#render(data())
    }

    static #filterData(level="easy") {
        return data().filter(([_, __, l]) => l.trim().toLowerCase() === level.toLowerCase(),);
    }

    static renderLevelData(level) {
        return DataRender.#render(DataRender.#filterData(level || "easy"))
    }
}

console.log(DataRender.renderLevelData("easy"));

export function Dashboard() {
    return`
    <div class="page" id="dashboard">
        <div id="dashboard-display" class="outer">
            ${DataRender.renderAll()}
        </div>
    </div>
    `
}