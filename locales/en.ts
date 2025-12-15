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
            note: 'If fewer than 8 players register for the Pro Division, the Pro Division will be cancelled and merged into the Open Division.'
          }
        ]
      }
    },
    fees: {
      title: 'Registration Fees & Packages',
      basic: {
        price: 'NT$ 1,500',
        name: 'Competition-Only Package',
        includes: 'Includes: Stickers + TKO Merchandise'
      },
      moreInfo: 'More merchandise bundle options will be released soon.',
      discount: {
        title: 'Student Discount',
        content: 'Students who present a valid student ID at check-in will receive a NT$ 500 discount.'
      }
    }
  },
  rules: {
    title: 'Competition Rules & Formats',
    subtitle: 'RULES & REGULATIONS',
    generalRules: {
      title: 'General Rules',
      items: [
        'Players may not touch the ball, ken, or adjust the string with their non-dominant hand.',
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
    freestyle: {
      title: 'Freestyle BATTLE',
      subtitle: 'Open / PRO Division',
      scoring: {
        creativity: { percent: '30%', title: 'Creativity', desc: 'Originality and novelty of tricks.' },
        flow: { percent: '40%', title: 'Flow', desc: 'Smoothness of trick connections and miss rate control.' },
        difficulty: { percent: '30%', title: 'Difficulty', desc: 'Technical complexity and execution level.' }
      },
      qualifiers: {
        title: 'Qualifier Round',
        rules: [
          'Each player has 60 seconds for Freestyle.',
          'Players go on stage one at a time, scored by three judges.',
          'Top 16 scores advance to the Finals.'
        ]
      },
      finals: {
        title: 'Final Stage',
        rules: [
          'Top 16 draw numbers to determine 1v1 battle bracket.',
          'Each player performs two rounds, each lasting 45 seconds.',
          'Stage divided into Blue Side and Orange Side battle areas.',
          'Judges give overall evaluation and decide the winner directly.'
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
