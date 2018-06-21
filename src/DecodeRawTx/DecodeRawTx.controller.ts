import { Controller, Post, Body, Response, Param } from '@nestjs/common';
import * as txDecoder from 'ethereum-tx-decoder';


@Controller('DecodeRawTx')
export class DecodeRawTxController {
  @Post()
  decodeRaw(@Body() data) {
    console.log(txDecoder.decodeTx(data.rawTx))
    return txDecoder.decodeTx(data.rawTx);
  }
}