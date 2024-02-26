const baseURL = "https://learnercora.github.io/learnercora.github.io/";
const linksURL = "https://learnercora.github.io/learnercora.github.io/data/links.json";

const menu = document.querySelector('section ul');
// console.log(menu);

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data.lessons);
}

const displayLinks = (weeks) => {
    //clear original menu
    menu.innerHTML = '';

    weeks.forEach( (week) => {
        // create li
        let liE = document.createElement("li");

        liE.innerHTML = `Week ${week.lesson}: `;

        // create a
        week.links.forEach( (link, index) => {
            let aE = document.createElement("a");

            aE.innerHTML = link.title;            
            aE.setAttribute("href", link.url);
            aE.setAttribute("target", "_blank");
            
            liE.appendChild(aE);
            
            // add "|"" between link
            if ( week.links.length - index > 1) {
                liE.appendChild(document.createTextNode(" | "));;
            }

            
        })
        menu.appendChild(liE);
    });
}

getLinks();