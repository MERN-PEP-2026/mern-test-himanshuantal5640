const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Student = require('../models/Student');
const generateToken = require('../utils/generateToken');

passport.use(
    new GoogleStrategy(
        {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/auth/google/callback"
        },
        async (accessToken,refreshToken,profile,done)=>{
            const email = profile.email[0].value;
            let user = await Student.findOne({email});
            if(!user){
                user = await Student.create({
                    name: profile.displayName,
                    email,
                    provider: "google",
                    isVerifed: true
                });
            }
            const token = generateToken(user._id);
            done(null,{toekn});

        }
    )
);

module.exports = passport;