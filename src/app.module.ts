import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TxBroadcastModule } from './TxBroadcast/TxBroadcast.module';
import { DecodeRawTxModule } from './DecodeRawTx/DecodeRawTx.module';

@Module({
  imports: [TxBroadcastModule, DecodeRawTxModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
