const projectsData = [
    {
      id: 1,
      title: 'Phishing E-mail detection and reply system powered by LLMs',
      description: 'This project features the utilization of advanced deep learning methodologies, specifically Bidirectional Encoder Representations from Transformers (BERT), in conjunction with Mistral 7B Instruct - a sophisticated Large Language Model (LLM), to detect and counter phishing emails.',
      imageUrl: 'PhishingDetection/PhishingEmail.png',
      githubUrl:'https://github.com/mrmrjing/PhishingEmailClassification',
      pdf:'PhishingDetection/PhishingEmailClassification.pdf',
      featured: true,
      images: [
        {
          original: '/PhishingDetection/img1.png',
          thumbnail: '/PhishingDetection/img1.png',
        },
        {
          original: '/PhishingDetection/img2.png',
          thumbnail: '/PhishingDetection/img2.png',
        },
        {
          original: '/PhishingDetection/img3.png',
          thumbnail: '/PhishingDetection/img3.png',
        },
        {
          original: '/PhishingDetection/img4.png',
          thumbnail: '/PhishingDetection/img4.png',
        },
        {
          original: '/PhishingDetection/img5.png',
          thumbnail: '/PhishingDetection/img5.png',
        },
        {
          original: '/PhishingDetection/img6.png',
          thumbnail: '/PhishingDetection/img6.png',
        },
        {
          original: '/PhishingDetection/img7.png',
          thumbnail: '/PhishingDetection/img7.png',
        },
        {
          original: '/PhishingDetection/img8.png',
          thumbnail: '/PhishingDetection/img8.png',
        },
        {
          original: '/PhishingDetection/img9.png',
          thumbnail: '/PhishingDetection/img9.png',
        },
        {
          original: '/PhishingDetection/img10.png',
          thumbnail: '/PhishingDetection/img10.png',
        },
        {
          original: '/PhishingDetection/img11.png',
          thumbnail: '/PhishingDetection/img11.png',
        },
        {
          original: '/PhishingDetection/img12.png',
          thumbnail: '/PhishingDetection/img12.png',
        },
        {
          original: '/PhishingDetection/img13.png',
          thumbnail: '/PhishingDetection/img13.png',
        },
        {
          original: '/PhishingDetection/img14.png',
          thumbnail: '/PhishingDetection/img14.png',
        },
        {
          original: '/PhishingDetection/img15.png',
          thumbnail: '/PhishingDetection/img15.png',
        },
      ]
    },
    {
      id: 2,
      title: 'Flight Dynamics Simulation',
      description: 'This project explores the process of creating a custom physics engine to enable flight into Unreal Engine 5 using a mix of C++ programming and blueprint scripting.',
      imageUrl: '/FlightSimulation/img1.png',
      githubUrl:'https://github.com/mrmrjing/flight-dynamics-simulation',
      pdf:'FlightSimulation/Game_Engine_Project_2.pdf',
      featured: false,
      images: [
        {
          original: '/FlightSimulation/img1.png',
          thumbnail: '/FlightSimulation/img1.png',
        },
        {
          original: '/FlightSimulation/img2.png',
          thumbnail: '/FlightSimulation/img2.png',
        },
        {
          original: '/FlightSimulation/img3.png',
          thumbnail: '/FlightSimulation/img3.png',
        },
        {
          original: '/FlightSimulation/img4.png',
          thumbnail: '/FlightSimulation/img4.png',
        },
        {
          original: '/FlightSimulation/img5.png',
          thumbnail: '/FlightSimulation/img5.png',
        },
        {
          original: '/FlightSimulation/img6.png',
          thumbnail: '/FlightSimulation/img6.png',
        },
        {
          original: '/FlightSimulation/img7.png',
          thumbnail: '/FlightSimulation/img7.png',
        },
        {
          original: '/PhishingDetection/img8.png',
          thumbnail: '/PhishingDetection/img8.png',
        },
        {
          original: '/PhishingDetection/img9.png',
          thumbnail: '/PhishingDetection/img9.png',
        },
        {
          original: '/FlightSimulation/img10.png',
          thumbnail: '/FlightSimulation/img10.png',
        },
        {
          original: '/FlightSimulation/img11.png',
          thumbnail: '/FlightSimulation/img11.png',
        },
        {
          original: '/FlightSimulation/img12.png',
          thumbnail: '/FlightSimulation/img12.png',
        },
      ]
    },
    {
      id: 3,
      title: 'Peer to Peer Messaging System based on Distributed Hash Tables (DHTs)',
      description: 'This project implements a simplified peer-to-peer messaging system based on distributed hash tables (DHTs).',
      imageUrl: 'OverlayNetwork/overlay-network.png',
      githubUrl:'https://github.com/mrmrjing/P2P-Messenging-System',
      pdf:'OverlayNetwork/README Programming Assignment 2.pdf',
      featured: false
    },
    {
      id: 4,
      title: 'Raft Consensus Algorithm Implementation in Golang',
      description: 'This project implements the Raft Consensus Algorithm proposed by Ongaro and Ousterhout (2014) in Golang.',
      imageUrl: 'RaftConsensus/raft.svg',
      githubUrl:'https://github.com/mrmrjing/RaftConsensus',
      pdf:'RaftConsensus/Raft_Distributed_Report.pdf',
      featured: false
    },
    {
      id: 5,
      title: 'Healthmate: A mobile application for fitness tracking',
      description: "HealthMate is a mobile application designed to help users maintain a healthy lifestyle by tracking their fitness activities and encouraging social engagement with other fitness enthusiasts. The app integrates with Google Fit to access users' fitness data and provides a social platform for sharing workout achievements, tips, and encouragement.",
      imageUrl: 'Healthmate/Healthmate-front.png',
      githubUrl:'https://github.com/mrmrjing/HealthMate',
      pdf:'Healthmate/Healthmate-report.pdf',
      featured: false
    },
    {
      id: 6,
      title: 'ConcurSolutionz',
      description: "ConcurSolutionz offers a streamlined solution for managing and automating monetary claims at Singapore University of Technology and Design (SUTD) and beyond. Designed to replace tedious, slow-loading claim systems, it ensures efficient tracking and submission of expenses, preventing lost receipts and simplifying the reimbursement process.",
      imageUrl: 'ConcurSolution/Concur-cover.png',
      githubUrl:'https://github.com/mrmrjing/ConcurSolutionz',
      pdf:'ConcurSolution/FinalReport.pdf',
      youtubeUrl:'https://www.youtube.com/watch?v=O2sew6b3bDg',
      featured: false
    },
    {
      id: 7,
      title: 'KalmanFilterAirRadar',
      description: 'This project outlines the findings from using Kalman filters to track airplanes with simulated radar data. The study focuses on identifying challenging flight types and specific segments that are difficult to track. It also evaluates the effectiveness of smoothing techniques in enhancing the accuracy of the predicted flight paths.',
      imageUrl: '/KalmanFilterAirRadar/airplane.jpg',
      githubUrl:'https://github.com/mrmrjing/KalmanFilterAirRadar',
      pdf:'KalmanFilterAirRadar/Project2Report.pdf',
      featured: false
    },
    {
      id: 8,
      title: 'ChessBoardAI',
      description: 'This project aims to create an AI board that optimises chess plays in a custom knight only chess board which can capture only diagonal components and that can only move forward.',
      imageUrl: 'ChessBoardAI/chess.jpg',
      githubUrl:'https://github.com/mrmrjing/ChessBoardAI',
      featured: false
    },
  ];

  export default projectsData;