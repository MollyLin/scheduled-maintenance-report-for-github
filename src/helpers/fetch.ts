export function http<T>(request: RequestInfo): Promise<T> {
  return fetch(request)
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

export function get<T>(path: string, args: RequestInit = {}): Promise<T> {
  args.method = 'get';
  args.headers = {
    'Content-Type': 'application/json',
  };
  return http<T>(new Request(`${path}`, args));
}
