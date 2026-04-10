const express = require("express");
const router = express.Router();
const Device = require("../models/device");

// OPTIONAL: sound alert
const beep = require("beepbeep");

// Store already alerted devices (avoid spam alerts)
let attackedDevices = new Set();

// 🔥 Detection Function
function detectBotnet(packet_size, request_count, device_id) {

    if (request_count > 10 || packet_size > 500) {

        // Only alert once per device
        if (!attackedDevices.has(device_id)) {
            console.log("🚨 BOTNET DETECTED from:", device_id);
            beep(2); // sound alert 🔊
            attackedDevices.add(device_id);
        }

        return "ATTACK";
    }

    return "NORMAL";
}

// 📥 POST: receive data from device
router.post("/data", async (req, res) => {
    try {
        const { device_id, packet_size, request_count } = req.body;

        console.log("Incoming:", req.body); // debug

        const status = detectBotnet(packet_size, request_count, device_id);

        const newData = new Device({
            device_id,
            packet_size,
            request_count,
            status
        });

        await newData.save();

        res.json({
            message: "Data received",
            status: status
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 📊 GET: latest device data (limited for clean view)
router.get("/devices", async (req, res) => {
    try {
        const data = await Device.find()
            .sort({ timestamp: -1 })
            .limit(20); // only latest 20 records

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;