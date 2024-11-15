document.getElementById('searchButton').addEventListener('click', function () {
    const query = document.getElementById('searchInput').value.trim(); 

    if (!query) {
        document.getElementById('superheroesList').innerHTML = '<li class="error-message">Please enter a name or alias.</li>';
        return;
    }

    const sanitizedQuery = encodeURIComponent(query);


    fetch('superheroes.php?query=' + sanitizedQuery)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error retrieving data');
            }
            return response.text();
        })
        .then(data => {
            const resultContainer = document.getElementById('superheroesList');
            resultContainer.innerHTML = data; 
        })
        .catch(error => {
            document.getElementById('superheroesList').innerHTML = `<li class="error-message">${error.message}</li>`;
        });
});
