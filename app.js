const tarotCards = [
  { id: "the-fool", arcana: "major", name: "愚者", nameEn: "The Fool", keywords: "新开始、自由、冒险", meaning: "象征新的旅程和无畏的开始。", summary: "适合从轻松的视角出发，愿意尝试尚未被定义的道路。", element: "风" },
  { id: "the-magician", arcana: "major", name: "魔术师", nameEn: "The Magician", keywords: "行动、创造、意志", meaning: "代表把想法转为现实的能力。", summary: "当你想推进某件事时，这张牌提醒你聚焦方法并主动出手。", element: "火" },
  { id: "the-high-priestess", arcana: "major", name: "女祭司", nameEn: "The High Priestess", keywords: "直觉、秘密、内在", meaning: "提醒你倾听内心与潜意识的声音。", summary: "它适合以更柔和、更细腻的方式理解当前状况。", element: "水" },
  { id: "the-empress", arcana: "major", name: "女皇", nameEn: "The Empress", keywords: "丰盛、滋养、创造", meaning: "代表滋养与成长，关注生活质量与关系。", summary: "它鼓励你为自己和他人创造温柔的支持环境。", element: "土" },
  { id: "the-emperor", arcana: "major", name: "皇帝", nameEn: "The Emperor", keywords: "结构、权威、稳定", meaning: "关注秩序、边界与执行力。", summary: "这张牌强调清楚地安排与承担责任。", element: "土" },
  { id: "the-hierophant", arcana: "major", name: "教皇", nameEn: "The Hierophant", keywords: "传统、指导、学习", meaning: "象征系统、原则与值得信赖的知识。", summary: "它提示你在需要时回归经验与结构。", element: "土" },
  { id: "the-lovers", arcana: "major", name: "恋人", nameEn: "The Lovers", keywords: "选择、关系、连接", meaning: "关乎关系与取舍，提醒你在爱或价值观中做出清醒选择。", summary: "这张牌常常让人思考什么是真正值得追求的连接。", element: "风" },
  { id: "the-chariot", arcana: "major", name: "战车", nameEn: "The Chariot", keywords: "意志、驱动力、前进", meaning: "象征向前推进的动力与控制节奏。", summary: "它鼓励你在秩序中稳步迈进。", element: "火" },
  { id: "strength", arcana: "major", name: "力量", nameEn: "Strength", keywords: "勇气、柔韧、内在力量", meaning: "强调以温和且坚定的方式面对挑战。", summary: "它提示你不用硬碰硬，而是用稳住心神来化解困局。", element: "火" },
  { id: "the-hermit", arcana: "major", name: "隐士", nameEn: "The Hermit", keywords: "自省、沉思、答案", meaning: "代表回归内心与给出沉默的空间。", summary: "需要给自己留出思考时间，少听多看。", element: "风" },
  { id: "wheel-of-fortune", arcana: "major", name: "命运之轮", nameEn: "Wheel of Fortune", keywords: "变化、周期、转机", meaning: "提醒你顺应变化，接受某些事情正在转向。", summary: "它强调在流动和变化中找到新的平衡。", element: "风" },
  { id: "justice", arcana: "major", name: "正义", nameEn: "Justice", keywords: "公平、清晰、真相", meaning: "强调诚实、责任与客观判断。", summary: "这张牌适合重建秩序、整理信息并做出公正判断。", element: "风" },
  { id: "the-hanged-man", arcana: "major", name: "倒吊人", nameEn: "The Hanged Man", keywords: "放下、停顿、转变", meaning: "要求暂时停下来，放下固执或强行推进的念头。", summary: "它暗示暂时的等待与转化，往往会带来新的理解。", element: "水" },
  { id: "death", arcana: "major", name: "死神", nameEn: "Death", keywords: "结束、转化、释放", meaning: "象征旧结构的结束与新的重建。", summary: "它并不只代表失去，而是让旧有模式自然退场。", element: "土" },
  { id: "temperance", arcana: "major", name: "节制", nameEn: "Temperance", keywords: "平衡、融合、调和", meaning: "强调把不同部分协调起来。", summary: "它提醒你在情绪和行动之间保持柔和的连接。", element: "水" },
  { id: "the-devil", arcana: "major", name: "恶魔", nameEn: "The Devil", keywords: "执念、诱惑、束缚", meaning: "代表被困在旧习惯或依附中的状态。", summary: "它常常提示你面对控制、欲望或自我设限。", element: "土" },
  { id: "the-tower", arcana: "major", name: "塔", nameEn: "The Tower", keywords: "突变、打破、觉醒", meaning: "象征旧结构瞬间崩塌与真相暴露。", summary: "它带来震动，但也让人从混乱中看到真实。", element: "火" },
  { id: "the-star", arcana: "major", name: "星星", nameEn: "The Star", keywords: "希望、疗愈、信念", meaning: "代表从低谷重新看到希望。", summary: "它让人感觉方向仍然存在。", element: "水" },
  { id: "the-moon", arcana: "major", name: "月亮", nameEn: "The Moon", keywords: "梦境、迷雾、潜意识", meaning: "提醒你留意不确定性与潜意识的信号。", summary: "它适合在模糊中保持耐心与敏感。", element: "水" },
  { id: "the-sun", arcana: "major", name: "太阳", nameEn: "The Sun", keywords: "喜悦、明朗、生命力", meaning: "象征清晰、活力与表达。", summary: "它鼓励你以更明亮的状态面对世界。", element: "火" },
  { id: "judgement", arcana: "major", name: "审判", nameEn: "Judgement", keywords: "觉醒、反思、重启", meaning: "代表重新评估自己的人生方向。", summary: "它常常意味着某种内在呼召需要被认真回应。", element: "火" },
  { id: "the-world", arcana: "major", name: "世界", nameEn: "The World", keywords: "完成、整合、圆满", meaning: "象征一个阶段的完成与更大视野的到来。", summary: "它提示你已经走到某种完成的边缘，可以向前迈入新的轮回。", element: "土" },
  { id: "ace-of-wands", arcana: "minor", suit: "权杖", name: "权杖王牌", nameEn: "Ace of Wands", keywords: "灵感、行动、火花", meaning: "代表新的创意与被点燃的动力。", summary: "这是一个开始行动的信号。", element: "火" },
  { id: "two-of-wands", arcana: "minor", suit: "权杖", name: "权杖二", nameEn: "Two of Wands", keywords: "选择、远行、视野", meaning: "象征你正在权衡选择与未来的可能。", summary: "适合看向更远的方向。", element: "火" },
  { id: "three-of-wands", arcana: "minor", suit: "权杖", name: "权杖三", nameEn: "Three of Wands", keywords: "期待、扩展、准备", meaning: "代表把计划推向更广阔的世界。", summary: "好事正在走向外部。", element: "火" },
  { id: "four-of-wands", arcana: "minor", suit: "权杖", name: "权杖四", nameEn: "Four of Wands", keywords: "庆祝、稳定、归属", meaning: "象征庆祝、安定与值得珍惜的时刻。", summary: "适合把注意力放回家与关系。", element: "火" },
  { id: "five-of-wands", arcana: "minor", suit: "权杖", name: "权杖五", nameEn: "Five of Wands", keywords: "竞争、冲突、摩擦", meaning: "代表因目标不同而产生的摩擦。", summary: "提醒你看清冲突的根源。", element: "火" },
  { id: "six-of-wands", arcana: "minor", suit: "权杖", name: "权杖六", nameEn: "Six of Wands", keywords: "荣誉、胜利、认可", meaning: "象征得到认可与成功的回报。", summary: "你正在被看见。", element: "火" },
  { id: "seven-of-wands", arcana: "minor", suit: "权杖", name: "权杖七", nameEn: "Seven of Wands", keywords: "防守、坚持、抵抗", meaning: "表示你正在保护自己或自己的立场。", summary: "适合坚守原则。", element: "火" },
  { id: "eight-of-wands", arcana: "minor", suit: "权杖", name: "权杖八", nameEn: "Eight of Wands", keywords: "迅速、消息、行动", meaning: "代表消息快速流动与行动加速。", summary: "事情正在快速推进。", element: "火" },
  { id: "nine-of-wands", arcana: "minor", suit: "权杖", name: "权杖九", nameEn: "Nine of Wands", keywords: "警惕、坚持、疲惫", meaning: "是一张看似疲惫但仍能坚持的牌。", summary: "你已经很靠近终点。", element: "火" },
  { id: "ten-of-wands", arcana: "minor", suit: "权杖", name: "权杖十", nameEn: "Ten of Wands", keywords: "负担、责任、压力", meaning: "象征背负太多责任，容易感到压迫。", summary: "适合减轻负担。", element: "火" },
  { id: "page-of-wands", arcana: "minor", suit: "权杖", name: "权杖侍从", nameEn: "Page of Wands", keywords: "好奇、消息、探索", meaning: "象征充满热情、愿意去探索未知。", summary: "适合尝试新想法。", element: "火" },
  { id: "knight-of-wands", arcana: "minor", suit: "权杖", name: "权杖骑士", nameEn: "Knight of Wands", keywords: "冲劲、冒险、行动", meaning: "代表勇往直前、带着激情出发。", summary: "这是一个迅速推进的时刻。", element: "火" },
  { id: "queen-of-wands", arcana: "minor", suit: "权杖", name: "权杖皇后", nameEn: "Queen of Wands", keywords: "自信、热情、掌控", meaning: "象征带着自信与热情去掌控局面。", summary: "你能把注意力转化为力量。", element: "火" },
  { id: "king-of-wands", arcana: "minor", suit: "权杖", name: "权杖国王", nameEn: "King of Wands", keywords: "领导、决断、热情", meaning: "代表愿意带领别人向前的人。", summary: "适合在行动中扮演主导角色。", element: "火" },
  { id: "ace-of-cups", arcana: "minor", suit: "圣杯", name: "圣杯王牌", nameEn: "Ace of Cups", keywords: "情感、爱、流动", meaning: "代表情感的开启与心灵的柔软。", summary: "适合接纳爱与理解。", element: "水" },
  { id: "two-of-cups", arcana: "minor", suit: "圣杯", name: "圣杯二", nameEn: "Two of Cups", keywords: "连接、亲密、关系", meaning: "象征关系中的相互吸引与疗愈。", summary: "适合建立亲密连接。", element: "水" },
  { id: "three-of-cups", arcana: "minor", suit: "圣杯", name: "圣杯三", nameEn: "Three of Cups", keywords: "聚会、喜悦、分享", meaning: "代表庆祝和共享喜悦的时刻。", summary: "适合和他人一起感受快乐。", element: "水" },
  { id: "four-of-cups", arcana: "minor", suit: "圣杯", name: "圣杯四", nameEn: "Four of Cups", keywords: "倦怠、退缩、反思", meaning: "象征内心不再想被外界打扰。", summary: "你可能需要停下来重新审视自己的愿望。", element: "水" },
  { id: "five-of-cups", arcana: "minor", suit: "圣杯", name: "圣杯五", nameEn: "Five of Cups", keywords: "失落、遗憾、哀伤", meaning: "代表因为失去而沉浸在情绪之中。", summary: "提醒你看到剩下的仍然存在。", element: "水" },
  { id: "six-of-cups", arcana: "minor", suit: "圣杯", name: "圣杯六", nameEn: "Six of Cups", keywords: "回忆、陪伴、纯真", meaning: "象征过去的亲密记忆与温柔的陪伴。", summary: "适合回看旧日的情感。", element: "水" },
  { id: "seven-of-cups", arcana: "minor", suit: "圣杯", name: "圣杯七", nameEn: "Seven of Cups", keywords: "幻想、选择、迷雾", meaning: "代表选择很多，却不一定清楚该走哪条路。", summary: "需要对欲望和现实做一次辨别。", element: "水" },
  { id: "eight-of-cups", arcana: "minor", suit: "圣杯", name: "圣杯八", nameEn: "Eight of Cups", keywords: "离开、寻求、变化", meaning: "代表在情感上愿意离开旧环境去寻找更真实的满足。", summary: "适合为自己重新选择方向。", element: "水" },
  { id: "nine-of-cups", arcana: "minor", suit: "圣杯", name: "圣杯九", nameEn: "Nine of Cups", keywords: "满足、满足感、祝福", meaning: "象征情绪与愿望已经得到微妙的回响。", summary: "这是一个内在充盈的时刻。", element: "水" },
  { id: "ten-of-cups", arcana: "minor", suit: "圣杯", name: "圣杯十", nameEn: "Ten of Cups", keywords: "和谐、家庭、圆满", meaning: "代表爱与和谐达到一个完整的状态。", summary: "适合感受幸福与连接。", element: "水" },
  { id: "page-of-cups", arcana: "minor", suit: "圣杯", name: "圣杯侍从", nameEn: "Page of Cups", keywords: "敏感、消息、柔软", meaning: "象征心灵很敏感，也愿意接受新的情绪。", summary: "适合倾听内心的第一反应。", element: "水" },
  { id: "knight-of-cups", arcana: "minor", suit: "圣杯", name: "圣杯骑士", nameEn: "Knight of Cups", keywords: "浪漫、追求、情感", meaning: "代表带着情感与柔软前行的人。", summary: "适合顺着情绪与直觉前进。", element: "水" },
  { id: "queen-of-cups", arcana: "minor", suit: "圣杯", name: "圣杯皇后", nameEn: "Queen of Cups", keywords: "同理、温柔、直觉", meaning: "象征温柔又敏锐的情感领袖。", summary: "她提醒你要给予自己与他人同理。", element: "水" },
  { id: "king-of-cups", arcana: "minor", suit: "圣杯", name: "圣杯国王", nameEn: "King of Cups", keywords: "沉稳、理解、情绪掌控", meaning: "代表能平衡情绪并给予支持的人。", summary: "适合以成熟方式处理感情问题。", element: "水" },
  { id: "ace-of-swords", arcana: "minor", suit: "宝剑", name: "宝剑王牌", nameEn: "Ace of Swords", keywords: "清晰、思考、真相", meaning: "代表思想的锋利与真相的出现。", summary: "这是一个看清问题的时刻。", element: "风" },
  { id: "two-of-swords", arcana: "minor", suit: "宝剑", name: "宝剑二", nameEn: "Two of Swords", keywords: "犹豫、停顿、平衡", meaning: "象征在选择面前暂时保持沉默。", summary: "适合先停下来整理心绪。", element: "风" },
  { id: "three-of-swords", arcana: "minor", suit: "宝剑", name: "宝剑三", nameEn: "Three of Swords", keywords: "分离、伤痛、清醒", meaning: "代表情感上的割裂与难以言说的痛。", summary: "提醒你去面对真实的伤口。", element: "风" },
  { id: "four-of-swords", arcana: "minor", suit: "宝剑", name: "宝剑四", nameEn: "Four of Swords", keywords: "休息、静默、恢复", meaning: "象征暂时退后，为自己留出恢复空间。", summary: "适合让身体与心灵放松。", element: "风" },
  { id: "five-of-swords", arcana: "minor", suit: "宝剑", name: "宝剑五", nameEn: "Five of Swords", keywords: "争斗、失利、虚荣", meaning: "代表短期的胜负与被动的挫败。", summary: "提醒你把争执看清楚。", element: "风" },
  { id: "six-of-swords", arcana: "minor", suit: "宝剑", name: "宝剑六", nameEn: "Six of Swords", keywords: "迁移、疗愈、平静", meaning: "象征从混乱中走向更安静的状态。", summary: "适合把注意力转到恢复上。", element: "风" },
  { id: "seven-of-swords", arcana: "minor", suit: "宝剑", name: "宝剑七", nameEn: "Seven of Swords", keywords: "策略、隐秘、谨慎", meaning: "代表需要谨慎地处理信息与行动。", summary: "适合保持警惕。", element: "风" },
  { id: "eight-of-swords", arcana: "minor", suit: "宝剑", name: "宝剑八", nameEn: "Eight of Swords", keywords: "困住、限制、束缚", meaning: "代表被自己的想法或情绪困住。", summary: "你需要先认识到自己其实有选择。", element: "风" },
  { id: "nine-of-swords", arcana: "minor", suit: "宝剑", name: "宝剑九", nameEn: "Nine of Swords", keywords: "焦虑、担忧、噩梦", meaning: "象征内心与烦忧反复盘旋。", summary: "适合把担心说出来。", element: "风" },
  { id: "ten-of-swords", arcana: "minor", suit: "宝剑", name: "宝剑十", nameEn: "Ten of Swords", keywords: "结束、彻底、破碎", meaning: "代表一个阶段的终结与旧伤的显露。", summary: "它常常意味着必须放下。", element: "风" },
  { id: "page-of-swords", arcana: "minor", suit: "宝剑", name: "宝剑侍从", nameEn: "Page of Swords", keywords: "观察、消息、机敏", meaning: "象征敏锐和勇敢地观察周遭。", summary: "适合保留你的判断力。", element: "风" },
  { id: "knight-of-swords", arcana: "minor", suit: "宝剑", name: "宝剑骑士", nameEn: "Knight of Swords", keywords: "冲动、直言、速度", meaning: "代表迅速发言和强烈的推进欲。", summary: "适合注意是否过快。", element: "风" },
  { id: "queen-of-swords", arcana: "minor", suit: "宝剑", name: "宝剑皇后", nameEn: "Queen of Swords", keywords: "清晰、独立、理性", meaning: "象征理性、审慎与自我保护。", summary: "她提醒你保持边界。", element: "风" },
  { id: "king-of-swords", arcana: "minor", suit: "宝剑", name: "宝剑国王", nameEn: "King of Swords", keywords: "规则、判断、秩序", meaning: "代表清晰判断和明确边界。", summary: "适合以理性的方式面对挑战。", element: "风" },
  { id: "ace-of-pentacles", arcana: "minor", suit: "星币", name: "星币王牌", nameEn: "Ace of Pentacles", keywords: "机会、物质、起点", meaning: "代表现实中的新机会与可落地的开始。", summary: "适合把愿望变成具体行动。", element: "土" },
  { id: "two-of-pentacles", arcana: "minor", suit: "星币", name: "星币二", nameEn: "Two of Pentacles", keywords: "平衡、节奏、调度", meaning: "象征在多重责任间保持平衡。", summary: "适合调整时间与精力。", element: "土" },
  { id: "three-of-pentacles", arcana: "minor", suit: "星币", name: "星币三", nameEn: "Three of Pentacles", keywords: "合作、技能、成就", meaning: "代表与他人协作并获得认可。", summary: "适合把能力放到共同目标中。", element: "土" },
  { id: "four-of-pentacles", arcana: "minor", suit: "星币", name: "星币四", nameEn: "Four of Pentacles", keywords: "紧握、控制、守护", meaning: "代表对资源或关系的过度控制。", summary: "适合去看自己是否太想守住。", element: "土" },
  { id: "five-of-pentacles", arcana: "minor", suit: "星币", name: "星币五", nameEn: "Five of Pentacles", keywords: "缺乏、压力、孤立", meaning: "代表在现实层面感到匮乏或被忽略。", summary: "提醒你注意帮助与支持。", element: "土" },
  { id: "six-of-pentacles", arcana: "minor", suit: "星币", name: "星币六", nameEn: "Six of Pentacles", keywords: "给予、回报、平衡", meaning: "代表给予和接受之间的平衡。", summary: "适合分享资源与善意。", element: "土" },
  { id: "seven-of-pentacles", arcana: "minor", suit: "星币", name: "星币七", nameEn: "Seven of Pentacles", keywords: "等待、评估、收获", meaning: "代表对已经付出的努力进行审视。", summary: "适合看看自己到底收获了什么。", element: "土" },
  { id: "eight-of-pentacles", arcana: "minor", suit: "星币", name: "星币八", nameEn: "Eight of Pentacles", keywords: "专注、技艺、努力", meaning: "代表对技能和细节的持续投入。", summary: "这是一个专注进阶的时刻。", element: "土" },
  { id: "nine-of-pentacles", arcana: "minor", suit: "星币", name: "星币九", nameEn: "Nine of Pentacles", keywords: "独立、丰盛、自信", meaning: "象征在自我成长中获得满足与丰盛。", summary: "你正在享受自己所创造的生活。", element: "土" },
  { id: "ten-of-pentacles", arcana: "minor", suit: "星币", name: "星币十", nameEn: "Ten of Pentacles", keywords: "家族、传承、稳定", meaning: "代表长期稳定与传统带来的支持。", summary: "适合建立更长远的根基。", element: "土" },
  { id: "page-of-pentacles", arcana: "minor", suit: "星币", name: "星币侍从", nameEn: "Page of Pentacles", keywords: "学习、现实、潜力", meaning: "象征愿意学习并把想法落地的人。", summary: "适合从小的动作开始。", element: "土" },
  { id: "knight-of-pentacles", arcana: "minor", suit: "星币", name: "星币骑士", nameEn: "Knight of Pentacles", keywords: "稳定、耐心、工作", meaning: "代表以踏实与耐心推进的人。", summary: "适合稳扎稳打。", element: "土" },
  { id: "queen-of-pentacles", arcana: "minor", suit: "星币", name: "星币皇后", nameEn: "Queen of Pentacles", keywords: "丰腴、照料、现实", meaning: "象征把生活经营得温柔而踏实。", summary: "她提醒你照顾好自己的根基。", element: "土" },
  { id: "king-of-pentacles", arcana: "minor", suit: "星币", name: "星币国王", nameEn: "King of Pentacles", keywords: "财富、可靠、成功", meaning: "代表稳定地掌控资源与现实机遇。", summary: "适合把成功变成可持续的基础。", element: "土" }
];

