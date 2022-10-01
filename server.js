const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3500;
const app = express();
const cors = require("cors");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");

// custom middleware
app.use(logger);

// cross origin resource sharing
// whitelist for certain domains to access our server/backend
const whitelist = [
  "https://www.mushan.com",
  "http://localhost:5500",
  "http://localhost:3000",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// built in middleware to handle query strings
app.use(express.urlencoded({ extended: false }));

// built in middleware for json
app.use(express.json());

//serve static files
app.use(express.static(path.join(__dirname, "/public")));

//
app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("/old-page(.html)?", (req, res) => {
  //Status code 301 means Moved Permanently. Browser redirects to the new URL and search engines update their links to the resource
  res.redirect(301, "new-page.html");
});

//Route handlers. Chaining
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
app.all("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// error handling
app.use(errorHandler)
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
