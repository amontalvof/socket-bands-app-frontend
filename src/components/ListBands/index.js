import React from 'react';

const CreateRows = (params) => {
    return (
        <tr>
            <td>
                <button className="btn btn-primary">+1</button>
            </td>
            <td>
                <input type="text" className="form-control" />
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

const ListBands = () => {
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
                    <CreateRows />
                </tbody>
            </table>
        </>
    );
};

export default ListBands;
