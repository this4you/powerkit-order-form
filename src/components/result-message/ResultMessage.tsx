import React from 'react';
import { Box, Link, Paper } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import logo from '../../assets/logo-powerkit.svg';
import InstagramIcon from '@mui/icons-material/Instagram';

type ResultMessageProps = {
    message: string,
    code: string
}
export const ResultMessage: React.FC<ResultMessageProps> = ({ message, code }) => {
    const formResultConfig = getResultConfig(code);

    return (
        <>
            <Box sx={{ marginBottom: '20px', marginTop: '20px' }}>
                <img src={logo} className="logo react" alt="React logo"/>
            </Box>
            <Paper elevation={3} sx={{
                borderRadius: '36px',
                width: '90%',
                maxWidth: '600px',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Box sx={{
                    color: 'white',
                    borderTopRightRadius: '36px',
                    borderTopLeftRadius: '36px',
                    width: '100%',
                    height: '150px',
                    backgroundColor: formResultConfig.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '310px'
                    }}>
                        {formResultConfig.icon}
                        <h3>{formResultConfig.title}</h3>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '150px',
                    boxSizing: 'border-box',
                    padding: '25px'
                }}>
                    {message}
                </Box>
                <Box sx={{
                    display: 'flex',
                    height: '100px',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Link href="https://www.instagram.com/uapowerkit" sx={{ color: 'black' }}>
                        <InstagramIcon sx={{ fontSize: '75px', marginBottom: '15px' }}/>
                    </Link>
                </Box>
            </Paper>
        </>
    );
}

function getResultConfig(code: string): FormResultConfig {
    switch (code) {
        case '0':
            return {
                color: '#FF6347',
                title: 'Замовлення відхилено',
                icon: <ErrorIcon sx={{
                    fontSize: '60px',
                }}/>
            }
        case '1':
            return {
                color: '#29AB87',
                title: 'Замовлення прийнято!',
                icon: <CheckIcon sx={{
                    fontSize: '60px',
                }}/>
            }
        case '2':
            return {
                color: '#296aab',
                title: 'Форма зараз не доступна',
                icon: <InfoIcon sx={{
                    fontSize: '60px',
                }}/>
            }
        case '-1':
            return {
                color: '#296aab',
                title: 'На жаль, сталась помилка',
                icon: <ErrorIcon sx={{
                    fontSize: '60px',
                }}/>
            }
    }
}

type FormResultConfig = {
    icon: JSX.Element,
    title: string,
    color: string
}