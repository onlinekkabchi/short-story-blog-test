function createStoryBox(el) {
    return console.log(el);
}

function init() {
    const response = async () =>
        await fetch("http://localhost:3000/")
            .then((res) => console.log(res))
            .catch((error) => console.error("Error", error));

    return response;
}

export { init };
