//Hoang Nguyen
//U12840485

document.addEventListener('DOMContentLoaded', () => {

    const loadingIndicator = document.getElementById('loading');
    let productCounts;  // Used to obtain the number of products
    async function call(index) {    
        try { //Handling errors and exeptions
            // Show loading indicator
            loadingIndicator.style.display = 'block';
            
            const request = await fetch('https://www.course-api.com/react-store-products');
            const data = await request.json();            
            productCounts = data.length;

            //Hide loading indicator
            loadingIndicator.style.display = 'none';
            
            //Display product data
            document.querySelector('#productName').textContent = `Product: ${data[index]['name']}`;
            document.querySelector('#productImage').src = `${data[index].image}`;
            document.querySelector('#productImage').width = 300;
            document.querySelector('#productPrice').textContent = `Price: $${data[index].price}`;
            document.querySelector('#productDescription').textContent = `Description: ${data[index]['description']}`
        } catch (error) {   
            //Hide loading indicator when an error occurs    
            loadingIndicator.style.display = 'none';   
            alert('There was an error loading products. Please try again later.')
            
        }
    }
    //Display the first product 
    let currentIndex = 0
    call(currentIndex)

    //Next button event listener
    document.getElementById('nextButton').addEventListener('click', ()=>{
        currentIndex = (currentIndex + 1) % productCounts;
        // console.log(currentIndex);        
        call(currentIndex);
    })

    //Previous button event listener
    document.getElementById('previousButton').addEventListener('click', ()=>{
        currentIndex = (productCounts + currentIndex - 1) % productCounts;
        // console.log(currentIndex);
        call(currentIndex);
    })
})


