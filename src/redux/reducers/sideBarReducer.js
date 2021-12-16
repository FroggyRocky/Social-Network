const initialState = {
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
  
  export default function sideBarReducer(state = initialState, action) {
    return state
}

