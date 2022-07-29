exports = function Init() {
    const database = context.services
        .get("mongodb-atlas")
        .db("story")
        .collection("short_story");

    return database
        .find({})
        .toArray()
        .then((el) => console.log(el));
};
