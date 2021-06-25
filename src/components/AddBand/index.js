import React, { useContext, useState } from 'react';
import { SocketContext } from '../../context/socketContext';

export const AddBand = () => {
    const [value, setValue] = useState('');
    const { socket } = useContext(SocketContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value.trim().length > 0) {
            socket.emit('create-band', { name: value });
            setValue('');
        }
    };

    return (
        <>
            <h3>Add Band</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="New Band Name"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </form>
        </>
    );
};
