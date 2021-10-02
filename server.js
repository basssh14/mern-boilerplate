const express = require("express");
const config = require("config");
const app = express();
const connectDB = require("./config/db");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const _ = require("lodash");
//deploy in heroku stuff
const path = require("path");
app.use(
    fileUpload({
        createParentPath: true,
    })
);

//add other middleware
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
//passport stuff
// const sessions = require("express-session");
// const passport = require("passport");

// require("./config/passport")(passport);
//app.use(express.json({ extended: false }));

// app.use(
//     sessions({
//         secret: config.get("secret"),
//         resave: true,
//         saveUninitialized: false,
//     })
// );

// app.use(passport.initialize());
// app.use(passport.session());

connectDB();

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/parents", require("./routes/api/parents"));
app.use("/api/flags", require("./routes/api/flags"));
app.use("/api/notes", require("./routes/api/notes"));
app.use("/api/bankAccount", require("./routes/api/bankAccount"));
app.use("/api/uploads", require("./routes/api/uploads"));
app.use("/api/applicants", require("./routes/api/applicants"));
app.use("/api/scholarships", require("./routes/api/scholarships"));
//admin stuff
app.use("/api/applicantsAdmin", require("./routes/api/applicantsAdmin"));
app.use("/api/scholarshipsAdmin", require("./routes/api/scholarshipsAdmin"));

//heroku stuff
//Serve static assets into production
if (process.env.NODE_ENV === "production") {
    //Set static folder
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("server up and running on port 5000"));