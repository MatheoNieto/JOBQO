import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
  adapter: new Adapter(),
});

// eslint-disable-next-line import/no-extraneous-dependencies
global.fetch = require('jest-fetch-mock');
