import { countries } from "./data.js";

const detailEl = document.querySelector(".detail-section")
// console.log(typeof id);
console.log(countries);











const id = Number(new URLSearchParams(window.location.search).get("id"));

console.log("id =", id);
console.log("countries =", countries);
console.log("countries[0] =", countries[0]);

const findEl = countries.find(item => item.id === id);

console.log("findEl =", findEl);





const themeBtn = document.getElementById("theme-btn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});






function UpdateDetail(country) {
    detailEl.innerHTML = `
    <div class="container detail-container">
    <div class="detail-img">
    <img src="${findEl.flag}" alt="flag" />
    </div>
    
    <div class="detail-intro">
    <div class="desc-top">
    <div class="desc-r">
    <h1>${findEl.name}</h1>
    <p>Native name:<span>${findEl.nativeName}</span></p>
    <p>Population:<span>${findEl.population}</span></p>
    <p>Region:<span>${findEl.region}</span></p>
    <p>Sub Region:<span>${findEl.subRegion}</span></p>
    <p>Capital:<span>${findEl.capital}</span></p>
    </div>
    <div class="desc-l">
    <p>Top Level Domain:<span>${findEl.topLevelDomain}</span></p>
    <p>Currencies:<span>${findEl.currencies}</span></p>
    <p>Languages:<span>${findEl.languages}</span></p>
    </div>
    </div>
    
   <div class="desc-bottom">
    <p>Border Countries:</p>
    ${country.borderCountries
            .slice(0, 3)
            .map(border => `<span>${border}</span>`)
            .join("")
        }
</div>
    </div>
    </div>
    `;
}
UpdateDetail(findEl);