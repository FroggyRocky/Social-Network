
const data = {
  sideBar: {
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
  },
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
  posts: [
    {
      text: 'Hanging out in my lab as always, peace!',
      id: 1,
      avatar: `https://i.pinimg.com/280x280_RS/57/2f/38/572f38a6d9c916a32064cca023ae6586.jpg`
    }
  ]
}

export function addMessage(currentMessage) {
  let newMessage = {
    text: currentMessage,
    id: 5
  }
  data.messages.push(newMessage);
  console.log(data);
}

export function addPost(currentValue) {
  let newPost = {
    text: currentValue,
    id: 2,
    avatar: `https://i.pinimg.com/280x280_RS/57/2f/38/572f38a6d9c916a32064cca023ae6586.jpg`
  };
  data.posts.push(newPost);
}
export default data;

