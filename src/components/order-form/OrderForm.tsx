import React, { useMemo, useState } from 'react';
import { createOrder } from '../../application/use-cases/createOrder.ts';
import { Box, Button } from '@mui/material';
import { AppForm, FormTextField } from '../commons/form';
import { OrderFormValidator } from '../../application/validators/LoginFormValidator.ts';
import { RegionSearchField } from '../region-search-field/RegionSearchField.tsx';
import { PostOfficeSearchField } from '../post-office-search-field/PostOfficeSearchField.tsx';
import { inputStyle } from '../commons/styles.ts';
import './OrderForm.css';
import { FormResult } from '../../application/models/FormResult.ts';
import { FileUploader } from '../file-uploader/FileUploader.tsx';
import { ClipLoader } from 'react-spinners';


const phoneMaskConfig = { mask: '+380 99 999 99 99', maskChar: '*' };

type OrderFormProps = {
    setOrderFormResult: (formResult: FormResult) => void
}

export const OrderForm: React.FC<OrderFormProps> = ({ setOrderFormResult }) => {
    const [loading, setLoading] = useState(false);

    const createOrderHandler = useMemo(() => createOrder(setOrderFormResult, setLoading), [setOrderFormResult]);

    return (
        <div className="order-form">
            { loading && <Box sx={{
                position: 'fixed',
                height: '100vh',
                width: '100vw',
                display: 'flex',
                backgroundColor: '#f2f2f2bd',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto',
                zIndex: '1000',
            }}>
                <ClipLoader
                    color={'black'}
                    loading
                    size={70}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </Box>
            }

            <Box sx={{ marginBottom: '20px', marginTop: '40px' }} className="form-container">
                <h3 style={{ marginBottom: '0', marginTop: '20px'}}>Форма замовлення повербанку</h3>
                <AppForm submit={createOrderHandler} formValidator={new OrderFormValidator()}>
                    <FormTextField required sx={inputStyle} id="name" name="name" label="Імʼя отримувача"
                                   variant="standard"/>
                    <FormTextField required sx={inputStyle} id="sureName" name="sureName" label="Прізвище отримувача"
                                   variant="standard"/>
                    <FormTextField required sx={inputStyle} id="email" name="email" type="email" label="Email"
                                   variant="standard"/>
                    <FormTextField required sx={inputStyle} id="instagram" name="instagram" label="Instagram"
                                   variant="standard"/>
                    <FormTextField required sx={inputStyle} id="phoneNumber" name="phoneNumber" type="tel"
                                   label="Номер телефону отримувача" variant="standard" maskConfig={phoneMaskConfig}/>
                    <FormTextField required sx={inputStyle} id="militaryNumber" name="militaryNumber"
                                   label="Номер військової частини" variant="standard"/>
                    <RegionSearchField/>
                    <PostOfficeSearchField/>
                    <FormTextField sx={inputStyle} id="additionalInfo" name="additionalInfo"
                                   label="Додаткова інформація" variant="standard"/>
                    <FileUploader/>
                    <Button type="submit" sx={{ marginTop: '15px', marginBottom: '15px', width: '80%' }}
                            variant="contained">
                        Замовити
                    </Button>
                </AppForm>
            </Box>
        </div>
    )
}