const cardImageMap = {
  "the-fool": "RWS_Tarot_00_Fool.jpg",
  "the-magician": "RWS_Tarot_01_Magician.jpg",
  "the-high-priestess": "RWS_Tarot_02_High_Priestess.jpg",
  "the-empress": "RWS_Tarot_03_Empress.jpg",
  "the-emperor": "RWS_Tarot_04_Emperor.jpg",
  "the-hierophant": "RWS_Tarot_05_Hierophant.jpg",
  "the-lovers": "RWS_Tarot_06_Lovers.jpg",
  "the-chariot": "RWS_Tarot_07_Chariot.jpg",
  "strength": "RWS_Tarot_08_Strength.jpg",
  "the-hermit": "RWS_Tarot_09_Hermit.jpg",
  "wheel-of-fortune": "RWS_Tarot_10_Wheel_of_Fortune.jpg",
  "justice": "RWS_Tarot_11_Justice.jpg",
  "the-hanged-man": "RWS_Tarot_12_Hanged_Man.jpg",
  "death": "RWS_Tarot_13_Death.jpg",
  "temperance": "RWS_Tarot_14_Temperance.jpg",
  "the-devil": "RWS_Tarot_15_Devil.jpg",
  "the-tower": "RWS_Tarot_16_Tower.jpg",
  "the-star": "RWS_Tarot_17_Star.jpg",
  "the-moon": "RWS_Tarot_18_Moon.jpg",
  "the-sun": "RWS_Tarot_19_Sun.jpg",
  "judgement": "RWS_Tarot_20_Judgement.jpg",
  "the-world": "RWS_Tarot_21_World.jpg",
  "ace-of-wands": "Wands01.jpg",
  "two-of-wands": "Wands02.jpg",
  "three-of-wands": "Wands03.jpg",
  "four-of-wands": "Wands04.jpg",
  "five-of-wands": "Wands05.jpg",
  "six-of-wands": "Wands06.jpg",
  "seven-of-wands": "Wands07.jpg",
  "eight-of-wands": "Wands08.jpg",
  "nine-of-wands": "Tarot_Nine_of_Wands.jpg",
  "ten-of-wands": "Wands10.jpg",
  "page-of-wands": "Wands11.jpg",
  "knight-of-wands": "Wands12.jpg",
  "queen-of-wands": "Wands13.jpg",
  "king-of-wands": "Wands14.jpg",
  "ace-of-cups": "Cups01.jpg",
  "two-of-cups": "Cups02.jpg",
  "three-of-cups": "Cups03.jpg",
  "four-of-cups": "Cups04.jpg",
  "five-of-cups": "Cups05.jpg",
  "six-of-cups": "Cups06.jpg",
  "seven-of-cups": "Cups07.jpg",
  "eight-of-cups": "Cups08.jpg",
  "nine-of-cups": "Cups09.jpg",
  "ten-of-cups": "Cups10.jpg",
  "page-of-cups": "Cups11.jpg",
  "knight-of-cups": "Cups12.jpg",
  "queen-of-cups": "Cups13.jpg",
  "king-of-cups": "Cups14.jpg",
  "ace-of-swords": "Swords01.jpg",
  "two-of-swords": "Swords02.jpg",
  "three-of-swords": "Swords03.jpg",
  "four-of-swords": "Swords04.jpg",
  "five-of-swords": "Swords05.jpg",
  "six-of-swords": "Swords06.jpg",
  "seven-of-swords": "Swords07.jpg",
  "eight-of-swords": "Swords08.jpg",
  "nine-of-swords": "Swords09.jpg",
  "ten-of-swords": "Swords10.jpg",
  "page-of-swords": "Swords11.jpg",
  "knight-of-swords": "Swords12.jpg",
  "queen-of-swords": "Swords13.jpg",
  "king-of-swords": "Swords14.jpg",
  "ace-of-pentacles": "Pents01.jpg",
  "two-of-pentacles": "Pents02.jpg",
  "three-of-pentacles": "Pents03.jpg",
  "four-of-pentacles": "Pents04.jpg",
  "five-of-pentacles": "Pents05.jpg",
  "six-of-pentacles": "Pents06.jpg",
  "seven-of-pentacles": "Pents07.jpg",
  "eight-of-pentacles": "Pents08.jpg",
  "nine-of-pentacles": "Pents09.jpg",
  "ten-of-pentacles": "Pents10.jpg",
  "page-of-pentacles": "Pents11.jpg",
  "knight-of-pentacles": "Pents12.jpg",
  "queen-of-pentacles": "Pents13.jpg",
  "king-of-pentacles": "Pents14.jpg"
};

