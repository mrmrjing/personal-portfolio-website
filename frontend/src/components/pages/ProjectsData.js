const projectsData = [
  {
    id: 1,
    title: 'Phishing E-mail detection and reply system powered by LLMs',
    description: 'This project features the utilization of advanced deep learning methodologies, specifically Bidirectional Encoder Representations from Transformers (BERT), in conjunction with Mistral 7B Instruct - a sophisticated Large Language Model (LLM), to detect and counter phishing emails.',
    imageUrl: `${process.env.PUBLIC_URL}/PhishingDetection/PhishingEmail.png`,
    githubUrl: 'https://github.com/mrmrjing/PhishingEmailClassification',
    pdf: `PhishingDetection/PhishingEmailClassification.pdf`,
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
    pdf: `FlightSimulation/Game_Engine_Project_2.pdf`,
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
    pdf: `OverlayNetwork/README Programming Assignment 2.pdf`,
    featured: false
  },
  {
    id: 4,
    title: 'Raft Consensus Algorithm Implementation in Golang',
    description: 'This project implements the Raft Consensus Algorithm proposed by Ongaro and Ousterhout (2014) in Golang.',
    imageUrl: `${process.env.PUBLIC_URL}/RaftConsensus/raft.svg`,
    githubUrl: 'https://github.com/mrmrjing/RaftConsensus',
    pdf: `RaftConsensus/Raft_Distributed_Report.pdf`,
    featured: false
  },
  {
    id: 5,
    title: 'Healthmate: A mobile application for fitness tracking',
    description: "HealthMate is a mobile application designed to help users maintain a healthy lifestyle by tracking their fitness activities and encouraging social engagement with other fitness enthusiasts. The app integrates with Google Fit to access users' fitness data and provides a social platform for sharing workout achievements, tips, and encouragement.",
    imageUrl: `${process.env.PUBLIC_URL}/Healthmate/Healthmate-front.png`,
    githubUrl: 'https://github.com/mrmrjing/HealthMate',
    pdf: `Healthmate/Healthmate-report.pdf`,
    featured: false
  },
  {
    id: 6,
    title: 'ConcurSolutionz',
    description: "ConcurSolutionz offers a streamlined solution for managing and automating monetary claims at Singapore University of Technology and Design (SUTD) and beyond. Designed to replace tedious, slow-loading claim systems, it ensures efficient tracking and submission of expenses, preventing lost receipts and simplifying the reimbursement process.",
    imageUrl: `${process.env.PUBLIC_URL}/ConcurSolution/Concur-cover.png`,
    githubUrl: 'https://github.com/mrmrjing/ConcurSolutionz',
    pdf: `ConcurSolution/FinalReport.pdf`,
    youtubeUrl: 'https://www.youtube.com/watch?v=O2sew6b3bDg',
    featured: false
  },
  {
    id: 7,
    title: 'KalmanFilterAirRadar',
    description: 'This project outlines the findings from using Kalman filters to track airplanes with simulated radar data. The study focuses on identifying challenging flight types and specific segments that are difficult to track. It also evaluates the effectiveness of smoothing techniques in enhancing the accuracy of the predicted flight paths.',
    imageUrl: `${process.env.PUBLIC_URL}/KalmanFilterAirRadar/airplane.jpg`,
    githubUrl: 'https://github.com/mrmrjing/KalmanFilterAirRadar',
    pdf: `KalmanFilterAirRadar/Project2Report.pdf`,
    featured: false
  },
  {
    id: 8,
    title: 'ChessBoardAI',
    description: 'This project aims to create an AI board that optimises chess plays in a custom knight only chess board which can capture only diagonal components and that can only move forward.',
    imageUrl: `${process.env.PUBLIC_URL}/ChessBoardAI/chess.jpg`,
    githubUrl: 'https://github.com/mrmrjing/ChessBoardAI',
    pdf: `ChessBoardAI/Report.pdf`,
    featured: false
  },  
  {
    id: 9,
    title: 'Suricata-Splunk NIDS',
    description: 'This project integrates Suricata, an open-source Network Intrusion Detection System (NIDS), with Splunk, the powerful data collection and visualization tool. It aims to provide a robust solution for real-time monitoring of network traffic, analyzing security events, and alerting on potential threats.',
    imageUrl: `${process.env.PUBLIC_URL}/Suricata-Splunk-NIDS/cover.jpeg`,
    githubUrl: 'https://github.com/mrmrjing/Suricata-Splunk-NIDS',
    featured: true
  },
  {
    id: 10, 
    title: 'CTF-Challenge',
    description: "This project implements a multi-stage Capture the Flag (CTF) challenge designed to test and improve participants' skills in cryptography, steganography, and reverse engineering.",
    imageUrl: `${process.env.PUBLIC_URL}/CTF-Challenge/flag.jpg`,
    githubUrl: 'https://github.com/mrmrjing/SUTD-CTF-Challenge',
    featured: true
  },
  {
    id: 11,
    title: 'Gym Worker Tracker',
    description: 'Flutter project for the Gym Workout Tracker App, designed to help users track their fitness routines efficiently.',
    imageUrl: `${process.env.PUBLIC_URL}/workout-tracker/image.jpg`,
    githubUrl: 'https://github.com/mrmrjing/workout-tracker',
    featured: false
  },
  {
    id: 12,
    title: 'workout Analytics',
    description: 'Jupyter notebook project to visualise and anaylse the trends in my workout data mauallly inputted from my workout sessions.',
    imageUrl: `${process.env.PUBLIC_URL}/workout-tracker/analytics.jpg`,
    githubUrl: 'https://github.com/mrmrjing/workout-analytics-python',
    featured: false
  },
  {
    id: 13,
    title: 'raspberry-pi-firewall',
    description: 'This project aims to configure a secure and efficient firewall on a Raspberry Pi 5 using iptables to control and filter incoming and outgoing network traffic.',
    imageUrl: `${process.env.PUBLIC_URL}/raspberrypi-firewall/firewall.jpg`,
    githubUrl: 'https://github.com/mrmrjing/raspberry-pi-firewall',
    featured: true
  },
  {
    id: 14,
    title: 'python-web-scraper-ycombinator',
    description: 'This project contains a Python script for scraping news articles from Hacker News and sending them via email. It automates the fetching of the latest news titles and links, and emails them.',
    imageUrl: `${process.env.PUBLIC_URL}/python-web-scraper-ycombinator/web.jpg`,
    githubUrl: 'https://github.com/mrmrjing/python-web-scraper-ycombinator',
    featured: false 
  }, 
  {
    id: 15,
    title: 'python-network-scanner',
    description: 'This Python Network Scanner allows users to scan specified IP ranges and port ranges within a network. It identifies hosts that are up and checks for open ports on these hosts, providing insights into network security and configuration. This tool leverages the python-nmap library, which is a Python wrapper for Nmap, one of the most popular network scanning tools.',
    imageUrl: `${process.env.PUBLIC_URL}/python_network_scanner/network-scanner.png`,
    githubUrl: 'https://github.com/mrmrjing/python-network-scanner',
    featured: true
  }, 
  { 
    id: 16,
    title: 'garmin-data-analysis',
    description: 'This project involves the analysis of Garmin fitness data using Python and Jupyter Notebooks. It explores the data collected from Garmin smartwatches and visualizes the user’s fitness activities, including running, cycling, and swimming, to provide insights into their performance and progress over time.',
    imageUrl: `${process.env.PUBLIC_URL}/garmin-data-analysis/garmin-245.png`,
    githubUrl: 'https://github.com/mrmrjing/garmin-data-analysis',
    featured: false 
  }
];

export default projectsData;