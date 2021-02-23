import React, { Component } from 'react'
import callApi from '../Api/ApiCall';

class NewBook extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = ({
            name_book :'',
            author: '',
            type: '',
            nxb: '',
            year: ''
        });
    }

    // componentDidMount() {
    //     var {matchPath} = this.props;
    //     if(matchPath) {}
    // }
    

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();
        
        console.log(this.state);
        var {name_book,author,type,nxb,year} = this.state;
        var {history} = this.props;
        callApi('books', 'POST', {
            name_book : name_book,
            author: author,
            type: type,
            nxb: nxb,
            year: year
        })
        .then(res => {
            history.goBack();
        })
      }
    

    render() {
        return (
            <div className="row centered">
                    <div className="card">
                        <h2>新しい本を追加</h2>
                        <form className="card-body col-md-6" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" name = "name_book" placeholder="本名"  onChange={this.onChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name = "author" placeholder="著作"  onChange={this.onChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name = "type" placeholder="種類"  onChange={this.onChange.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name = "nxb" placeholder="出版社"  onChange={this.onChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name = "year" placeholder="発行年"  onChange={this.onChange.bind(this)}/>
                            </div>
                            <div className="form-group centered">
                                <button className="btn btn-success c-green update" > 保存 </button>
                            </div>
                        </form>
                    </div>
                </div>
        )
    }
}
export default NewBook