const STORAGE_KEY = "tarot-readings-v1";

const cardLibrary = document.getElementById("card-library");
const cardSearchInput = document.getElementById("card-search");
const elementGuide = document.getElementById("element-guide");
const cardSelect = document.getElementById("card-name");
const analysisResult = document.getElementById("analysis-result");
const historyList = document.getElementById("reading-history");
const exportButton = document.getElementById("export-records");
const spreadModeSelect = document.getElementById("spread-mode");
const selectedCardPreview = document.getElementById("selected-card-preview");
const cardSpread = document.getElementById("card-spread");
const spreadScroll = document.getElementById("spread-scroll");
const deckMessage = document.getElementById("deck-message");
const drawResults = document.getElementById("draw-results");
const shuffleButton = document.getElementById("shuffle-cards");
const questionForm = document.getElementById("question-form");
const finishForm = document.getElementById("finish-form");
const finishCardGallery = document.getElementById("finish-card-gallery");
const toFinishBtn = document.getElementById("to-finish-btn");
const restartBtn = document.getElementById("restart-btn");
const digitalDrawPanel = document.getElementById("digital-draw-panel");
const manualDrawPanel = document.getElementById("manual-draw-panel");
const singleInputRow = document.getElementById("single-input-row");
const threeInputRows = document.getElementById("three-input-rows");
const manualHintMessage = document.getElementById("manual-hint-message");
const cardOptionsList = document.getElementById("card-options");
let currentDrawMode = "digital";

