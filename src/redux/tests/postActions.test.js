//profile reducer, delete post option test
import profileReducer from '../reducers/profileReducer'
import {deletePostAC, likePost, dislikePost} from '../reducers/profileReducer'

const testState = {
    posts:[
        {
            text: 'Hanging out in my lab as always, peace!',
            id: 1,
            isLiked:false,
            likes:2
          },
          {
            text: 'Hanging out in my lab as always, peace!',
            id: 2,
            isLiked:true,
            likes:5
          },
          {
            text: 'Hanging out in my lab as always, peace!',
            id: 3,
            isLiked:false,
            likes:0
          },
          {
            text: 'Hanging out in my lab as always, peace!',
            id: 4,
            isLiked:false,
            likes:10
          }
    ]
}


it('post should be deleted', () => {
    const action = deletePostAC(2)
    const newState = profileReducer(testState,action)
    expect(newState.posts.length).toBe(3)
})

it('post should be liked', () => {
  const action = likePost(1); ///parameter = id
  const newState = profileReducer(testState, action)
  expect(newState.posts[0].isLiked).toBe(true)
  expect(newState.posts[0].likes).toBe(3)
});

it('post should be disliked ', () => {
  const action = dislikePost(2)
  const newState = profileReducer(testState, action)
  expect(newState.posts[1].likes).toBe(4)
  expect(newState.posts[1].isLiked).toBe(false)
});



