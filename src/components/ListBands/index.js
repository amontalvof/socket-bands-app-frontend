import React, { useEffect, useState } from 'react';

const CreateRows = ({ band }) => {
    const { name } = band;
    return (
        <tr>
            <td>
                <button className="btn btn-primary">+1</button>
            </td>
            <td>
                <input type="text" className="form-control" value={name} />
            </td>
            <td>
                <h3>15</h3>
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
                        return <CreateRows key={band.id} band={band} />;
                    })}
                </tbody>
            </table>
        </>
    );
};

export default ListBands;
