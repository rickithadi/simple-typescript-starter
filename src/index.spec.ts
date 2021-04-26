import releases from './data/Releases.json';
import { checkReleaseDeployStatus } from './index';

describe('test', () => {
  test('add', async () => {
    expect(1 + 1).toEqual(2);
  });
});

describe('check deploy status of release', () => {
  it('deployed release returns true', () => {
    const result = checkReleaseDeployStatus(releases[0]);
    expect(result).toBe(true);
  });
  it('undeployed release returns false', () => {
    const result = checkReleaseDeployStatus(releases[1]);
    expect(result).toBe(false);
  });
});
