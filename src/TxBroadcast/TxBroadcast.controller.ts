import { Controller, Post, Param } from '@nestjs/common';

@Controller('TxBroadcast')
export class TxBroadcastController {
  @Post()
  sendRaw() {
    try {
      
      return 'ok';
    } catch (e) {
      return [];
    }
  }
}