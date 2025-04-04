const performanceList = document.querySelector(".performance-list");

const fetchData = async () => {
    try {
        const response = await fetch("./data.json");
        if(!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        showData(data);
    }catch(error) {
        console.error('Error fetching data:', error);
    }
}

const showData = (data) => {
    const performanceItems = data.map(({category, score, icon}) => (
        `
            <li class="flex-between performance-item" id=${category.toLowerCase()}>
                <img src="${icon}" alt="${category}-icon">
                <p class="category">${category}</p>
                <p class="points"><span>${score}</span> / 100</p>
            </li>
        `
    )).join("");

    performanceList.innerHTML = performanceItems;
}

fetchData();