const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3500;
const app = express();
const cors = require("cors");
const corsOptions = require('./config/corsOptions');
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const router = require("./routes/subdir");

// custom middleware
app.use(logger);

// Cors
app.use(cors(corsOptions));

// built in middleware to handle query strings
app.use(express.urlencoded({ extended: false }));

// built in middleware for json
app.use(express.json());

//serve static files
app.use('/', express.static(path.join(__dirname, "/public")));
app.use('/subdir', express.static(path.join(__dirname, "/public")));

//Routes
app.use('/', require('./routes/root'))
app.use("/subdir", require("./routes/subdir"))
app.use("/employees", require("./routes/api/employees"))


// Route handlers. Chaining 
const one = (req, res, next) => {
  console.log("one");
  next();
};

const two = (req, res, next) => {
  console.log("two");
  next();
};

const three = (req, res) => {
  console.log("Finished");
  res.send("Finished");
};

app.get("/chain(.html)?", [one, two, three]);

// For pages that don't exist
app.all("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// error handling
app.use(errorHandler)
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
