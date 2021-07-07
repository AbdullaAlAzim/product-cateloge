//selecctor

const filterInput    = document.querySelector('#filter');
const productListul  = document.querySelector('.collection');
const nameInput      = document.querySelector('.product-name');
const priceInput     = document.querySelector('.product-price');
const addBtn         = document.querySelector('.add-product');
const deleteBtn      = document.querySelector('.delete-product');
const msg            = document.querySelector('.msg');


//data state
let productdata = [];
    
function getData(productlist){

    if(productdata.length > 0){
        msg.innerHTML= '';

        let li ='';

    productlist.forEach(product => {

        li = document.createElement('li');
        li.className = 'list-group-item collection-item';
        li.id = `product-${product.id}`;
        li.innerHTML = `

        <strong>${product.name}</strong>
        <span class="price">$${product.price}</span>
        <i class="fas fa-trash-alt float-end delete-product"></i>
        </li> `;

        productListul.appendChild(li);
       
    });
        
    }else{

        msg.innerHTML = 'No Item is here';
    }

}
getData(productdata);

// button selection
addBtn.addEventListener('click', e => {
    e.preventDefault();
    const name  = nameInput.value;
    const price  = priceInput.value;
    let id

    if(productdata.length === 0){
        id = 0;
    }else{

        id = productdata[productdata.length -1].id +1
    }



    if(
    name === '' || 
    price === '' || 
    !(!isNaN(parseFloat(price)) && 
    isFinite(price))

    )  {

        alert('please fill up the necesary information');
    }else{

            productdata.push({

                id,
                name,
                price
            })
            productListul.innerHTML= '';
            getData(productdata);
            nameInput.value = '';
            priceInput.value = '';
       }

   
});


//delete product
productListul.addEventListener('click', (e) =>{

    if(e.target.classList.contains('delete-product')){

        //removing ui from the target
   const target =  e.target.parentElement;
   e.target.parentElement.parentElement.removeChild(target);

    const id = parseInt(target.id.split('-')[1]);
        console.log(typeof id);
     //retun result  array
     const result =  productdata.filter( (product) =>{

        return product.id !== id;

     });
     productdata = result;

  }
});


filterInput.addEventListener('keyup', e => {

    const text = e.target.value;
    document.querySelectorAll('.collection .collection-item').forEach(item => {

       console.log(item.firstElementChild);

    });

});

//filter product
// const filterProduct = e => {
//     const text = e.target.value.toLowerCase();
//     document.querySelectorAll('.collection .collection-item').forEach(item => {
//       const productName = item.firstElementChild.textContent.toLowerCase();
//       if (productName.indexOf(text) === -1) {
//         // showMessage(null, true);
//         showMessage('NO item Meet your criteria');
//         item.style.display = 'none';
//       } else {
//         msg.innerHTML = '';
//         item.style.display = 'block';
//       }
//     });
//   };
  





