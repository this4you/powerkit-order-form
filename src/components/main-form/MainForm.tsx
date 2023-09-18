import React, { useState } from 'react';
import { ResultMessage } from '../result-message/ResultMessage.tsx';
import { OrderForm } from '../order-form/OrderForm.tsx';
import { FormResult } from '../../application/models/FormResult.ts';

export const MainForm = () => {
    const [result, setResult] = useState<FormResult | null>(null);


    if (result) {
        return (
            <ResultMessage message={result.message} code={result.code}/>
        );
    }

    return <OrderForm setOrderFormResult={setResult}/>
}