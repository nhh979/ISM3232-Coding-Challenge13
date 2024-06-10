//Hoang Nguyen
//U12840485

document.addEventListener('DOMContentLoaded', () => {

    const loadingIndicator = document.getElementById('loading');

    async function call() {    
        try { //Handling errors and exeptions
            // Show loading indicator
            loadingIndicator.style.display = 'block';
            
            const request = await fetch('https://www.course-api.com/react-store-products');
            const data = await request.json();

            //Hide loading indicator
            loadingIndicator.style.display = 'none';
            
            //Display product data
            document.querySelector('#productName').textContent = `Product: ${data[0]['name']}`;
            document.querySelector('#productImage').src = `${data[0].image}`;
            document.querySelector('#productImage').width = 300;
            document.querySelector('#productPrice').textContent = `Price: $${data[0].price}`;
            document.querySelector('#productDescription').textContent = `Description: ${data[0]['description']}`
        } catch (error) {   
            //Hide loading indicator when an error occurs    
            loadingIndicator.style.display = 'none';   
            alert('There was an error loading products. Please try again later.')
            
        }
    }

    call()

})


