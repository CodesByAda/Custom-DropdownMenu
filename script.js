//For States Selection
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
const submitButton = document.getElementById('submitButton');
const errorMessage = document.getElementById('errorMessage');
const closebtn = document.getElementById('closeBtn');
const container = document.querySelector('.dropdown-container');
const redirectbtn = document.getElementById("readMore");

//Making the menu appear when clicking btn
redirectbtn.addEventListener('click', () => {
    container.classList.remove("hide");
})

//Closing the menu section
closebtn.addEventListener('click', () => {
    container.classList.add("hide");
});

// Adding states in optionmenu
function populateDropdown(states) {
    const existingOptions = dropdownContent.querySelectorAll('a');
    existingOptions.forEach(option => option.remove());

    //Code for error message
    if (states.length === 0) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        states.forEach(state => {
            const stateOption = document.createElement('a');
            stateOption.textContent = state;
            stateOption.href = "#"; // Add href attribute to make it focusable
            stateOption.addEventListener('click', (event) => {
                event.preventDefault();
                dropdownButton.firstChild.textContent = state + ' ';
                dropdownContent.classList.remove('show');
                dropdownIcon.innerHTML = '&#9660;'; // Downward arrow
                submitButton.disabled = false; // Enable the submit button
                submitButton.dataset.state = state; // Store selected state in data attribute
            });
            dropdownContent.appendChild(stateOption);
        });
    }
}

// Initialize the dropdown with all states
populateDropdown(states);

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
    if (dropdownContent.classList.contains('show')) {
        dropdownIcon.innerHTML = '&#9650;'; // Upward arrow
        searchInput.focus();
    } else {
        dropdownIcon.innerHTML = '&#9660;'; // Downward arrow
    }
});

// Prevent closing the dropdown when clicking inside the search input
searchInput.addEventListener('click', (event) => {
    event.stopPropagation();
});

// Close the dropdown if clicked outside
window.addEventListener('click', () => {
    dropdownContent.classList.remove('show');
    dropdownIcon.innerHTML = '&#9660;'; // Downward arrow
});

// Redirect to a new page when the submit button is clicked
submitButton.addEventListener('click', () => {
    if (!submitButton.disabled) {
        const selectedState = submitButton.dataset.state;
        window.location.href = `second.html`; // Replace with the correct path to your files
    }
});