import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callApi from '../Api/ApiCall';
import logo from './../logo_book.jpg';
import Search from './Search';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
          books: [],
          isSearch: false,
          itemsSearch: [],
          valueSearch: '',
        };
    }

    componentDidMount() {
        callApi('books','GET',null)
        .then(res => {
            this.setState({
                books: res.data
            })
        })
    }
    

    handleSearch = (search) => {
        let {books} = this.state;
        let itemsSearch = [...books];
        let newArray = [];
        if(search.length <= 0) {
          this.setState({isSearch: false})
        } else {
          for(let item of itemsSearch) {
            if(item.name_book.toLowerCase().indexOf(search.toLowerCase()) > -1) {
              newArray.push(item);
            }
          }
          this.setState({isSearch: true})
        }
        this.setState({
          itemsSearch: newArray,
          valueSearch: search
        });
        
        
      } 
      
      renderItem = () => {
        let { isSearch, itemsSearch} = this.state;
        // console.log(this.state.itemsSearch)
        if (isSearch) {
          this.state.books = itemsSearch
        }
        // if(books.length === 0) {
        //   return <Item item={0} />
        // }
        return  this.state.books.map((value, key) => {
            return (
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
              )
          })
      }
    render() {
        return (
            <header className="masthead text-center text-black">
                <div className="masthead-content">
                    <div className="container">
                        <h1 className="masthead-heading col-md-2">
                        <img src={logo} width="100" height="90" />
                        </h1>
                        <p className="lnk col-md-2"><Link to="/">本管理</Link></p>
                        <div className="col-md-8 f-r">
                            <p className="col-md-6 login lnk"><a src="#">ログイン</a></p>
                            <Search 
                                valueSearch={this.state.valueSearch}
                                handleSearch={this.handleSearch}
                                renderItem = {this.renderItem()}
                            />
                        </div>
                    </div>
                    </div>
                <div className="bg-circle-4 bg-circle" />
            </header>
        )
    }
}
export default Header;