import { Alert, AlertTitle, Box, Link, Paper } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';

export const UnavailableFormMessage = () => {
    return (
        <>
            <Paper elevation={3} sx={{
                borderRadius: '36px',
                margin: '0 15px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <img width={150} src="public/sad_cat.png" alt=""/>

                <Alert severity="error" sx={{ margin: '0 10px', marginBottom: '20px' }}>
                    <AlertTitle><strong>Форма зараз не доступна</strong></AlertTitle>
                    Ми скоро її відкриємо, слідкуйте за новинами в нашому інстаграмі
                </Alert>
                <Link href="https://www.instagram.com/uapowerkit" sx={{color:"black"}}>
                    <InstagramIcon sx={{ fontSize: '75px', marginBottom: '15px' }}/>
                </Link>
            </Paper>
        </>
    )
}