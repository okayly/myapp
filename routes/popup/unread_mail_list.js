var express = require('express');
var router = express.Router();

var moment = require('moment');

/* GET mail listing. */
router.get('/', function(req, res, next) {
	// console.log('req', req);
	var recv_uuid = req.query.uuid;
	console.log('uuid', recv_uuid);
	// GT_MAIL define
	var gt_mail = db.define('GT_MAIL', {
		MAIL_ID					: { type: sequelize.BIGINT, allowNull:false, unique:true, primaryKey:true, autoIncrement:true },
		UUID					: { type: sequelize.BIGINT, allowNull: false },
		MAIL_SENDER				: { type:sequelize.BIGINT, allowNull: false, defaultValue: 0 },
		MAIL_TYPE				: { type: sequelize.STRING, allowNull: false, defaultValue: 'Text' },
		MAIL_ICON_TYPE			: { type: sequelize.INTEGER, allowNull: false, defaultValue: 0 },
		MAIL_ICON_ITEM_ID		: { type: sequelize.INTEGER, allowNull: false, defaultValue: 0 },
		MAIL_ICON_COUNT			: { type: sequelize.INTEGER, allowNull: false, defaultValue: 0 },
		MAIL_STRING_ID			: { type: sequelize.INTEGER, allowNull: false, defaultValue: 0 },
		MAIL_STRING_VALUE_LIST	: { type:sequelize.STRING, allowNull: true, defaultValue: null },
		MAIL_SUBJECT			: { type:sequelize.STRING, allowNull: true, defaultValue: null },
		MAIL_CONTENTS			: { type:sequelize.STRING(1024), allowNull: true, defaultValue: null },
		MAIL_READ_YN			: { type: sequelize.BOOLEAN, allowNull: false, defaultValue: false },
		MAIL_READ_DATE			: { type:sequelize.DATE, allowNull: true, defaultValue: null },
		REWARD1_TYPE			: { type:sequelize.INTEGER, allowNull: false, defaultValue: 0 },
		REWARD1_ITEM_ID			: { type:sequelize.INTEGER, allowNull: false, defaultValue: 0 },
		REWARD1_COUNT			: { type:sequelize.INTEGER, allowNull: false, defaultValue: 0 },
		REWARD2_TYPE			: { type:sequelize.INTEGER, allowNull: false, defaultValue: 0 },
		REWARD2_ITEM_ID			: { type:sequelize.INTEGER, allowNull: false, defaultValue: 0 },
		REWARD2_COUNT			: { type:sequelize.INTEGER, allowNull: false, defaultValue: 0 },
		REWARD3_TYPE			: { type:sequelize.INTEGER, allowNull: false, defaultValue: 0 },
		REWARD3_ITEM_ID			: { type:sequelize.INTEGER, allowNull: false, defaultValue: 0 },
		REWARD3_COUNT			: { type:sequelize.INTEGER, allowNull: false, defaultValue: 0 },
		REWARD4_TYPE			: { type:sequelize.INTEGER, allowNull: false, defaultValue: 0 },
		REWARD4_ITEM_ID			: { type:sequelize.INTEGER, allowNull: false, defaultValue: 0 },
		REWARD4_COUNT			: { type:sequelize.INTEGER, allowNull: false, defaultValue: 0 },
		REWARD5_TYPE			: { type:sequelize.INTEGER, allowNull: false, defaultValue: 0 },
		REWARD5_ITEM_ID			: { type:sequelize.INTEGER, allowNull: false, defaultValue: 0 },
		REWARD5_COUNT			: { type:sequelize.INTEGER, allowNull: false, defaultValue: 0 },
		EXIST_YN				: { type:sequelize.BOOLEAN, allowNull: true, defaultValue: true },
		REG_DATE				: { type: sequelize.DATE, allowNull: false, defaultValue: sequelize.fn('now') }
	}, { timestamps: false });

	// GT_MAIL select
	// 메일 최대 보관 기간 : 15일
	// 메일 최대 보관수(서버) : 500개
	gt_mail.findAndCountAll({
		where : { UUID : recv_uuid, MAIL_READ_YN : false, EXIST_YN : true },
		order : 'MAIL_READ_YN asc, REG_DATE desc'
	})
	.then(function (p_ret_mail) {
		// console.log('p_ret_mail:', p_ret_mail);
		res.render('popup/unread_mail_list', {
			title : 'Un Read MAIL LIST',
			uuid : recv_uuid,
			mail_count : p_ret_mail.count,
			mail_list : p_ret_mail.rows,
			moment : moment
		});
	})
	.error(function (p_error) {
		console.log('Error', p_error);
	});
});

//------------------------------------------------------------------------------------------------------------------
module.exports = router;