export const persistLocalStorage = <T>( key:string, value:T) => {
    localStorage.setItem(key, JSON.stringify({ ...value }))
}


export const clearLocalStorage = ( key: string) => {
    localStorage.removeItem(key);
}

export const getLocalStorage = ( key: string, state: {} ) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : state; 
}