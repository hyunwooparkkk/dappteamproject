// import IPFSClient from 'ipfs-http-client';

// const ipfs =new IPFSClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
// import ipfsClient from 'ipfs-http-client';

// const ipfs = ipfsClient({host: 'localhost:3000', port: '5001'});
// const ipfs = ipfsClient('/ip4/127.0.0.1/tcp/5001')
// import IPFSClient from 'ipfs-http-client';
const IpfsHttpClient = require("ipfs-http-client");
const ipfs = IpfsHttpClient({
    host: "ipfs.infura.io",
    port: "5001",
    protocol: "https",
  });
// const ipfs =  IPFSClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

export default ipfs;




// const ipfsClient = require('ipfs-http-client')
// console.log("여기만",ipfsClient)
// const ipfs = ipfsClient.create({host: 'ipfs.infura.io' , port:'5001', protocol : 'https'})
// console.log("뭔데",ipfs)
// export default ipfs;