import React, { useContext, useState } from 'react';
import { Grid, Typography, Paper, Button, CircularProgress, Rating } from '@mui/material';
import "./style.css";
import { StoreDataContext } from '../context/StoreDataContext';

function Storedetail() {
    const { selectedStore } = useContext(StoreDataContext);
    const [btnText, setBtnText] = useState(Array(selectedStore.offers.length).fill('Get this deal'));
    const [loadingBtn, setLoadingBtn] = useState(null);
    const [copiedBtn, setCopiedBtn] = useState(null);

    const handleBtn = (index, couponCode) => {
        setLoadingBtn(index);
        setTimeout(() => {
            const updatedBtnText = [...btnText];
            updatedBtnText[index] = 'Copied';
            setBtnText(updatedBtnText);
            setLoadingBtn(null);
            copyToClipboard(couponCode, index);
        }, 2000);
    }

    const copyToClipboard = (code, index) => {
        navigator.clipboard.writeText(code)
            .then(() => {
                setCopiedBtn(index);
                setTimeout(() => {
                    const updatedBtnText = [...btnText];
                    updatedBtnText[index] = code;
                    setBtnText(updatedBtnText);
                    setCopiedBtn(null);
                }, 2000);
            })
            .catch((error) => {
                console.error('Failed to copy: ', error);
            });
    };
    return (
        <div>
            <div className='Store_detail'>
                <div className='overlay_detail'>
                    <div className='detail-content'>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Paper>
                                <img src={selectedStore.logo} width={200} height={100} alt="Store Logo" />
                            </Paper>
                            <Typography variant='h5' style={{ marginLeft: '10px' }}>
                                {selectedStore.storeName}
                            </Typography>
                        </div>
                        <div>
                            <Rating name="no-value" value={4} sx={{ marginLeft: '50px' }} />
                        </div>
                    </div>
                </div>

            </div>
            <div className='Store'>
                <Grid container spacing={2}>
                    {selectedStore.offers && selectedStore.offers.map((e, index) => (
                        <Grid item xs={12} key={index}>
                            <Paper elevation={1}>
                                <div className='detail'>
                                    <img src={selectedStore.logo} width={200} height={100} alt="Offer Logo" />
                                    <div style={{ marginLeft: '10px', flex: 1, padding:'10px 0px' }}>
                                        <Typography variant='h6'>{e.offerTitle}</Typography>
                                        <Typography variant='body1'>{e.description}</Typography>
                                    </div>
                                    <div>
                                        <Button
                                            variant='contained'
                                            className='btnoffer'
                                            onClick={() => { handleBtn(index, e.couponCode) }}
                                            sx={{ backgroundColor: '#f2703e' }}
                                            disabled={loadingBtn === index}
                                            style={{ minWidth: '100px' }} // Adjusted button size
                                        >
                                            {loadingBtn === index ? (
                                                <CircularProgress size={24} color="inherit" />
                                            ) : copiedBtn === index ? (
                                                'Copied'
                                            ) : (
                                                btnText[index]
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}

export default Storedetail