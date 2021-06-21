import React, { useEffect, useState } from 'react';

const CreateRows = ({ band, onChange, onBlur, voteBand, deleteBand }) => {
    const { name, id, votes } = band;
    return (
        <tr>
            <td>
                <button
                    className="btn btn-primary"
                    onClick={() => voteBand(id)}
                >
                    +1
                </button>
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
                <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteBand(id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

const ListBands = ({ data, voteBand, deleteBand, changeName }) => {
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
        changeName(id, name);
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
                                voteBand={voteBand}
                                deleteBand={deleteBand}
                            />
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default ListBands;
