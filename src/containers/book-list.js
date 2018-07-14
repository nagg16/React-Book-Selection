import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
    renderList = () =>{
     return this.props.books.map((book)=> {
         return (
            <li 
            key={book.title} 
            onClick ={()=> {this.props.selectBook(book)}}
            className="list-group-item">
            {book.title}
            </li>
        );
    });
}

    render(){
    return(
        <ul className="list-group col-sm-4">
            {this.renderList()}
        </ul>
        )
    }
}

function mapStateToProps(state){
    // whatever will returned will show up as props
    //inside of BookList
    return {
        books:state.books
    }
}
// Anything returned from this function will end up as pros 
// om the4 BookList container
function mapDispatchToProps(dispatch){
     // when select book is called, the result  shiould be passed
     // to all our reducers
    return bindActionCreators({ selectBook : selectBook}, dispatch)
} 

// promote BookList from a component to a container - it need to know 
//about this new dispatch method . SelectBook . Make it available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)