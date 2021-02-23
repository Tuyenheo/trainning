import React from 'react';
import Home from '../Components/Home';
import NewBook from '../Components/NewBook';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/newbook',
        exact: false,
        component: NewBook
    },
    {
        path: '/books/id',
        exact: false,
        component: NewBook,
        
    }
];

export default routes;