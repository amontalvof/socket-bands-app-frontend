import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../../context/socketContext';

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

const ListBands = () => {
    const [bands, setBands] = useState([]);
    const { socket } = useContext(SocketContext);

    useEffect(() => {
        socket.on('current-bands', (bands) => {
            setBands(bands);
        });
        return () => socket.off('current-bands');
    }, [socket]);

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
        socket.emit('change-band-name', { id, name });
    };

    const voteBand = (id) => {
        socket.emit('vote-band', { id });
    };

    const deleteBand = (id) => {
        socket.emit('delete-band', { id });
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
