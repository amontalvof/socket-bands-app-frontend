import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { AddBand } from './components/AddBand';
import ListBands from './components/ListBands';

const connectSocketServer = (params) => {
    const socket = io.connect('http://localhost:8080', {
        transport: ['websocket'],
    });
    return socket;
};

function App() {
    const [socket] = useState(connectSocketServer());
    const [online, setOnline] = useState(false);
    const [bands, setBands] = useState([]);

    useEffect(() => {
        socket.on('connect', () => {
            setOnline(true);
        });
        socket.on('disconnect', () => {
            setOnline(false);
        });
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
