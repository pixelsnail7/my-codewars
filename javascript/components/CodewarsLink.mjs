export function codewarsLink({link, name, level}) {
    let icon = "";
    const normalizedLevel = String(level || "").trim().toLowerCase();

    switch (normalizedLevel) {
        case "easy":
            icon = `<i class="fa-solid fa-face-smile"></i>`
            break;
        case "medium":
            icon = `<i class="fa-solid fa-face-meh"></i>`
            break;
        case "hard":
            icon = `<i class="fa-solid fa-face-frown"></i>`
            break;
        default:
            icon = `<i class="fa-solid fa-cat"></i>`
            break;
    }

    return `
    <a href="${link}" class="codewars-link-container inner">
        <img src="https://avatars.githubusercontent.com/u/5387632?s=280&v=4">
        <span>${name}</span>
        <div class="${normalizedLevel} icon">${icon}</div>
    </a>
    `
}