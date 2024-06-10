//Hoang Nguyen
//U12840485

document.addEventListener('DOMContentLoaded', () => {
    // Create loading indicator
    const loadingIndicator = document.getElementById('loading');

    let productCounts;  // Used to obtain the number of products

    // Create an asynchronus function to display the product data
    async function call(index) {    
        try { //Handling errors and exeptions
            // Show loading indicator
            loadingIndicator.style.display = 'block';
            
            const request = await fetch('https://www.course-api.com/react-store-products');
            //Throw the error if the API request fails
            if (!request.ok){
                throw new Error()
            }
            // Obtain the data
            const data = await request.json();            
            productCounts = data.length;   //Number of products in the data
            
            //Hide loading indicator
            loadingIndicator.style.display = 'none';
            
            // Animate exit
            document.body.classList.add('body-exit');
            document.body.offsetWidth; // Trigger reflow
            document.body.classList.add('body-exit-active');

            // After exit animation, update the product and animate entry
            setTimeout(() => {
                //Display product data
                document.querySelector('#productName').textContent = `Product: ${data[index]['name'].toUpperCase()}`;
                document.querySelector('#productImage').src = `${data[index].image}`;
                document.querySelector('#productImage').width = 400;
                document.querySelector('#productImage').height = 400;
                document.querySelector('#productPrice').textContent = `Price: $${data[index].price}`;
                document.querySelector('#productDescription').textContent = `Description: ${data[index]['description']}`

                // Remove exit classes and add enter classes
                document.body.classList.remove('body-exit', 'body-exit-active');
                document.body.classList.add('body-enter');
                document.body.offsetWidth; // Trigger reflow
                document.body.classList.add('body-enter-active');
            }, 500)            
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
        console.log(currentIndex);        
        call(currentIndex);
    })

    //Previous button event listener
    document.getElementById('previousButton').addEventListener('click', ()=>{
        currentIndex = (productCounts + currentIndex - 1) % productCounts;
        console.log(currentIndex);
        call(currentIndex);
    })
})


