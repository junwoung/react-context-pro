import React from 'react';

export type CreateContextProps<InitStateType, Value> = (initialState?: InitStateType) => Value;

export interface CreateContextProviderProps<InitStateType> {
  initialState?: InitStateType;
  children: React.ReactNode;
}

export interface CreateContextValue<Value, InitStateType> {
  Provider: React.ComponentType<CreateContextProviderProps<InitStateType>>;
  useContext: () => Value;
}

const DefaultValue = undefined;

export function createContext<Value = any, InitStateType = any>(
  useHook: CreateContextProps<InitStateType, Value>
): CreateContextValue<Value, InitStateType> {
  const Context = React.createContext<Value | typeof DefaultValue>(DefaultValue);

  const Provider = (props: CreateContextProviderProps<InitStateType>) => {
    const value = useHook(props.initialState);
    return <Context.Provider value={value}>{props.children}</Context.Provider>;
  };

  const useContext = (): Value => {
    const value = React.useContext(Context);
    if (value === DefaultValue) {
      throw new Error('Component must be wrapped with <Container.Provider>');
    }
    return value;
  };

  return {
    Provider,
    useContext
  };
}
