export const zh = {
  nav: {
    details: '活動介紹',
    registration: '報名資訊',
    rules: '賽制規則',
    schedule: '活動賽程',
    registerNow: '立即報名'
  },
  hero: {
    title: 'TAIWAN KENDAMA OPEN',
    subtitle: 'OFFICIAL EVENT 2026',
    date: '2026年4月18日',
    location: '台北市',
    description: '台灣最盛大的劍玉賽事即將登場'
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
      content: '報名將透過 Google 表單進行。報名表單預計於 1 月開放。'
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
            note: '若 PRO 組報名人數不足 8 人，將取消 PRO 組並併入公開組。'
          }
        ]
      }
    },
    fees: {
      title: '報名費用與套餐',
      basic: {
        price: 'NT$ 1,500',
        name: '純比賽套餐',
        includes: '包含：貼紙 + TKO 周邊商品'
      },
      moreInfo: '更多周邊商品套餐選項即將釋出。',
      discount: {
        title: '學生優惠',
        content: '報到時出示有效學生證，可享 NT$ 500 折扣。'
      }
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
    freestyle: {
      title: 'Freestyle BATTLE',
      subtitle: '公開組 / PRO組',
      scoring: {
        creativity: { percent: '30%', title: 'Creativity 創意', desc: '招式的獨創性與新穎程度。' },
        flow: { percent: '40%', title: 'Flow 流暢度', desc: '動作連接的順暢度與失誤率控制。' },
        difficulty: { percent: '30%', title: 'Difficulty 難度', desc: '招式的技術含量與複雜程度。' }
      },
      qualifiers: {
        title: '海選階段 Qualifiers',
        rules: [
          '每人 60 秒 Freestyle。',
          '依序上台，三位裁判綜合評分。',
          '取總分最高前 16 名晉級決賽。'
        ]
      },
      finals: {
        title: '決賽階段 Finals',
        rules: [
          '16 強採抽籤決定 1v1 對戰組合。',
          '雙方各進行兩輪，每輪 45 秒。',
          '場地分藍色與橘色對戰區。',
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
  }
};
