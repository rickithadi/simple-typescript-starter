import releases from './data/Releases.json';
import projects from './data/Projects.json';
import { checkProjectReleaseStatus, checkReleaseDeployStatus } from './index';
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
describe('check release status of project', () => {
  it('released project returns true', () => {
    const result = checkProjectReleaseStatus(projects[0]);
    expect(result).toBe(true);
  });
  it('unreleased project returns false', () => {
    const result = checkProjectReleaseStatus(projects[1]);
    expect(result).toBe(false);
  });
});
