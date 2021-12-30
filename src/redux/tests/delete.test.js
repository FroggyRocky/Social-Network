//profile reducer, delete post option test
import profileReducer from '../reducers/profileReducer'
import {deletePostAC} from '../reducers/profileReducer'

const testState = {
    posts:[
        {
            text: 'Hanging out in my lab as always, peace!',
            id: 1
          },
          {
            text: 'Hanging out in my lab as always, peace!',
            id: 2
          },
          {
            text: 'Hanging out in my lab as always, peace!',
            id: 3
          },
          {
            text: 'Hanging out in my lab as always, peace!',
            id: 4
          }
    ]
}


it('should be deleted', () => {
    const action = deletePostAC(2)
    const newState = profileReducer(testState,action)
    console.log(newState.posts);
    expect(newState.posts.length).toBe(3)
})