const aiSettingsToggle = document.getElementById("ai-settings-toggle");
const aiSettingsPanel = document.getElementById("ai-settings-panel");
const aiApiKeyInput = document.getElementById("ai-api-key");
const aiModelInput = document.getElementById("ai-model");
const aiSettingsSave = document.getElementById("ai-settings-save");
const aiSettingsClear = document.getElementById("ai-settings-clear");
const aiInsightCard = document.getElementById("ai-insight");
const aiInsightBody = document.getElementById("ai-insight-body");
const aiInsightRetry = document.getElementById("ai-insight-retry");

const AI_KEY_STORAGE = "tarot-dashscope-key";
const AI_MODEL_STORAGE = "tarot-dashscope-model";
let lastReading = null;

const SPREAD_SIZE = tarotCards.length;
const POSITION_LABELS = ["过去", "现在", "未来"];
let spreadState = [];
let pickedCards = [];

function getCardArtwork(card) {
  const imageFile = cardImageMap[card.id];
  if (imageFile) {
    return `https://raw.githubusercontent.com/lalesleon13-hash/Tarot/master/${imageFile}`;
  }

  const colors = {
    火: ["#c96c3d", "#f1b06b"],
    水: ["#4b6fa8", "#9fd3e8"],
    风: ["#7b8f4a", "#d3e0a8"],
    土: ["#8f6a3d", "#d8b36b"]
  };
  const [from, to] = colors[card.element] || ["#8e7a65", "#cbb79d"];
  const symbol = card.arcana === "major" ? "✧" : "✦";
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="320" height="480" viewBox="0 0 320 480">
      <rect x="12" y="12" width="296" height="456" rx="24" fill="url(#g)" stroke="#6f5140" stroke-width="6"/>
      <path d="M54 115c55-65 157-65 214 0" stroke="#fff" stroke-width="10" fill="none" stroke-linecap="round"/>
      <circle cx="160" cy="238" r="70" fill="rgba(255,255,255,0.28)"/>
      <text x="160" y="190" text-anchor="middle" font-size="54" fill="#fff" font-family="Segoe UI, sans-serif">${symbol}</text>
      <text x="160" y="382" text-anchor="middle" font-size="28" fill="#fff" font-family="Segoe UI, sans-serif">${card.name}</text>
      <text x="160" y="420" text-anchor="middle" font-size="18" fill="#fff" font-family="Segoe UI, sans-serif">${card.nameEn}</text>
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${from}"/>
          <stop offset="100%" stop-color="${to}"/>
        </linearGradient>
      </defs>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getCardById(id) {
  return tarotCards.find((card) => card.id === id) || tarotCards[0];
}

function resolveCardId(value) {
  const search = (value || "").trim().toLowerCase();
  if (!search) {
    return tarotCards[0].id;
  }

  const exact = tarotCards.find((card) => `${card.name} / ${card.nameEn}`.toLowerCase() === search || card.name.toLowerCase() === search || card.nameEn.toLowerCase() === search);
  if (exact) {
    return exact.id;
  }

  return tarotCards.find((card) => [card.name, card.nameEn, card.keywords, card.meaning, card.suit, card.element].join(" ").toLowerCase().includes(search))?.id || tarotCards[0].id;
}

function populateCardOptions() {
  cardOptionsList.innerHTML = tarotCards
    .map((card) => `<option value="${card.name} / ${card.nameEn}"></option>`)
    .join("");
}

function clearCardInputs() {
  [cardSelect, document.getElementById("card-name-1"), document.getElementById("card-name-2"), document.getElementById("card-name-3")].forEach((input) => {
    input.value = "";
  });
}

function getFilteredCards() {
  const keyword = cardSearchInput.value.trim().toLowerCase();
  if (!keyword) {
    return tarotCards;
  }

  return tarotCards.filter((card) => {
    const haystack = [card.name, card.nameEn, card.keywords, card.meaning, card.suit, card.element]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return haystack.includes(keyword);
  });
}

function renderCardLibrary() {
  const filteredCards = getFilteredCards();

  if (!filteredCards.length) {
    cardLibrary.innerHTML = '<p class="empty-state">没有匹配的牌，请换一个关键词。</p>';
    return;
  }

  cardLibrary.innerHTML = filteredCards
    .map(
      (card) => `
        <article class="card-item">
          <img class="card-image" src="${getCardArtwork(card)}" alt="${card.name}" />
          <h3>${card.name} / ${card.nameEn}</h3>
          <p><strong>类型：</strong>${card.arcana === "major" ? "大阿卡纳" : `小阿卡纳 · ${card.suit}`}</p>
          <p><strong>关键词：</strong>${card.keywords}</p>
          <p><strong>元素：</strong>${card.element}</p>
          <p>${card.meaning}</p>
        </article>
      `
    )
    .join("");
}

const ELEMENT_GUIDE = [
  { element: "火", emoji: "🔥", color: "#e0784a", description: "火象征热情、行动与推动力。" },
  { element: "水", emoji: "💧", color: "#4b7fa8", description: "水象征情绪、直觉与流动。" },
  { element: "风", emoji: "🌬️", color: "#7b9a5a", description: "风象征思考、沟通与变化。" },
  { element: "土", emoji: "🪨", color: "#a8793d", description: "土象征稳定、根基与现实。" }
];

function renderElementGuide() {
  elementGuide.innerHTML = ELEMENT_GUIDE
    .map(({ element, emoji, color, description }) => `<p style="border-left-color: ${color};"><strong>${emoji} ${element}</strong>：${description}</p>`)
    .join("");
}

function loadReadings() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch (error) {
    console.error("读取记录失败", error);
    return [];
  }
}

