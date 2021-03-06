// 3p
import { Connection, createConnection } from '@foal/typeorm/node_modules/typeorm';

// FoalTS
import { Class } from '@foal/core';

export function createTestConnection(entities: Class[], name?: string): Promise<Connection> {
  return createConnection({
    database: 'e2e_db.sqlite',
    dropSchema: true,
    entities,
    synchronize: true,
    type: 'better-sqlite3',
    name
  });
}
