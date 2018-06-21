import { Module } from '@nestjs/common';
import { DecodeRawTxController } from './DecodeRawTx.controller';

@Module({
  imports: [],
  controllers: [DecodeRawTxController],
  components: [],
})
export class DecodeRawTxModule {}
