import React from 'react';
import App from './App';
import { SocketProvider } from './context/socketContext';

const BandsApp = () => {
    return (
        <SocketProvider>
            <App />
        </SocketProvider>
    );
};

export default BandsApp;
