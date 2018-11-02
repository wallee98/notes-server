
module.exports = {
	STATUS_CODE_SUCCESS:200,
	STATUS_CODE_ERROR_REQUEST:400, 
	STATUS_CODE_UNAUTHORIZED:401,
	STATUS_CODE_FORBID:403,
	STATUS_CODE_NOT_FOUND:404,
	STATUS_CODE_CONFLICT:409,

	                            // LOG_TYPE
	LOG_TYPE_REQUEST_ELAPSED:1, // 请求耗时统计日志
	LOG_TYPE_SYSTEM:2,          // 系统错误日志
	LOG_TYPE_FRAME:3,           // 框架错误日志
	LOG_TYPE_APPLICATION:4,     // 应用错误日志
	LOG_TYPE_DEFAULT:100,       // 默认类型

	// 用户访问权限
	USER_ACCESS_LEVEL_NONE:0,  // 无权限
	USER_ACCESS_LEVEL_READ:32, // 读权限
	USER_ACCESS_LEVEL_WRITE:64,// 写权限

	// 实体类型
	ENTITY_TYPE_USER:0,        // 用户类型
	ENTITY_TYPE_SITE:1,        // 站点类型
	ENTITY_TYPE_PAGE:2,        // 页面类型
	ENTITY_TYPE_GROUP:3,       // 组
	ENTITY_TYPE_ISSUE:4,       // 问题
	ENTITY_TYPE_PROJECT:5,     // 项目

	// 对象可见性
	ENTITY_VISIBILITY_PUBLIC:0,   // 公开
	ENTITY_VISIBILITY_PRIVATE:1,  // 私有
	ENTITY_VISIBILITY_ONLY_OWN:2, // 仅拥有者

	// 服务类型
	OAUTH_SERVICE_TYPE_QQ:0,      // QQ
	OAUTH_SERVICE_TYPE_WEIXIN:1,  // 微信
	OAUTH_SERVICE_TYPE_GITHUB:2,  // GITHUB
	OAUTH_SERVICE_TYPE_XINLANG:3, // 新浪

	// 角色
	USER_ROLE_NORMAL:0,     // 普通
	USER_ROLE_EXCEPTION:1,  // 异常
	USER_ROLE_VIP:4,        // vip
	USER_ROLE_MANAGER:64,   // 管理者
	USER_ROLE_ADMIN:128,    // 超管

	// 通知状态
	NOTIFICATION_STATE_UNREAD:0, // 未读
	NOTIFICATION_STATE_READ:1,   // 已读
	
	// 通知类型
	NOTIFICATION_TYPE_USER:0,  // 用户级别通知
	NOTIFICATION_TYPE_SITE:1,  // 站点级别通知
	NOTIFICATION_TYPE_PAGE:2,  // 页面级别通知

	// 审核状态
	QINIU_AUDIT_STATE_NO_AUDIT:0,  // 未审核
	QINIU_AUDIT_STATE_PASS:1,      // 审核通过
	QINIU_AUDIT_STATE_NOPASS:2,    // 审核未通过
	QINIU_AUDIT_STATE_FAILED:3,    // 审核失败

	// 申请状态
	APPLY_STATE_DEFAULT:0,   // 待处理状态
	APPLY_STATE_AGREE:1,     // 同意
	APPLY_STATE_REFUSE:2,    // 拒绝

	// 申请类型
	APPLY_TYPE_MEMBER:0,     // 成员申请

	                       // 交易状态
	TRADE_STATE_START:0,   // 交易开始
	TRADE_STATE_PAYING:1,  // 交易进行中
	TRADE_STATE_SUCCESS:2, // 交易成功
	TRADE_STATE_FAILED:4,  // 交易失败
	TRADE_STATE_FINISH:8,  // 交易完成
	TRADE_STATE_REFUNDING:16, // 交易退款中
	TRADE_STATE_REFUND_SUCCESS:32, // 交易退款完成
	TRADE_STATE_REFUND_FAILED:64, // 退款失败
	TRADE_STATE_CHARGING:128, // 交易充值中
	TRADE_STATE_CHARGE_SUCCESS:256, // 交易充值完成
	TRADE_STATE_CHARGE_FAILED:512, // 交易充值失败

	// 交易类型
	TRADE_TYPE_CHARGE:0,  // 充值
	TRADE_TYPE_EXPENSE:1, // 消费

	TAG_TYPE_COMPONENT:0, // 组件tag
	TAG_TYPE_PAGE:1,      // 页面tag

	ISSUE_STATE_OPEN:0,   // 打开状态
	ISSUE_STATE_CLOSED:1, // 关闭状态

	SOCKET_CMD_ECHO:0,    // echo 
	SOCKET_CMD_MSG:1,     // 消息
	SOCKET_CMD_SESSION:2, // 会话
}



