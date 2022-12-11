const BookList = (state=[], action) =>{
    var bookArray = Object.assign([],state);
    if(action.type === "addbook"){
        bookArray.push(action.name)
    }
    if(action.type === "deletebook"){
        bookArray.splice(action.index, 1)
    }
     return bookArray;
}
export default BookList;
