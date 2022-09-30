const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3500;
const app = express();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))