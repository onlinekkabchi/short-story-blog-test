function createStoryBox(el) {
    return console.log(el);
}

async function init() {
    await fetch("http://localhost:3000/")
        .then((res) => console.log(res))
        .catch((error) => console.error("Error", error));
}

export { init };
