import { useState, useMemo, useEffect } from 'react';
import io from 'socket.io-client';

const useSocket = (serverPath) => {
    const socket = useMemo(
        () =>
            io.connect(serverPath, {
                transport: ['websocket'],
            }),
        [serverPath]
    );

    const [online, setOnline] = useState(false);

    useEffect(() => {
        socket.on('connect', () => {
            setOnline(true);
        });
        socket.on('disconnect', () => {
            setOnline(false);
        });
    }, [socket]);

    return { socket, online };
};

export default useSocket;
