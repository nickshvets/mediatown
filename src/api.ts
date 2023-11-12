export const API_BASE_URL = 'http://localhost:4000';
export const API_Media_URL = `${API_BASE_URL}/media`;

export const api = {
  get: (path: string) => {
    return fetch(`${API_BASE_URL}${path}`).then((response) => response.json());
  },
  post: (path: string, data: any) => {
    return fetch(`${API_BASE_URL}${path}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  },
  put: (path: string, data: any) => {
    return fetch(
      `${API_BASE_URL}${path}`,

      {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((response) => response.json());
  },
  delete: (path: string) => {
    return fetch(`${API_BASE_URL}${path}`, {
      method: 'DELETE',
    }).then((response) => response.json());
  },
};
