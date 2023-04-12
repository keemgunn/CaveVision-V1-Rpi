import { useIOserver } from './socket/ioServer.js';
import { useOSCserver } from './osc/oscServer.js';
import { useFaceOSCstreamline } from './osc/faceOSC.js';
import { useNamespcae_stream } from './socket/namespaces/stream.js';

async function startServer() {
  const { server, io, startListening } = useIOserver();
  await startListening;
  useNamespcae_stream(io);

  const osc = useOSCserver();
  useFaceOSCstreamline(osc);
}

startServer();