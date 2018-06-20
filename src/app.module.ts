import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TxBroadcastModule } from './TxBroadcast/TxBroadcast.module';

@Module({
  imports: [TxBroadcastModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
