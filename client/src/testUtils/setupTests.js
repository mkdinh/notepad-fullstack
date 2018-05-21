import React from "react";
import requestAnimationFrame from "./polyfills";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import { MemoryRouter } from "react-router-dom";

jest.setTimeout(30000);

configure({ adapter: new Adapter() });

function mountWithRouterContext(Component) {
  const wrapper = mount(<MemoryRouter>{Component}</MemoryRouter>);
  return wrapper;
}

global.React = React;
global.shallow = shallow;
global.mount = mount;
global.sinon = sinon;
global.mountWithRouterContext = mountWithRouterContext;
