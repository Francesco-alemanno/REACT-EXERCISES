import { db } from "../server/initDB.JS";
import jwt from 'jsonwebtoken'
import { SECRET } from "../server/passport.js";
const logIn= async (req,res) => {
    const {username,password}=req.body;
    const user= await db.one(`SELECT * FROM users WHERE username=$1`, [username])
    if(user && user.password ===password){
        const payload={
            id: user.id,
            username,
        }
        await db.none(`UPDATE users SET token=$2 WHERE id=$1`, [user.id, token])
const token= jwt.sign(payload, SECRET)
    }else{
        res.statu(400).json({messaggio:'username o password sbagliati'})
    }
    
}