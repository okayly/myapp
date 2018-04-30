var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var item_table = db.define('BT_ITEM_BASE', {
			ITEM_ID: { type: sequelize.INTEGER, allowNull: false },
			CATEGORY1: { type: sequelize.INTEGER, allowNull: false },
			CATEGORY2: { type: sequelize.INTEGER, allowNull: false },
			INDEX: { type: sequelize.INTEGER, allowNull: false },
			BUY_COST_GOLD: { type: sequelize.INTEGER, allowNull: false },
			BUY_COST_CASH: { type: sequelize.INTEGER, allowNull: false },
			BUY_COST_POINT: { type: sequelize.INTEGER, allowNull: false },
			SELL_GOLD: { type: sequelize.INTEGER, allowNull: false },
			EQUIP_STATUS_ID: { type: sequelize.INTEGER, allowNull: false },
			LV_RATING_ID: { type: sequelize.INTEGER, allowNull: false },
			EVOLUTION_STATUS_ID: { type: sequelize.INTEGER, allowNull: false },
			PROMOTION_ID: { type: sequelize.INTEGER, allowNull: false },
			HERO_ID: { type: sequelize.INTEGER, allowNull: false },
			EFFECT1_ID: { type: sequelize.INTEGER, allowNull: false },
			EFFECT1_VALUE1: { type: sequelize.INTEGER, allowNull: false },
			EFFECT1_VALUE2: { type: sequelize.INTEGER, allowNull: false },
			EFFECT2_ID: { type: sequelize.INTEGER, allowNull: false },
			EFFECT2_VALUE1: { type: sequelize.INTEGER, allowNull: false },
			EFFECT2_VALUE2: { type: sequelize.INTEGER, allowNull: false },
			EFFECT3_ID: { type: sequelize.INTEGER, allowNull: false },
			EFFECT3_VALUE1: { type: sequelize.INTEGER, allowNull: false },
			EFFECT3_VALUE2: { type: sequelize.INTEGER, allowNull: false },
		}
		, { timestamps: false }
	);

	item_table.findAll().then(function (p_ret) {
		// console.log('p_ret:', p_ret);
		res.render('item_list', { title: 'ITEM LIST', items: p_ret });
	})
	.error(function (p_err) {
		console.log('err:', p_err);
	});
});

module.exports = router;