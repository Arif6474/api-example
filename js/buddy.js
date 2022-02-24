const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayBuddy(data));
}
loadBuddy()
const displayBuddy = buddy =>{
    const buddies = buddy.results;
    const buddiesDiv = document.getElementById('buddies');
    for(const buddy of buddies){
        // console.log(buddy);
        const p = document.createElement('p');
        p.innerText = `
        Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        Email: ${buddy.email}
        Gender: ${buddy.gender}
        Cell: ${buddy.cell}
        `;
        buddiesDiv.appendChild(p);
    }
}