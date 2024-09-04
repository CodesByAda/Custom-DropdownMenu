const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
    "Uttar Pradesh", "Uttarakhand", "West Bengal", 
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
    "Delhi", "Lakshadweep", "Puducherry"
];

const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');
const dropdownIcon = document.getElementById('dropdownIcon');
const searchInput = document.getElementById('searchInput');

// Initialize the dropdown with all states
populateDropdown(states);

// Populate the dropdown with states
function populateDropdown(states) {
    const existingOptions = dropdownContent.querySelectorAll('a');
    existingOptions.forEach(option => option.remove());

    states.forEach(state => {
        const stateOption = document.createElement('a');
        stateOption.textContent = state;
        stateOption.href = "#";
        stateOption.addEventListener('click', (event) => {
            event.preventDefault();
            dropdownButton.firstChild.textContent = state + ' ';
            dropdownContent.classList.remove('show');
            dropdownIcon.innerHTML = '&#9660;';
        });
        dropdownContent.appendChild(stateOption);
    });
}

// Filter the dropdown based on the search input
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredStates = states.filter(state => state.toLowerCase().includes(searchTerm));
    populateDropdown(filteredStates);
});

// Toggle the dropdown visibility
dropdownButton.addEventListener('click', (event) => {
    event.stopPropagation();
    dropdownContent.classList.toggle('show');
    dropdownIcon.innerHTML = dropdownContent.classList.contains('show') ? '&#9650;' : '&#9660;';
    if (dropdownContent.classList.contains('show')) {
        searchInput.focus();
    }
});

// Prevent closing the dropdown when clicking inside the search input
searchInput.addEventListener('click', (event) => {
    event.stopPropagation();
});

// Close the dropdown if clicked outside
window.addEventListener('click', () => {
    dropdownContent.classList.remove('show');
    dropdownIcon.innerHTML = '&#9660;';
});