export const zh = {
  nav: {
    details: '活動介紹',
    registration: '報名資訊',
    rules: '賽制規則',
    schedule: '活動賽程',
    venue: '比賽地點',
    registerNow: '立即報名'
  },
  hero: {
    title: 'TAIWAN KENDAMA OPEN',
    subtitle: 'OFFICIAL EVENT 2026',
    date: '2026年4月18日',
    location: '台北市',
    description: '台灣最盛大的劍玉賽事即將登場',
    eventDate: {
      dates: '2026 / 03 / 28（六）- 29（日）',
      location: '高雄市'
    }
  },
  eventDetails: {
    title: '活動內容',
    subtitle: 'EVENT CATEGORIES',
    description: '本次賽事包含多種競技模式，無論是剛接觸劍玉的新手，還是身經百戰的高手，都有屬於你的舞台。',
    categories: {
      speed: {
        title: '速度賽 (Speed)',
        desc: '考驗基礎與速度的極限',
        groups: ['新手組', '初階組']
      },
      designated: {
        title: '指定賽 (OPEN)',
        desc: '穩定性與成功率的對決',
        groups: ['新手組', '初階組', '進階組', '挑戰組']
      },
      kenGame: {
        title: 'Ken Game',
        desc: '策略與招式庫的較量',
        groups: ['公開賽']
      },
      freestyle: {
        title: 'Freestyle',
        desc: '風格、流暢度與創意的展現',
        groups: ['公開組', 'PRO組']
      }
    },
    awards: {
      title: 'Freestyle觀眾票選獎',
      subtitle: 'Vote Live at Venue',
      description: '除了專業裁判的評分外，現場觀眾也是比賽的重要一環。掃描現場 QR Code，為你最喜歡的選手投下一票。',
      items: [
        { title: '最佳創意獎', desc: '剛剛那是什麼招？我怎麼沒看過！？' },
        { title: '最佳 FLOW 獎', desc: '做招不卡卡，動作最流暢。' },
        { title: '最佳大招獎', desc: '誰成的大招嚇到你？' },
        { title: '最佳風格獎', desc: '動作、招式散發出的獨有風格。' }
      ]
    },
    divisionInfo: {
      title: '分組信任制說明',
      description: '本賽事採「信任制」分組，請選手嚴肅並仔細評估自身實力。若經主辦認定實力明顯高於報名組別，將進行「一次性勸導」。曾於「南方劍」、「玩野大賽」各組別獲得前三名之選手，請優先考慮報名更高一級組別。',
      divisions: [
        { name: '新手組', desc: '練劍未滿一年，基本招建立中。' },
        { name: '初階組', desc: '穩定基本招，偶爾嘗試連招。' },
        { name: '進階組', desc: '穩定連招，擁有中高難度招式。' },
        { name: '挑戰組', desc: '具高難度連招/創意招式，有比賽經驗。' }
      ]
    }
  },
  registration: {
    title: '報名資訊',
    subtitle: 'REGISTRATION',
    method: {
      title: '報名方式',
      content: '報名期限：2026 / 01 / 19（一）～ 2026 / 02 / 15（日）',
      note: '＊逾期不受理，請務必在期限內完成報名。'
    },
    divisions: {
      title: '賽事組別',
      note: '選手僅能報名以下其中一組：新手組 / 初階組 / 進階組 / 挑戰組',
      list: [
        { name: '新手組', content: '新手組指定賽 + 新手組速度賽' },
        { name: '初階組', content: '初階組指定賽 + 初階組速度賽' },
        { name: '進階組', content: '進階組指定賽' },
        { name: '挑戰組', content: '挑戰組指定賽' }
      ],
      additional: {
        title: '額外公開賽',
        items: [
          { name: 'Ken Game 公開賽' },
          {
            name: 'Freestyle 公開賽',
            sub: ['公開組', 'PRO組'],
            note: '*若 PRO 組報名人數不足 8 人，將取消 PRO 組並併入公開組。'
          }
        ]
      }
    },
    fees: {
      title: '報名費用與套餐',
      registrationUrl: 'https://forms.gle/Ubksz7Gb92RAjwMu7',
      planA: {
        label: '(A) 基本方案',
        price: 'NT$ 1,500',
        includes: '含：【TKO 帆布袋 + 胸章】',
        button: '立即報名'
      },
      planB: {
        label: '(B) 擦擦汗方案',
        price: 'NT$ 1,700',
        includes: '含：【TKO 毛巾 + 帆布袋 + 胸章】',
        button: '立即報名'
      },
      planC: {
        label: '(C) 穿好看方案',
        price: 'NT$ 2,100',
        includes: '含：【TKO Tee + 帆布袋 + 胸章】',
        button: '立即報名'
      },
      planD: {
        label: '(D) 大全套方案',
        labelTag: '推薦',
        price: 'NT$ 3,100',
        includes: '含：【TKO Tee + 毛巾 + 襪子 + 海報 + 鑰匙圈 + 帆布袋 + 胸章】',
        button: '立即報名'
      },
      discount: {
        title: '學生優惠',
        content: '報到時出示有效學生證，可享 NT$ 500 折扣。'
      },
      notes: '＊以上皆含貼紙包、參賽證。',
      proNote: '＊Freestyle PRO 組如人數不足 8 位，則取消 PRO 組，並編列進公開組一起比賽。'
    },
    merchandise: {
      title: 'TKO 周邊商品',
      subtitle: 'OFFICIAL MERCHANDISE',
      description: '精選 TKO 2026 官方周邊商品展示',
      note: '＊商品數量有限，實際販售詳情請關注 TKO 官方公告。'
    }
  },
  rules: {
    title: '賽制與規則',
    subtitle: 'COMPETITION RULES & FORMATS',
    generalRules: {
      title: 'General Rules 通用規範',
      items: [
        '不得用非慣用手碰觸球或劍及調整線。',
        '平衡招式慣用手不得碰手（燈台月面不碰劍；鶯極意不碰球）。',
        '可使用 Insta 收劍技巧。',
        '若被判定違規，該招式失敗。',
        '結尾若為「收劍」招式，不限制收劍方式。',
        '天中殺：劍尖必須明顯朝下，依裁判判決為主。',
        '若未特別指定，旋轉方向（正逆迴旋）沒有任何限制。',
        '若未特別指定，劍玉的持法沒有任何限制。',
        '一周系招式，小皿、大皿順序不限；如招式包含中皿，必須以中皿為最後動作。'
      ]
    },
    tabs: {
      novice: '新手/初階組',
      advanced: '進階/挑戰組',
      ken: 'Ken Game'
    },
    noviceSpeed: {
      title: '速度賽 (Speed)',
      format: '取前三名 + 海選最速獎',
      qualifiersLabel: '海選：',
      qualifiers: '抽出「每招需成功次數」，選手依序做招，限時 2 分鐘。取用時最短前五名。',
      finalsLabel: '決賽：',
      finals: '加入「▲ 符號招式」為最後一招。五強上台競速，前兩名進冠亞。冠亞背對背競速。',
      noviceTitle: '新手組招式',
      beginnerTitle: '初階組招式',
      videoNovice: '新手速度賽示範',
      videoBeginner: '初階速度賽示範',
      noviceTricks: [
        '簡單止劍 - 螺旋丸',
        '蠟燭',
        '簡單大皿 - 棒球接中皿',
        '▲ 止劍'
      ],
      beginnerTricks: [
        '天地二段',
        '月面 - 收劍',
        '大鶯 - 收劍',
        '▲ 簡單止劍 - 逆地球'
      ]
    },
    noviceDesignated: {
      title: '指定賽 (OPEN)',
      format: '1 對 1 對戰 (海選樹狀圖)',
      rulesLabel: '規則：',
      rules: '轉劍玉決定先後。流程為：A選招，A進行(3次機會)，若A成功且B失敗則A得1分；皆成功或皆失敗則輪換B選招。先得3分者勝出。',
      finalsLabel: '決賽：',
      finals: '加入「▲ 符號」招式 (新手10招/初階12招)。冠亞賽先得5分勝。',
      trickList: '指定賽招式列表 (點擊收合)',
      noviceGroup: '新手組',
      beginnerGroup: '初階組',
      videoNovice: '新手指定賽示範',
      videoBeginner: '初階指定賽示範',
      noviceTricks: [
        '非慣用手殺手中皿',
        '飛行機',
        '止劍',
        '大皿 - 膝蓋大皿',
        '空中飛人',
        '簡單止劍 - 螺旋丸止劍',
        '簡單大鶯 - 收劍',
        '(止劍狀態) 抽線接劍',
        '▲ 天中殺',
        '▲ 殺手手勢皿一周'
      ],
      beginnerTricks: [
        '歐洲一周',
        '月面 - 一迴旋收',
        '大皿 - 茶壺 - 收劍',
        '飛行機 - 中皿 - 天中殺',
        '小鶯 - 地球收',
        '小指止劍 - 收劍',
        '大皿撈金魚 - 收劍',
        '燈台 - 抓劍收',
        '重力機快手止劍',
        '招財貓收劍',
        '▲ 竹馬 - 收劍',
        '▲ 逆飛行球 - 地球'
      ]
    },
    advancedDesignated: {
      title: '進階/挑戰組 指定賽',
      format: '賽制流程',
      formatDesc: '1 對 1 對戰。海選多組同時進行。轉劍玉決定先後，優先者從主辦方指定招式中抽一招。規則同初階組：三次機會，先成功者得分。先得 3 分勝出。若招式抽完平手，全部重抽，先得1分勝。',
      finals: '決賽階段 (Finals)',
      finalsDesc: '需加入 ▲ 符號招式 (總共進階13招/挑戰13招)。',
      finalScore: '冠亞軍決賽賽制為先獲得 5 分 勝出。',
      advancedGroup: '進階組 Advanced',
      challengeGroup: '挑戰組 Challenge',
      videoAdvanced: '進階指定賽示範',
      videoChallenge: '挑戰組指定賽示範',
      advancedTricks: [
        '非慣用手重力機快手止劍',
        '歐洲鶯',
        '兩圈跳劍殺快手',
        '圓月殺法放燈 - 收劍',
        '竹馬渡玉 - 一迴旋收',
        '逆一迴旋月面 - 月上月 - 逆一迴旋收',
        '殺手中皿極意 - 收劍',
        '丹麥一周',
        '兩圈離轉地球',
        '拋接燈台 - 1.5 Cush in',
        '▲ 飛行機 - tap 逆一迴旋 in - 一迴旋 Cush in',
        '▲ 蠟燭 - 離轉蠟燭 - 止劍',
        '▲ 轉劍 late 轉劍止劍'
      ],
      challengeTricks: [
        '三圈跳劍',
        '逆月面 - 3 tap 一迴旋逆月 - 止劍',
        '拉二迴旋轉劍 兩圈拋一迴旋飛行機',
        '非慣用手離轉地球',
        '逆 juggle ghost juggle 正 juggle 止劍',
        '中皿極意 - 太陽極意 - 大鶯 - 小鶯 - 收劍',
        '直拉夢幻小竹馬 - 夢幻馬上馬 - 抓劍收',
        '直拉 tap 正一迴旋飛行機 - 0.5 tap 正一迴旋 in',
        '一迴旋重力機 - 一迴旋重力機快手止劍',
        '一迴旋燈台 - 逆燈上燈 insta juggle 燈台 insta 逆一迴旋收',
        '▲ 轉劍 juggle 轉劍止劍',
        '▲ 兩圈離轉 juggle 2 tap juggle 止劍',
        '▲ 月面 - 月上月 1 2 3 - 收劍'
      ]
    },
    kenGame: {
      title: 'Ken Game 公開賽',
      basicRules: '基本規則',
      format: 'Format:',
      formatDesc: '1 v 1 樹狀圖對戰。',
      start: 'Start:',
      startDesc: '轉劍玉決定誰先出招。',
      attDef: 'Att/Def:',
      attDefDesc: '每人有一次出招機會、兩次跟招機會。',
      winCondition: '先拿到 "K"、"E"、"N" 三個字母的選手落敗。',
      proveIt: 'Prove it! Rule',
      proveItDesc1: '當 A 賽點時，B 兩次跟招皆失敗，B 可選擇喊 "Prove it!" (限一次) 或做第三次。',
      proveItDesc2: '若喊 "Prove it!"，A 須重做該招。A 成功則贏；A 失敗則無人失分，換 B 出招。'
    },
    freestyle: {
      title: 'Freestyle BATTLE',
      subtitle: '公開組 / PRO組',
      scoring: {
        creativity: { percent: '30%', title: 'Creativity 創意', desc: '招式的極致思考與原創' },
        flow: { percent: '40%', title: 'Flow 流暢', desc: '整體流暢與流潤度' },
        difficulty: { percent: '30%', title: 'Tech. Diff. 難度', desc: '技術難度、完成度' }
      },
      qualifiers: {
        title: '海選階段 Qualifiers',
        rules: [
          '每人 <strong>60 秒</strong> Freestyle。',
          '依序上台，三位裁判綜合評分。',
          '取總分最高前 16 名晉級決賽。'
        ]
      },
      finals: {
        title: '決賽階段 Finals',
        rules: [
          '16 強採抽籤決定 1v1 對戰組合。',
          '雙方各進行 <strong>兩輪</strong>，每輪 <strong>45 秒</strong>。',
          '場地分紅色與綠色對戰區。',
          '裁判綜合評分，舉旗直接判定優勝者。'
        ]
      },
      judges: {
        title: 'Judges 裁判陣容',
        subtitle: '由三位資深劍玉玩家擔任評審，名單即將公佈。',
        comingSoon: 'Coming Soon'
      }
    }
  },
  footer: {
    title: 'TAIWAN KENDAMA OPEN',
    subtitle: 'Official Event 2026',
    description: '台灣最盛大的劍玉賽事',
    contact: '聯絡我們',
    followUs: '追蹤我們',
    rights: '© 2026 Taiwan Kendama Open. All rights reserved.'
  },
  sponsors: {
    sectionLabel: 'PARTNERS',
    title: '合作夥伴',
    platinumLabel: '✦ 白金贊助 PLATINUM',
    goldLabel: '金級贊助 GOLD',
    silverLabel: '銀級贊助 SILVER',
    platinum: [
      { name: 'SFP', logo: './sponsors/platinum/200510_SFP-Sticker.png', desc: '' },
      { name: 'Bill Boque', logo: './sponsors/platinum/Bill Boque.png', desc: '' },
      { name: 'GLOKEN', logo: './sponsors/platinum/GLOKEN.png', desc: '' },
      { name: 'JAC Kendama', logo: './sponsors/platinum/JAC Kendama.png', desc: '' },
      { name: 'Kendama Co', logo: './sponsors/platinum/Kendama Co.png', desc: '' },
      { name: '踏山 TAHZAN', logo: './sponsors/platinum/NS_踏山TAHZAN_Logo-OG4.png', desc: '' },
      { name: 'Sol Kendamas', logo: './sponsors/platinum/Sol Kendamas .png', desc: '' },
      { name: 'Sweets Kendamas', logo: './sponsors/platinum/Sweets Kendamas.png', desc: '' },
      { name: '再一顆影像', logo: './sponsors/platinum/再一顆影像.png', desc: '' },
      { name: '易利興鋼鐵有限公司', logo: './sponsors/platinum/易利興鋼鐵有限公司.png', desc: '' },
      { name: '魷太郎', logo: './sponsors/platinum/魷太郎LOGO-02.png', desc: '' },
    ] as { name: string; logo: string; url?: string; desc?: string }[],
    gold: [
      { name: '2000s Kendama Shop', logo: './sponsors/gold/2000s Kendama Shopl.png' },
      { name: '430 Fourthirty', logo: './sponsors/gold/430 Fourthirty.png' },
      { name: 'Cereal Kendama', logo: './sponsors/gold/CerealKendama.png' },
      { name: 'Jijan', logo: './sponsors/gold/Jijan.png' },
      { name: 'Kendama Europe', logo: './sponsors/gold/KendamaEurope_Logo_high.png' },
      { name: 'ii stone', logo: './sponsors/gold/ii stone logo.PNG' },
      { name: 'Perspective Kendama', logo: './sponsors/gold/perspective kendama.png' },
      { name: 'Dealight Kendama', logo: './sponsors/gold/עותק של whitelogo.png' },
      { name: '劍玉師小螺絲', logo: './sponsors/gold/劍玉師小螺絲.png' },
      { name: '喬吧 傳統整復推拿', logo: './sponsors/gold/喬吧 傳統整復推拿.png' },
      { name: '大空 Ozora Kendama', logo: './sponsors/gold/大空 Ozora Kendamao.png' },
      { name: '板塊運動 Mixskate', logo: './sponsors/gold/板塊運動 Mixskate.png' },
      { name: '神秘狗', logo: './sponsors/gold/神秘狗.png' },
      { name: '超朋友劍玉糖', logo: './sponsors/gold/超朋友劍玉糖.png' },
    ] as { name: string; logo: string; url?: string }[],
    silver: [
      { name: '三眼女孩', logo: './sponsors/silver/3 eyes girl 三眼女孩.png' },
      { name: 'ES', logo: './sponsors/silver/ES_RevisedLogoBlack.png' },
      { name: 'Flower Color', logo: './sponsors/silver/FLOWER COLOR.png' },
      { name: 'IJYOU', logo: './sponsors/silver/IJYOU 刺繍用太ロゴ 2-1_transparent (1).png' },
      { name: 'IMG', logo: './sponsors/silver/IMG_1190.PNG' },
      { name: 'KA', logo: './sponsors/silver/KA logo PNG.png' },
      { name: 'Kencards', logo: './sponsors/silver/KENCARDS_black-blue.png' },
      { name: 'Kendama 101', logo: './sponsors/silver/Kendama 101.png' },
      { name: 'Kendama World Records', logo: './sponsors/silver/Kendama World Records .png' },
      { name: 'SPIKE', logo: './sponsors/silver/Logo_SPIKEblue.png' },
      { name: 'SL.nails design', logo: './sponsors/silver/SL.nails desiqn.png' },
      { name: 'Rod', logo: './sponsors/silver/rod logo.svg' },
      { name: '力廷水電工程行', logo: './sponsors/silver/力廷水電工程行.png' },
      { name: '勳男水餃', logo: './sponsors/silver/勳男水餃.png' },
      { name: '山城燒雞蛋糕', logo: './sponsors/silver/山城燒雞蛋糕.png' },
      { name: '百福劍球', logo: './sponsors/silver/百福劍球.png' },
    ] as { name: string; logo: string; url?: string }[]
  },
  venue: {
    sectionLabel: 'Location',
    title: '比賽',
    titleHighlight: '地點',
    address: '804高雄市鼓山區蓬萊路99號'
  },
  schedule: {
    titleLine1: 'Event',
    titleLine2: 'Schedule',
    day1: {
      subtitle: 'QUALIFIERS 海選日',
      items: [
        '選手報到',
        '比賽開幕',
        '新手組速度賽海選 (取五強)',
        '初階組速度賽海選 (取五強)',
        '中遊戲：劍玉大風吹 / Ken Game',
        '新手組指定賽海選 (取四強)',
        '初階組指定賽海選 (取四強)',
        '進階組指定賽海選 (取八強)',
        '挑戰組指定賽海選 (取八強)',
        '中遊戲：123 木頭人',
        'Freestyle 海選 (取十六強)',
        '小遊戲：劍玉猜猜'
      ]
    },
    day2: {
      subtitle: 'FINALS 決賽日',
      items: [
        '決賽選手報到',
        '新手組速度賽決賽',
        '初階組速度賽決賽 / Ken Game 決賽',
        '中遊戲：比手畫腳',
        '新手組指定賽決賽',
        '初階組指定賽決賽',
        '進階組指定賽決賽',
        '挑戰組指定賽決賽',
        '中遊戲：兩人三腳蠟燭爭霸',
        'Freestyle 決賽',
        '小遊戲：跳劍地球做到贏',
        '頒獎 / 大合照'
      ]
    }
  },
  countdown: {
    days: '天',
    hours: '時',
    minutes: '分',
    seconds: '秒'
  },
  faq: {
    title: '常見問題',
    items: [
      { q: '比賽地點怎麼到？', a: '場地位於高雄市鼓山區蓬萊路99號，可搭乘高雄捷運至鹽埕埔站或西子灣站，步行約10分鐘即可抵達。開車可使用附近收費停車場。' },
      { q: '可以現場報名嗎？', a: '賽事報名已截止，現場不開放報名，但歡迎到場參與現場的小活動！' },
      { q: '有年齡限制嗎？', a: '沒有年齡限制，歡迎所有年齡層的劍玉愛好者參加！未滿12歲的參賽者建議由家長陪同。' },
      { q: '比賽有提供午餐嗎？', a: '報名費不含餐點。場地周邊有許多餐廳與小吃，也歡迎自備午餐。' },
      { q: '可以只來觀賽不參賽嗎？', a: '當然可以！觀賽免費入場，歡迎攜伴前來感受劍玉的魅力。' }
    ]
  }
};
