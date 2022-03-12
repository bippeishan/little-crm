-- 数据库初始化

-- 创建member表
CREATE TABLE IF NOT EXISTS `member`(
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   -- 基础工资
   `base_salary` FLOAT,
   -- 竞业补贴
   `competi_subsidy` FLOAT,
   -- 高管补贴
   `senior_subsidy` FLOAT,
   -- 季度奖金基数
   `quarter_bonus_base` FLOAT,
   -- 年终奖基数
   `year_bonus_base` FLOAT,
   -- 状态: 1正常0已删除
   `status` INT,
   `create_time` TIMESTAMP DEFAULT NOW(),
   `update_time` TIMESTAMP NULL DEFAULT NULL,
   `delete_time` TIMESTAMP NULL DEFAULT NULL,
   PRIMARY KEY ( `id` )
)DEFAULT CHARSET=utf8;