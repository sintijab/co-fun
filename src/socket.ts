"use client";

import { io } from "socket.io-client";

import { useEffect, useRef } from "react";

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? undefined : 'https://socket-io-3i32.onrender.com';

const socket = io(URL, { 'multiplex': false });
// @ts-ignore-next-line
socket.io.uri = 'https://socket-io-3i32.onrender.com';
export { socket };
export const socketInit = () => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const socketRef = useRef<any>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const socketClient = () => {
    socket.on("connect", () => {
      console.log("Connected");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected");
    });

    socket.on("connect_error", async (err) => {
      console.log(`connect_error due to ${err.message}`);
    });

    
    socketRef.current = socket;
  }

  useEffect(() => {
    socketClient();
    // return ()=> {
    //   socketRef?.current?.disconnect();
    // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
}