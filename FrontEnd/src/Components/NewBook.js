import React, { Component } from 'react'
import callApi from '../Api/ApiCall';
import ReactFormInputValidation from "react-form-input-validation";

class NewBook extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            fields: {
                name_book :'',
                author: '',
                type: '',
                nxb: '',
                year: ''
              },
              errors: {}
        });
        this.form = new ReactFormInputValidation(this);
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            name_book: "required",
            author: "required",
            type: "required",
            nxb: "required",
            year: "required",
        });
        this.form.onformsubmit = (fields) => {
            var {history,match} = this.props;
            if (match) {
            var id_book = match.params.id_book;
                // kiem tra id de phan loai method put vs post
                if(id_book) {
                    callApi('books/'+ id_book, 'PUT', {
                        name_book : fields.name_book,
                        author: fields.author,
                        type: fields.type,
                        nxb: fields.nxb,
                        year: fields.year
                    })
                    .then(res => {
                        history.goBack();
                    })
                } else {
                    callApi('books', 'POST', {
                        name_book : fields.name_book,
                        author: fields.author,
                        type: fields.type,
                        nxb: fields.nxb,
                        year: fields.year
                    })
                    .then(res => {
                        history.goBack();
                    })
                }
            }
           
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id_book = match.params.id_book;
            callApi('books/'+ id_book, 'GET', null).then(res => {
                var data = res.data;
                this.setState({
                    fields: {
                        name_book: data.name_book,
                        author: data.author,
                        type: data.type,
                        nxb: data.nxb,
                        year: data.year
                    }
                })
            }) 
        }
    }
    

    render() {
        return (
            <div className="row centered">
                    <div className="card">
                        <h2>新しい本を追加</h2>
                        <form className="card-body col-md-6"  onSubmit={this.form.handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" name = "name_book" placeholder="本名" 
                                onBlur={this.form.handleBlurEvent}
                                onChange={this.form.handleChangeEvent}
                                value={this.state.fields.name_book} />
                                <label className="error">
                                    {this.state.errors.name_book ? this.state.errors.name_book : ""}
                                </label>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name = "author" placeholder="著作" 
                                onBlur={this.form.handleBlurEvent}
                                onChange={this.form.handleChangeEvent}
                                value={this.state.fields.author} />
                                <label className="error">
                                    {this.state.errors.author ? this.state.errors.author : ""}
                                </label>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name = "type" placeholder="種類" 
                                onBlur={this.form.handleBlurEvent}
                                onChange={this.form.handleChangeEvent}
                                value={this.state.fields.type}/>
                                <label className="error">
                                    {this.state.errors.type ? this.state.errors.type : ""}
                                </label>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name = "nxb" placeholder="出版社"
                                onBlur={this.form.handleBlurEvent}
                                onChange={this.form.handleChangeEvent}
                                value={this.state.fields.nxb} />
                                <label className="error">
                                {this.state.errors.nxb ? this.state.errors.nxb : ""}
                            </label>
                            </div>
                            
                            <div className="form-group">
                                <input type="date" className="form-control" name = "year" placeholder="発行年"
                                onBlur={this.form.handleBlurEvent}
                                onChange={this.form.handleChangeEvent}
                                value={this.state.fields.year}/>
                                <label className="error">
                                    {this.state.errors.year ? this.state.errors.year : ""}
                                </label>
                            </div>
                            
                            <div className="form-group centered">
                                <button className="btn btn-success c-green update" type="submit" > 保存 </button>
                            </div>
                        </form>
                    </div>
                </div>
        )
    }
}
export default NewBook
