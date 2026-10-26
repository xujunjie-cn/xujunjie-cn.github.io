// ============================================================
//  站点唯一内容源。
//  改内容只改这个文件，push 后 GitHub Actions 会自动重新部署。
//  口径提示：工作年限统一「1 年多」；不写客户名、不写过程指标。
// ============================================================

export const site = {
  profile: {
    name: '徐俊杰',
    nameEn: 'Xu Junjie',
    tagline: 'Java 后端开发 · 工业软件方向（WMS / MES / ASRS / ERP）',
    badge: '工业软件 · 仓储与供应链',
    location: '深圳',
    avatar: '', // 放 public/avatar.jpg 后改成 '/avatar.jpg'
    bio: '1 年多 Java 后端开发经验，专注工业软件领域的仓储执行与供应链系统。做过 WMS 的备料、分拣、出入库与库存流水，做过 ERP 从采购到结算的全链路建模，也搭过与自动化立体库（ASRS）的双向设备对接。习惯从业务单据出发设计数据模型，在意并发、幂等和统计口径的正确性。',
    facts: [
      { value: '1+', label: '年后端开发' },
      { value: '4', label: '工业软件项目' },
      { value: '8', label: 'WMS 子域' },
    ],
    socials: [
      { label: 'GitHub', url: 'https://github.com/xujunjie-cn' },
    ],
  },

  // 作品：按业务单据/模块归并，突出「做了什么」而不是罗列技术名词
  projects: [
    {
      year: '2026.04 – 至今',
      title: '模块化全生命期管理系统',
      subtitle: '执行层 · WMS / MES',
      role: '仓储模块开发',
      desc: '智能工厂一体化平台的仓储执行模块，覆盖备料、分拣、出库、入库（含入库质检与信息反馈）、库位与载具、缺料申领、库存流水、设备接口 8 个子域。',
      highlights: [
        'ASRS 双向 REST 对接：以出库单号为幂等键防止设备重复回推，事务化接收设备回调，设备反馈自动生成分拣单。完成对接与联调后，因项目分工调整转交维护。',
        '修正库存查询的 SQL 聚合口径：聚合与非聚合字段混用导致换算率取值不确定、数量算错，改用 MAX() 收敛非聚合字段并移除破坏聚合粒度的过滤条件。',
        '三套业务单号改为 Redis INCR 原子自增，键按单据类型隔离，setIfAbsent + 历史最大值播种，解决并发下的重复编号。',
      ],
      tags: ['Java', 'Spring Boot', 'MyBatis', 'Redis', 'MySQL', 'REST'],
    },
    {
      year: '2026.03 – 2026.04 / 2026.09',
      title: '数字能源工厂',
      subtitle: '计划层 · ERP',
      role: '供应链链路开发与模块迁移',
      desc: '打通采购订单 → 发货 → 收货 → 退货 → 支付 → 发票 → 结算 → 库存流水的全链路，用状态机约束支付与结算的流转。',
      highlights: [
        '库存流水台账从零建模：记录变动前后值、来源类型，以及发货重 / 皮重 / 扣重 / 实重与偏差率、偏差状态分流。',
        '2026.09 参与模块化迁移，按目标工程的表结构与编码约定完成存量代码移植。',
      ],
      tags: ['Java', 'Spring Boot', 'MyBatis', 'MySQL', '状态机'],
    },
    {
      year: '2026.03 – 2026.06',
      title: '管理数智化平台',
      subtitle: '管理层 · MIS',
      role: '流程与权限开发',
      desc: '面向管理层的主数据、权限与流程类系统，不参与生产执行链路。',
      highlights: [
        'AI 密钥申请单从零实现：Flowable 工作流驱动审批，审批通过后自动签发密钥。',
        '角色批量授权使用单条 INSERT…SELECT…WHERE NOT EXISTS 完成，避免逐条查询与写入。',
        'AI 网关调用明细与用章申请的查询、导出能力。',
      ],
      tags: ['Java', 'Flowable', 'MyBatis', 'MySQL'],
    },
    {
      year: '2025.03 – 2025.11',
      title: '商贸 SaaS 与商户端',
      subtitle: '业务平台 · SaaS',
      role: '后端开发',
      desc: '面向商户的营销与交易能力平台，覆盖权益、返佣、消息通知与开放平台接入。',
      highlights: [
        '10 类营销权益统一到策略模式引擎下，新增权益类型不必改动主干流程。',
        '修复返佣金额缺陷：百分比被当作倍数参与相乘，属资损级问题，改用 BigDecimal 显式精度与舍入。',
        '用 RabbitMQ 延迟消息实现 VIP 到期提醒，并在到期时做二次校验兜底。',
        '渠道码、券核销（直推 / 间推）、公益捐赠链路，以及开放平台 90 个风控接口的接入。',
      ],
      tags: ['Java', 'Spring Boot', 'RabbitMQ', 'MySQL', 'Redis'],
    },
  ],

  // 经历：按时间倒序
  experience: [
    {
      period: '2026.03 – 至今',
      role: 'Java 后端开发',
      org: '软通智辰 · 深圳',
      desc: '外包驻场项目制，参与某大型建筑央企的数字化系统建设，主要负责仓储执行（WMS）与供应链（ERP）相关模块。',
    },
    {
      period: '2025.03 – 2025.11',
      role: 'Java 后端开发',
      org: '捷欧科技 · 成都',
      desc: '商贸 SaaS 与商户端系统开发，负责营销权益、返佣结算、消息通知与开放平台接入。',
    },
    {
      period: '2021 – 2025',
      role: '软件工程 · 本科',
      org: '四川工业科技学院',
      desc: '2025 年 7 月毕业；2025.03 起在捷欧科技实习，同年 7 月转正。',
    },
  ],

  // 技术栈：按能力分组
  skills: [
    {
      group: '后端与框架',
      items: ['Java', 'Spring Boot', 'Spring MVC', 'MyBatis', 'Flowable', 'RESTful API'],
    },
    {
      group: '数据与中间件',
      items: ['MySQL', 'Redis', 'RabbitMQ'],
    },
    {
      group: '业务领域',
      items: ['WMS 仓储执行', 'ERP 供应链', 'ASRS 设备对接', 'MIS 流程与权限', '单据与库存建模', '并发与幂等'],
    },
    {
      group: '工程实践',
      items: ['Git', 'Maven', 'IntelliJ IDEA', 'Linux', 'SQL 口径治理', '事务与一致性'],
    },
  ],
}
