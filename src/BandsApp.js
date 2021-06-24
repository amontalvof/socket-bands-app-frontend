import React from 'react';
import HomePage from './pages/HomePage';
import { SocketProvider } from './context/socketContext';

const BandsApp = () => {
    return (
        <SocketProvider>
            <HomePage />
        </SocketProvider>
    );
};

export default BandsApp;
