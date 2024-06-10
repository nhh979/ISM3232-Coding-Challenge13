//Hoang Nguyen
//U12840485

function call() {
    const request = fetch('https://www.course-api.com/react-store-products').then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        document.querySelector('#productName').textContent = `Product: ${data[0]['name']}`;
        document.querySelector('#productImage').src = `${data[0].image}`;
        document.querySelector('#productImage').width = 300;
        document.querySelector('#productPrice').textContent = `Price: $${data[0].price}`;
        document.querySelector('#productDescription').textContent = `Description: ${data[0]['description']}`;
    })
}