function saveReadings(readings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(readings));
}

function renderHistory() {
  const readings = loadReadings();
  if (!readings.length) {
    historyList.innerHTML = '<p class="empty-state">还没有记录，先做一次占卜吧。</p>';
    return;
  }

  historyList.innerHTML = readings
    .map((item) => {
      const cardSummary = (item.cards || []).map((entry) => {
        const card = tarotCards.find((cardItem) => cardItem.id === entry.cardId);
        return `${entry.positionLabel} · ${card ? `${card.name} / ${card.nameEn}` : entry.cardId}`;
      }).join(" | ");

      return `
        <article class="history-item">
          <strong>${new Date(item.readingTime || item.createdAt).toLocaleString()}</strong>
          <p><strong>问题：</strong>${item.question}</p>
          <p><strong>牌阵：</strong>${item.mode === "three" ? "三张牌" : "单牌"}</p>
          <p><strong>卡牌：</strong>${cardSummary}</p>
          <p><strong>个人解答：</strong>${item.personalNote || "未填写"}</p>
        </article>
      `;
    })
    .join("");
}

function buildCardEntries() {
  if (spreadModeSelect.value === "three") {
    return [1, 2, 3].map((index) => {
      const input = document.getElementById(`card-name-${index}`);
      const orientationSelect = document.getElementById(`orientation-${index}`);
      return {
        cardId: resolveCardId(input.value),
        position: ["past", "present", "future"][index - 1],
        positionLabel: POSITION_LABELS[index - 1],
        orientation: orientationSelect.value,
        orientationLabel: orientationSelect.selectedOptions[0].text
      };
    });
  }

  return [{
    cardId: resolveCardId(cardSelect.value),
    position: "present",
    positionLabel: "现在",
    orientation: document.getElementById("orientation").value,
    orientationLabel: document.getElementById("orientation").selectedOptions[0].text
  }];
}

