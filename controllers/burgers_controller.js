// DEPENDENCIES
const express = require("express");
const burger = require("../models/burger");

// CREATE ROUTER
const router = express.Router();

// GET 
router.get("/", function (request, response) {
    burger.selectAll(function (data) {
        const hbsObject = {
            burger: data
        };
        console.log(`--> ${logSymbols.info} Sending: ${JSON.stringify(hbsObject)}`);
        response.render("index", hbsObject);
    });
});

// POST
router.post("/api/burgers", function (request, response) {
    burger.insertOne("burger_name", request.body.burger_name, function (result) {
        response.json({ id: result.insertId });
    });
});

// UPDATE
router.put("/api/burgers/:new", function (request, response) {
    const id = request.params.new;
    const devoured = request.body.devoured;

    console.log(`--> Devoured(${id}): ${devoured}`);

    burger.updateOne("devoured", devoured, id, function (result) {
        if (result.changedRows == 0) {
            return response.status(404).end();
        }
        else {
            response.status(200).end();
        }
    });
});

// DELETE
router.delete("/api/burgers/:new", function (request, response) {
    const id = request.params.new;

    console.log(`--> Deleted(${id})`);

    burger.deleteOne("burgers", id, function (result) {
        
        if (result.affectedRows == 0) {
            return response.status(404).end();
        }
        else {
            response.status(200).end();
        }
    });
});

// EXPORTS
module.exports = router;