import { Injectable } from '@nestjs/common';
import { WebSocketServer, WsResponse } from '@nestjs/websockets';
import { from, interval, map, Observable } from 'rxjs';
import { Server } from 'socket.io';

import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  @WebSocketServer()
  server: Server;

  private counterInterval = interval(5000);

  create(createEventDto: CreateEventDto) {
    console.log('create');
    return 'This action adds a new event';
  }

  findAll(): Observable<WsResponse<number>> {
    return this.counterInterval.pipe(
      map((item) => ({ event: 'events', data: 1500 + item })),
    );
  }

  findOne(id: number) {
    console.log('find one');
    return `This action returns a #${id} event`;
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    console.log('update');
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    console.log('remove');
    return `This action removes a #${id} event`;
  }
}
