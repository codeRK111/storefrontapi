import { apiStatus } from "../../../lib/util";
import { Router } from "express";
const request = require("request");
const md5 = require("md5");

module.exports = ({ config, db }) => {
  let mcApi = Router();

  /**
   * Retrieve user subscription status
   */
  mcApi.get("/subscribe", (req, res) => {
    const email = req.query.email;
  });

  /**
   * POST subscribe a user
   */
  mcApi.post("/subscribe", (req, res) => {
    let userData = req.body;
  });

  /**
   * DELETE unsubscribe a user
   */
  mcApi.delete("/subscribe", (req, res) => {
    let userData = req.body;
  });

  return mcApi;
};
