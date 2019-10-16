const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth");
const user = require("../controllers/user");

router.post("/login", auth.logIn);
router.post("/logout", auth.logOut);
router.post("/signup", user.signUp);
router.get("/users/:userId", user.getUser);
router.patch("/editHighligt/:userId", user.editHighlight);
router.patch("/editAwards/:userId", user.editAwards);
router.patch("/editSkills/:userId", user.editSkills);
router.patch("/editExperience/:userId", user.editExperience);
router.patch("/editOverview/:userId", user.editOverview);
router.patch("/editCertifications/:userId", user.editCertifications);

module.exports = router;
