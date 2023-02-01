import { db } from "../connect.js";

export const dash = (req, res) => {
  const q = "SELECT * FROM Veh_info WHERE Vehicle_ID = ?";
  const vid = req.body.vid;
  //   console.log(vid);
  db.query(q, [vid], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

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
