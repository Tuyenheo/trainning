import React from 'react';
import Home from '../Components/Home';
import NewBook from '../Components/NewBook';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/add',
        exact: false,
        main: ({history}) => <NewBook history={history}/>
    },
    {
        path: '/books/:id_book',
        exact: false,
        main: ({match, history}) => <NewBook match={match} history={history}/>
        
    }
];

export default routes;