const http = require('http');
const cors = require('cors');
const os = require('os');

const getCpuAndOsInfo = () => {
	    const cpuInfo = {
		            architecture: os.arch(),
		            cpus: os.cpus(),
		            totalMemory: os.totalmem(),
		            freeMemory: os.freemem(),
		            osType: os.type(),
		            osPlatform: os.platform(),
		            osRelease: os.release(),
		        };
	    return cpuInfo;
};

const server = http.createServer((req, res) => {
	    cors()(req, res, () => {
		            if (req.method === 'GET' && req.url === '/info') {
				                const info = getCpuAndOsInfo();
				                res.writeHead(200, { 'Content-Type': 'application/json' });
				                res.end(JSON.stringify(info));
				            } else {
						                res.writeHead(200, { 'Content-Type': 'text/plain' });
						                res.end('Hello, Welcome to this site!\n Add /info to the path to view cpu and os details');
						            }
		        });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
	    console.log(`Server is running on port ${PORT}`);
});

