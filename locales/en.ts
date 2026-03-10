export const en = {
  nav: {
    details: 'Event Details',
    registration: 'Registration',
    rules: 'Rules',
    schedule: 'Schedule',
    venue: 'Venue',
    registerNow: 'Register Now'
  },
  hero: {
    title: 'TAIWAN KENDAMA OPEN',
    subtitle: 'OFFICIAL EVENT 2026',
    date: 'April 18, 2026',
    location: 'Taipei City',
    description: "Taiwan's Biggest Kendama Competition",
    eventDate: {
      dates: 'Mar 28 (Sat) - 29 (Sun), 2026',
      location: 'Kaohsiung City'
    }
  },
  eventDetails: {
    title: 'Event Content',
    subtitle: 'EVENT CATEGORIES',
    description: 'This competition includes multiple formats, whether you are new to kendama or a seasoned veteran, there is a stage for you.',
    categories: {
      speed: {
        title: 'Speed Division',
        desc: 'Test your fundamentals and speed limits',
        groups: ['First Timer', 'Beginner']
      },
      designated: {
        title: 'Open Division',
        desc: 'Consistency and success rate showdown',
        groups: ['First Timer', 'Beginner', 'Intermediate', 'Expert']
      },
      kenGame: {
        title: 'Ken Game',
        desc: 'Strategy and trick library competition',
        groups: ['Open']
      },
      freestyle: {
        title: 'Freestyle',
        desc: 'Style, flow, and creativity showcase',
        groups: ['Open', 'PRO']
      }
    },
    awards: {
      title: 'Freestyle Audience Choice Awards',
      subtitle: 'Vote Live at Venue',
      description: 'In addition to professional judging, the audience plays an important role. Scan the on-site QR code to vote for your favorite player.',
      items: [
        { title: 'Best Creativity Award', desc: 'What was that trick?! I\'ve never seen it before!' },
        { title: 'Best Flow Award', desc: 'Smooth execution with the best overall flow.' },
        { title: 'Best Big Trick Award', desc: 'Which trick completely blew your mind?' },
        { title: 'Best Style Award', desc: 'A unique personal style shown through movement and trick selection.' }
      ]
    },
    divisionInfo: {
      title: 'Division Selection Guidelines',
      description: 'This competition uses a "trust-based" division system. Please carefully evaluate your skill level. If organizers determine that your skill level is clearly above your registered division, a one-time advisory will be given. Players who have placed in the Top 3 at "South Jam" or "Play Wild" are strongly encouraged to register for the next higher division.',
      divisions: [
        { name: 'First Timer', desc: 'New to kendama or less than one year, still building basic tricks.' },
        { name: 'Beginner', desc: 'Can consistently complete basic tricks and occasionally attempt combos.' },
        { name: 'Intermediate', desc: 'Stable combo ability with medium-to-high difficulty tricks.' },
        { name: 'Expert', desc: 'High-difficulty combos or creative tricks with competition experience.' }
      ]
    }
  },
  registration: {
    title: 'Registration Information',
    subtitle: 'REGISTRATION',
    method: {
      title: 'Registration Method',
      content: 'Registration Period: Jan 19, 2026 (Mon) – Feb 15, 2026 (Sun)',
      note: '＊Please complete your registration within the deadline. Late registrations will not be accepted.'
    },
    divisions: {
      title: 'Divisions',
      note: 'Players may register for only one of the following: First Timer / Beginner / Intermediate / Expert',
      list: [
        { name: 'First Timer Division', content: 'First Timer Open + First Timer Speed' },
        { name: 'Beginner Division', content: 'Beginner Open + Beginner Speed' },
        { name: 'Intermediate Division', content: 'Intermediate Open' },
        { name: 'Expert Division', content: 'Expert Open' }
      ],
      additional: {
        title: 'Additional Open Competitions',
        items: [
          { name: 'Ken Game Open' },
          {
            name: 'Freestyle Open',
            sub: ['Open Division', 'Pro Division'],
            note: '*If fewer than 8 players register for the Pro Division, the Pro Division will be cancelled and merged into the Open Division.'
          }
        ]
      }
    },
    fees: {
      title: 'Registration Fees & Packages',
      registrationUrl: 'https://forms.gle/Ubksz7Gb92RAjwMu7',
      planA: {
        label: '(A) Basic Plan',
        price: 'NT$ 1,500',
        includes: 'Includes: 【TKO Tote Bag + Pin】',
        button: 'Register Now'
      },
      planB: {
        label: '(B) Towel Pack',
        price: 'NT$ 1,700',
        includes: 'Includes: 【TKO Towel + Tote Bag + Pin】',
        button: 'Register Now'
      },
      planC: {
        label: '(C) Tee Pack',
        price: 'NT$ 2,100',
        includes: 'Includes: 【TKO Tee + Tote Bag + Pin】',
        button: 'Register Now'
      },
      planD: {
        label: '(D) Full Package',
        labelTag: 'Recommended',
        price: 'NT$ 3,100',
        includes: 'Includes: 【TKO Tee + Towel + Socks + Poster + Keychain + Tote Bag + Pin】',
        button: 'Register Now'
      },
      discount: {
        title: 'Student Discount',
        content: 'Students who present a valid student ID at check-in will receive a NT$ 500 discount.'
      },
      notes: '* All packages include sticker pack and competition badge.',
      proNote: '*If the Freestyle PRO Division has fewer than 8 registrants, the PRO Division will be cancelled and merged into the Open Division.'
    },
    merchandise: {
      title: 'TKO Merchandise',
      subtitle: 'OFFICIAL MERCHANDISE',
      description: 'Official TKO 2026 merchandise showcase',
      note: '* Limited quantity. For purchasing details, please follow official TKO announcements.'
    }
  },
  rules: {
    title: 'Competition Rules & Formats',
    subtitle: 'RULES & REGULATIONS',
    generalRules: {
      title: 'General Rules',
      items: [
        'Players may not touch the tama, ken, or adjust the string with their non-dominant hand.',
        'For balance tricks, the dominant hand may not touch the kendama (Lighthouse/Lunar: no ken touch; Bird/Stilt: no tama touch).',
        'Insta spike techniques are allowed.',
        'If a rule is violated, the trick will be counted as failed.',
        'If a trick ends with a "Spike" or "In" finish, the spike method is not restricted.',
        'Downspike: The spike must be clearly pointing downward. Final judgment by the on-site judge.',
        'If not specified, rotation direction (regular/reverse) has no restrictions.',
        'If not specified, kendama grip method has no restrictions.',
        'For Around tricks, Small Cup and Big Cup order is not restricted; if the trick includes Base Cup, it must be the final move.'
      ]
    },
    tabs: {
      novice: 'First Timer / Beginner',
      advanced: 'Intermediate / Expert',
      ken: 'Ken Game'
    },
    noviceSpeed: {
      title: 'Speed Division',
      format: 'Top 3 + Fastest Qualifier Award',
      qualifiersLabel: 'Qualifiers:',
      qualifiers: 'Draw the number of required completions for each trick, players perform tricks in turn, 2-minute time limit. Top 5 fastest advance.',
      finalsLabel: 'Finals:',
      finals: 'Add ▲ symbol trick as the final trick. Top 5 race on stage, top 2 advance to Championship. Championship players race back-to-back.',
      noviceTitle: 'First Timer Tricks',
      beginnerTitle: 'Beginner Tricks',
      videoNovice: 'First Timer Speed Demo',
      videoBeginner: 'Beginner Speed Demo',
      noviceTricks: [
        'Easy Spike, Flying Top',
        'Candlestick',
        'Easy Big Cup, Baseball',
        '▲ Spike'
      ],
      beginnerTricks: [
        'DownSpike, Base Cup, Downspike',
        'Lunar, In',
        'Bird, In',
        '▲ Easy spike, Inward Earth Turn'
      ]
    },
    noviceDesignated: {
      title: 'Open Division',
      format: '1 vs 1 Battle (Qualifier Bracket)',
      rulesLabel: 'Rules:',
      rules: 'Moshi-kiri determines order. Process: A chooses trick, A attempts (3 tries), if A lands and B does not, A scores 1 point; if both land or both miss, switch to B choosing. First to 3 points wins.',
      finalsLabel: 'Finals:',
      finals: 'Add ▲ symbol tricks (First Timer 10 tricks / Beginner 12 tricks). Championship is first to 5 points.',
      trickList: 'Open Division Trick List (click to collapse)',
      noviceGroup: 'First Timer',
      beginnerGroup: 'Beginner',
      videoNovice: 'First Timer Open Demo',
      videoBeginner: 'Beginner Open Demo',
      noviceTricks: [
        'Switch Sara Grip Base Cup',
        'Airplane',
        'Spike',
        'Big Cup, Knee Bounce Big Cup',
        'Trapeze',
        'Easy Spike, Flying Top',
        'Easy Bird, Spike',
        'Hanging Catch',
        '▲ Downspike',
        '▲ Sara Grip Around The Block'
      ],
      beginnerTricks: [
        'Around Europe',
        'Lunar, Flip in',
        'Big Cup, Turntable, Spike',
        'Airplane, Base Cup, Downspike',
        'Nightingale, Earth Turn Spike',
        'Pinky Spike, Spike',
        'Scooping Goldfish, Spike',
        'Lighthouse, Trade Spike',
        'Stuntplane Fasthands',
        'Tama Cat, Spike',
        '▲ Stilt, In',
        '▲ Inward Swing Spike, Earth Turn'
      ]
    },
    advancedDesignated: {
      title: 'Intermediate / Expert Open Division',
      format: 'Format',
      formatDesc: '1 vs 1 Battle. Multiple qualifier brackets run simultaneously. Moshi-kiri determines order, winner draws a trick from the organizer\'s designated trick list. Same rules as Beginner: 3 attempts, first to land scores. First to 3 points wins. If all tricks are drawn and tied, redraw all tricks, first to score 1 point wins.',
      finals: 'Finals Stage',
      finalsDesc: 'Add ▲ symbol tricks (Intermediate 13 tricks / Expert 13 tricks total).',
      finalScore: 'Championship match is first to 5 points.',
      advancedGroup: 'Intermediate',
      challengeGroup: 'Expert',
      videoAdvanced: 'Intermediate Open Demo',
      videoChallenge: 'Expert Open Demo',
      advancedTricks: [
        'Switch Stuntplane Fasthands',
        'Around Bird',
        'Airplane 2 Turn Swap Downspike Fasthands',
        'Mooncircle Ghost Lighthouse, In',
        'Stilt, Over The Valley, Flip In',
        'Inward 1 Turn Lunar, Inward Lunar Flip, Inward Flip In',
        'Sara Handlestall, Spike',
        'Around Denmark',
        'Double Whirlwind',
        'Toss Lighthouse, 1.5 Cush in',
        '▲ Airplane, Tap Inward Flip In, Flip Cush In',
        '▲ Candlestick Flip, Trade Ken Grip Spike',
        '▲ Gunslinger, Late Gunslinger Spike'
      ],
      challengeTricks: [
        'Triple Jumping Stick',
        'Inward Lunar, 3 Tap Flip Inward Lunar, Trade Spike',
        '2 Turns Swing Double Gunslinger Throw 1.5 in',
        'Switch Whirlwind',
        'Inward Juggle Ghost Juggle Juggle Spike',
        'Handle, Ring, Bird, Nightingale, Spike',
        'Inward Stilt, Inward Stilt Back Flip, Trade Spike',
        'Tap Flip in, Forward Tap Flip In',
        '1 Turn Stuntplane, Stunt Flip Fasthand',
        '1 Turn Lighthouse, Inward Lighthouse Flip Insta Juggle Lighthouse Insta Inward Flip in',
        '▲ Gunslinger Juggle Gunslinger Spike',
        '▲ Double Kenflip Juggle 2 Tap Juggle Spike',
        '▲ Lunar, 123 Lunar Flip, in'
      ]
    },
    kenGame: {
      title: 'Ken Game Open',
      basicRules: 'Basic Rules',
      format: 'Format:',
      formatDesc: '1 vs 1 Bracket Battle.',
      start: 'Start:',
      startDesc: 'Moshi-kiri determines who goes first.',
      attDef: 'Att/Def:',
      attDefDesc: 'Each player has one attack opportunity and two defense attempts.',
      winCondition: 'First player to receive "K", "E", "N" letters loses.',
      proveIt: 'Prove it! Rule',
      proveItDesc1: 'When A is at match point, if B fails both defense attempts, B may call "Prove it!" (once only) or take a third attempt.',
      proveItDesc2: 'If "Prove it!" is called, A must re-attempt the trick. If A lands, A wins; if A fails, no points are awarded and B goes on offense.'
    },
    freestyle: {
      title: 'Freestyle BATTLE',
      subtitle: 'Open / PRO Division',
      scoring: {
        creativity: { percent: '30%', title: 'Creativity', desc: 'Ultimate thinking and originality' },
        flow: { percent: '40%', title: 'Flow', desc: 'Overall smoothness and fluidity' },
        difficulty: { percent: '30%', title: 'Tech. Diff.', desc: 'Technical difficulty & execution' }
      },
      qualifiers: {
        title: 'Qualifiers',
        rules: [
          'Each player has <strong>60 seconds</strong> to freestyle.',
          'Players perform one at a time, three judges score comprehensively.',
          'Top 16 scores advance to the Finals.'
        ]
      },
      finals: {
        title: 'Finals',
        rules: [
          'The 16 finalists draw numbers for 1v1 battle matchups.',
          'Each player performs <strong>two rounds</strong>, each lasting <strong>45 seconds</strong>.',
          'Stage is divided into Red Side and Green Side battle areas.',
          'Judges score comprehensively and directly determine the winner.'
        ]
      },
      judges: {
        title: 'Judges',
        subtitle: 'Three experienced kendama players will serve as judges. Names to be announced.',
        comingSoon: 'Coming Soon'
      }
    }
  },
  footer: {
    title: 'TAIWAN KENDAMA OPEN',
    subtitle: 'Official Event 2026',
    description: "Taiwan's Biggest Kendama Competition",
    contact: 'Contact Us',
    followUs: 'Follow Us',
    rights: '© 2026 Taiwan Kendama Open. All rights reserved.'
  },
  sponsors: {
    sectionLabel: 'PARTNERS',
    title: 'Our Partners',
    platinumLabel: '✦ PLATINUM PARTNER',
    goldLabel: 'GOLD PARTNER',
    silverLabel: 'SILVER PARTNER',
    platinum: [] as { name: string; logo: string; url?: string; desc?: string }[],
    gold: [] as { name: string; logo: string; url?: string }[],
    silver: [] as { name: string; logo: string; url?: string }[]
  },
  venue: {
    sectionLabel: 'Location',
    title: 'Competition',
    titleHighlight: 'Venue',
    address: 'No. 99, Penglai Rd., Gushan Dist., Kaohsiung City 804'
  },
  schedule: {
    titleLine1: 'Event',
    titleLine2: 'Schedule',
    day1: {
      subtitle: 'QUALIFIERS Day',
      items: [
        'Player Check-in',
        'Opening Ceremony',
        'Novice Speed Qualifiers (Top 5)',
        'Beginner Speed Qualifiers (Top 5)',
        'Mini Game: Kendama Musical Chairs / Ken Game',
        'Novice Designated Qualifiers (Top 4)',
        'Beginner Designated Qualifiers (Top 4)',
        'Advanced Designated Qualifiers (Top 8)',
        'Challenge Designated Qualifiers (Top 8)',
        'Mini Game: 1-2-3 Freeze',
        'Freestyle Qualifiers (Top 16)',
        'Mini Game: Kendama Quiz'
      ]
    },
    day2: {
      subtitle: 'FINALS Day',
      items: [
        'Finals Player Check-in',
        'Novice Speed Finals',
        'Beginner Speed Finals / Ken Game Finals',
        'Mini Game: Charades',
        'Novice Designated Finals',
        'Beginner Designated Finals',
        'Advanced Designated Finals',
        'Challenge Designated Finals',
        'Mini Game: Three-Legged Candle Race',
        'Freestyle Finals',
        'Mini Game: Spike & Lunar Challenge',
        'Awards Ceremony / Group Photo'
      ]
    }
  },
  countdown: {
    days: 'Days',
    hours: 'Hrs',
    minutes: 'Min',
    seconds: 'Sec'
  },
  faq: {
    title: 'FAQ',
    items: [
      { q: 'How do I get to the venue?', a: 'The venue is at No. 99, Penglai Rd., Gushan District, Kaohsiung. Take the Kaohsiung MRT to Yanchengpu or Sizihwan Station, then walk about 10 minutes. Paid parking is available nearby.' },
      { q: 'Can I register on-site?', a: 'Registration has closed and on-site registration is not available, but you are welcome to join the mini activities at the venue!' },
      { q: 'Is there an age limit?', a: 'No age limit! All kendama enthusiasts are welcome. Participants under 12 are encouraged to be accompanied by a guardian.' },
      { q: 'Is lunch provided?', a: 'Meals are not included in the registration fee. There are many restaurants and food stalls near the venue.' },
      { q: 'Can I attend as a spectator?', a: 'Absolutely! Spectator entry is free. Bring your friends and enjoy the event!' }
    ]
  }
};
