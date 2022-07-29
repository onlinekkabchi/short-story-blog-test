import { init } from "./init.js";

var titlesArr = [];
var contentsArr = [];

document.getElementById("story_add_button").addEventListener("click", addStory);
document.getElementById("test_button").addEventListener("click", testlog);

function addStory() {
    const storyTitle = document.getElementById("story_title").value;
    const storyContent = document.getElementById("story_content").value;

    if (storyTitle && storyContent !== "") {
        titlesArr.push(storyTitle);
        contentsArr.push(storyContent);
        createStory();
    }
}

function createStory() {
    const storyDiv = document.createElement("div");
    storyDiv.className = "story_container";

    const storyInput = document.createElement("input");
    storyInput.className = "story_input";
    storyInput.name = "story_name";
    storyInput.type = "radio";

    const titleArrsLength = titlesArr.length;
    const storyInputId = "story_number" + titleArrsLength;
    storyInput.id = storyInputId;

    const storyTitleLabel = document.createElement("label");
    storyTitleLabel.className = "story_title_label";

    storyTitleLabel.htmlFor = storyInputId;

    const storyRemoveButton = document.createElement("button");
    storyRemoveButton.className = "remove-btn";
    storyRemoveButton.innerText = "x";
    storyRemoveButton.id = "story_remove" + titleArrsLength;

    const storyContentDiv = document.createElement("div");
    storyContentDiv.className =
        "story_content_div " + "content-" + titleArrsLength;

    const storyTitleText = titlesArr.slice(-1)[0];
    const storyContentText = contentsArr.slice(-1)[0];
    const storyTitleTextNode = document.createTextNode(storyTitleText);
    const storyContentTextNode = document.createTextNode(storyContentText);

    storyTitleLabel.append(storyTitleTextNode, storyRemoveButton);
    storyContentDiv.appendChild(storyContentTextNode);

    const storyList = document.getElementById("stories_id");
    storyDiv.append(storyInput, storyTitleLabel, storyContentDiv);
    storyList.append(storyDiv);

    let storyContainers = document.getElementsByClassName("story_container");
}

function testlog() {
    init();
    console.log("test done!");
}
