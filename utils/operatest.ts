const base58 = require('bs58')
const nemonic = "ecology tone orange sell expect live goddess banner dash exhaust wrap market"


const { Secp256k1HdWallet } = require('@cosmjs/amino')
const derivateSecp256k1PubKey = async function () {
  const secp256k1 = await Secp256k1HdWallet.fromMnemonic(nemonic, {prefix: 'ixo'} )
  const accounts = await secp256k1.getAccounts()
  const pubkeyBase58 = base58.encode(accounts[0].pubkey)
  console.log("pubkeyBase58 (@cosmjs/amino)", pubkeyBase58)
  console.log("address (@cosmjs/amino)", accounts[0].address)
}
derivateSecp256k1PubKey()








export async function main() {
    console.log("in main() of client.ts")
}