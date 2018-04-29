// import React from 'react'
// import { asyncComponent } from '@jaredpalmer/after'
import Home from './Home';
import Writing from './Writing';

export default [
  {
    path: '/',
    exact: true,
    component: Home,
    // component: asyncComponent({
    //   loader: () => import('./Home'),
    // }),
  },
  {
    path: '/writing/:id',
    component: Writing,
    // component: asyncComponent({
    //   loader: () => import('./Writing'),
    //   Placeholder: () => <div>...LOADING...</div>,
    // }),
  },
]
