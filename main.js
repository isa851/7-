fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
        document.getElementById('root').innerHTML += `
        <p><strong>Name:</strong> ${item.name}</p>
        <p><strong>Username:</strong> ${item.username}</p>
        <p><strong>Email:</strong> ${item.email}</p>
        <p><strong>ID:</strong> ${item.id}</p>
        <hr>
      `;
    });
  })

