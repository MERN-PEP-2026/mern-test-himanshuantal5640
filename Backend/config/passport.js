const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const googleAuthService = require("../services/googleAuthServices");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const token = await googleAuthService.handleGoogleLogin(profile);
        done(null, { token });
      } catch (error) {
        done(error, null);
      }
    }
  )
);

module.exports = passport;