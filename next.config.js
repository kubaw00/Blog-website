const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'kuba941',
        mongodb_password: 'Tqp2cjqE0XkGHgf2',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site',
      },
      reactStrictMode: true,
    };
  }
  return {
    env: {
      mongodb_username: 'kuba941',
      mongodb_password: 'Tqp2cjqE0XkGHgf2',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
    reactStrictMode: true,
  };
};
