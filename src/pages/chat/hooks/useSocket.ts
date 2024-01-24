import { Client } from "@stomp/stompjs";

const useSocket = () => {
  const client = new Client({
    brokerURL: `ws://test.yanabada.com/ws-stomp`,
    debug: function (str) {
      console.log(str);
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000
  });

  return client;
};

export default useSocket;
