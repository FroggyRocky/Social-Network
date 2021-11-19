const FRIEND_UNFRIEND = "FRIEND-UNFRIEND";
const initialState = {
    users: [
        {
            name: 'Jin Yang',
            id: 1,
            friend:false,
            status:'Special occasion',
            location: {
              country:'China',
              city:'Beijin'
            },
            avatar: 'https://openpsychometrics.org/tests/characters/test-resources/pics/SV/10.jpg'
          },
          {
            name: 'Erlic Bachman',
            id: 2,
            friend:true,
            status:'Sign up into my Incubator, my litle incubees',
            location: {
              country:'Denmark',
              city:'Vik'
            },
            avatar: 'https://pbs.twimg.com/profile_images/461277151514222593/xYCOja56_400x400.jpeg'
          },
          {
            name: 'Gilfoyle',
            id: 3,
            friend:true,
            status:"Do you have a beer, i code better when i am a little bit buzzed",
            location: {
              country:'Canada',
              city:"Alberta"
            },
            avatar: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2019/07/silicon-valley-Gilfoyle---s-10-Most-Badass-Quotes-featured-image.jpg'
          },
          {
            name: 'Dinesh',
            id: 4,
            friend:false,
            status:'Better than Gilfoyle',
            location: {
              country:'USA',
              city:'USA'
            },
            avatar: 'https://i.ytimg.com/vi/JNuTcsp4SvA/maxresdefault.jpg'
          }, 
             
    ],
searchInput: ""
}


 const usersReducer = (state=initialState, action) =>{
switch(action.type) {
case FRIEND_UNFRIEND: 
    return {
      ...state,
      users: state.users.map((el) => {
      if (action.id === el.id) {
          return {...el, friend:!el.friend}
        } else {return {...el}}
      })
    }
    
}
return state
}


const friendUnfriendAC = (id) => {
  return {
    type:FRIEND_UNFRIEND,
    id:id }
}

export default usersReducer;
export {friendUnfriendAC}