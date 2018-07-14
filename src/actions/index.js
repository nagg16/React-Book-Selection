export function selectBook(book) {
   //selectBook is an action creater, it needs to return an action
   //an object with the type property.
  // console.log(book.title);
   return {
       type:'BOOK_SELECTED',
       payload : book

   };
}