import { Server } from 'node-osc';
import serialPort from '../arduino/serialPort.js';

export function useFaceOSCstreamline(oscServer: Server) {

  oscServer.on('message', (msg) => {
    const [address, ...args] = msg;
    
    if (address === '/mappedAngle') {
      const angle = args[0] as number;
      serialPort.write(Buffer.from([angle]));
    }
  })
}