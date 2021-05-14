"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchReleases = exports.checkProjectReleaseStatus = exports.checkReleaseDeployStatus = void 0;
var Deployments_json_1 = __importDefault(require("./data/Deployments.json"));
var Environments_json_1 = __importDefault(require("./data/Environments.json"));
var Projects_json_1 = __importDefault(require("./data/Projects.json"));
var Releases_json_1 = __importDefault(require("./data/Releases.json"));
var globalDeployments = Deployments_json_1.default;
var globalEnvironments = Environments_json_1.default;
var globalProjects = Projects_json_1.default;
var globalReleases = Releases_json_1.default;
function checkReleaseDeployStatus(release) {
    var deploys = globalDeployments.filter(function (deployment) { return deployment.ReleaseId === release.Id; });
    if (deploys.length > 0)
        return true;
    return false;
}
exports.checkReleaseDeployStatus = checkReleaseDeployStatus;
function checkProjectReleaseStatus(project) {
    var releases = globalReleases.filter(function (release) { return release.ProjectId === project.Id; });
    if (releases.length > 0)
        return true;
    return false;
}
exports.checkProjectReleaseStatus = checkProjectReleaseStatus;
function searchReleases(project, environment, releasesToKeep) {
    // if project has no releases throw error
    if (!checkProjectReleaseStatus(project))
        return;
    // get all releases for project
    var releaseList = globalReleases.filter(function (release) { return release.ProjectId === project.Id; });
    //look for corresponding deploys via environmentId ASSUMING fewer environments than releases
    // searchReleases(projectId):releases[]
    var deployList = globalDeployments.filter(function (deploy) { return deploy.EnvironmentId === environment.Id; });
    //sort by date
    //
    //trim
}
exports.searchReleases = searchReleases;
