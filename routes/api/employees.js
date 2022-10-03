const express = require("express");
const router = express.Router();
const data = {};
data.employees = require("../../model/employees.json");
const {
  getAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
} = require("../../controllers/employeesController");

router
  .route("/")
  .get(getAllEmployees)
  .post(createNewEmployee)
  .put(updateEmployee)
  .delete(deleteEmployee);

// Requesting for a specific id
router.route("/:id").get(getEmployee);

module.exports = router;
