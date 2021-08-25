const http = require('http');

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'application/csv' });
	res.write('id', 'Data');
	res.write('1', 'Hola mundo[\n');
	res.write('2', 'Hola mundo2\n');
	res.write('3', 'Hola mundo3\n');
	res.end();
});

server.listen(8080, () => {
	console.log('Corriendo en el puertinho');
});
