const express = require("express");
const GoogleStrategy = require("passport-google-oauth20");
const passport = require("passport");

const router = express.Router();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/oauth2callback",
    },
    (accessToken, refreshToken, profile, done) => {
      done(null, {
        username: profile.displayName,
        email: profile.emails[0].value,
      });
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((id, done) => done(null, id));

router.use(passport.initialize());
router.use(passport.session());

router.get(
  "/api/login",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/api/oauth2callback",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect("/");
  }
);

module.exports = router;
