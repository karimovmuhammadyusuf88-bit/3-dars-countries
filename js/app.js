// let buttonEl = document.querySelector("button")
// let lightBtn = document.querySelector(".light")

// let mode = localStorage.getItem("mode") || null;

// if(mode=== "dark"){
//     document.body.classList.add("dark-mode");
// }else{
//     document.body.classList.remove("dark-mode");
// }




// buttonEl.addEventListener("click", ()=>{
//     document.body.classList.add("dark-mode")
//     localStorage.setItem("mode","light")
// })



// lightBtn.addEventListener("click",()=>{
//     document.body.classList.remove("dark-mode");
//     localStorage.setItem("mode","light")
// });


//localStorage.setItem("key","fn2");//setItem saqlaydi
// localStorage.setItem("JCh","yutqizdik")








import { countries } from "./data.js";

const wrapperEl = document.querySelector('.countries-list')
const searchInputEl = document.querySelector("#search-input")
const selectEl = document.querySelector("select")





window.goDetail = function(id){
    console.log(id);
    
    window.location.href = `http://127.0.0.1:5500/detail.html?id=${id}`
}




function UpdateUi(arr) {
    wrapperEl.innerHTML = "";

    arr.forEach((item) => {
        const { name, population, region, capital, flag, id} = item;

        wrapperEl.innerHTML += ` 
              <div onclick="goDetail(${id})" class="country" >
                <img src=${flag} alt="">
                <div class="deck">
                    <h3>${name}</h3>
                    <p><span>Population:</span> ${population}</p>
                    <p><span>Region:</span> ${region}</p>
                    <p><span>Capital:</span> ${capital}</p>
                </div>
            </div>
        `;

    });
}
UpdateUi(countries);



searchInputEl.addEventListener('input', (e) => {
    console.log(e.target.value);
    let inputVal = e.target.value;
    let newCountries = countries.filter(item => {
        if (item.name.toLowerCase().includes(inputVal.toLowerCase())) {
            return item;
        }
    });
    UpdateUi(newCountries);

});






const capital = document.querySelector("#capital")
capital.addEventListener("change", () => {

    if (capital.value === "all") {
        UpdateUi(countries);
        return;
    }

    const filtered = countries.filter(country =>
        country.capital === capital.value
    );

    UpdateUi(filtered);
    
});




const darkBtn = document.getElementById("darkBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}


UpdateUi(countries);

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});