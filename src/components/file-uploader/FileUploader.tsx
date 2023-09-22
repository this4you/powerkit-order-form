import { Alert, Button, Stack } from '@mui/material';
import { UploadFile } from '@mui/icons-material';
import React from 'react';
import { useFormContext } from 'react-hook-form';
const fileInfoText = 'Нам необхідне підтвердження вашого статусу військовослужбовця або громадської організації.\n' +
    'Це має бути фотографія, яка підтвердить ваш статус. Фотографія може бути вашого посвідчення та/або особисте фото в формі з військовою атрибутикою або документи підтверджуючі діяльність неприбуткової благодійної орнанізації.';

export const FileUploader: React.FC = () => {
    const { register, formState: { errors } } = useFormContext();
    const registered = register('approveDocument');
    return (
        <Stack marginTop="35px" marginBottom="35px" marginX="40px" direction="column" spacing={2}>
            <Alert severity="warning">{fileInfoText}</Alert>
            <Button variant="outlined" endIcon={<UploadFile/>} component="label">
                <input {...registered} id='approveDocument' name='approveDocument' type='file'  hidden/>
                Завантажити фото
            </Button>
        </Stack>
    );
}