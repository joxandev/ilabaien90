module.exports = {
    title: 'Ibon Labaien',
    description: 'UEFA Pro Coach',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'CV', link: '/cv/' },
          { text: 'Game Model', link: '/model/' },
        ],
        sidebar: {
          '/cv/':  [
              '/',
              ['/cv/profile','Profile'],
              ['/cv/experience','Experience'],
              ['/cv/education','Education'],
              ['/cv/personaldetails','Personal Details'],
              ['/cv/testimonials','Testimonials'],
              ['/cv/contact','Contact Details'],
            ],
            '/model/':  [
               '/',
               [ '/model/intro', 'Intro'],
               [ '/model/createmodel', 'Creating the Game Model'],
               [ '/model/trainingmethod1', 'Training the Model 1'],
               [ '/model/trainingmethod2', 'Training the Model 2'],
               [ '/model/trainingmethod3', 'Training the Model 3'],
               [ '/model/trainingmethod4', 'Training the Model 4'],
               [ '/model/analysis', 'Analysis'],
               [ '/model/playerdevelopment', 'Player Development'],
               [ '/model/developmentobjectives', 'Player Development Objectives'],
               [ '/model/playerimprovement', 'Player Improvement'],
            ],

        }
      },
  }

  // sidebar: [
  //   '/',
  //   ['/cv/profile','Profile'],
  //   ['/cv/experience','Experience'],
  //   ['/cv/education','Education'],
  //   ['/cv/personaldetails','Personal Details'],
  //   ['/cv/testimonials','Testimonials'],
  //   ['/cv/contact','Contact Details'],
    
  // ]