import { Controller, Post, Body, Response, Param } from '@nestjs/common';
import web3 from '../services/web3';


@Controller('TxBroadcast')
export class TxBroadcastController {
  @Post()
  sendRaw(@Body() data, @Response() res) {
    try {
      const rawTx = `0x${data.serializedTx}`;
      web3.eth.sendSignedTransaction(rawTx, (err, tx) => {
        if (err) {
          res.send(err, 500);
        }
        res.send(tx, 200);
      })
    } catch (e) {
      console.log('error', e)
      return [];
    }
  }
}