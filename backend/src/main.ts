import dotenv from 'dotenv';
import server from './server';

dotenv.config();

async function main() {
  server.listen(server.get('port'));
  console.log('Server on port', server.get('port'));
}
main();