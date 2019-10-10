declare const axios: any;

const key = 'bd1e7e486269d148ecd1be71ad5a3f1a';

export type Member = {
  id: number;
  username: string;
  avatarHash: string;
  fullName: string;
}

export const getBoardMembers = (token: string, t): Promise<Member[]> => {
  const { board: boardId } = t.getContext();
  const url = `https://api.trello.com/1/boards/${boardId}/members?key=${key}&token=${token}&fields=username,avatarHash,fullName`;
  return axios.get(url).then(response => response.data).catch(() => []);
};
