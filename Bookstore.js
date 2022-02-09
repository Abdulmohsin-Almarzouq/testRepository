/* I created the list of Ids manually, I will try to create
the list of titles using a function.*/

console.clear();
console.log('Welcome to my Bookstore')
console.log('______________________')
let f = '-----------------------------';
let f2 = '    -     -     -     - ';

// storing the data
let index = ['Quantity','Price','bookAuthor','bookTitle','bookId']
let book1 = [13, 80.0, 'Simon Sinek',	'Start with why', 1]
let book2 = [22, 59.9, 'J. Clark Scott',	'But how do it know', 2]
let book3 = [5, 50.0, 'Robert Cecil Martin',	'Clean Code', 3]
let book4 = [12, 45.0, 'Peter Thiel',	'Zero to One', 4]
let book5 = [9, 39.9, 'Kyle Simpson',	'You don\'t know JS', 5]
let books = [book1,book2,book3,book4,book5];
let bookId = [book1[4],book2[4],book3[4],book4[4],book5[4]];

console.log(index)
console.log(f)
//Searching by Id
function bookSearchId(input){
    bookId.indexOf(input)
    console.log(books[bookId.indexOf(input)],)
}
// bookSearchId(user input)
//----------------------------

//Searching by title
/* a function to get a column from a matrix.
1) Input the 2d array and the column you want to extract,
2) the function creates a new array called mycol,
3) we start a for loop and iterate it for as many rows as 
    we have in our array (indexing in java starts at 0, hence
    the -1),
4) we push the variables in the new array(no need for -1
    at col, since we will be inputing an index in java
    format,
5) return the new array*/
function getCol(list,col){
    let mycol = [];
    for (i=0; i<=books.length-1;i++){
        mycol.push(list[i][col])
    }
    return mycol;
}

// Calling the function to get the titles column
let bookTitle = getCol(books,index.indexOf('bookTitle'));

// I will use the same functoin I used for the book Ids
// but I will make it applicable for any search method
function bookSearch(method,input){
    method.indexOf(input)
    console.log(books[method.indexOf(input)])
}
//bookSearch(bookTitle,'But how do it know');

//Searching by Author
/* I will use the book titles method but I will try to 
have the function create the list
1) I have changed the names of the three search elements
in the index so I can call them easily.
*/

function bookSearchFinal(method,input){
    let searchMethod = getCol(books,index.indexOf(method));
    console.log(books[searchMethod.indexOf(input)])
}
//bookSearchFinal('bookAuthor','J. Clark Scott')
//console.log(f)

//Selling a book and making a receipt
/*
1) Check if you have the book, if you have enough
quantity, and if the buyer has enough balance
2) Print the reciept
3) Update the quantity*/
function bookSale(bookTitle,quantity,balance){
    let bookTitles = getCol(books,index.indexOf('bookTitle'));
    let quantities = getCol(books,index.indexOf('Quantity'));
    let prices = getCol(books,index.indexOf('Price'));
    let price = prices[bookTitles.indexOf(bookTitle)] * quantity;
    let stock = quantities[bookTitles.indexOf(bookTitle)]
    if (bookTitles.includes(bookTitle) == false){
        console.log('Sorry, the book is not available');
    } else if (quantity > stock){
        console.log(`Sorry, we only have ${stock} copies`)
    } else if (balance < price){
        console.log(`Sorry, you do not have enough balance \nyou need ${price}$`)
    } else{
        console.log(`Book: ${bookTitle}\nAmount: ${quantity}\nTotal Price: $${price}`);
        let newquantity = stock - quantity;
        books[bookTitles.indexOf(bookTitle)][index.indexOf('Quantity')] = newquantity;
        console.log(f);
    }
}
//bookSale('Start with why',4,320);

/* I will try removing the requirement of inputing the
search method while searching for a book*/

/* for some reason after the using the getCol function
the variable (i) increases by 3, it changes from 2 to
5, I cannot understand why this is happening and I have
wasted enough time already so I will just try to fix it
manually*/

function bookSearchRefined(input){
    for (i=2; i<=4; i++){
        if (getCol(books,i).includes(input) === true){
            let searchMethod = getCol(books,i-3);
            console.log(books[searchMethod.indexOf(input)])
            
            
        } else if(getCol(books,i-2).includes(input) === true){
            let searchMethod = getCol(books,i-2);
            console.log(books[searchMethod.indexOf(input)])
        } else{
            let newInput = Number(input)
            let searchMethod = getCol(books,i-1);
            console.log(books[searchMethod.indexOf(newInput)])
        }
    }
        
}
console.clear()

bookSearchRefined('Clean Code ')
// testing editing