import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

const dot = dotenv.config();
const uri = process.env.MONGODB_URL;

if (dot.error) {
    throw dot.error;
}

console.log(dot);

const app = express();
const port = 3000;

// const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverApi: ServerApiVersion.v1,
// });

// app.get("/", (req, res) => {
//     const database = client.db("sample_mflix");
//     const movies = database.collection("movies");

//     const query = { runtime: { $lt: 150 } };

//     const options = {
//         sort: { title: 1 },
//         projection: { _id: 0, title: 1, imdb: 1 },
//     };

//     movies
//         .find(query, options)
//         .limit(5)
//         .toArray(function (err, result) {
//             if (err) throw err;
//             console.dir(result);
//             res.send(result);
//         });
// });

// app.listen(port, () => {
//     if (err) {
//         console.error(err);
//     }
//     console.log(`서버연결 성공적, 연결port는 : ${port}`);
// });
