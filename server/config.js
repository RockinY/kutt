module.exports = {
  PORT: 3000,

  /* The domain that this website is on */
  DEFAULT_DOMAIN: process.env.DOMAIN,

  /* Neo4j database credential details */
  DB_URI: process.env.DB_URI,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,

  /* The daily limit for each user */
  USER_LIMIT_PER_DAY: 50,

  /* A passphrase to encrypt JWT. Use a long and secure key. */
  JWT_SECRET: process.env.JWT_SECRET,

  /*
    Invisible reCaptcha secret key
    Create one in https://www.google.com/recaptcha/intro/
  */
  RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,

  /*
    Your email host details to use to send verification emails.
    More info on http://nodemailer.com/
  */
  MAIL_HOST: 'smtp.exmail.qq.com',
  MAIL_PORT: 993,
  MAIL_SECURE: true,
  MAIL_USER: 'bran@corran.cn',
  MAIL_PASSWORD: process.env.MAIL_PASSWORD,
};
