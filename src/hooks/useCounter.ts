import { useState } from 'react';


export const useCounter = ( actualAmount:number ) => {
    const [amount, setAmount] = useState<number>(actualAmount);


    const addOne = () => {
        if( amount <5 ) setAmount( prevAmount => prevAmount + 1 );
    }
   
    const restOne = () => {
        if( amount > 1 ) setAmount( prevAmount => prevAmount - 1 )
    }
    

    return {
        amount,
        addOne,
        restOne
    }
    
}