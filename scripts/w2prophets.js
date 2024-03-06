const prophetsURL = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetsAndShowContent() {
    const response = await fetch(prophetsURL);
    const data = await response.json();
    // console.log(data.prophets);
    showContent(data.prophets);
}

const showContent = (prophets) => {
    // console.log(prophets);
    const templateContent = document.getElementById("prophet-card").content;
    prophets.forEach(prophet => {
        const clone = document.importNode(templateContent, true);
        const nameElement = clone.querySelector(".name");
        nameElement.textContent = `${prophet.name} ${prophet.lastname}`;
  
        const birthdateElement = clone.querySelector(".birthdate");
        birthdateElement.textContent = `Birth Date: ${prophet.birthdate}`;
  
        const birthplaceElement = clone.querySelector(".birthplace");
        birthplaceElement.textContent = `Birth Place: ${prophet.birthplace}`;
  
        const profileImageElement = clone.querySelector(".profile");
        profileImageElement.setAttribute("src", prophet.imageurl);
        profileImageElement.setAttribute("alt", `Profile of ${prophet.name} ${prophet.lastname}`);

        document.body.appendChild(clone);
      });
}

function showHiddenContent() {
    getProphetsAndShowContent()
};