export default () => ({
  PORT: parseInt(process.env.PORT, 10) || 3000,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY
});