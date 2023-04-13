import { Server } from "socket.io";
import cv from "@u4/opencv4nodejs";

const VIDEO_WIDTH = 640;
const VIDEO_HEIGHT = 480;
const FPS = 30;

const wCap = new cv.VideoCapture(0);
wCap.set(cv.CAP_PROP_FRAME_WIDTH, VIDEO_WIDTH);
wCap.set(cv.CAP_PROP_FRAME_HEIGHT, VIDEO_HEIGHT);

export function useNamespcae_stream(io: Server) {

  const currentIO = io.of('/stream');
  
  currentIO.on("connection", (socket) => {
    console.log("= socket/chat : A USER CONNECTED");
    socket.emit("state", "welcome!");
  })

  currentIO.on("disconnect", (socket) => {
    console.log("= socket/chat : A USER DISCONNECTED");
  })
  
  setInterval(() => {
    const frame = wCap.read();
    const image = cv.imencode('.jpg', frame).toString('base64');
    currentIO.emit('image', image);
  }, 1000 / FPS);

}
