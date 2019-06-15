const express = require("express");
const router = express.Router();
const User = require("../models/User");
const TimeLineMessage = require("../models/TimeLineMessage")
const Kid = require("../models/Kid")

router.get("/users", (req, res, next) => {
  User.find()
    .then(users => res.status(200).json(users))
    .catch(err => {
      res.status(500).json({ message: "Something went wrong" })
    })
});

// router.post("/add-images", (req, res, next) => {
//   TimeLineMessage.create(req.body)
//     .then((result) => console.log("DB is updated"))
//     .catch(error => console.log(error))
// })

router.post("/add-message", (req, res, next) => {
  TimeLineMessage.create(req.body)
    .then((result) => console.log("DB is updated"))
    .catch(error => console.log(error))
})

router.post("/add-kid", (req, res, next) => {
  console.log(req.body)
  Kid.create(req.body)
    .then((result) => console.log("DB is updated"))
    .catch(error => console.log(error))
})

router.get("/parents", (req, res, next) => {
  User.find({ role: "parent" })
    .then(parents => res.status(200).json(parents))
    .catch(err => {
      res.status(500).json({ message: "Something went wrong" })
    })
});

router.get("/kids", (req, res, next) => {
  Kid.find()
    .then(kids => res.status(200).json(kids))
    .catch(err => {
      res.status(500).json({ message: "Something went wrong" })
    })
});

router.post("/editParent", (req, res, next) => {
  console.log(req.body)
  User.findOneAndUpdate({ _id: req.body.parentID[0] }, { $addToSet: { kidsID: req.body.kidIDs } }, { new: true })
    .then((result) => console.log("DB is updated"))
    .catch(error => console.log(error))
})

module.exports = router;