module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["s.w.org", "moroccoeverywheretours.com", "paypal.com"],
  },
  env: {
    public_key_stripe: process.env.PUBLIC_KEY_STRIPE,
  },
};
