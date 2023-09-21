import React, { useEffect, useState } from 'react';
import { ResultMessage } from '../result-message/ResultMessage.tsx';
import { OrderForm } from '../order-form/OrderForm.tsx';
import { FormResult } from '../../application/models/FormResult.ts';
import { getIsAvailable } from '../../application/use-cases/getIsAvailable.ts';

export const MainForm = () => {
    const [result, setResult] = useState<FormResult | null>(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const getIsAvailableAsync = async () => {
            const isFormAvailable = await getIsAvailable();

            if (!isFormAvailable.isAvailable) {
                setResult({
                    message: isFormAvailable.message,
                    code: '2'
                });
            }
            setLoading(false);
        }

        getIsAvailableAsync()

    }, [setLoading, setResult]);

    if (loading) {
        return <h2>Loading . . .</h2>;
    }


    if (result) {
        return (
            <ResultMessage message={result.message} code={result.code}/>
        );
    }

    return <OrderForm setOrderFormResult={setResult}/>
}