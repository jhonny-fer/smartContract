const Web3 = require("web3");
const app = require('express')()
const bodyParser = require('body-parser')
const multer = require('multer') // v1.0.5
const upload = multer() // for parsing multipart/form-data
const port = 8044

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var jsonParser = bodyParser.json()

app.post('/validar', jsonParser, function (req, res, next) {
 
  try{ 
    var users = req.body; 
    contract.methods.getInfoUser(users.data).call().then( function( tmp ) { 
      console.log("Transaction: ", tmp);
      res.send(tmp);
    }); 


  }
  catch(error){ res.send("No existen resultados");
  }
    
})

app.post('/', jsonParser, function (req, res, next) {//upload.array()
  
 // recip = registerSetInfo(users);
  
	try{
		var users = req.body;

    web3.eth.accounts.wallet.clear();

    var myContract = new web3.eth.Contract(abi, contractAddress, {
      from: users.data["NUMERO_CUENTA"], // default from address
      gasPrice: '00000000001' // default gas price in wei, 20 gwei in this case
  });
  web3.eth.accounts.wallet.add({
    privateKey: users.clave,
    address: users.data["NUMERO_CUENTA"]
});
		//web3.eth.accounts.wallet.add(users.clave)//"3e856a465ee177e2ae0ab44f453040d9854e8560d42785da8548fb1817ce998b

		var from= users.data["NUMERO_CUENTA"];
    
    //users.data["NUMERO_CUENTA"];//'0x0aD6DC970FDC8a7a042AF869BE6998aC9231D11d';//0xb3B2b5cfBE9DFfDfA5F768CD47D11077d9df8037
		
		/*contract = new web3.eth.Contract(abi, contractAddress);
		const get = async () => {
		console.log('Contract: ' + contract._address);
		}*/
		
		var info1 = users.data["ID_ESTUDIANTE"];
		var info2 = users.data["NOMBRE_ESTUDIANTE"];
		var info3 = users.data["APELLIDO_ESTUDIANTE"];
		var info4 = users.data["ID_CURSO"];
		var info5 = users.data["ID_TARJETA"];
		var info6 = users.data["NUMERO_CUENTA"];
		var info7 = users.clave;
		
		console.log("newInfo: ", info1);
		console.log("cuenta: ", from);
		var recip;

		var dato = contract.methods.addNewUser(info1,info2,info3,info4,info5,info6,info7).encodeABI();
		
    recip = web3.eth.sendTransaction({
			from: from,
			to: contractAddress,
			data: dato,
			gas: 3000000 //200000
		}).then(function(tx){
			console.log("Transaction: ", tx);
			//return tx;
			res.send(tx.transactionHash);
		});  
	}catch(error){ res.send("SinResultado");
	}
})

app.listen(port, () => {
  console.log(`Escuchando a http://localhost:${port}`)
})

let web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/6cb59ec50ca34dc4b40a60e63e62b5b0'));  

let contractAddress = "0x2e0E5710E7e079cBa4bEac4Ce20084488d04Fb89";
  const abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_cedula",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_nombreUser",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_apellidoUser",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_curso",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_tarjeta",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_count",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_clave",
          "type": "string"
        }
      ],
      "name": "addNewUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "count",
          "type": "address"
        }
      ],
      "name": "getInfoUser",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "id",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "list",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
