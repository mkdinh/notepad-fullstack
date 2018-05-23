import React from "react";
import requestAnimationFrame from "./polyfills";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import { MemoryRouter } from "react-router-dom";
import mockAdapter from "axios-mock-adapter";
import axios from "axios";
import { expect } from "chai";
const mockAxios = new mockAdapter(axios);

jest.setTimeout(30000);

configure({ adapter: new Adapter() });

function mountWithRouterContext(Component) {
  const wrapper = mount(<MemoryRouter>{Component}</MemoryRouter>);
  return wrapper;
}

afterEach(() => {
  mockAxios.restore();
});

global.React = React;
global.sinon = sinon;
global.mount = mount;
// global.expect = expect;
global.shallow = shallow;
global.mockAxios = mockAxios;
global.mountWithRouterContext = mountWithRouterContext;
