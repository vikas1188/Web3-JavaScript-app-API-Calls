var abi;
var myContractInstance;
var MyContract;
var web3;
function startApp(web2,abi2,MyContract2,myContractInstance2){
	
	console.error("startup");
	      abi=abi2;
	      MyContract=MyContract2;
	      myContractInstance=myContractInstance2;
	      web3 = web2;
}

function version(){
var version = web3.version.api;
document.getElementById('version').innerHTML = ""+version;
	console.log(version); // "0.2.0"

}

function node(){
	var version = web3.version.getNode(function(error, result){
		if(!error){
			document.getElementById('node').innerHTML = ""+result;
			console.log(result); // "0.2.0"
		}else{
			console.err(error);
		}
	});
}

function ethereum(){
	var version = web3.version.getEthereum(function(error, result){
		if(!error){
			document.getElementById('ethereum').innerHTML = ""+result;
			console.log(result); 
		}else{
			console.err(error);
		}
	});
}
function whisper(){
	var version = web3.version.getWhisper(function(error, result){
		if(!error){
			document.getElementById('whisper').innerHTML = ""+result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});
}
function isConnected(){
	var version = web3.isConnected;
	document.getElementById('Connected').innerHTML = ""+version;
		console.log(version); // "0.2.0"

	}


function currentProvider(){
	var version = web3.currentProvider(function(error, result){
		if(!error){
			document.getElementById('whisper').innerHTML = ""+result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});
}

function sha3(){
	var sha3var = document.getElementById('SHA3_1').value;
	var version = web3.sha3(sha3var);
//	var version = web3.sha3(sha3var, {encoding: 'hex'}); // either of them shall work
	document.getElementById('sha3').innerHTML = ""+version;
		console.log(version); // "0.2.0"

	}


function toHex(){
	var toHexvar = document.getElementById('Hex_1').value;
	var version = web3.toHex(toHexvar);
	document.getElementById('toHex').innerHTML = ""+version;
		console.log(version); // "0.2.0"

	}


function toAscii(){
	var toAsciivar= document.getElementById('toAscii_1').value;
	var version = web3.toAscii(toAsciivar);
	document.getElementById('toAscii').innerHTML = ""+version;
		console.log(version); // "0.2.0"

	}


function fromAscii(){
	var fromAsciivar= document.getElementById('fromAscii_1').value;
	var version = web3.fromAscii(fromAsciivar);
//	var version = web3.fromAscii('ethereum', 32); //this is not working, padding should append ZEROs, but it ain't.
	document.getElementById('fromAscii').innerHTML = ""+version;
		console.log(version); // "0.2.0"

	}


function toDecimal(){
	var toDecimalvar= document.getElementById('toDecimal_1').value;
	var version = web3.toDecimal(toDecimalvar);
	document.getElementById('toDecimal').innerHTML = ""+version;
		console.log(version); // "0.2.0"

	}



function fromDecimal(){
	var fromDecimalvar= document.getElementById('fromDecimal_1').value;
	var version = web3.fromDecimal(fromDecimalvar);
	document.getElementById('fromDecimal').innerHTML = ""+version;
		console.log(version); // "0.2.0"

	}



function fromWei(){
	var fromWeivar= document.getElementById('fromWei_1').value;
	var version = web3.fromWei(fromWeivar, 'Ether');
	document.getElementById('fromWei').innerHTML = ""+version;
		console.log(version); // "0.2.0"

	}

function toWei(){
	var toWeivar= document.getElementById('toWei_1').value;
	var version = web3.toWei(toWeivar, 'Ether');
	document.getElementById('toWei').innerHTML = ""+version;
		console.log(version); // "0.2.0"

	}


function toBigNumber(){
	var toBigNumbervar= document.getElementById('toBigNumber_1').value;
	var version = web3.toBigNumber(toBigNumbervar);
	document.getElementById('toBigNumber').innerHTML = ""+version+", "+version.toNumber()+", "+version.toString(10);
		console.log(version); // "0.2.0"
		console.log(version.toNumber()); // 2.0000000000000002e+23
		console.log(version.toString(10)); // '200000000000000000000001'

	}


function listening(){
	var version = web3.net.getListening(function(error, result){
		if(!error){
			document.getElementById('listening').innerHTML = ""+result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});
}

function peerCount(){
	var version = web3.net.getPeerCount(function(error, result){
		if(!error){
			document.getElementById('peerCount').innerHTML = ""+result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});
}


function defaultAccount(){
	var version = web3.eth.defaultAccount;
	document.getElementById('defaultAccount').innerHTML = ""+version;
		console.log(version); // "0.2.0"

	}


function defaultBlock(){
	var version = web3.eth.defaultBlock;
	document.getElementById('defaultBlock').innerHTML = ""+version;
		console.log(version); // "0.2.0"

	}

function coinbase(){
	var version = web3.eth.coinbase;
	document.getElementById('coinbase').innerHTML = ""+version;
		console.log(version); // "0.2.0"

	}

function mining(){
	var version = web3.eth.getMining(function(error, result){
		if(!error){
			document.getElementById('mining').innerHTML = ""+result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});

}

function hashrate(){
	var version = web3.eth.getHashrate(function(error, result){
		if(!error){
			document.getElementById('hashrate').innerHTML = ""+result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});

}



function getGasPrice(){
	var version = web3.eth.getGasPrice(function(error, result){
		if(!error){
			document.getElementById('getGasPrice').innerHTML = ""+result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});

}


function accounts(){
	var version = web3.eth.getAccounts(function(error, result){
		if(!error){
			document.getElementById('accounts').innerHTML = ""+result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});

}


function getBlockNumber(){
	var version = web3.eth.getBlockNumber(function(error, result){
		if(!error){
			document.getElementById('getBlockNumber').innerHTML = ""+result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});

}

function getBalance(){
	var version = web3.eth.getBalance(web3.eth.defaultAccount, function(error, result){
		if(!error){
			document.getElementById('getBalance').innerHTML = ""+result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});

}


function getCode(){
	var getCodevar= document.getElementById('getCode_1').value;
	var version = web3.eth.getCode(getCodevar, function(error, result){
		if(!error){
			document.getElementById('getCode').innerHTML = ""+result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});

}



function getBlock(){
	var getBlockvar= document.getElementById('getBlock_1').value;
	var version = web3.eth.getBlock(getBlockvar, function(error, result){
		if(!error){
			document.getElementById('getBlock').innerHTML = result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});

}


function getBlockTransactionCount(){
	var getBlockTransactionCountvar= document.getElementById('getBlockTransactionCount_1').value;
	var version = web3.eth.getBlockTransactionCount(getBlockTransactionCountvar, function(error, result){
		if(!error){
			document.getElementById('getBlockTransactionCount').innerHTML = result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});

}


function getUncle(){
	var getUnclevar= document.getElementById('getUncle_1').value;
	var version = web3.eth.getUncle(getUnclevar, 0, function(error, result){
		if(!error){
			document.getElementById('getUncle').innerHTML = result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});

}


function getTransaction(){
	var getTransactionvar= document.getElementById('getTransaction_1').value;
	var version = web3.eth.getTransaction(getTransactionvar, function(error, result){
		if(!error){
			document.getElementById('getTransaction').innerHTML = result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});

}


function getTransactionFromBlock(){
	var getTransactionFromBlockvar= document.getElementById('getTransactionFromBlock_1').value;
	var geindex= document.getElementById('getTransactionFromBlock_2').value;
	var version = web3.eth.getTransactionFromBlock(getTransactionFromBlockvar,geindex, function(error, result){
		if(!error){
			document.getElementById('getTransactionFromBlock').innerHTML = result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});

}

function getTransactionReceipt(){
	var getTransactionReceiptvar= document.getElementById('getTransactionReceipt_1').value;
	var version = web3.eth.getTransactionReceipt(getTransactionReceiptvar, function(error, result){
		if(!error){
			document.getElementById('getTransactionReceipt').innerHTML = result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});

}

function getTransactionCount(){
	var getTransactionCountvar= document.getElementById('getTransactionCount_1').value;
	var version = web3.eth.getTransactionCount(getTransactionCountvar, function(error, result){
		if(!error){
			document.getElementById('getTransactionCount').innerHTML = result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});

}


function sendTransaction(){
	var sendTransactionvar= document.getElementById('sendTransaction_1').value;
	var version = web3.eth.sendTransaction(
			{from: sendTransactionvar, 
				to: '0x2Ee5070EC1f7322a4911fFB7C745B238EA51faf0', value: 1000000000000,
				data: '0xee49f68d158be1f3888a990661731103a87e1687cb03b1364e4611daadfd6ab2',
				gas: 600000}, function(error, result){
		if(!error){
			document.getElementById('sendTransaction').innerHTML = result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});

}



function sign(){
	var signvar= document.getElementById('sign_1').value;
	var version = web3.eth.sign(signvar,'0x8f2cd71f7d49ec00d80bc5d916d54b0c103d8694895cedab53083220d9fdf7f5',
				 function(error, result){
		if(!error){
			document.getElementById('sign').innerHTML = result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});

}



function call(){
	var callvar= document.getElementById('call_1').value;
	var version = web3.eth.call({ 
		to: '0x2Ee5070EC1f7322a4911fFB7C745B238EA51faf0',
		data: '0xee49f68d158be1f3888a990661731103a87e1687cb03b1364e4611daadfd6ab2'},
				 function(error, result){
		if(!error){
			document.getElementById('call').innerHTML = result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});

}



function estimateGas(){
	var estimateGasvar= document.getElementById('estimateGas_1').value;
	var version = web3.eth.estimateGas({ from: estimateGasvar,
		to: '0x2Ee5070EC1f7322a4911fFB7C745B238EA51faf0',
		data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003', value:10000000000},
				 function(error, result){
		if(!error){
			document.getElementById('estimateGas').innerHTML = result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});

}


function getCompilers(){
	var version = web3.eth.getCompilers(function(error, result){
		if(!error){
			document.getElementById('getCompilers').innerHTML = result;
			console.log(result); 
		}else{
			console.error(error);
		}
	});

}

