//
// Modifying these values break tests and can break
// pm2-interface intercommunication (because of ports)
//

module.exports = {
  DAEMON_BIND_HOST   : process.env.PM2_HOST || 'localhost',
  DAEMON_RPC_PORT    : process.env.PM2_RPC_SOCKET_ADDR || 6666, // RPC commands
  DAEMON_PUB_PORT    : process.env.PM2_PUB_SOCKET_ADDR || 6667, // Realtime events
  SUCCESS_EXIT       : 0,
  ERROR_EXIT         : 1
};
