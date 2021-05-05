const { request } = require('../utils');

module.exports = (chain_id, address, query = {}) => {
	const api = `/${chain_id}/address/${address}/balances_v2/`;

	return request(api, query);
};


