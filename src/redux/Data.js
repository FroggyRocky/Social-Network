let reRender = () => {
  console.log('reRendered');
}

const data = {
ProfilePage: {
  posts: [
    {
      text: 'Hanging out in my lab as always, peace!',
      id: 1,
      avatar: `https://i.pinimg.com/280x280_RS/57/2f/38/572f38a6d9c916a32064cca023ae6586.jpg`
    }
  ],
currentInput: {
  text:""
}
},
ChatPage: {
  dialogues: [
    {
      name: 'Erlic Bachman',
      id: 2,
      avatar: 'https://pbs.twimg.com/profile_images/461277151514222593/xYCOja56_400x400.jpeg'
    },
    {
      name: 'Gilfoyle',
      id: 3,
      avatar: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2019/07/silicon-valley-Gilfoyle---s-10-Most-Badass-Quotes-featured-image.jpg'
    }
  ],
  messages: [
    { text: 'Hey', id: 1 },
    { text: 'Hey!', id: 2 },
    { text: 'Do you still study programming', id: 3 },
    { text: 'Of course', id: 4 }
  ],
currentInput: {
  text: ""
}
},

sideBarPage: {
    friends: [
      {
        name: 'Jin Yang',
        id: 1,
        avatar: 'https://openpsychometrics.org/tests/characters/test-resources/pics/SV/10.jpg'
      },
      {
        name: 'Erlic Bachman',
        id: 2,
        avatar: 'https://pbs.twimg.com/profile_images/461277151514222593/xYCOja56_400x400.jpeg'
      },
      {
        name: 'Gilfoyle',
        id: 3,
        avatar: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2019/07/silicon-valley-Gilfoyle---s-10-Most-Badass-Quotes-featured-image.jpg'
      }
    ]
  }
}

////Fucntions of ChatPage
export function registerChatInputChanges(value) {
  data.ChatPage.currentInput.text = value;
  reRender(data);
}
export function addMessage() {
  let newMessage = {
    text: data.ChatPage.currentInput.text,
    id: data.ChatPage.messages.length + 1
  }
  data.ChatPage.messages.push(newMessage);
  reRender(data);
  data.ChatPage.currentInput.text = "";
}

////Fucntions of ProfilePage
export function addPost() {
  let newPost = {
    text: data.ProfilePage.currentInput.text,
    id: data.ProfilePage.posts.length + 1,
    avatar: `https://i.pinimg.com/280x280_RS/57/2f/38/572f38a6d9c916a32064cca023ae6586.jpg`
  };
  data.ProfilePage.posts.push(newPost);
  data.ProfilePage.currentInput.text = "";
  reRender(data);
  
}

export function registerChanges(value) {
data.ProfilePage.currentInput.text = value;
console.log(data);
reRender(data)
}

export function subscriber(observer) {
  reRender = observer; 
}
export default data;

