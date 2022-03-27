process.env.PORT = '3001';
import express from 'express';
import { Server } from 'net';

describe('Index', () => {
  it('Config express should work', async () => {
    const listen = jest.spyOn(Server.prototype, 'listen');
    jest.mock('./config/express', () => ({
      createServer: jest.fn().mockReturnValue(express()),
    }));
    await import('./index');
    expect(listen).toBeCalled();
    const server = listen.mock.results[0].value as Server;
    setImmediate(() => {
      server.close();
    });
    listen.mockRestore();
  });
});
