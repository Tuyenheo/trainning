import React, { Component } from 'react';

class Search extends Component {
    
    render() {
        return (
            <div className="input-group col-md-6" id="adv-search">
                <input type="text" className="form-control" placeholder="検索" 
                    value={this.props.valueSearch}
                    onChange={(event)=>this.props.handleSearch(event.target.value)}
                />
                <div className="input-group-btn">
                    <div className="btn-group" role="group">
                        <div className="dropdown dropdown-lg">
                            <button type="button" className="btn btn-grey dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span className="caret" /></button>
                            <div className="dropdown-menu dropdown-menu-right" role="menu">
                                <form className="form-horizontal" role="form">
                                    <div className="form-group">
                                        <label htmlFor="filter">フィルタリング</label>
                                        <select className="form-control">
                                            <option value={0} selected>出版社</option>
                                            <option value={1}>Nhà xuất bản kim đồng</option>
                                            <option value={2}>Nhà xuất bản kim đồng</option>
                                            <option value={3}>Nhà xuất bản kim đồng</option>
                                            <option value={4}>Nhà xuất bản kim đồng</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="filter">フィルタリング</label>
                                        <select className="form-control">
                                            <option value={0} selected>種類</option>
                                            <option value={1}>Văn học</option>
                                            <option value={2}>Lịch sử</option>
                                            <option value={3}>Truyện ngắn</option>
                                            <option value={4}>Truyện dài</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contain">著作</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                    <button type="submit" className="btn c-green btn-submit"><span className="glyphicon glyphicon-search" /></button>
                                </form>
                            </div>
                        </div>
                        <button type="button" className="btn c-green btn-submit"><span className="glyphicon glyphicon-search" /></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;