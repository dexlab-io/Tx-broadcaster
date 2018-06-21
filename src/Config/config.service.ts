import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

export class ConfigService {
  private readonly envConfig: { [prop: string]: string };

  constructor() {
    this.envConfig = process.env;
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}