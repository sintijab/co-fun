"use client";

import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? undefined : 'https://sound-master-chat.onrender.com';

const socket = io(URL, { 'multiplex': false });
// @ts-ignore-next-line
socket.io.uri = 'https://sound-master-chat.onrender.com';
export { socket };
