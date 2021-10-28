export default () => ({
  APP_PORT: parseInt(process.env.APP_PORT, 10) || 3000,
});