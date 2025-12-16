export const en = {
  nav: {
    details: 'Event Details',
    registration: 'Registration',
    rules: 'Rules',
    schedule: 'Schedule',
    registerNow: 'Register Now'
  },
  hero: {
    title: 'TAIWAN KENDAMA OPEN',
    subtitle: 'OFFICIAL EVENT 2026',
    date: 'April 18, 2026',
    location: 'Taipei City',
    description: "Taiwan's Biggest Kendama Competition"
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
      content: 'Registration will be conducted through a Google Form. The registration form is scheduled to open in January.'
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
      basic: {
        price: 'NT$ 1,500',
        name: 'Competition-Only Package',
        includes: 'Includes: Stickers + TKO Merchandise',
        button: 'Coming Soon'
      },
      moreInfo: 'More merchandise bundle options will be released soon.',
      discount: {
        title: 'Student Discount',
        content: 'Students who present a valid student ID at check-in will receive a NT$ 500 discount.'
      },
      packages: {
        valuePack: {
          label: 'Value Pack',
          title: 'Competition + Towel/Apparel',
          comingSoon: 'Coming Soon',
          priceTbd: 'Price TBD',
          mostPopular: 'Most Popular',
          items: [
            'Includes all basic package contents',
            'TKO Limited Edition Sports Towel',
            'Or Commemorative T-shirt (Choose One)'
          ],
          button: 'Coming Soon'
        },
        fullGear: {
          label: 'Full Gear',
          title: 'Full Package',
          comingSoon: 'Coming Soon',
          priceTbd: 'Price TBD',
          items: [
            'Includes all basic package contents',
            'TKO Limited Edition Sports Towel',
            'TKO Commemorative T-shirt',
            'Most complete event memorabilia'
          ],
          button: 'Coming Soon'
        }
      },
      notes: '* Division Guidelines: Players may only register for one of First Timer, Beginner, Intermediate, or Expert.',
      proNote: '*If the Freestyle PRO Division has fewer than 8 registrants, the PRO Division will be cancelled and merged into the Open Division.'
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
        '▲ Sara Grip Around The Block',
        '▲ Downspike'
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
        'Toss 2 Turns Lighthouse, 1.5 Cush in',
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
  }
};
