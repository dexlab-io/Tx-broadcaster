import { Module } from '@nestjs/common';
import { TxBroadcastController } from './TxBroadcast.controller';

@Module({
  imports: [],
  controllers: [TxBroadcastController],
  components: [],
})
export class TxBroadcastModule {}