function renderReadingCardGallery(cards) {
  return `
    <div class="reading-card-gallery">
      ${cards.map((entry) => {
        const card = tarotCards.find((cardItem) => cardItem.id === entry.cardId);
        if (!card) return "";
        const isReversed = entry.orientation === "reversed";
        return `
          <div class="reading-card-chip">
            <img class="${isReversed ? "reversed" : ""}" src="${getCardArtwork(card)}" alt="${card.name}" />
            <p><strong>${entry.positionLabel}</strong></p>
            <p>${card.name} / ${card.nameEn}</p>
            <p>${entry.orientationLabel || "正位"}</p>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

const ELEMENT_INSIGHT = {
  火: "热情与推动力",
  水: "情绪与直觉",
  风: "思考与沟通",
  土: "现实与稳定"
};

function renderElementNote() {
  return `
    <div class="element-note">
      <strong>四大元素小贴士</strong>
      ${ELEMENT_GUIDE.map(({ emoji, element, description }) => `<p>${emoji} <strong>${element}</strong>：${description}</p>`).join("")}
    </div>
  `;
}

function describeOrientationTone(orientation) {
  return orientation === "reversed"
    ? "此刻它以逆位出现，像是在提醒你先往内看一看，理清卡住的地方，而不必急着往外冲。"
    : "它以正位出现，能量比较顺畅，适合顺着这股力量往前走。";
}

function describeElement(card) {
  const insight = ELEMENT_INSIGHT[card.element];
  return insight ? `带着${card.element}元素的${insight}，` : "";
}

function generateAnalysis(reading) {
  const cardGallery = renderReadingCardGallery(reading.cards);
  const cards = reading.cards.map((entry) => ({
    entry,
    card: tarotCards.find((cardItem) => cardItem.id === entry.cardId)
  }));

  const personalNoteLine = reading.personalNote
    ? `你写下的直觉是："${reading.personalNote}"——不妨把它和上面这段故事放在一起看，也许它们本就在互相印证。`
    : "这次你还没有写下自己的直觉，不妨先停留一下，感受此刻心里冒出的第一反应，那也是故事的一部分。";

  const paragraphs = [`你问的是："${reading.question}"。`];

  if (reading.mode === "three") {
    const [past, present, future] = cards;
    paragraphs.push(`先从过去说起。那时的你，走在${past.card.name}（${past.entry.orientationLabel}）的能量里，${describeElement(past.card)}${past.card.meaning}${describeOrientationTone(past.entry.orientation)}`);
    paragraphs.push(`带着这段过去，故事来到了现在。${present.card.name}（${present.entry.orientationLabel}）悄然浮现，${describeElement(present.card)}${present.card.meaning}${describeOrientationTone(present.entry.orientation)}`);
    paragraphs.push(`顺着这股势头往前看，${future.card.name}（${future.entry.orientationLabel}）指向了可能的方向，${describeElement(future.card)}${future.card.meaning}${describeOrientationTone(future.entry.orientation)}`);
  } else {
    const single = cards[0];
    paragraphs.push(`此刻浮现的是${single.card.name}（${single.entry.orientationLabel}），${describeElement(single.card)}${single.card.meaning}${single.card.summary}${describeOrientationTone(single.entry.orientation)}`);
  }

  paragraphs.push(personalNoteLine);

  return `
    <h3>${reading.mode === "three" ? "三张牌的故事" : "这张牌想对你说"}</h3>
    ${cardGallery}
    <div class="story">
      ${paragraphs.map((text) => `<p>${text}</p>`).join("")}
    </div>
    ${renderElementNote()}
  `;
}

function getStoredApiKey() {
  return localStorage.getItem(AI_KEY_STORAGE) || "";
}

function getStoredModel() {
  return localStorage.getItem(AI_MODEL_STORAGE) || "qwen-turbo";
}

function buildAiPrompt(reading) {
  const cardLines = reading.cards.map((entry) => {
    const card = tarotCards.find((cardItem) => cardItem.id === entry.cardId);
    const name = card ? `${card.name}（${card.nameEn}）` : entry.cardId;
    const keywords = card ? card.keywords : "无";
    return `- ${entry.positionLabel}：${name}，${entry.orientationLabel || "正位"}，关键词：${keywords}`;
  }).join("\n");

  return [
    `占卜问题：${reading.question || "（未填写）"}`,
    `牌阵：${reading.mode === "three" ? "三张牌（过去/现在/未来）" : "单张牌（现在）"}`,
    "抽到的牌：",
    cardLines,
    reading.personalNote ? `占卜者的个人直觉/解答：${reading.personalNote}` : "占卜者暂未写下个人直觉。",
    "",
    "请不要逐张罗列牌意，也不要用关键词堆砌或清单式的格式。请像讲故事一样循序渐进地展开：如果是三张牌，就从过去自然过渡到现在、再到未来，让每张牌的含义成为故事的一部分、彼此呼应；如果是单张牌，就围绕这张牌的能量展开一段完整的叙述。语气温和、有画面感，字数在250-400字之间，可以在故事的最后自然地呼应占卜者的问题和个人直觉。请直接输出这段故事正文，不要加小标题，也不要重复罗列牌名或关键词。"
  ].join("\n");
}

async function requestAiInsight(reading) {
  const apiKey = getStoredApiKey();
  const model = getStoredModel();

  const response = await fetch("https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: "你是一位擅长讲故事的塔罗解读师，你的解读像一段娓娓道来的旅程，而不是逐条罗列牌意的清单。用中文写作，语气温和、有洞察力、有画面感。" },
        { role: "user", content: buildAiPrompt(reading) }
      ],
      temperature: 0.8,
      max_tokens: 700
    })
  });

  if (!response.ok) {
    let message = `请求失败（状态码 ${response.status}）`;
    try {
      const errorBody = await response.json();
      if (errorBody && errorBody.error && errorBody.error.message) {
        message = errorBody.error.message;
      }
    } catch (parseError) {
      // 保留默认错误信息
    }
    throw new Error(message);
  }

  const data = await response.json();
  const content = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;

  if (!content || !content.trim()) {
    throw new Error("未获取到有效回复。");
  }

  return content.trim();
}

async function runAiInsight(reading) {
  aiInsightCard.classList.remove("hidden");
  aiInsightRetry.classList.add("hidden");

  if (!getStoredApiKey()) {
    aiInsightBody.innerHTML = '<p class="ai-insight-hint">还没有设置 阿里云百炼 API Key，点击上方"⚙️ AI 设置"填写后即可自动生成深度解读。</p>';
    return;
  }

  aiInsightBody.innerHTML = '<p class="ai-insight-loading">正在请求通义千问生成解读……</p>';

  try {
    const text = await requestAiInsight(reading);
    aiInsightBody.innerHTML = text
      .split(/\n+/)
      .filter((line) => line.trim())
      .map((line) => `<p>${line.trim()}</p>`)
      .join("");
    revealStory(aiInsightBody, "p");
  } catch (error) {
    aiInsightBody.innerHTML = `<p class="ai-insight-error">生成失败：${error.message}</p>`;
    aiInsightRetry.classList.remove("hidden");
  }
}

