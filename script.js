//Hoang Nguyen
//U12840485

async function call() {    
    try { //Handling errors and exeptions
        const request = await fetch('https://www.course-api.com/react-store-products');
        const data = await request.json();
        
        document.querySelector('#productName').textContent = `Product: ${data[0]['name']}`;
        document.querySelector('#productImage').src = `${data[0].image}`;
        document.querySelector('#productImage').width = 300;
        document.querySelector('#productPrice').textContent = `Price: $${data[0].price}`;
        document.querySelector('#productDescription').textContent = `Description: ${data[0]['description']}`
    } catch (error) {
        alert('There was an error loading products. Please try again later.')
    }
}
call()
