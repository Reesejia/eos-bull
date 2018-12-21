import { observable, action } from 'mobx';
import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr';
import socket from '@/utils/socket';

class UserStore {
  @observable
  currency = 'BTC';
  account = 'admin';
  marketId = 1;
  socket: any;
  @action.bound
  setCurrency(currency: string) {
    this.currency = currency;
  }

  @action
  getData() {
    // socket.on('tradeUpdate', (msg: any) => {
    //   console.log(msg);
    // });

    const socket = new HubConnectionBuilder()
      .withUrl('http://47.52.113.167:5566/feed' || '')
      .configureLogging(LogLevel.Information)
      .build();

    socket.on('connect', (msg: any) => {
      console.log(msg);
    });
    this.socket = socket;
    // const res =

    const socketLogin = () => {
      console.log(111);
      return socket.invoke('SubscribeL2update', 2);
    };

    socket
      .start()
      .then(socketLogin)
      .catch((err: any) => {
        console.error(err.toString());
      });
  }
}

export default new UserStore();
