import bcrypt from "bcryptjs"
import { config } from "dotenv"
import mongoose from "mongoose"
import User from "../models/user.js"

config()

const DATABASE_URL = process.env.DATABASE_URL
export const connectDB = async () => {

    mongoose.set('strictQuery', true)
    await mongoose.connect(DATABASE_URL, {
        dbName: "nodejs_template",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err) => {
        if (err) throw new Error("Failed to connect to database")
        console.log("[LOG]:Database connection successful");
    })

    //Seeding
    
    const _user = await User.findOne({ email: "admin@gmail.com" })
    if (_user) return
    const hashed = await bcrypt.hash("admin@pass123", parseInt(process.env.SALT_ROUNDS))
    const user = {
        fullname: "Admin First Name",
        email: "admin@gmail.com",
        mobile:"+250782307144",
        password: hashed,
        role: "ADMIN"
    }
    const newUser = new User(user);
    await newUser.save();
    console.log("Database seeded successfully")
}