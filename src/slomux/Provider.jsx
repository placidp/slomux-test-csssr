import { context as Context } from "./store";

// eslint-disable-next-line react/prop-types
export const Provider = ({ store, children }) => {
       
    return <Context.Provider value={{ store }}> { children } </Context.Provider>
}