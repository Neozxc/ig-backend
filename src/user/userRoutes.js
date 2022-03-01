const { Router } = require("express");
const { addUser, listUser, deleteUser, updateUser } = require("./userController");
const userRouter = Router();

userRouter.post("/user", addUser);
userRouter.get("/list", listUser);
userRouter.delete("/delete", deleteUser);
userRouter.put("/update", updateUser);

module.exports = userRouter;