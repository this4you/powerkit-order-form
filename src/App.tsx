import './App.css';
import React from 'react';
import { OrderForm } from './components/order-form/OrderForm.tsx';
import { UnavailableFormMessage } from './components/unavailable-form-message/UnavailableFormMessage.tsx';

function App() {
    return (
        <div className="app">
            <UnavailableFormMessage/>
            {/*<OrderForm/>*/}
        </div>
    )
}

export default App
