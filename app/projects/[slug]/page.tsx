import { notFound } from 'next/navigation';

interface ProjectDetails {
  title: string;
  content: string;
  technologies: string[];
  status: string;
}

const projectDetails: Record<string, ProjectDetails> = {
  'smart-bus-eta-prediction-system': {
    title: 'Smart Pune Bus ETA Prediction System',
    content: `Smart Pune Bus ETA Prediction System
ML-Based Smart Public Transportation Solution

🔹 Project Overview
ML-Based Smart Public Transportation Solution

🔹 Project Overview

The Smart Pune Bus ETA Prediction System is a full-stack, machine learning–based web application designed to predict accurate bus arrival times and improve passenger experience in public transportation systems. The project focuses on providing real-time insights such as ETA, route visualization, nearest bus stop, next available bus, and crowd level estimation without relying on GPS hardware, making it highly cost-effective for tier-2 cities.

The system combines machine learning, geospatial mapping, and modern web technologies to deliver a smart, scalable, and user-friendly public transport solution.

🔹 Problem Statement

Public bus passengers often face uncertainty due to:

Inaccurate or unavailable bus arrival timings

Lack of real-time route visualization

No information about missed buses or next available buses

Overcrowded buses during peak hours

High cost of GPS-based tracking systems for transport authorities

This project addresses these issues by using data-driven ETA prediction and open-source mapping tools.

🔹 Solution Provided

The system predicts bus arrival times using a machine learning regression model trained on historical route data, distance between stops, and time-based features. It provides passengers with:

Accurate ETA predictions

Interactive route visualization

Live bus position simulation (without GPS)

Nearest bus stop detection

Next available bus information

Crowd level estimation

Daily bus timetable

🔹 Key Features
🚍 ETA Prediction (Machine Learning)

Predicts Estimated Time of Arrival using ML

Considers route, distance, time of day, and peak hours

🗺️ Route Visualization

Displays real road-based routes using Leaflet + OpenStreetMap

Uses OSRM for realistic road routing

🔵 Live Bus Tracking (Simulated)

Simulates real-time bus movement without GPS hardware

Updates bus position dynamically based on ETA progress

📍 Nearest Bus Stop Finder

Uses browser geolocation

Calculates nearest stop using the Haversine formula

🕒 Next Available Bus

Shows upcoming buses if the passenger misses a bus

Displays following buses for better planning

🚶 Crowd Level Prediction

Estimates crowd levels (Low / Medium / High)

Based on time-of-day and peak-hour logic

📅 Bus Timetable

Displays daily bus schedules

Helps passengers plan journeys efficiently

🔹 Technologies Used
Frontend

HTML5

CSS3

JavaScript (Vanilla)

Backend

Python

FastAPI

Uvicorn

REST APIs

Machine Learning

Pandas

Scikit-learn / XGBoost (Regression model)

Joblib (Model serialization)

Mapping & Geospatial

Leaflet.js

OpenStreetMap

OSRM (Open Source Routing Machine)

Browser Geolocation API

Data

CSV datasets for routes and stops

🔹 System Architecture

User selects route, source, and destination (Frontend)

Request sent to FastAPI backend

ML model predicts ETA

Backend returns ETA, distance, and metadata

Frontend visualizes route and live bus movement

Additional APIs provide next bus, crowd level, and timetable

🔹 Project Structure
BusTracker/
│
├── backend/
│   └── app.py
│
├── frontend/
│   ├── index.html
│   ├── timetable.html
│   ├── style.css
│   └── script.js
│
├── ml/
│   ├── train_model.py
│   ├── eta_model.pkl
│   └── dataset/
│       └── pune_routes.csv
│
└── requirements.txt

🔹 Key Skills Demonstrated

Full-stack web development

REST API design

Machine learning model development

Data preprocessing and feature engineering

Geospatial mapping and routing

Real-time simulation logic

Problem solving and system design

🔹 Impact & Benefits

Improves passenger convenience and planning

Reduces dependency on expensive GPS hardware

Scalable for other tier-2 cities

Cost-effective solution for public transport authorities

Demonstrates real-world ML and smart-city application

🔹 Future Enhancements

Integration with real GPS data

Mobile application (Android / iOS)

Real-time traffic data integration

Passenger feedback and rating system

Admin dashboard with analytics

Multi-city and multi-route support

🔹 Portfolio / Resume One-Line Summary

Developed an ML-based smart bus ETA prediction system with real-time route visualization, live bus simulation, and passenger-centric features using FastAPI, JavaScript, and open-source mapping tools.`,
    technologies: ['Machine Learning', 'Python', 'Data Analysis', 'FastAPI', 'Leaflet.js', 'OpenStreetMap'],
    status: 'Completed'
  },
  'ai-assisted-visual-security-intelligence-system': {
    title: 'AI-Assisted Visual Security Intelligence System',
    content: `Project Summary (Portfolio Overview)

This project presents an AI-assisted visual security intelligence system designed to support government security agencies in monitoring crowded public environments such as airports, metro stations, railway terminals, stadiums, and government buildings. The system uses standard surveillance cameras and advanced computer vision and machine learning techniques to analyze visual and behavioral patterns in real time.

Rather than identifying individuals or making direct accusations, the system focuses on behavioral anomalies and object interaction patterns, generating explainable, context-aware risk scores that assist trained security officers in decision-making. The architecture follows privacy-by-design, ethical AI, and human-in-the-loop principles, making it suitable for real-world government deployment.

🎯 Problem Addressed

Traditional public security systems suffer from:

Heavy dependence on manual monitoring

High manpower and operational cost

Delayed identification of suspicious behavior

High false-positive alerts from rule-based systems

Privacy concerns with intrusive surveillance technologies

This project addresses these challenges by introducing AI-based visual intelligence that enhances situational awareness without violating privacy or replacing human authority.

💡 Key Objectives

Assist (not replace) government security personnel

Detect early behavioral and object-based anomalies

Reduce false positives and alert fatigue

Preserve privacy and comply with legal regulations

Provide explainable and auditable AI outputs

Enable scalable deployment using existing infrastructure

🧠 System Architecture (What You Built)
1. Camera Input Layer

Uses existing CCTV cameras, webcams, or recorded video feeds

No special hardware required

2. Frame Processing

Frame extraction, resizing, normalization

Noise reduction and FPS control for real-time performance

3. Object Detection Module

Detects people and carried objects (backpack, handbag, suitcase, box)

Implemented using deep learning models (YOLO)

Outputs bounding boxes and confidence scores

4. Anonymous Tracking

Temporary ID assignment for motion tracking

No face recognition or identity storage

IDs deleted when subject leaves frame

5. Behavioral & Gait Analysis

Analyzes posture, walking pattern, speed variation

Detects repeated object interaction and stress behavior

Crowd-normalized behavior comparison

6. Clothing & Object Motion Analysis

Observes external motion effects only

Detects rigid object movement, posture imbalance

Infers concealed-object risk without body scanning

7. Context-Aware Risk Engine

Combines:

Behavioral score

Object anomaly score

Crowd density

Time of day

Location type

Produces a risk score (0–100)

8. Explainable AI (XAI) Output

Reason-wise breakdown of risk score

Percentage contribution of each factor

Visual highlights for transparency

9. Human-in-the-Loop Decision Layer

AI only recommends actions

Final decision taken by security officers

Aligned with government SOPs

10. Feedback & Continuous Learning

Officers label alerts as valid or false

System improves without storing personal data

📊 System Output & Dashboard

Live camera feeds with AI overlays

Risk-sorted alert list

Heatmaps of high-risk zones

Explainable alert details

Alert history and system statistics

Secure login with role-based access control

🔐 Privacy, Ethics & Government Compliance

❌ No face recognition

❌ No biometric or identity storage

✅ Anonymous tracking only

✅ Auto-deletion of video frames

✅ Role-based access control

✅ Human authority retained

Designed to align with:

Indian Digital Personal Data Protection Act (DPDP)

Government surveillance guidelines

Ethical AI principles

🧪 Datasets Used / Referenced

UCF-Crime

ShanghaiTech Campus

CUHK Avenue

UCSD Anomaly Detection

COCO (object detection)

Custom recorded surveillance videos

🛠️ Technology Stack

Languages & Libraries

Python

OpenCV

PyTorch / TensorFlow

Models & Techniques

YOLO (Object Detection)

Pose Estimation (MediaPipe / OpenPose)

Temporal Anomaly Detection (LSTM / Autoencoders)

Backend & UI

Flask / FastAPI

Web dashboard (HTML/CSS/JS or React)

🚀 Innovation Highlights (Why This Project Is Strong)

Privacy-preserving surveillance design

Probability-based risk scoring (not binary alerts)

Explainable AI for government trust

Human-in-the-loop decision making

Uses existing infrastructure (cost-effective)

Scalable across multiple public environments

⚠️ Limitations (Honest & Professional)

Cannot detect internal chemical composition

Cannot see inside clothes or bags

Performance depends on video quality

Designed as decision support, not enforcement

📈 Future Enhancements

Multi-camera fusion without identity tracking

Edge-AI deployment for low latency

Bias monitoring and fairness analytics

Synthetic data generation for rare events

Integration with emergency response systems

🏁 Final Impact Statement (Portfolio-Ready)

"This project demonstrates how AI can responsibly assist government security agencies by providing privacy-preserving, explainable, and context-aware visual intelligence while keeping humans in full control of security decisions."`,
    technologies: ['AI/ML', 'Computer Vision', 'Python', 'OpenCV', 'PyTorch', 'TensorFlow'],
    status: 'In Development'
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectDetails[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h1>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                project.status === 'Completed'
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
              }`}>
                {project.status}
              </span>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Technologies Used:</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <pre className="whitespace-pre-wrap font-sans text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.content}
              </pre>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                ← Back to Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({
    slug,
  }));
}
