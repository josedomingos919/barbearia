import React, {
    createContext,
    useState,
    useContext
} 
from 'react';


const NavigationContext = createContext({
    Nav: null,
    setNav: ()=>{}
});

export default function NanvigationProvider({ children }){

    const [Nav,setNav] = useState(null);

    const valueProvider = {
        Nav,
        setNav
    }

    return(
        <NavigationContext.Provider
            value={valueProvider}
        >
            { children }
        </NavigationContext.Provider>
    )
}


export function useNav(){
    const context = useContext(NavigationContext);
    return context;
}