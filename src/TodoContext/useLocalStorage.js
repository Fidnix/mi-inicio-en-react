import react from 'react';

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = react.useState(false);
    const [loading, setLoading] = react.useState(true)
    const [item, setItem] = react.useState(initialValue);

    react.useEffect( () => {
        setTimeout( () => {
            try{
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
            
                if( !localStorageItem ) {
                localStorage.setItem(itemName, JSON.stringify( initialValue ));
                parsedItem = [];
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }
        
                setItem(parsedItem)
                setLoading(false)
            }catch(error){
                setError(error)
            }
        },1000)
    } )

    const saveItem = (newTodos) => {
        try{
            const stringifiedTodos = JSON.stringify(newTodos);
            localStorage.setItem(itemName, stringifiedTodos);
            setItem(newTodos);
        }catch(error){
            setError(error)
        }
    }

    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage };