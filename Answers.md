1. What problem does the context API help solve?
Context API is meant to solve the problem of prop drilling- or, the passing of props down through several generations of child components in order to give access to a piece of data 
to a single one of them. 
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions in Redux can be described as functions that interact with the reducer. These functions will describe some type of event that will affect the data in redux's store, for example
a user clicking a button to upload data to the state in store. The store is just the object in which redux keeps an overarching collection of data in that can be easily passed into 
all children of your app. A reducer is a gateway into the store, and responding to various action types, will signal certain types of data changes (if any) to be made in the state existing
within the store. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state refers to state in which the entire application has access to, which would be stored within some kind of 'store' object as defined above. Component state would only be accessible to the specific component (and its children) and would typically be state that controls an input field value or some other logic that only the component/children need access to.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk is a middleware that allows you to write action creators that return functions rather than objects. This means you can use an action creator to return a function like an axios request that passes data into your reducer. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!
Redux + redux thunk seem like clear winners. Only after learning these two do I feel like I could create a functional app that can scale and interact with an API in a functional, user-friendly way. I'm sure if I put more time into context I'd feel the same but redux seems to have stuck with me much better. 
