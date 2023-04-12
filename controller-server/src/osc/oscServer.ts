import { Server } from 'node-osc'
import { internalIP } from '../helpers/ipAddress.js';

const OSC_SERVER_PORT = 12800;

export function useOSCserver() {

  console.log("* Opening OSC Server ...");
  const oscServer = new Server(OSC_SERVER_PORT, 'localhost');

  oscServer.on('listening', () => { 
    console.log("======== OSC SERVER RUNNING");
    console.log(`Listening On PORT : ${internalIP}:${OSC_SERVER_PORT}\n`);
  })

  return oscServer;
}