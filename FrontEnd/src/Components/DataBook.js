import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

class DataBook extends Component {
    render() {
        return (
            
            <div>
                <h2>本一覧</h2>
                <div className="btn-add">
                <div className="btn btn-success c-green update">
                    <Link to="/newbook"><span class="glyphicon glyphicon-plus-sign"></span>新しい本を追加</Link>
                </div>    
                </div>
                <table className="table table-striped table-inverse table-hover">
                    <thead className="thead-inverse">
                    <tr>
                        <th>位置</th>
                        <th>本名</th>
                        <th>著作</th>
                        <th>種類</th>
                        <th>出版社</th>
                        <th>発行年</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.TableDataBook}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default DataBook;
