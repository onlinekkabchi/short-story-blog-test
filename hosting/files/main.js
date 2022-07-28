
var titlesArr = [];
var contentsArr = [];

document.getElementById('story_add_button').addEventListener('click', addStory);
document.getElementById('test_button').addEventListener('click', testlog);

// var rs = document.getElementsByClassName('remove-btn');
// rs.onclick = function remSt() {
//     for (let i = 0; i < rs.length; i++) {
//         rs[i].parentNode;
        
//     }
// }

// function removeEl() {
//     const elements = document.getElementsByClassName('remove-btn');
//     while(elements.length > 0){
//         elements[0].parentNode.removeChild(elements[0]);
//     }
// }

// for (let i = 0; i < rs.length; i++) {
//     rs[i].id = i;
//     rs[i].addEventListener('click', remove);
// }

// function remove(event) {
//     console.log("remove event!");
//     removeStoryContainer.splice(event.target.id, 1);
//     return;
// }


function addStory() {
    // textarea에 입력받은 title과 content를 가져온다.
    const storyTitle = document.getElementById('story_title').value;
    // const storyTitleValue = storyTitle.value;
    const storyContent = document.getElementById('story_content').value;
    // const storyContentValue = storyContent.value;

    if(storyTitle && storyContent !== ''){
    //     return;
    // } else {
        // titlesArr, contentsArr Array에 가져온 title과 content를 넣는다. 
        titlesArr.push(storyTitle);
        contentsArr.push(storyContent);
        createStory();
    }

}

function createStory() {
    // 받아온 내용을 넣을 Elements를 생성한다.
    const storyDiv = document.createElement('div');
        storyDiv.className = 'story_container';
        
    const storyInput = document.createElement('input');
        storyInput.className = 'story_input';
        storyInput.name = 'story_name';
        storyInput.type = 'radio';

    // story에 부여할 아이디를 만든다. 번호를 매기기위해 array.length를 활용함.
    const titleArrsLength = titlesArr.length;
    const storyInputId = 'story_number' + titleArrsLength;
        storyInput.id = storyInputId;

    const storyTitleLabel = document.createElement('label');
        storyTitleLabel.className = 'story_title_label';

        // The value of the for attribute must be a single id for a labelable
        // form-related element in the same document as the <label> element.

        storyTitleLabel.htmlFor = storyInputId;
        // storyTitleLabel.data-label-closed = "show";
        // storyTitleLabel.data-label-open = "show";

    const storyRemoveButton = document.createElement('button');
        storyRemoveButton.className = 'remove-btn';
        storyRemoveButton.innerText = 'x';
        storyRemoveButton.id = 'story_remove' + titleArrsLength;


    const storyContentDiv = document.createElement('div');
        storyContentDiv.className = "story_content_div " + "content-" + titleArrsLength;


    // array에서 입력받은 title, content를 가져와 텍스트노드에 넣는다. 
    const storyTitleText = titlesArr.slice(-1)[0];
    const storyContentText = contentsArr.slice(-1)[0];
    const storyTitleTextNode = document.createTextNode(storyTitleText);
    const storyContentTextNode = document.createTextNode(storyContentText);


    // title, content element안에 title, content 텍스트 노드를 를 넣는다.
    storyTitleLabel.append(storyTitleTextNode, storyRemoveButton);
    storyContentDiv.appendChild(storyContentTextNode);


    // List에 입력받은 이야기를 추가한다.
    const storyList = document.getElementById('stories_id');
        storyDiv.append(storyInput, storyTitleLabel, storyContentDiv);
        storyList.append(storyDiv);


            // console.log(typeof storyTitleText);
            // console.log(typeof storyContentText);
            // console.log("storyTitleText: " + storyTitleText);
            // console.log("storyContentText: " + storyContentText);
        let storyContainers = document.getElementsByClassName('story_container');
            console.log(titlesArr);
            console.log(contentsArr);
            console.log(storyContainers);

}

// function appendTest() {
//     const sampleDiv = document.createElement('div');
//     const storyRemoveButton = document.createElement('button');
//         storyRemoveButton.className = 'remove-btn';
//         storyRemoveButton.innerText = 'x';
//         sampleDiv.appendChild(storyRemoveButton);

//         console.log(sampleDiv);

//     const storyList = document.getElementById('stories_id');
//     storyList.append(sampleDiv);
// }

// function removeStory(event) {
        // X를 누를 경우 삭제.
        // var removeStories = document.getElementsByClassName('story_remove');
        //     for (let i = 0; i < removeStories.length; i++) {
        //         removeStories[i].id = i;
        //         removeStories[i].addEventListener('click', remove); 
        //     };

        // const removeStoryContainer = document.getElementsByClassName('story_container');
        //     for (let i = 0; i < removeStoryContainer.length; i++) {
        //         removeStoryContainer[i].id = i;
        //         removeStoryContainer[i].addEventListener('click', remove);
        //     };


        // removeStoryContainer.splice(event.target.id, 1);
        //     console.log("remove test");

// }

function testlog() {
    console.log("test done!");
}