import passport from "passport";
import googleOAuth from "passport-google-oauth20";

import {UserModel} from "../database/allmodels";

const googleStrategy = googleOAuth.Strategy;

export default (passport) => {
    passport.use(
        new googleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:4000/auth/google/callback"
        },
        async(acessToken, refreshToken, profile, done) => {
            //creating a new user
            const newUser = {
               fullname: profile.displayName,
               email: profile.emails[0].value,
               profilePic: profile.photos[0].value
            };
            try{
                //checking whether user exists or not
                const user = await UserModel.findOne({email: newUser.email})
                //generating jwt token
                const token = user.generateJwtToken();
                if(user) {
                    //return user
                    done(null, {user, token});
                }else {
                    //create a new user
                    const user = await UserModel.create(newUser);
                    
                    //return user
                    done(null, {user, token})
                }
            } catch(error){
                done(error, null);
            }
        }
        )
    );
    passport.serializeUser((userData, done) => done(null, {...userData}));
    passport.deserializeUser((id, done) => done(null, id));


};
