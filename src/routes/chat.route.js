const express = require("express");
const { authorize } = require("../middlewares/authorize");
const { 
    createChat, 
    getChats, 
    createGroupChat,
    renameGroupChat,
    addToGroupChat,
    removeFromGroupChat
} = require("../controllers/chat.controller");

const router = express.Router();

router.post("/", authorize, createChat);
router.get("/", authorize, getChats);
router.post("/groups", authorize, createGroupChat); 
router.put("/rename", authorize, renameGroupChat); 
router.put("/groupadd", authorize, addToGroupChat);
router.put("/groupremove", authorize, removeFromGroupChat); 

module.exports = router;
