import { Router } from "express";
import {
  registerUser,
  loginUser,
  logOutUser,
  refreshAccessToken,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// router.route("/register").post(registerUser);

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

//secured routes
router.route("/login").post(loginUser);

router.route("/logout").post(verifyJWT, logOutUser);

router.route("/refresh-token").post(refreshAccessToken);

export default router;
