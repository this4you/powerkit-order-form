import { Alert, Box, Button, Stack } from '@mui/material';
import { UploadFile } from '@mui/icons-material';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import CheckIcon from '@mui/icons-material/Check';

const fileInfoText = 'Нам необхідне підтвердження вашого статусу військовослужбовця або громадської організації.\n' +
    'Це має бути фотографія, яка підтвердить ваш статус. Фотографія може бути вашого посвідчення та/або особисте фото в формі з військовою атрибутикою або документи підтверджуючі діяльність неприбуткової благодійної орнанізації.';

export const FileUploader: React.FC = () => {
    const name = 'approveDocument'
    const { register, watch, formState: { errors } } = useFormContext();
    const registered = register(name);

    const files = watch(name);
    const fieldError = errors[name]?.toString() || '';


    return (
        <Stack marginTop="35px" marginBottom="35px" marginX="40px" direction="column" spacing={2}>
            {
                (files?.length > 0 && !fieldError)
                    ?
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <CheckIcon sx={{
                            fontSize: '45px',
                            marginRight: '10px',
                            color: '#29AB87'
                        }}/>
                        <h4 style={{ margin: '0' }}>
                            Документ завантажено
                        </h4>
                    </Box>
                    :
                    <>
                        <Alert severity={fieldError ? 'error' : 'warning'}>{fieldError || fileInfoText}</Alert>
                        <Button variant="outlined" endIcon={<UploadFile/>} component="label">
                            <input {...registered} id="approveDocument" name="approveDocument" type="file" hidden/>
                            Завантажити фото
                        </Button>
                    </>
            }

        </Stack>
    );
}