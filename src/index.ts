import { Environment, Deploy, Project, Release } from './models';
import deployments from './data/Deployments.json';
import environments from './data/Environments.json';
import projects from './data/Projects.json';
import releases from './data/Releases.json';

const globalDeployments: Deploy[] = deployments;
const globalEnvironments: Environment[] = environments;
const globalProjects: Project[] = projects;
const globalReleases: Release[] = releases;

export function checkReleaseDeployStatus(release: Release): boolean {
  const deploys = globalDeployments.filter(
    deployment => deployment.ReleaseId === release.Id,
  );

  if (deploys.length > 0) return true;
  return false;
}
export function checkProjectReleaseStatus(project: Project): boolean {
  const releases = globalReleases.filter(
    release => release.ProjectId === project.Id,
  );

  if (releases.length > 0) return true;
  return false;
}

export function searchReleases(
  project: Project,
  environment: Environment,
  releasesToKeep: number,
): Release[] | null {
  // if project has no releases throw error
  if (!checkProjectReleaseStatus(project)) return null;
  // get all releases for project
  const releaseList = globalReleases.filter(
    release => release.ProjectId === project.Id,
  );
  //look for corresponding deploys via environmentId ASSUMING fewer environments than releases
  const deployList = globalDeployments.filter(
    deploy => deploy.EnvironmentId === environment.Id,
  );
  //use Date.parse on deploy dates to get most recently deployed releases
  const releaseIdskeep = deployList
    .sort((a, b) => Date.parse(b.DeployedAt) - Date.parse(a.DeployedAt))
    .map(deploy => deploy.ReleaseId);

  //return list of releases for corresponding project according to releaseId list
  return releaseList
    .filter(release => releaseIdskeep.includes(release.Id))
    .slice(0, releasesToKeep);
}
