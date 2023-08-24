import React from 'react';

var DefaultValue = undefined;
function createContext(useHook) {
    var Context = React.createContext(DefaultValue);
    var Provider = function (props) {
        var value = useHook(props.initialState);
        return React.createElement(Context.Provider, { value: value }, props.children);
    };
    var useContext = function () {
        var value = React.useContext(Context);
        if (value === DefaultValue) {
            throw new Error('Component must be wrapped with <Container.Provider>');
        }
        return value;
    };
    return {
        Provider: Provider,
        useContext: useContext
    };
}

export { createContext };
