# Three Phases of `useEffect` Hooks

## 1. `componentDidMount`

- In layman's terms, this phase corresponds to the initial rendering of the UI when there's no previous render to compare against.
- In the context of the `useEffect` hook, it means that when the component is first rendered, there is no previous state to compare. So, the callback is executed.

## 2. `componentDidUpdate`

- Simply put, this phase occurs when a state change triggers a UI re-render.
- When a state change causes a re-render, the `useEffect` checks its dependencies. If they have changed, it will execute the callback again. If nothing has changed, it will skip execution to avoid unnecessary updates.
- Some people might say that it doesn't execute "just because," but it first checks if any dependencies have changed. If they haven't, it won't trigger a re-render unnecessarily.

## 3. `componentWillUnmount`

- This phase is triggered when a component is about to unmount.
- Before unmounting, `useEffect` executes the cleanup function, if one was provided. This is necessary for tasks like clearing timers or cleaning up resources that might have been left in the event loop or callback queue. It ensures that these things are properly cleaned up and won't cause issues in the future.

# Three Phases of the `useEffect` Hook

## 1. `componentDidMount`

- This phase represents the initial rendering of the UI when there's no previous render to compare against.
- In the context of `useEffect`, it means that when the component is first rendered, there is no previous state to compare. So, the callback is executed.

## 2. `componentDidUpdate`

- This phase occurs when a state change triggers a UI re-render.
- When a state change causes a re-render, the `useEffect` checks its dependencies. If they have changed, it will execute the callback again. If nothing has changed, it will skip execution to avoid unnecessary updates.
- Some people might say that it doesn't execute "just because," but it first checks if any dependencies have changed. If they haven't, it won't trigger a re-render unnecessarily.

## 3. `componentWillUnmount`

- This phase is triggered when a component is about to unmount.
- Before unmounting, `useEffect` executes the cleanup function, if one was provided. This is necessary for tasks like clearing timers or cleaning up resources that might have been left in the event loop or callback queue. It ensures that these things are properly cleaned up and won't cause issues in the future.

These three phases illustrate how `useEffect` helps manage side effects and interactions with the component lifecycle. It is essential for handling various tasks during the component's lifecycle, from initialization to unmounting, while optimizing performance by skipping unnecessary re-renders.
