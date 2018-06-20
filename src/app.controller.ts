import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
	@Get()
	root(): string {
    return 'TXs broadcaster for DexWallet 🔥 by <a href="https://www.dexlab.io/">dexlab.io</a>';
  }
}
