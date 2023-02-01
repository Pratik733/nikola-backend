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

export const bms = (req, res) => {
  const q = "SELECT * FROM Bat_info WHERE Batt_ID = ?";
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
export const battery = (req, res) => {
  const q = "SELECT * FROM Bat_info WHERE Batt_ID = ?";
  // console.log(body);
  const vid = req.body.battid;
  //   console.log(vid);
  db.query(q, [vid], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

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
