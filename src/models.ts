export interface Environment {
  Id: string;
  Name: string;
}
export interface Deploy {
  Id: string;
  ReleaseId: string;
  EnvironmentId: string;
  DeployedAt: string;
}
export interface Project {
  Id: string;
  Name: string;
}
export interface Release {
  Id: string;
  ProjectId: string;
  Version: string | null;
  Created: string;
}
