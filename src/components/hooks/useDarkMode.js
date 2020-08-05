import { useLocalStorage }  from './useLocalStorage'

export default function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage('mode', false)
    
    return [ darkMode, setDarkMode]
}