import { Environment, Deploy, Project, Release } from './models';
import deployments from './data/Deployments.json';
import environments from './data/Environments.json';
import projects from './data/Projects.json';
import releases from './data/Releases.json';

const globalDeployments: Deploy[] = deployments;
export function checkReleaseDeployStatus(release: Release): boolean {
  const deploys = globalDeployments.filter(
    deployment => deployment.ReleaseId === release.Id,
  );

  if (deploys.length > 0) return true;
  return false;
}

export function searchReleases(
  project: Project,
  environment: Environment,
  releasesToKeep: number,
) {
  // if project has no releases throw error return
  //
  //look for corresponding deployed releases via
  //
  //sort by date
  //
  //trim
}
