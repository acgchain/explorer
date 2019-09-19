const networks = {
  public: 'public',
  test: 'test',
  local: 'local',
}

const hostnameToNetworkType = hostname => {
  if (hostname === 'saipanchain.io' )
    return networks.public
  else if (hostname === 'testnet.local')
    return networks.test
  else return networks.local
}

export {networks as default, hostnameToNetworkType} 
