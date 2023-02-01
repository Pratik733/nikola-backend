import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import dashRoutes from "./routes/dash.js";

//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://18.179.22.26",
    // origin: "http://localhost:3001",
  })
);
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/dash", dashRoutes);

app.listen(8000, () => {
  console.log("API working!");
});

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   user: "root",
//   host: "127.0.0.1",
//   password: "Mittal@123",
//   database: "nikola",
// });
// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
// app.post("/register", (req, res) => {
//   console.log(req.body);
//   const role = req.body.role;
//   const fname = req.body.fname;
//   const lname = req.body.lname;
//   const org = req.body.org;
//   const email = req.body.email;
//   const mob = req.body.mob;
//   const pass = req.body.pass;

//   db.query(
//     "INSERT INTO users (role, firstname, lastname, organization, email, mobile, password) VALUES (?,?,?,?,?,?,?)",
//     [role, fname, lname, org, email, mob, pass],
//     (err, res) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("Values inserted");
//       }
//     }
//   );
// });

// app.post("/login", (req, res) => {
//   // console.log(req.body);

//   const role = req.body.role;
//   const email = req.body.email;
//   const pass = req.body.pass;
//   db.query(
//     "SELECT * FROM users WHERE role=? AND email=? AND password=?",
//     [role, email, pass],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         if (result.length >= 1) {
//           console.log("YYEEE");
//         } else {
//           console.log("Wrong credentials");
//         }
//         console.log(result);
//         res.send(result);
//       }
//     }
//   );
// });

// app.post("/", (req, res) => {
//   console.log(req.body);
//   const vehicle_id = req.body.vid;
//   db.query(
//     "SELECT * FROM vehicles WHERE vid=?",
//     [vehicle_id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

// app.post("/battery", (req, res) => {
//   console.log(req.body);
//   const bms_id = req.body.bmsid;
//   db.query("SELECT * FROM battery WHERE bmsid=?", [bms_id], (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });
// app.post("/batterycells", (req, res) => {
//   console.log(req.body);
//   const bms_id = req.body.bmsid;
//   db.query(
//     "SELECT * FROM batterycells WHERE bmsid=?",
//     [bms_id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

// app.listen(3002, () => {
//   console.log("ur sever is running on port 3002");
// });
