import { useEffect, useState } from 'react';
import useSocket from './hooks/useSocket';
import { AddBand } from './components/AddBand';
import ListBands from './components/ListBands';

function App() {
    const [bands, setBands] = useState([]);
    const { socket, online } = useSocket('http://localhost:8080');

    useEffect(() => {
        socket.on('current-bands', (bands) => {
            setBands(bands);
        });
    }, [socket]);

    const voteBand = (id) => {
        socket.emit('vote-band', { id });
    };
    const deleteBand = (id) => {
        socket.emit('delete-band', { id });
    };
    const changeName = (id, name) => {
        socket.emit('change-band-name', { id, name });
    };
    const createBand = (name) => {
        socket.emit('create-band', { name });
    };

    return (
        <div className="container">
            <div className="alert">
                <p>
                    Service status:
                    {online ? (
                        <span className="text-success"> Online</span>
                    ) : (
                        <span className="text-danger"> Offline</span>
                    )}
                </p>
            </div>
            <h1>Bands</h1>
            <hr />
            <div className="row">
                <div className="col-8 mt-4">
                    <ListBands
                        data={bands}
                        voteBand={voteBand}
                        deleteBand={deleteBand}
                        changeName={changeName}
                    />
                </div>
                <div className="col-4 mt-4">
                    <AddBand createBand={createBand} />
                </div>
            </div>
        </div>
    );
}

export default App;
