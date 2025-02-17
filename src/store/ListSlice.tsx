import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { API_URL, TOKEN } from '../utils/constants';
import toast from 'react-hot-toast';

type Issue = {
  comments: string;
  title: string;
  lastUpdate: string;
  number: string;
  author: string;
  id: string;
  status: 'open' | 'close';
};

type RepoDataType = { owner: string; repoName: string; repoUrl: string };

type StateType = {
  listToDo: Issue[];
  listInProgress: Issue[];
  listDone: Issue[];
  repoData: RepoDataType;
  isLoading: boolean;
  error: string;
  allRepos: string[];
};

const initialState: StateType = {
  listToDo: [],
  listInProgress: [],
  listDone: [],
  allRepos: [],
  repoData: { owner: '', repoName: '', repoUrl: '' },
  isLoading: false,
  error: '',
};

export const getIssues = createAsyncThunk(
  'getIssues/list',
  async function ({ owner, repoName }: { owner: string; repoName: string }) {
    const res = await fetch(`${API_URL}/${owner}/${repoName}/issues`, {
      headers: {
        Authorization: `token ${TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });
    if (!res.ok) {
      toast.error(`This repo doesn't exist. Please try again`);
      throw new Error(`Error with fetching issues`);
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      toast.error("Obtained data isn't an array");
      throw new Error("Obtained data isn't an array");
    }

    if (data.length === 0) {
      toast.error('This repo doesn`t have a issues');
      return { issues: [], repoUrl: '', owner: '', repoName: '' };
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const issues = data.map((issue: any) => ({
      comments: issue.comments,
      title: issue.title,
      lastUpdate: issue.updated_at,
      number: issue.number,
      author: issue.user.login,
      id: issue.id,
      authorUrl: issue.user.html_url,
      status: issue.state,
    }));
    toast.success('This repo is successfully added');
    const repoUrl = `https://github.com/${owner}/${repoName}`;
    return { issues, repoUrl, owner, repoName };
  }
);

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getIssues.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        getIssues.fulfilled,
        (
          state,
          action: PayloadAction<{
            issues: Issue[];
            repoUrl: string;
            repoName: string;
            owner: string;
          }>
        ) => {
          const toDoArr = action.payload.issues.filter(
            issue => issue.status === 'open'
          );
          const doneArr = action.payload.issues.filter(
            issue => issue.status === 'close'
          );

          state.isLoading = false;
          state.listToDo = toDoArr;
          state.listDone = doneArr;

          state.repoData.owner = action.payload.owner;
          state.repoData.repoName = action.payload.repoName;
          state.repoData.repoUrl = action.payload.repoUrl;
        }
      ),
});

export const {} = listSlice.actions;

export default listSlice.reducer;