function exportReadings() {
  const readings = loadReadings();
  const exportText = readings.map((item) => {
    const cardSummary = (item.cards || []).map((entry) => {
      const card = tarotCards.find((cardItem) => cardItem.id === entry.cardId);
      return `${entry.positionLabel}: ${card ? `${card.name} / ${card.nameEn}` : entry.cardId}`;
    }).join("; ");

    return [
      `时间：${new Date(item.readingTime || item.createdAt).toLocaleString()}`,
      `问题：${item.question}`,
      `模式：${item.mode === "three" ? "三张牌" : "单牌"}`,
      `卡牌：${cardSummary}`,
      `个人解答：${item.personalNote || "未填写"}`,
      ""
    ].join("\n");
  }).join("\n");

  const blob = new Blob([exportText || "暂无记录"], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "tarot-readings.txt";
  link.click();
  URL.revokeObjectURL(link.href);
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.toggle("hidden", screen.id !== id);
  });
  const target = document.getElementById(id);
  target.classList.remove("screen-enter");
  void target.offsetWidth;
  target.classList.add("screen-enter");
}

function setInterpretView(view) {
  document.querySelectorAll(".interpret-panel").forEach((panel) => {
    panel.classList.toggle("hidden", panel.id !== view);
  });
  document.querySelectorAll(".interpret-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.interpretView === view);
  });
}

function requiredPickCount() {
  return spreadModeSelect.value === "three" ? 3 : 1;
}

function getManualEntries() {
  if (spreadModeSelect.value === "three") {
    return [1, 2, 3].map((index) => ({
      input: document.getElementById(`card-name-${index}`),
      orientationSelect: document.getElementById(`orientation-${index}`),
      positionLabel: POSITION_LABELS[index - 1]
    }));
  }
  return [{
    input: cardSelect,
    orientationSelect: document.getElementById("orientation"),
    positionLabel: "现在"
  }];
}

function validateManualEntries() {
  return getManualEntries().every((entry) => entry.input.value.trim().length > 0);
}

function renderManualGallery() {
  return getManualEntries().map(({ input, orientationSelect, positionLabel }) => {
    const card = getCardById(resolveCardId(input.value));
    const isReversed = orientationSelect.value === "reversed";
    return `
      <div class="drawn-card-item">
        <img class="${isReversed ? "reversed" : ""}" src="${getCardArtwork(card)}" alt="${card.name}" />
        <p><strong>${positionLabel}</strong> · ${isReversed ? "逆位" : "正位"}</p>
        <p>${card.name} / ${card.nameEn}</p>
      </div>
    `;
  }).join("");
}

function renderManualPreview() {
  selectedCardPreview.innerHTML = getManualEntries().map(({ input, orientationSelect, positionLabel }) => {
    const value = input.value.trim();
    if (!value) {
      return `
        <div class="drawn-card-item placeholder">
          <p><strong>${positionLabel}</strong></p>
          <p>尚未填写</p>
        </div>
      `;
    }
    const card = getCardById(resolveCardId(value));
    const isReversed = orientationSelect.value === "reversed";
    return `
      <div class="drawn-card-item">
        <img class="${isReversed ? "reversed" : ""}" src="${getCardArtwork(card)}" alt="${card.name}" />
        <p><strong>${positionLabel}</strong> · ${isReversed ? "逆位" : "正位"}</p>
        <p>${card.name} / ${card.nameEn}</p>
      </div>
    `;
  }).join("");
}

function setDrawMode(mode) {
  currentDrawMode = mode;
  document.querySelectorAll(".draw-mode-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.drawMode === mode);
  });
  digitalDrawPanel.classList.toggle("hidden", mode !== "digital");
  manualDrawPanel.classList.toggle("hidden", mode !== "manual");
  manualHintMessage.classList.add("hidden");

  if (mode === "manual") {
    const isThree = spreadModeSelect.value === "three";
    singleInputRow.classList.toggle("hidden", isThree);
    threeInputRows.classList.toggle("hidden", !isThree);
    toFinishBtn.classList.remove("hidden");
    renderManualPreview();
  } else {
    toFinishBtn.classList.toggle("hidden", pickedCards.length < requiredPickCount());
  }
}

function pickRandomSpread(size) {
  const pool = [...tarotCards];
  const picks = [];
  for (let index = 0; index < size; index += 1) {
    const pickedIndex = Math.floor(Math.random() * pool.length);
    picks.push(pool.splice(pickedIndex, 1)[0]);
  }
  return picks;
}

function renderSpread() {
  const mid = (spreadState.length - 1) / 2;
  const need = requiredPickCount();
  const maxAngle = 34;
  const archHeight = 48;

  cardSpread.innerHTML = spreadState
    .map((entry, index) => {
      const t = mid === 0 ? 0 : (index - mid) / mid;
      const angle = t * maxAngle;
      const lift = (1 - t * t) * archHeight;
      const flippedClass = entry.flipped ? " flipped" : "";
      const disabledClass = !entry.flipped && pickedCards.length >= need ? " disabled" : "";
      const reversedClass = entry.flipped && entry.orientation === "reversed" ? " reversed" : "";
      return `
        <div class="spread-card${flippedClass}${disabledClass}" data-index="${index}" style="transform: rotate(${angle}deg) translateY(${-lift}px); z-index: ${index};">
          <div class="inner">
            <div class="face back">🜲</div>
            <div class="face front${reversedClass}"><img src="${getCardArtwork(entry.card)}" alt="${entry.card.name}" /></div>
          </div>
        </div>
      `;
    })
    .join("");

  cardSpread.querySelectorAll(".spread-card").forEach((el) => {
    el.addEventListener("click", () => handleSpreadCardClick(Number(el.dataset.index)));
  });
}

function enableSpreadDragScroll(container) {
  let isDown = false;
  let dragged = false;
  let startX = 0;
  let startScroll = 0;

  container.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch") return;
    isDown = true;
    dragged = false;
    startX = event.clientX;
    startScroll = container.scrollLeft;
    container.classList.add("dragging");
  });

  window.addEventListener("pointermove", (event) => {
    if (!isDown || event.pointerType === "touch") return;
    const delta = event.clientX - startX;
    if (Math.abs(delta) > 4) dragged = true;
    container.scrollLeft = startScroll - delta;
  });

  window.addEventListener("pointerup", (event) => {
    if (event.pointerType === "touch") return;
    isDown = false;
    container.classList.remove("dragging");
  });

  container.addEventListener("wheel", (event) => {
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      container.scrollLeft += event.deltaY;
      event.preventDefault();
    }
  }, { passive: false });

  container.addEventListener("click", (event) => {
    if (dragged) {
      event.stopPropagation();
    }
  }, true);
}

function updateDeckMessageForProgress() {
  const need = requiredPickCount();
  if (pickedCards.length >= need) {
    deckMessage.textContent = `已选好 ${need} 张牌，可以继续填写问题并生成分析。`;
  } else if (need === 1) {
    deckMessage.textContent = "点选一张牌完成抽牌。";
  } else {
    deckMessage.textContent = `请点选第 ${pickedCards.length + 1} 张牌（${POSITION_LABELS[pickedCards.length]}）。`;
  }
}

