import { AddBand } from './components/AddBand';
import ListBands from './components/ListBands';

function App() {
    return (
        <div className="container">
            <div className="alert">
                <p>
                    Service status:
                    <span className="text-success"> Online</span>
                    <span className="text-danger"> Offline</span>
                </p>
            </div>
            <h1>Bands</h1>
            <hr />
            <div className="row">
                <div className="col-8 mt-4">
                    <ListBands />
                </div>
                <div className="col-4 mt-4">
                    <AddBand />
                </div>
            </div>
        </div>
    );
}

export default App;
