import React, { useEffect, useState } from 'react';

const CreateRows = ({ band, onChange, onBlur }) => {
    const { name, id, votes } = band;
    return (
        <tr>
            <td>
                <button className="btn btn-primary">+1</button>
            </td>
            <td>
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(event) => onChange(event, id)}
                    onBlur={() => onBlur(id, name)}
                />
            </td>
            <td>
                <h3>{votes}</h3>
            </td>
            <td>
                <button className="btn btn-outline-danger">Delete</button>
            </td>
        </tr>
    );
};

const ListBands = ({ data }) => {
    const [bands, setBands] = useState(data);

    useEffect(() => {
        setBands(data);
    }, [data]);

    const handleChange = (event, id) => {
        const newName = event.target.value;
        setBands(
            bands.map((band) => {
                if (band.id === id) {
                    band.name = newName;
                }
                return band;
            })
        );
    };

    const handleBlur = (id, name) => {
        console.log(id, name);
        // TODO: disparar el evento de socket
    };

    return (
        <>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Votes</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {bands.map((band) => {
                        return (
                            <CreateRows
                                key={band.id}
                                band={band}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default ListBands;
