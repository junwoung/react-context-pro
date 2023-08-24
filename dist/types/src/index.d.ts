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
export declare function createContext<Value = any, InitStateType = any>(useHook: CreateContextProps<InitStateType, Value>): CreateContextValue<Value, InitStateType>;
