import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
    res.send("what would you like for breakfast Johnny?");
})

export default router
