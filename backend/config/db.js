//importing modules and pacakges
import postgres from "postgres";
import dotenv from "dotenv";
//load dotenv file
dotenv.config();
//db connection
export const sql = postgres(process.env.DATABASE_URL);
// function to check db connection
let db_check = async () => {
    await sql`SELECT * FROM todo`
}
// checking db cinnection
try {
    db_check()
    console.log("db connected successsfully ");
    
} catch (error) {
    console.log("error while connecting db");
    
}