import releases from './data/Releases.json';
import projects from './data/Projects.json';
import environments from './data/Environments.json';
import {
  checkProjectReleaseStatus,
  checkReleaseDeployStatus,
  searchReleases,
} from './index';

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

describe('search based on project and environment', () => {
  it('released project returns true', () => {
    const result = searchReleases(projects[0], environments[0], 5);
    // console.log(result);
    // expect(result).toBe(true);
  });
  // it('unreleased project returns false', () => {
  //   const result = checkProjectReleaseStatus(projects[1]);
  //   expect(result).toBe(false);
  // });
});
