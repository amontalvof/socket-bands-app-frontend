import React, { useState } from 'react';

export const AddBand = ({ createBand }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value.trim().length > 0) {
            createBand(value);
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
