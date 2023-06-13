import  { createContext, useState, useContext, useRef, useEffect } from "react";

export const context = createContext(null)

export const createStore = (reducer, initialState) => {
    let currentState = initialState;
    let listeners = [];

    const getState = () => currentState;
    const dispatch = action => {
        currentState = reducer(currentState, action);
        listeners.forEach(listener => listener());
    }

    const subscribe = listener => {
        listeners.push(listener);
        
        return () => {
            console.log('unsubscribe success')
            listeners = listeners.filter(cb => cb !== listener)
            console.log('listeners', listeners);

        }
    }

    return { getState, dispatch, subscribe };
}


export const useDispatch = () => {
    const ctx = useContext(context);

    if (!ctx) {
        // Throw an error if store is not available
        throw new Error('useDispatch must be used within a StoreProvider'); 
  
    }

    return ctx.store.dispatch;
}

export const useSelector = (selector, diff = (a, b) => a === b) => {
    const { store = null } = useContext(context);
    const [, forceUpdate] = useState();
    const prevValue = useRef(selector(store.getState()));

    if (!store || !selector) {
        return
    }

    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const current = selector(store.getState());
            const someDiff = !diff(prevValue.current, current);
            
            if (someDiff) {
                forceUpdate(current);
                prevValue.current = current;
            }
        });

        return () => {
            unsubscribe();
        }
    }, [store])

    return selector(store.getState());
}
