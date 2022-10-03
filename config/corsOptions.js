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


module.exports = corsOptions;