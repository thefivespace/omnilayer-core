"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

/* eslint-disable no-inline-comments */

/**
 * Module dependencies.
 */

/**
 * Export available rpc methods.
 */
var _default = {
  abandonTransaction: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.12.0'
  },
  abortRescan: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.15.0'
  },
  addMultiSigAddress: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.1.0'
  },
  addNode: {
    category: 'network',
    version: '>=0.8.0'
  },
  addWitnessAddress: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.13.0 <0.18.0'
  },
  analyzePsbt: {
    category: 'rawtransactions',
    version: '>=0.18.0'
  },
  backupWallet: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.3.12'
  },
  bumpFee: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.14.0'
  },
  clearBanned: {
    category: 'network',
    version: '>=0.12.0'
  },
  combinePsbt: {
    category: 'rawtransactions',
    version: '>=0.17.0'
  },
  combineRawTransaction: {
    category: 'rawtransactions',
    version: '>=0.15.0'
  },
  convertToPsbt: {
    category: 'rawtransactions',
    version: '>=0.17.0'
  },
  createMultiSig: {
    category: 'util',
    version: '>=0.1.0'
  },
  createPsbt: {
    category: 'rawtransactions',
    version: '>=0.17.0'
  },
  createRawTransaction: {
    category: 'rawtransactions',
    version: '>=0.7.0'
  },
  createWallet: {
    category: 'wallet',
    version: '>=0.17.0'
  },
  createWitnessAddress: {
    category: 'wallet',
    version: '=0.13.0'
  },
  decodePsbt: {
    category: 'rawtransactions',
    version: '>=0.17.0'
  },
  decodeRawTransaction: {
    category: 'rawtransactions',
    version: '>=0.7.0'
  },
  decodeScript: {
    category: 'rawtransactions',
    version: '>=0.9.0'
  },
  deriveAddresses: {
    category: 'util',
    version: '>=0.18.0'
  },
  disconnectNode: {
    category: 'network',
    version: '>=0.12.0'
  },
  dumpPrivKey: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    obfuscate: {
      response: () => '******'
    },
    version: '>=0.6.0'
  },
  dumpWallet: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.9.0'
  },
  encryptWallet: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    obfuscate: {
      request: {
        default: params => (0, _lodash.set)([...params], '[0]', '******'),
        named: params => (0, _lodash.set)(params, 'passphrase', '******')
      }
    },
    version: '>=0.1.0'
  },
  estimateFee: {
    category: 'util',
    version: '>=0.10.0'
  },
  estimatePriority: {
    category: 'util',
    version: '>=0.10.0 <0.15.0'
  },
  estimateSmartFee: {
    category: 'util',
    version: '>=0.12.0'
  },
  estimateSmartPriority: {
    category: 'util',
    version: '>=0.12.0 <0.15.0'
  },
  finalizePsbt: {
    category: 'rawtransactions',
    version: '>=0.17.0'
  },
  fundRawTransaction: {
    category: 'rawtransactions',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.12.0'
  },
  generate: {
    category: 'generating',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.11.0'
  },
  generateToAddress: {
    category: 'generating',
    version: '>=0.13.0'
  },
  getAccount: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0 <0.18.0'
    },
    version: '>=0.1.0 <0.18.0'
  },
  getAccountAddress: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0 <0.18.0'
    },
    version: '>=0.3.18 <0.18.0'
  },
  getAddedNodeInfo: {
    category: 'network',
    version: '>=0.8.0'
  },
  getAddressInfo: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.17.0'
    },
    version: '>=0.17.0'
  },
  getAddressesByAccount: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0 <0.18.0'
    },
    version: '>=0.1.0 <0.18.0'
  },
  getAddressesByLabel: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.17.0'
    },
    version: '>=0.17.0'
  },
  getBalance: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.3.18'
  },
  getBestBlockHash: {
    category: 'blockchain',
    version: '>=0.9.0'
  },
  getBlock: {
    category: 'blockchain',
    version: '>=0.6.0'
  },
  getBlockCount: {
    category: 'blockchain',
    version: '>=0.1.0'
  },
  getBlockHash: {
    category: 'blockchain',
    version: '>=0.6.0'
  },
  getBlockHeader: {
    category: 'blockchain',
    version: '>=0.12.0'
  },
  getBlockStats: {
    category: 'blockchain',
    version: '>=0.17.0'
  },
  getBlockTemplate: {
    category: 'mining',
    version: '>=0.7.0'
  },
  getBlockchainInfo: {
    category: 'blockchain',
    version: '>=0.9.2'
  },
  getChainTips: {
    category: 'blockchain',
    version: '>=0.10.0'
  },
  getChainTxStats: {
    category: 'blockchain',
    version: '>=0.15.0'
  },
  getConnectionCount: {
    category: 'network',
    version: '>=0.1.0'
  },
  getDescriptorInfo: {
    category: 'util',
    version: '>=0.18.0'
  },
  getDifficulty: {
    category: 'blockchain',
    version: '>=0.1.0'
  },
  getGenerate: {
    category: 'generating',
    version: '<0.13.0'
  },
  getHashesPerSec: {
    category: 'blockchain',
    version: '<0.10.0'
  },
  getInfo: {
    category: 'control',
    version: '>=0.1.0 <0.16.0'
  },
  getMemoryInfo: {
    category: 'control',
    version: '>=0.14.0'
  },
  getMempoolAncestors: {
    category: 'blockchain',
    version: '>=0.13.0'
  },
  getMempoolDescendants: {
    category: 'blockchain',
    version: '>=0.13.0'
  },
  getMempoolEntry: {
    category: 'blockchain',
    version: '>=0.13.0'
  },
  getMempoolInfo: {
    category: 'blockchain',
    version: '>=0.10.0'
  },
  getMiningInfo: {
    category: 'mining',
    version: '>=0.6.0'
  },
  getNetTotals: {
    category: 'network',
    version: '>=0.1.0'
  },
  getNetworkHashPs: {
    category: 'mining',
    version: '>=0.9.0'
  },
  getNetworkInfo: {
    category: 'network',
    version: '>=0.9.2'
  },
  getNewAddress: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.1.0'
  },
  getNodeAddresses: {
    category: 'network',
    version: '>=0.18.0'
  },
  getPeerInfo: {
    category: 'network',
    version: '>=0.7.0'
  },
  getRawChangeAddress: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.9.0'
  },
  getRawMempool: {
    category: 'blockchain',
    version: '>=0.7.0'
  },
  getRawTransaction: {
    category: 'rawtransactions',
    version: '>=0.7.0'
  },
  getReceivedByAccount: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0 <0.18.0'
    },
    version: '>=0.1.0 <0.18.0'
  },
  getReceivedByAddress: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.1.0'
  },
  getReceivedByLabel: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.17.0'
    },
    version: '>=0.17.0'
  },
  getRpcInfo: {
    category: 'control',
    version: '>=0.18.0'
  },
  getTransaction: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.1.0'
  },
  getTxOut: {
    category: 'blockchain',
    version: '>=0.7.0'
  },
  getTxOutProof: {
    category: 'blockchain',
    version: '>=0.11.0'
  },
  getTxOutSetInfo: {
    category: 'blockchain',
    version: '>=0.7.0'
  },
  getUnconfirmedBalance: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.9.0'
  },
  getWalletInfo: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.9.2'
  },
  getWork: {
    category: 'blockchain',
    version: '<0.10.0'
  },
  getZmqNotifications: {
    category: 'control',
    version: '>=0.17.0'
  },
  help: {
    category: 'control',
    version: '>=0.1.0'
  },
  importAddress: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.10.0'
  },
  importMulti: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    obfuscate: {
      request: {
        default: params => (0, _lodash.set)(params, '[0]', (0, _lodash.map)(params[0], request => (0, _lodash.set)(request, 'keys', (0, _lodash.map)(request.keys, () => '******')))),
        named: params => (0, _lodash.set)(params, 'requests', (0, _lodash.map)(params.requests, request => (0, _lodash.set)(request, 'keys', (0, _lodash.map)(request.keys, () => '******'))))
      }
    },
    version: '>=0.14.0'
  },
  importPrivKey: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    obfuscate: {
      request: {
        default: () => ['******'],
        named: params => (0, _lodash.set)(params, 'privkey', '******')
      }
    },
    version: '>=0.6.0'
  },
  importPrunedFunds: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.13.0'
  },
  importPubKey: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.12.0'
  },
  importWallet: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.9.0'
  },
  joinPsbts: {
    category: 'rawtransactions',
    version: '>=0.18.0'
  },
  keypoolRefill: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.1.0'
  },
  listAccounts: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0 <0.18.0'
    },
    version: '>=0.1.0 <0.18.0'
  },
  listAddressGroupings: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.7.0'
  },
  listBanned: {
    category: 'network',
    version: '>=0.12.0'
  },
  listLabels: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.17.0'
    },
    version: '>=0.17.0'
  },
  listLockUnspent: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.8.0'
  },
  listReceivedByAccount: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0 <0.18.0'
    },
    version: '>=0.1.0 <0.18.0'
  },
  listReceivedByAddress: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.1.0'
  },
  listReceivedByLabel: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.17.0'
    },
    version: '>=0.17.0'
  },
  listSinceBlock: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.5.0'
  },
  listTransactions: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.3.18'
  },
  listUnspent: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.7.0'
  },
  listWalletDir: {
    category: 'wallet',
    version: '>=0.18.0'
  },
  listWallets: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.15.0'
  },
  loadWallet: {
    category: 'wallet',
    version: '>=0.17.0'
  },
  lockUnspent: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.8.0'
  },
  logging: {
    version: '>=0.17.0'
  },
  move: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.3.18'
  },
  ping: {
    category: 'network',
    version: '>=0.9.0'
  },
  preciousBlock: {
    category: 'blockchain',
    version: '>=0.14.0'
  },
  prioritiseTransaction: {
    category: 'mining',
    version: '>=0.10.0'
  },
  pruneBlockchain: {
    category: 'blockchain',
    version: '>=0.14.0'
  },
  removePrunedFunds: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.13.0'
  },
  rescanBlockchain: {
    category: 'wallet',
    version: '>=0.16.0'
  },
  saveMempool: {
    category: 'blockchain',
    version: '>=0.16.0'
  },
  scantxoutset: {
    category: 'blockchain',
    version: '=>0.17.0'
  },
  sendFrom: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.3.18'
  },
  sendMany: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.3.21'
  },
  sendRawTransaction: {
    category: 'rawtransactions',
    version: '>=0.7.0'
  },
  sendToAddress: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.1.0'
  },
  setAccount: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0 <0.18.0'
    },
    version: '>=0.1.0 <0.18.0'
  },
  setBan: {
    category: 'network',
    version: '>=0.12.0'
  },
  setGenerate: {
    category: 'generating',
    version: '<0.13.0'
  },
  setHdSeed: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.17.0'
    },
    obfuscate: {
      request: {
        default: params => (0, _lodash.set)([...params], '[1]', '******'),
        named: params => (0, _lodash.set)(params, 'seed', '******')
      }
    },
    version: '>=0.17.0'
  },
  setLabel: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.17.0'
    },
    version: '>=0.17.0'
  },
  setNetworkActive: {
    category: 'network',
    version: '>=0.14.0'
  },
  setTxFee: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.3.22'
  },
  signMessage: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.5.0'
  },
  signMessageWithPrivKey: {
    category: 'util',
    obfuscate: {
      request: {
        default: params => (0, _lodash.set)([...params], '[0]', '******'),
        named: params => (0, _lodash.set)(params, 'privkey', '******')
      }
    },
    version: '>=0.13.0'
  },
  signRawTransaction: {
    category: 'rawtransactions',
    obfuscate: {
      request: {
        default: params => (0, _lodash.set)([...params], '[2]', (0, _lodash.map)(params[2], () => '******')),
        named: params => (0, _lodash.set)(params, 'privkeys', (0, _lodash.map)(params.privkeys || [], () => '******'))
      }
    },
    version: '>=0.7.0 <0.18.0'
  },
  signRawTransactionWithKey: {
    category: 'rawtransactions',
    obfuscate: {
      request: {
        default: params => (0, _lodash.set)([...params], '[1]', (0, _lodash.map)(params[1], () => '******')),
        named: params => (0, _lodash.set)(params, 'privkeys', (0, _lodash.map)(params.privkeys || [], () => '******'))
      }
    },
    version: '>=0.17.0'
  },
  signRawTransactionWithWallet: {
    category: 'rawtransactions',
    features: {
      multiwallet: '>=0.17.0'
    },
    version: '>=0.17.0'
  },
  stop: {
    category: 'control',
    version: '>=0.1.0'
  },
  submitBlock: {
    category: 'mining',
    version: '>=0.7.0'
  },
  testMempoolAccept: {
    category: 'blockchain',
    version: '>=0.17.0'
  },
  unloadWallet: {
    category: 'wallet',
    version: '>=0.17.0'
  },
  upTime: {
    category: 'control',
    version: '>=0.15.0'
  },
  utxoUpdatePsbt: {
    category: 'rawtransactions',
    version: '>=0.18.0'
  },
  validateAddress: {
    category: 'util',
    version: '>=0.3.14'
  },
  verifyChain: {
    category: 'blockchain',
    version: '>=0.9.0'
  },
  verifyMessage: {
    category: 'util',
    version: '>=0.5.0'
  },
  verifyTxOutProof: {
    category: 'blockchain',
    version: '>0.11.0'
  },
  walletCreateFundedPsbt: {
    category: 'rawtransactions',
    features: {
      multiwallet: '>=0.17.0'
    },
    version: '>=0.17.0'
  },
  walletLock: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    version: '>=0.1.0'
  },
  walletPassphrase: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    obfuscate: {
      request: {
        default: params => (0, _lodash.set)([...params], '[0]', '******'),
        named: params => (0, _lodash.set)(params, 'passphrase', '******')
      }
    },
    version: '>=0.1.0'
  },
  walletPassphraseChange: {
    category: 'wallet',
    features: {
      multiwallet: '>=0.15.0'
    },
    obfuscate: {
      request: {
        default: params => (0, _lodash.set)((0, _lodash.set)([...params], '[0]', '******'), '[1]', '******'),
        named: params => (0, _lodash.set)((0, _lodash.set)(params, 'oldpassphrase', '******'), 'newpassphrase', '******')
      }
    },
    version: '>=0.1.0'
  },
  walletProcessPsbt: {
    category: 'rawtransactions',
    features: {
      multiwallet: '>=0.17.0'
    },
    version: '>=0.17.0'
  },
  omni_send: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_sendnewdexorder: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_sendupdatedexorder: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_sendcanceldexorder: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_senddexaccept: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_senddexpay: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_sendissuancecrowdsale: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_sendissuancefixed: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_sendissuancemanaged: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_sendsto: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_sendgrant: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_sendrevoke: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_sendclosecrowdsale: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_sendtrade: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_sendcanceltradesbyprice: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_sendcanceltradesbypair: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_sendcancelalltrades: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_sendchangeissuer: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_sendall: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_sendenablefreezing: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_senddisablefreezing: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_sendfreeze: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_sendunfreeze: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_sendrawtx: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_funded_send: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_funded_sendall: {
    category: 'omniTransactionCreation',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getinfo: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getbalance: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getallbalancesforid: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getallbalancesforaddress: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getwalletbalances: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getwalletaddressbalances: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_gettransaction: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_listtransactions: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_listblocktransactions: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_listblockstransactions: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_listpendingtransactions: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getactivedexsells: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_listproperties: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getproperty: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getactivecrowdsales: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getcrowdsale: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getgrants: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getsto: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_gettrade: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getorderbook: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_gettradehistoryforpair: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_gettradehistoryforaddress: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getactivations: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getpayload: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getseedblocks: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getcurrentconsensushash: {
    category: 'omniDataRetrieval',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_decodetransaction: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createrawtx_opreturn: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createrawtx_multisig: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createrawtx_input: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createrawtx_reference: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createrawtx_change: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createpayload_simplesend: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createpayload_sendall: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createpayload_dexsell: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createpayload_dexaccept: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createpayload_sto: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createpayload_issuancefixed: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createpayload_issuancecrowdsale: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createpayload_issuancemanaged: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createpayload_closecrowdsale: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createpayload_grant: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createpayload_revoke: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createpayload_changeissuer: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createpayload_trade: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createpayload_canceltradesbyprice: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createpayload_canceltradesbypair: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createpayload_cancelalltrades: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createpayload_enablefreezing: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createpayload_disablefreezing: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createpayload_freeze: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_createpayload_unfreeze: {
    category: 'omniRawTransactions',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getfeecache: {
    category: 'omniFeeSystem',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getfeetrigger: {
    category: 'omniFeeSystem',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getfeeshare: {
    category: 'omniFeeSystem',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getfeedistribution: {
    category: 'omniFeeSystem',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_getfeedistributions: {
    category: 'omniFeeSystem',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
  omni_setautocommit: {
    category: 'omniConfiguration',
    features: {
      multiwallet: '>=0.1.0'
    },
    version: '>=0.1.0'
  },
};
exports.default = _default;