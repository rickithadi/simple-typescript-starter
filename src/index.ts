import { Environment, Deploy, Project, Release } from './models';
import deployments from './data/Deployments.json';
import environments from './data/Environments.json';
import projects from './data/Projects.json';
import releases from './data/Releases.json';

export function checkReleaseDeployStatus(release: Release): boolean {
  //search deployments for deployment.ReleaseId===release.Id
  return false;
}

export function searchReleases(
  project: Project,
  environment: Environment,
  releasesToKeep: number,
) {
  //look for corresponding deployed releases via
  //
  //sort by date
  //
  //trim
}
