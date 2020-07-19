const mongoose = require("mongoose");

const http = require("http");
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("\nMy first server!");
};
const server = http.createServer(requestListener);
server.listen(9090, 8080, () => {
    console.log(`Server is running on http://localhost:8080`);
});

const userSchema = new mongoose.Schema({
 username: {
 type: String
 }
});
const User = mongoose.model("User", userSchema);module.exports = User;