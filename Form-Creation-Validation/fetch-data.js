async function fetchUserData() {
    // API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Data container
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch response
        const response = await fetch(apiUrl);

        // Convert response to JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a list
        const userList = document.createElement('ul');

        // Loop and add each user to the list
        users.forEach(function(user) {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append to container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Run when DOM loads
document.addEventListener('DOMContentLoaded', fetchUserData);