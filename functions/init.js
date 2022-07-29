exports = function Init() {
    const storybook = context.services
        .get("mongodb-atlas")
        .db("story")
        .collection("short_story");
    collection.find({}).then((el) => console.log(el));

    return storybook;
};
