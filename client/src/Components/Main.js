import React, { useEffect, useState, useContext } from 'react';
import "./style.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Typography, Grid, Paper } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { StoreDataContext } from '../context/StoreDataContext';


function Main() {
    const navigate = useNavigate();
    const { setSelectedStore } = useContext(StoreDataContext);
    const [Storedata, setStoredata] = useState();
    const [filteredStoreData, setFilteredStoreData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleStore = (e) => {
        setSelectedStore(e)
        navigate('/Store');
    };
    useEffect(() => {
        axios.get('http://localhost:8000/api/stores')
            .then((res) => {
                setStoredata(res.data);
                setFilteredStoreData(res.data);
            })
            .catch((err) => console.log("error", err))
    }, []);

    const handleinput = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
        if (searchTerm == "") {
            setFilteredStoreData(Storedata)
        }
    }
    const handleSearch = () => {
        const filteredStores = Storedata.filter(store =>
            store.storeName && store.storeName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredStoreData(filteredStores);
    };


    return (
        <div>
            {/* Hero section search Bar */}
            <div className='main'>
                <div className='overlay'>
                    <div className='content'>
                        <div className="search-container">
                            <div>
                                <SearchOutlinedIcon className="search-icon" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="search-field"
                                    value={searchTerm}
                                    onChange={handleinput} />
                            </div>
                            <button type="submit" className="search-button" onClick={() => handleSearch()}>
                                Search
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            {/* Grid section*/}
            <div className='grid-section'>
                <Typography variant='h4' sx={{ padding: '10px', fontWeight: '600' }}> Popular Stories</Typography>
                <div className='grid-container'>
                    <Grid container spacing={4}>
                        {filteredStoreData && filteredStoreData.map((e, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <Paper elevation={1} sx={{ cursor: 'pointer', width: '100%', textAlign: 'center' }} fullwidth>
                                    <img
                                        src={e.logo}
                                        alt={`Logo of ${e.storename}`}
                                        onClick={() => handleStore(e)}
                                        style={{ maxWidth: '100%', height: 'auto' }}
                                    />
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Main;
