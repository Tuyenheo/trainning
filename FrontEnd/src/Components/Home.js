import React, { Component } from 'react'
import './../Css/App.css';
import DataBook from './DataBook';
import ReactPaginate from 'react-paginate';
import callApi from '../Api/ApiCall';
import { Link } from 'react-router-dom';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state={
      books: [],
      offset: 0,
      perPage: 5,
      currentPage: 0
    };
    this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }


    DeleteBook = (id) => {
      let books = this.state.books;
      callApi('books/'+ id,'DELETE',null).then(res =>{
        if (res.status === 200) {
          books = books.filter( (book) => book.id_book !== id );
            this.setState({
              books: books
            })
        }
      })
    }

  receivedData() {
    callApi('books','GET',null)
        .then(res => {
            const books = res.data;
            const slice = books.slice(this.state.offset, this.state.offset + this.state.perPage)
            const postData = slice.map((value,key) => <React.Fragment>
                <tr>   
                        <td>{key + 1}</td>
                        <td>{value.name_book}</td>
                        <td>{value.author}</td>
                        <td>{value.type}</td>
                        <td>{value.nxb}</td>
                        <td>{value.year}</td>
                        <td>
                            <div className="btn-group">
                                <button className="btn btn-success c-green update"><Link to={'/books/'+ value.id_book}><span className="glyphicon glyphicon-pencil"></span></Link></button>
                                <button className="btn btn-secondary c-grey delete"  onClick = {() => this.DeleteBook(value.id_book)} ><span className="glyphicon glyphicon-trash"></span></button>
                            </div>
                        </td>
                    </tr>
            </React.Fragment>)

            this.setState({
                pageCount: Math.ceil(books.length / this.state.perPage),
                books: books,
                postData
            })
   });
}
handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.receivedData()
    });

};

componentDidMount() {
    this.receivedData()
}


  render() {
    return (
      <div className="Home">    
          
          <DataBook TableDataBook =  {this.state.postData}/>
          <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
          />
      </div>
    );
  }
}

export default Home;
