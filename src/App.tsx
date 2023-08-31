import './App.css';
import logo from './assets/logo-powerkit.svg';
import { Box, Button, ClickAwayListener, IconButton, Stack, Tooltip } from '@mui/material';
import { InfoRounded, UploadFile } from '@mui/icons-material';
import React from 'react';
import { AppForm, FormTextField } from './components/commons/form';
import { createOrder } from './application/use-cases/createOrder.ts';
import { OrderFormValidator } from './application/validators/LoginFormValidator.ts';
import { RegionSearchField } from './components/region-search-field/RegionSearchField.tsx';

export const inputStyle = { width: '80%', marginTop: '25px' };
const fileInfoText = 'Підтвердження вашого статусу військовослужбовця або громадської організації.\n' +
    'Це має бути фотографія, яка підтвердить ваш статус. Фотографія може бути вашого посвідчення та/або особисте фото в формі з військовою атрибутикою або документи підтверджуючі діяльність неприбуткової благодійної орнанізації.';
const phoneMaskConfig = { mask: '+380 99 999 99 99', maskChar: '*' };

function App() {
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="app">
            <Box sx={{ marginBottom: '20px', marginTop: '20px' }}>
                <img src={logo} className="logo react" alt="React logo"/>
            </Box>
            <Box sx={{ marginBottom: '20px' }} className="form-container">
                <h3 style={{ marginBottom: '0' }}>Форма замовлення повербанку</h3>
                <AppForm submit={createOrder} formValidator={new OrderFormValidator()}>
                    <FormTextField sx={inputStyle} id="name" name="name" label="Імʼя отримувача" variant="standard"/>
                    <FormTextField sx={inputStyle} id="sureName" name="sureName" label="Прізвище отримувача"
                                   variant="standard"/>
                    <FormTextField sx={inputStyle} id="email" name="email" type="email" label="Email"
                                   variant="standard"/>
                    <FormTextField sx={inputStyle} id="instagram" name="instagram" label="Instagram"
                                   variant="standard"/>
                    <FormTextField sx={inputStyle} id="phoneNumber" name="phoneNumber" type="tel"
                                   label="Номер телефону отримувача" variant="standard" maskConfig={phoneMaskConfig}/>
                    <FormTextField sx={inputStyle} id="militaryNumber" name="militaryNumber"
                                   label="Номер військової частини" variant="standard"/>
                    <RegionSearchField/>
                    {/*<FormTextField sx={inputStyle} id="region" name="region" label="Населений пункт" variant="standard"/>*/}
                    {/*<FormTextField sx={inputStyle} id="postOffice" name="postOffice" label="Відділення" variant="standard"/>*/}
                    <FormTextField sx={inputStyle} id="additionalInfo" name="additionalInfo"
                                   label="Додаткова інформація" variant="standard"/>
                    <Stack marginTop="15px" direction="row" spacing={2}>
                        <Button variant="outlined" endIcon={<UploadFile/>}>
                            Завантажити фото
                        </Button>
                        <ClickAwayListener onClickAway={handleTooltipClose}>
                            <Tooltip
                                title={fileInfoText}
                                placement="top-end"
                                arrow
                                PopperProps={{
                                    disablePortal: true,
                                }}
                                onClose={handleTooltipClose}
                                open={open}
                                disableFocusListener
                                disableHoverListener
                                disableTouchListener
                            >
                                <IconButton onClick={handleTooltipOpen}>
                                    <InfoRounded/>
                                </IconButton>
                            </Tooltip>
                        </ClickAwayListener>
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

export default App
