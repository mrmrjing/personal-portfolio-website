const projectsData = [
  {
    id: 1,
    title: 'Phishing E-mail detection and reply system powered by LLMs',
    description: 'This project features the utilization of advanced deep learning methodologies, specifically Bidirectional Encoder Representations from Transformers (BERT), in conjunction with Mistral 7B Instruct - a sophisticated Large Language Model (LLM), to detect and counter phishing emails.',
    imageUrl: `${process.env.PUBLIC_URL}/PhishingDetection/PhishingEmail.png`,
    githubUrl: 'https://github.com/mrmrjing/PhishingEmailClassification',
    pdf: `${process.env.PUBLIC_URL}/PhishingDetection/PhishingEmailClassification.pdf`,
    featured: true,
    images: [
        {
            original: `${process.env.PUBLIC_URL}/PhishingDetection/img1.png`,
            thumbnail: `${process.env.PUBLIC_URL}/PhishingDetection/img1.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/PhishingDetection/img2.png`,
            thumbnail: `${process.env.PUBLIC_URL}/PhishingDetection/img2.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/PhishingDetection/img3.png`,
            thumbnail: `${process.env.PUBLIC_URL}/PhishingDetection/img3.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/PhishingDetection/img4.png`,
            thumbnail: `${process.env.PUBLIC_URL}/PhishingDetection/img4.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/PhishingDetection/img5.png`,
            thumbnail: `${process.env.PUBLIC_URL}/PhishingDetection/img5.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/PhishingDetection/img6.png`,
            thumbnail: `${process.env.PUBLIC_URL}/PhishingDetection/img6.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/PhishingDetection/img7.png`,
            thumbnail: `${process.env.PUBLIC_URL}/PhishingDetection/img7.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/PhishingDetection/img8.png`,
            thumbnail: `${process.env.PUBLIC_URL}/PhishingDetection/img8.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/PhishingDetection/img9.png`,
            thumbnail: `${process.env.PUBLIC_URL}/PhishingDetection/img9.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/PhishingDetection/img10.png`,
            thumbnail: `${process.env.PUBLIC_URL}/PhishingDetection/img10.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/PhishingDetection/img11.png`,
            thumbnail: `${process.env.PUBLIC_URL}/PhishingDetection/img11.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/PhishingDetection/img12.png`,
            thumbnail: `${process.env.PUBLIC_URL}/PhishingDetection/img12.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/PhishingDetection/img13.png`,
            thumbnail: `${process.env.PUBLIC_URL}/PhishingDetection/img13.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/PhishingDetection/img14.png`,
            thumbnail: `${process.env.PUBLIC_URL}/PhishingDetection/img14.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/PhishingDetection/img15.png`,
            thumbnail: `${process.env.PUBLIC_URL}/PhishingDetection/img15.png`,
        },
    ]
  },
  {
    id: 2,
    title: 'Flight Dynamics Simulation',
    description: 'This project explores the process of creating a custom physics engine to enable flight into Unreal Engine 5 using a mix of C++ programming and blueprint scripting.',
    imageUrl: `${process.env.PUBLIC_URL}/FlightSimulation/img1.png`,
    githubUrl: 'https://github.com/mrmrjing/flight-dynamics-simulation',
    pdf: `${process.env.PUBLIC_URL}/FlightSimulation/Game_Engine_Project_2.pdf`,
    featured: false,
    images: [
        {
            original: `${process.env.PUBLIC_URL}/FlightSimulation/img1.png`,
            thumbnail: `${process.env.PUBLIC_URL}/FlightSimulation/img1.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/FlightSimulation/img2.png`,
            thumbnail: `${process.env.PUBLIC_URL}/FlightSimulation/img2.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/FlightSimulation/img3.png`,
            thumbnail: `${process.env.PUBLIC_URL}/FlightSimulation/img3.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/FlightSimulation/img4.png`,
            thumbnail: `${process.env.PUBLIC_URL}/FlightSimulation/img4.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/FlightSimulation/img5.png`,
            thumbnail: `${process.env.PUBLIC_URL}/FlightSimulation/img5.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/FlightSimulation/img6.png`,
            thumbnail: `${process.env.PUBLIC_URL}/FlightSimulation/img6.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/FlightSimulation/img7.png`,
            thumbnail: `${process.env.PUBLIC_URL}/FlightSimulation/img7.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/FlightSimulation/img8.png`,
            thumbnail: `${process.env.PUBLIC_URL}/FlightSimulation/img8.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/FlightSimulation/img9.png`,
            thumbnail: `${process.env.PUBLIC_URL}/FlightSimulation/img9.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/FlightSimulation/img10.png`,
            thumbnail: `${process.env.PUBLIC_URL}/FlightSimulation/img10.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/FlightSimulation/img11.png`,
            thumbnail: `${process.env.PUBLIC_URL}/FlightSimulation/img11.png`,
        },
        {
            original: `${process.env.PUBLIC_URL}/FlightSimulation/img12.png`,
            thumbnail: `${process.env.PUBLIC_URL}/FlightSimulation/img12.png`,
        },
    ]
  },
  {
    id: 3,
    title: 'Peer to Peer Messaging System based on Distributed Hash Tables (DHTs)',
    description: 'This project implements a simplified peer-to-peer messaging system based on distributed hash tables (DHTs).',
    imageUrl: `${process.env.PUBLIC_URL}/OverlayNetwork/overlay-network.png`,
    githubUrl: 'https://github.com/mrmrjing/P2P-Messenging-System',
    pdf: `${process.env.PUBLIC_URL}/OverlayNetwork/README Programming Assignment 2.pdf`,
    featured: false
  },
  {
    id: 4,
    title: 'Raft Consensus Algorithm Implementation in Golang',
    description: 'This project implements the Raft Consensus Algorithm proposed by Ongaro and Ousterhout (2014) in Golang.',
    imageUrl: `${process.env.PUBLIC_URL}/RaftConsensus/raft.svg`,
    githubUrl: 'https://github.com/mrmrjing/RaftConsensus',
    pdf: `${process.env.PUBLIC_URL}/RaftConsensus/Raft_Distributed_Report.pdf`,
    featured: false
  },
  {
    id: 5,
    title: 'Healthmate: A mobile application for fitness tracking',
    description: "HealthMate is a mobile application designed to help users maintain a healthy lifestyle by tracking their fitness activities and encouraging social engagement with other fitness enthusiasts. The app integrates with Google Fit to access users' fitness data and provides a social platform for sharing workout achievements, tips, and encouragement.",
    imageUrl: `${process.env.PUBLIC_URL}/Healthmate/Healthmate-front.png`,
    githubUrl: 'https://github.com/mrmrjing/HealthMate',
    pdf: `${process.env.PUBLIC_URL}/Healthmate/Healthmate-report.pdf`,
    featured: false
  },
  {
    id: 6,
    title: 'ConcurSolutionz',
    description: "ConcurSolutionz offers a streamlined solution for managing and automating monetary claims at Singapore University of Technology and Design (SUTD) and beyond. Designed to replace tedious, slow-loading claim systems, it ensures efficient tracking and submission of expenses, preventing lost receipts and simplifying the reimbursement process.",
    imageUrl: `${process.env.PUBLIC_URL}/ConcurSolution/Concur-cover.png`,
    githubUrl: 'https://github.com/mrmrjing/ConcurSolutionz',
    pdf: `${process.env.PUBLIC_URL}/ConcurSolution/FinalReport.pdf`,
    youtubeUrl: 'https://www.youtube.com/watch?v=O2sew6b3bDg',
    featured: false
  },
  {
    id: 7,
    title: 'KalmanFilterAirRadar',
    description: 'This project outlines the findings from using Kalman filters to track airplanes with simulated radar data. The study focuses on identifying challenging flight types and specific segments that are difficult to track. It also evaluates the effectiveness of smoothing techniques in enhancing the accuracy of the predicted flight paths.',
    imageUrl: `${process.env.PUBLIC_URL}/KalmanFilterAirRadar/airplane.jpg`,
    githubUrl: 'https://github.com/mrmrjing/KalmanFilterAirRadar',
    pdf: `${process.env.PUBLIC_URL}/KalmanFilterAirRadar/Project2Report.pdf`,
    featured: false
  },
  {
    id: 8,
    title: 'ChessBoardAI',
    description: 'This project aims to create an AI board that optimises chess plays in a custom knight only chess board which can capture only diagonal components and that can only move forward.',
    imageUrl: `${process.env.PUBLIC_URL}/ChessBoardAI/chess.jpg`,
    githubUrl: 'https://github.com/mrmrjing/ChessBoardAI',
    featured: false
  },  
  {
    id: 9,
    title: 'Suricata-Splunk NIDS',
    description: 'This project implements a simplified version of a distributed file system that allows users to store and retrieve files from a network of servers.',
    imageUrl: `${process.env.PUBLIC_URL}/Suricata-Splunk-NIDS/cover.jpeg`,
    githubUrl: '',
    featured: true
  },
  {
    id: 10, 
    title: 'CTF-Challenge',
    description: "This project implements a multi-stage Capture the Flag (CTF) challenge designed to test and improve participants' skills in cryptography, steganography, and reverse engineering.",
    imageUrl: `${process.env.PUBLIC_URL}/CTF-Challenge/flag.jpg`,
    githubUrl: '',
    featured: true
  },
];

export default projectsData;