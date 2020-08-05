import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
    // initital state is a function that checks to see if the initial
    //argument already exists in local storage, else returning it to local storage
    const [ storedValue, setStoredValue] = useState( () => {
        //get from local storage by key
        const item = window.localStorage.getItem(key)
        // parse and return stored json, or if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue
    })
    const setValue = value => {
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
        }
        return [ storedValue ]
    }
