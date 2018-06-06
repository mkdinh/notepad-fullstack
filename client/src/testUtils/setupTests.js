import React from "react";
import requestAnimationFrame from "./polyfills";
import { configure } from "enzyme";
import { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import { MemoryRouter } from "react-router-dom";
// handle libraries mocking
import mockAdapter from "axios-mock-adapter";
import axios from "axios";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../utils/reducers";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import "./helpers/localStorageMock";

// set test timeout for jest
jest.setTimeout(30000);
// intercept any axios request
const mockAxios = new mockAdapter(axios);
// provide store context for Redux
const store = createStore(rootReducer);
// mocking redux store
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

configure({ adapter: new Adapter() });

function mountWithRouterContext(Component) {
  const wrapper = mount(<MemoryRouter>{Component}</MemoryRouter>);
  return wrapper;
}

function mountWithReduxContext(Component) {
  return mount(<Provider store={store}>{Component}</Provider>);
}

function createTarget(properties, ev) {
  return { ...ev, target: properties };
}

afterEach(() => {
  mockAxios.reset();
});

global.React = React;
global.sinon = sinon;
global.mount = mount;
global.shallow = shallow;
global.mockAxios = mockAxios;
global.mockStore = mockStore;
global.createTarget = createTarget;
global.mountWithRouterContext = mountWithRouterContext;
global.mountWithReduxContext = mountWithReduxContext;
