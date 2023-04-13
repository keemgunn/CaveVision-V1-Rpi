import { defineStore } from 'pinia';
import { ref, onBeforeUnmount } from 'vue';
import type { Ref } from 'vue';
import { io, Socket } from 'socket.io-client';
import { onMounted } from 'vue';
// @ts-ignore: ITS OKAY.
import projectConnectionConfigs from '@/../../configs/serverConnection.js';

import sampleImage from '@/assets/img/sampleImage.jpg';

const { PORT_BACKEND, INTERNAL_IP } = projectConnectionConfigs;
const SOCKET_DOMAIN = `https://${INTERNAL_IP}:${PORT_BACKEND}/stream`;

export const useStreamSocket = defineStore('streamSocket', () => {

  // -------- BASIC SOCKET CONNECTION SETUP

  const socket = io(SOCKET_DOMAIN, {
    withCredentials: true,
  });

  const states = ref({
    url: SOCKET_DOMAIN,
    connection: {
      state: false,
      message: "DISCONNECTED",
    },
  })

  socket.on("connect", () => {
    states.value.connection.state = socket.connected;
    states.value.connection.message = "CONNECTED";

    console.log("SOCKET CONNECTED ! - ", SOCKET_DOMAIN);
  })

  socket.on("state", (message) => {
    console.warn(message);
  })

  socket.on("connect_error", (err) => {
    console.log(`SOCKET ERROR '${err.name}' : ${err.message}`);

    const isConnected = socket.connected;
    if (!isConnected) {
      states.value.connection.state = false;
      states.value.connection.message = 'DISCONNECTED'
    }

    setTimeout(() => {
      socket.connect();
    }, 1000);
  });
  

  // -------- IMAGE STREAMING

  const imageSrc = ref<string | undefined>(sampleImage);

  onMounted(() => {
    socket.on("image", (image) => {
      console.log("START LISTENING FOR SOCKET SERVER : 'image'");
      imageSrc.value = `data:image/jpeg;base64,${image}`;
    });
  })

  return {
    socket,
    states,
    imageSrc,
  }
})

