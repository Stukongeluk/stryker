import { expect } from 'chai';
import childProcess = require('child_process');
import { promisify } from 'util';
import { childProcessAsPromised } from '../../src';

describe('childProcessAsPromised', () => {
  it(`should expose promisified exec`, () => {
    // It's difficult to test this any other way. At least this way, we know it is promisified.
    expect(childProcessAsPromised.exec.toString()).eq(promisify(childProcess.exec).toString());
  });
});