function applyPickedCardsToForm() {
  if (spreadModeSelect.value === "three") {
    pickedCards.forEach((pick, index) => {
      const input = document.getElementById(`card-name-${index + 1}`);
      const orientationSelect = document.getElementById(`orientation-${index + 1}`);
      if (input) {
        input.value = `${pick.card.name} / ${pick.card.nameEn}`;
      }
      if (orientationSelect) {
        orientationSelect.value = pick.orientation;
      }
    });
  } else if (pickedCards[0]) {
    cardSelect.value = `${pickedCards[0].card.name} / ${pickedCards[0].card.nameEn}`;
    document.getElementById("orientation").value = pickedCards[0].orientation;
  }
}

function triggerPopIn(el) {
  el.classList.remove("pop-in");
  void el.offsetWidth;
  el.classList.add("pop-in");
}

function revealStory(container, selector) {
  container.querySelectorAll(selector).forEach((el, index) => {
    el.classList.remove("story-line");
    el.style.animationDelay = `${index * 0.35}s`;
    void el.offsetWidth;
    el.classList.add("story-line");
  });
}

function renderDrawResults() {
  const isThree = spreadModeSelect.value === "three";
  drawResults.innerHTML = pickedCards
    .map((pick, index) => `
      <div class="drawn-card-item">
        <img class="${pick.orientation === "reversed" ? "reversed" : ""}" src="${getCardArtwork(pick.card)}" alt="${pick.card.name}" />
        <p><strong>${isThree ? POSITION_LABELS[index] : "现在"}</strong> · ${pick.orientation === "reversed" ? "逆位" : "正位"}</p>
        <p>${pick.card.name} / ${pick.card.nameEn}</p>
      </div>
    `)
    .join("");
  triggerPopIn(drawResults);
  toFinishBtn.classList.remove("hidden");
}

function handleSpreadCardClick(index) {
  const need = requiredPickCount();
  if (pickedCards.length >= need) {
    return;
  }

  const entry = spreadState[index];
  if (!entry || entry.flipped) {
    return;
  }

  entry.flipped = true;
  entry.orientation = Math.random() < 0.5 ? "reversed" : "upright";
  pickedCards.push({ card: entry.card, orientation: entry.orientation });
  applyPickedCardsToForm();
  renderSpread();
  updateDeckMessageForProgress();

  if (pickedCards.length >= need) {
    renderDrawResults();
  }
}

function resetSpread(reshuffle) {
  if (reshuffle || spreadState.length === 0) {
    spreadState = pickRandomSpread(SPREAD_SIZE).map((card) => ({ card, flipped: false }));
  } else {
    spreadState.forEach((entry) => { entry.flipped = false; });
  }
  pickedCards = [];
  drawResults.innerHTML = "";
  toFinishBtn.classList.add("hidden");
  renderSpread();
  updateDeckMessageForProgress();
}

document.querySelectorAll("[data-goto-screen]").forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.gotoScreen));
});

document.querySelectorAll("[data-back-screen]").forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.backScreen));
});

document.querySelectorAll(".mode-card").forEach((button) => {
  button.addEventListener("click", () => {
    spreadModeSelect.value = button.dataset.modeValue;
    resetSpread(true);
    showScreen("screen-question");
  });
});

questionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  setDrawMode("digital");
  showScreen("screen-draw");
});

document.querySelectorAll(".draw-mode-tab").forEach((tab) => {
  tab.addEventListener("click", () => setDrawMode(tab.dataset.drawMode));
});

toFinishBtn.addEventListener("click", () => {
  if (currentDrawMode === "manual") {
    if (!validateManualEntries()) {
      manualHintMessage.classList.remove("hidden");
      return;
    }
    finishCardGallery.innerHTML = renderManualGallery();
  } else {
    finishCardGallery.innerHTML = drawResults.innerHTML;
  }
  showScreen("screen-finish");
});

finishForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nowIso = new Date().toISOString();
  const reading = {
    id: Date.now().toString(),
    createdAt: nowIso,
    readingTime: nowIso,
    question: document.getElementById("question").value.trim(),
    mode: spreadModeSelect.value,
    cards: buildCardEntries(),
    orientation: document.getElementById("orientation").value,
    keyword: document.getElementById("keyword").value.trim(),
    personalNote: document.getElementById("personal-notes").value.trim(),
  };

  lastReading = reading;
  const readings = loadReadings();
  readings.unshift(reading);
  saveReadings(readings);
  analysisResult.innerHTML = generateAnalysis(reading);
  triggerPopIn(analysisResult);
  revealStory(analysisResult, ".story p");
  renderHistory();
  runAiInsight(reading);
  showScreen("screen-result");
});

restartBtn.addEventListener("click", () => {
  document.getElementById("question").value = "";
  document.getElementById("keyword").value = "";
  document.getElementById("personal-notes").value = "";
  ["orientation", "orientation-1", "orientation-2", "orientation-3"].forEach((id) => {
    document.getElementById(id).value = "upright";
  });
  spreadModeSelect.value = "single";
  clearCardInputs();
  analysisResult.innerHTML = "";
  selectedCardPreview.innerHTML = "";
  aiInsightCard.classList.add("hidden");
  setDrawMode("digital");
  resetSpread(true);
  showScreen("screen-landing");
});

exportButton.addEventListener("click", exportReadings);
shuffleButton.addEventListener("click", () => resetSpread(true));
cardSearchInput.addEventListener("input", renderCardLibrary);
[
  cardSelect,
  document.getElementById("card-name-1"),
  document.getElementById("card-name-2"),
  document.getElementById("card-name-3"),
  document.getElementById("orientation"),
  document.getElementById("orientation-1"),
  document.getElementById("orientation-2"),
  document.getElementById("orientation-3")
].forEach((input) => {
  input.addEventListener("input", renderManualPreview);
  input.addEventListener("change", renderManualPreview);
});

document.querySelectorAll(".interpret-tab").forEach((tab) => {
  tab.addEventListener("click", () => setInterpretView(tab.dataset.interpretView));
});

aiSettingsToggle.addEventListener("click", () => {
  aiSettingsPanel.classList.toggle("hidden");
});

aiSettingsSave.addEventListener("click", () => {
  const key = aiApiKeyInput.value.trim();
  const model = aiModelInput.value.trim();
  if (key) {
    localStorage.setItem(AI_KEY_STORAGE, key);
  }
  localStorage.setItem(AI_MODEL_STORAGE, model || "qwen-turbo");
  aiApiKeyInput.value = "";
  aiApiKeyInput.placeholder = getStoredApiKey() ? "已保存（再次输入可更新）" : "sk-...";
  aiSettingsPanel.classList.add("hidden");
});

aiSettingsClear.addEventListener("click", () => {
  localStorage.removeItem(AI_KEY_STORAGE);
  aiApiKeyInput.value = "";
  aiApiKeyInput.placeholder = "sk-...";
});

aiInsightRetry.addEventListener("click", () => {
  if (lastReading) {
    runAiInsight(lastReading);
  }
});

clearCardInputs();
populateCardOptions();
renderCardLibrary();
renderElementGuide();
renderHistory();
resetSpread(true);
enableSpreadDragScroll(spreadScroll);
showScreen("screen-landing");
setInterpretView("library-view");
setDrawMode("digital");
aiModelInput.value = getStoredModel();
if (getStoredApiKey()) {
  aiApiKeyInput.placeholder = "已保存（再次输入可更新）";
}
