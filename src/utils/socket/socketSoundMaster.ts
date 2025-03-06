"use client";

import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? undefined : 'https://socket-io-3i32.onrender.com';

const socket = io(URL, { 'multiplex': false });
// @ts-ignore-next-line
socket.io.uri = 'https://socket-io-3i32.onrender.com';
export { socket };
