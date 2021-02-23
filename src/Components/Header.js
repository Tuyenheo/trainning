import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../logo_book.jpg';

class Header extends Component {
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
                            <div className="input-group col-md-6" id="adv-search">
                            <input type="text" className="form-control" placeholder="検索" />
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
                        </div>
                    </div>
                    </div>
                <div className="bg-circle-4 bg-circle" />
            </header>
        )
    }
}
export default Header;