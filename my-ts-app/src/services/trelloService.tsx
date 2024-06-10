
import axios from 'axios';
import { Board, List, Card } from '../types/trello';

const API_KEY = '46d77ac987d14baeacb2657c2b3ea873';  
const TOKEN = 'ATTA81bc3eb9790519893e1214f7be1973994b43b46d9da07f7a34e9768f5b4142423E19956A';  

const trelloApi = axios.create({
  baseURL: 'https://api.trello.com/1/',
  params: {
    key: API_KEY,
    token: TOKEN,
  },
});

export const getBoards = async (): Promise<Board[]> => {
  const response = await trelloApi.get('/members/me/boards');
  return response.data;
};

export const getLists = async (boardId: string): Promise<List[]> => {
  const response = await trelloApi.get(`/boards/${boardId}/lists`);
  return response.data;
};

export const getCards = async (listId: string): Promise<Card[]> => {
  const response = await trelloApi.get(`/lists/${listId}/cards`);
  return response.data;
};

export const createBoard = async (name: string): Promise<Board> => {
  const response = await trelloApi.post('/boards/', { name });
  return response.data;
};

export const updateBoard = async (id: string, updates: Partial<Board>): Promise<Board> => {
  const response = await trelloApi.put(`/boards/${id}`, updates);
  return response.data;
};

export const deleteBoard = async (id: string): Promise<void> => {
  await trelloApi.delete(`/boards/${id}`);
};

export const createList = async (boardId: string, name: string): Promise<List> => {
  const response = await trelloApi.post(`/boards/${boardId}/lists`, { name });
  return response.data;
};

export const updateList = async (id: string, updates: Partial<List>): Promise<List> => {
  const response = await trelloApi.put(`/lists/${id}`, updates);
  return response.data;
};

export const deleteList = async (id: string): Promise<void> => {
  await trelloApi.delete(`/lists/${id}`);
};

export const createCard = async (listId: string, name: string): Promise<Card> => {
  const response = await trelloApi.post(`/lists/${listId}/cards`, { name });
  return response.data;
};

export const updateCard = async (id: string, updates: Partial<Card>): Promise<Card> => {
  const response = await trelloApi.put(`/cards/${id}`, updates);
  return response.data;
};

export const deleteCard = async (id: string): Promise<void> => {
  await trelloApi.delete(`/cards/${id}`);
};
