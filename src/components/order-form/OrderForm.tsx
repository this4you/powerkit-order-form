import React, { useMemo } from 'react';
import { createOrder } from '../../application/use-cases/createOrder.ts';
import { Alert, Box, Button, Stack } from '@mui/material';
import logo from '../../assets/logo-powerkit.svg';
import { AppForm, FormTextField } from '../commons/form';
import { OrderFormValidator } from '../../application/validators/LoginFormValidator.ts';
import { RegionSearchField } from '../region-search-field/RegionSearchField.tsx';
import { PostOfficeSearchField } from '../post-office-search-field/PostOfficeSearchField.tsx';
import { UploadFile } from '@mui/icons-material';
import { inputStyle } from '../commons/styles.ts';
import './OrderForm.css';
import { FormResult } from '../../application/models/FormResult.ts';

const fileInfoText = 'Нам необхідне підтвердження вашого статусу військовослужбовця або громадської організації.\n' +
    'Це має бути фотографія, яка підтвердить ваш статус. Фотографія може бути вашого посвідчення та/або особисте фото в формі з військовою атрибутикою або документи підтверджуючі діяльність неприбуткової благодійної орнанізації.';
const phoneMaskConfig = { mask: '+380 99 999 99 99', maskChar: '*' };

type OrderFormProps = {
    setOrderFormResult: (formResult: FormResult) => void
}

export const OrderForm: React.FC<OrderFormProps> = ({setOrderFormResult}) => {
    const createOrderHandler = useMemo(() => createOrder(setOrderFormResult), [setOrderFormResult]);

    return (
        <div className="order-form">
            <Box sx={{ marginBottom: '20px', marginTop: '20px' }}>
                <img src={logo} className="logo react" alt="React logo"/>
            </Box>
            <Box sx={{ marginBottom: '20px' }} className="form-container">
                <h3 style={{ marginBottom: '0' }}>Форма замовлення повербанку</h3>
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
                    <Stack marginTop="35px" marginBottom="35px" marginX="40px" direction="column" spacing={2}>
                        <Alert severity="warning">{fileInfoText}</Alert>
                        <Button variant="outlined" endIcon={<UploadFile/>}>
                            Завантажити фото
                        </Button>
                    </Stack>
                    <Button type="submit" sx={{ marginTop: '15px', marginBottom: '15px', width: '80%' }}
                            variant="contained">
                        Замовити
                    </Button>
                </AppForm>
            </Box>
        </div>
    )
}