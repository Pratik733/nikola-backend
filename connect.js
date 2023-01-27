import mysql from "mysql2";

// export const db = mysql.createConnection({
//   user: "root",
//   host: "127.0.0.1",
//   password: "Mittal@123",
//   database: "nikola",
// });
export const db = mysql.createConnection({
  user: "admin",
  host: "database-1.cuzsb9f6gfsb.ap-south-1.rds.amazonaws.com",
  password: "87654321",
  database: "Nikola",
});
