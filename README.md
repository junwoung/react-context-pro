# 简单用例

## 定义Hook，并创建上下文

```js
import { createContext } from 'react-context-pro';

const useCount = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(count + 1), [count]);
  const decrement = useCallback(() => setCount(count - 1), [count]);

  return { count, increment, decrement };
};

const Context = createContext(useCount);
```

## Provider包裹需共享状态的组件

```js
const Parent = () => {
  return (
    <Context.Provider>
      <Demo />
    </Context.Provider>
  );
};
```

## 子组件内共享状态

```js
const Demo = () => {
  const { count, increment, decrement } = Context.useContext();

  return (
    <>
      <div>当前：{count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </>
  );
};
```
