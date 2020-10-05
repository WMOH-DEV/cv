/*************************************************************************************
 * 
 *                                  Project #1 
 *               How to make a table that takes data from the user 
 *                  with update, delete and search functions.
 * 
 // Steps : after creating the HTML inputs and the table structure.
 * 
 *  1# Define every HTML inputs as variables.
 *  2# Create a main function (addProduct) that creates a new object containes all the input values every time the user press the submit button.
 *  3# create an empty Array  [productList] to store the object values later.
 *  4# push every product values to this  empty array that will prevent any previous values to be deleted and the result will be Array of objects
 *  5# create a new var (row) to contain a blank values and use for loop to check and add every productList array's values to this var
 *  6# Inject this variable (row) values to the table body by using command document.getElementById.innerHTML = row;
 *  7# invoke the displayProduct function after adding a product from the user ( Inside The main function adding the product)
 *  8#  create a new function called clearForm to delete the inputs value after sumbitting it
 *  9# invoke clear function to clear the form at the main function
 *  10# Save all the produclist values to the localstorage before displaying it. by using localStorage.setItem('key', value) method.
 *  11# Before doing anything it will check if the user have a stored data on the local storage or not, if no so continue with an empty array. if yes push em into the array productList.
 * 
 *************************************************************************************/

/**

Project
├── Main content/
│   ├── Step Number
│   ├── Step Comment
│   └── Step Code
└──
*/

// First Step
// [ Define every HTML inputs as variables ]

var myTableBody = document.getElementById('tableBody');
var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCat');
var productDescInput = document.getElementById('productDesc');

var searchInput = document.getElementById('searchBox');

// step 3 [ create Array to store the object values ]
// var productList = [];
var productList;

// step 11 , Before doing anything it will check if the user have a stored data on the local storage or not, if no so continue with empty array. if yes put it into the array productList.
if (localStorage.getItem('ourProducts') == null) {
	productList = [];
} else {
	productList = JSON.parse(localStorage.getItem('ourProducts'));
	displayProduct();
}

// step 2
// [ Create a function that create an object containes all the input values ]

function addProduct() {
	var product = {
		// new object to get the inputs values and store it
		name: productNameInput.value,
		price: productPriceInput.value,
		category: productCategoryInput.value,
		description: productDescInput.value,
	};
	if (
		product.name === '' ||
		product.price === '' ||
		product.category === '' ||
		product.description === ''
	) {
		return alert('Some fields are missing');
	}
	// step 4 [ push every product values to this array that will prevent any previous values to be deleted and the result will be Array of objects]
	productList.push(product);
	// step 10 Save all the produclist values to the localstorage before displaying it.
	localStorage.setItem('ourProducts', JSON.stringify(productList));

	// step 7 [ invoke the displayProduct function after adding a product from the user to display it on the table]
	displayProduct();
	// step 9 [ invoke clear function to clear the form]
	clearForm();
}

function displayProduct() {
	//  step 5 [ create a new var (row) to contain a blank value and use for loop to check and add every productList array's value to this var]
	var row = '';
	for (var i = 1; i < productList.length; i++) {
		row += `<tr>
                <td>${i}</td>
                <td>${productList[i].name}</td>
                <td>${productList[i].price}</td>
                <td>${productList[i].category}</td>
                <td>${productList[i].description}</td>
                <td><button onclick="updateProduct(${i})" class="btn btn-warning">Update</button></td>
                <td><button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
                </tr>
                `;
	}
	// step 6 [ Inject this variable (row) values to the table body ]
	document.getElementById('tableBody').innerHTML = row;
}

//  step 8 [ create a new function to delete the inputs value after sumbitting it ]
function clearForm() {
	productNameInput.value = '';
	productPriceInput.value = '';
	productCategoryInput.value = '';
	productDescInput.value = '';
}

function deleteProduct(index) {
	productList.splice(index, 1);
	localStorage.setItem('ourProducts', JSON.stringify(productList));
	displayProduct();
}

// TODO   adding this comment to the above steps
// function to get the selected item values and shows em back on the form
const updateBtn = document.getElementById('update--btn');
const primaryAddBtn = document.getElementById('add--btn');

function updateProduct(index) {
	productNameInput.value = productList[index].name;
	productPriceInput.value = productList[index].price;
	productCategoryInput.value = productList[index].category;
	productDescInput.value = productList[index].description;
	updateBtn.classList.remove('d-none');
	primaryAddBtn.classList.add('d-none');

	// create a global var to get and save the index of the selected item
	productIndex = productList.indexOf(productList[index]);
}

// TODO   adding this comment to the above steps
// function to get the updating values from the inputs then apply em to the selected item row on the table. then updates the localStorage

function updateSlice() {
	productList[productIndex].name = productNameInput.value;
	productList[productIndex].price = productPriceInput.value;
	productList[productIndex].category = productCategoryInput.value;
	productList[productIndex].description = productDescInput.value;
	// productList.splice(productIndex, 1, productList[productIndex]);
	updateBtn.classList.add('d-none');
	primaryAddBtn.classList.remove('d-none');
	localStorage.setItem('ourProducts', JSON.stringify(productList));
	displayProduct();
	clearForm();
}

// TODO   adding this comment to the above steps
// search function depends on onkeyup and search input.value as an argument then loop in all productList items to match the values then innerHTML the only value matches.
function searchProduct(x) {
	var row = '';
	for (var i = 0; i < productList.length; i++) {
		if (productList[i].name.toLowerCase().includes(x.toLowerCase()) == true) {
			row += `<tr>
            <td>${i}</td>
            <td >${productList[i].name}</td>
            <td >${productList[i].price}</td>
            <td >${productList[i].category}</td>
            <td >${productList[i].description}</td>
            <td><button onclick="updateProduct(${i})" class="btn btn-warning">Update</button></td>
            <td><button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
            </tr>
            `;
			myTableBody.innerHTML = row;
		} else {
			myTableBody.innerHTML = row;
		}
	}
}

// TODO

// function validatProductName(productName) {
// 	var regex = /^[A-Z][a-z]{3, 5}$/;
// 	if (regex.test(productName) == true) {
// 		productNameAlert.classList.replace('d-block', 'd-none');
// 		productNameinput.classList.remove('is-invalid');
// 		productNameinput.classList.add('is-valid');
// 	} else {
// 		productNameAlert.classList.replace('d-none', 'd-block');
// 		productNameinput.classList.remove('is-valid');
// 		productNameinput.classList.add('is-invalid');
// 	}
// }

// productNameInput.addEventListener('keyup', function () {
// 	validatProductName(productNameInput.value);
// });

// function validatPrice(productPrice) {
// 	var regex = /^[1-9][0-9]{2, 3}$|10000$/;
// 	if (regex.test(productPrice) == true) {
// 		productPriceAlert.classList.replace('d-block', 'd-none');
// 		productPriceAlert.classList.remove('is-invalid');
// 		productPriceAlert.classList.add('is-valid');
// 	} else {
// 		productPriceAlert.classList.replace('d-none', 'd-block');
// 		productPriceAlert.classList.remove('is-valid');
// 		productPriceAlert.classList.add('is-invalid');
// 	}
// }

// productPriceInput.addEventListener('keyup', function () {
// 	validatPrice(productPriceInput.value);
// });
