"use client";

import { useEffect, useRef } from "react";


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
  
      socket.on("connect_error", async (err: Error) => {
        console.log(`connect_error due to ${err.message}`);
      });
  
      
      socketRef.current = window.socket;
    }
  
    useEffect(() => {
      socketClient();
    },[]);
  }