
const store = {
  _state: {
    ProfilePage: {
      posts: [
        {
          text: 'Hanging out in my lab as always, peace!',
          id: 1,
          avatar: `https://i.pinimg.com/280x280_RS/57/2f/38/572f38a6d9c916a32064cca023ae6586.jpg`
        }
      ],
      currentInput: {
        text: ""
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
  },
  getState() {
    return this._state
  },
  reRender() {
    console.log('reRendered');
  },
  ////Fucntions of ChatPage
  registerChatInputChanges(value) {
    this._state.ChatPage.currentInput.text = value;
    this.reRender(this._state);
  },

  ////Fucntions of ProfilePage
  registerChanges(value) {

  },
  subscribe(observer) {
    this.reRender = observer;
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        text: this._state.ProfilePage.currentInput.text,
        id: this._state.ProfilePage.posts.length + 1,
        avatar: `https://i.pinimg.com/280x280_RS/57/2f/38/572f38a6d9c916a32064cca023ae6586.jpg`
      };
      this._state.ProfilePage.posts.push(newPost);
      this._state.ProfilePage.currentInput.text = "";
      this.reRender(this._state);
    } else if (action.type === 'UPDATE-POST-INPUT') {
      this._state.ProfilePage.currentInput.text = action.textValue;
      this.reRender(this._state)
    } else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        text: this._state.ChatPage.currentInput.text,
        id: this._state.ChatPage.messages.length + 1
      };
      this._state.ChatPage.messages.push(newMessage);
      this.reRender(this._state);
      this._state.ChatPage.currentInput.text = "";
    } else if (action.type === 'UPDATE-CHAT-INPUT') {
      this._state.ChatPage.currentInput.text = action.textValue;
      this.reRender(this._state);
    }
  }
}

export default store;

