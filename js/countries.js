const loadcountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

loadcountries()
const displayCountries = countries => {
    // console.log(countries)
    // for (const country of countries){
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country.name);
        const div = document.createElement('div')
        div.classList.add('country');
        div.innerHTML =`
        <h3>Country: ${country.name.common} </h3>
        <p>Official: ${country.name.official} </p>
        <button onclick ="countryName('${country.name.common}')"> Details </button>`


    //    const h3 = document.createElement('h3');
    //    h3.innerText = country.name.common;
    //   div.appendChild(h3);
    //   const p = document.createElement('p')
    //   p.innerText = country.name.official;
    //   div.appendChild(p);
      countriesDiv.appendChild(div);
    })
}
const countryName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
   fetch(url)
   .then(res => res.json())
   .then(data => displayCountriesDetails(data[0]))
}

const displayCountriesDetails = country => {
    console.log(country);
   const countryDiv = document.getElementById('country-details');

   countryDiv.innerHTML =`
    <h4>${country.name.common}</h4>
    <p>${country.population} </p>
    <img width = "250" src="${country.flags.png}">

   `

}

