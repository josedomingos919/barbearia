import React from 'react';
import NavigationProvider from './navigation';

export default function ApplicationContext ({ children }){

    return(
        <NavigationProvider>
            { children }
        </NavigationProvider>
    );
}