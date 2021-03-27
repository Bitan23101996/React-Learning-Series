import {useEffect} from 'react'

function useDocTitleChange(count) {
    useEffect(() => {
        document.title =`Clicked ${count} times`
        return () => {
            // cleanup
        }
    }, [count])
}

export default useDocTitleChange
