export enum AreaType {
  ToDo = 'ToDo',
  InProgress = 'InProgress',
  Done = 'Done',
}

export type Issue = {
  comments: string;
  title: string;
  lastUpdate: string;
  authorUrl: string;
  number: string;
  author: string;
  id: string;
  status: AreaType;
};

export type RepoDataType = { owner: string; repoName: string; repoUrl: string };

export type StateType = {
  listToDo: Issue[];
  listInProgress: Issue[];
  listDone: Issue[];
  repoData: RepoDataType;
  isLoading: boolean;
  allRepos: string[];
  selectedIssue: { id: string; status: AreaType };
};
