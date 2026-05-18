export interface Project {
    title: string
    description: string
    technologies: string[]
    achievements?: string[]
    url?: string
    liveUrl?: string
    showcaseUrl?: string
    blogUrl?: string
    featured?: boolean
  }
  
  export const professionalProjects: Record<string, Project[]> = {
    "Medical Imaging - Classification & Detection": [
      {
        title: "Pediatric Chest X-ray Analysis",
        description: "Binary classification system for pediatric chest X-rays trained on ~60K annotated images (20K positive, 40K negative). Two-tower feature fusion of DenseNet-169 (1024-d) and EfficientNet-B2 (1408-d) into a 2432-d concatenated representation, followed by a two-layer classifier head (Linear→ReLU→Dropout(0.3)→Linear→Sigmoid). Preprocessing pipeline applies LANCZOS resizing to 224×224 and CLAHE contrast enhancement. Trained with BCELoss + Adam (lr 1e-3) over 50 epochs on an 80/10/10 split with autobatch sizing, comparing standalone DenseNet/EfficientNet against the fused dual-backbone variant.",
        technologies: ["Python", "PyTorch", "DenseNet-169", "EfficientNet-B2", "EfficientNet-B3", "CLAHE", "LANCZOS", "Adam Optimizer", "BCELoss", "CUDA"],
        achievements: ["98.07% accuracy / 97% precision / 99% recall (DenseNet-169)", "98.14% accuracy with 99% precision (fused dual-backbone)", "Two-tower feature concatenation (2432-d) with dropout-regularized head", "CLAHE preprocessing for low-contrast pediatric radiographs", "80/10/10 split with autobatch + early-stopping discipline"],
        featured: true
      },
      {
        title: "Shoulder Fracture Detection (YOLO)",
        description: "Fracture detection system using YOLOv8, YOLOv11, and YOLOv12 architectures. Evaluated both standard detection (DET) and Oriented Bounding Box (OBB) models for rotated fractures.",
        technologies: ["YOLOv8", "YOLOv11", "YOLOv12", "OBB", "Ultralytics", "CUDA"],
        achievements: ["F1 score: 0.833 (YOLOv11-OBB)", "84.5% recall", "OBB outperforms axis-aligned models"]
      },
      {
        title: "Shoulder Fracture Detection (EfficientDet)",
        description: "Object detection using EfficientDet family (D0-D7x) with PyTorch Lightning. Compared model variants based on backbone size and dataset balancing strategies.",
        technologies: ["EfficientDet", "EfficientNet", "PyTorch Lightning", "BiFPN", "Albumentations", "WandB"],
        achievements: ["89.42% F1 score (D7x)", "90.29% recall", "Dataset balancing improved generalization"]
      },
      {
        title: "Shoulder Fracture Multiclass Detection",
        description: "Multiclass classification (Clavicle, Humerus, Scapula, Other) using Detectron2 (Faster R-CNN) and RF-DETR Large. Handled class imbalance with hard negative mining.",
        technologies: ["Detectron2", "Faster R-CNN", "RF-DETR Large", "ResNet101", "PyTorch"],
        achievements: ["89.42% F1 (RF-DETR)", "91.87% F1 (Faster R-CNN)", "100% precision for Clavicle"]
      },
      {
        title: "Shoulder Fracture Research Ensemble",
        description: "Multi-architecture deep-learning framework for automated shoulder fracture localization on AP radiographs, subject of an arXiv publication. Integrates three independently-trained detectors — Faster R-CNN (ResNet-50 FPN baseline for high-quality localization), EfficientDet-D3 (BiFPN + EfficientNet backbone for fast inference), and RF-DETR (pure-transformer head with global attention for maximum recall on subtle cortical disruptions) — and fuses their outputs through an IoU-clustered, confidence-weighted ensemble that anchors final geometry to RF-DETR boxes. Preprocessing covers intensity normalization, histogram equalization, automated shoulder-joint cropping, and resolution standardization. Evaluation includes mAP at multiple IoU thresholds, ROC/PR curves, and dedicated false-negative analysis for hairline, greater-tuberosity, and subtle cortical-contour fractures. Production-ready: ONNX/TensorRT export with ensemble inference at 120–250 ms on A100-class GPUs.",
        technologies: ["PyTorch", "Faster R-CNN", "ResNet-50 FPN", "EfficientDet-D3", "BiFPN", "RF-DETR", "Transformer Detection", "Ensemble Fusion", "IoU Clustering", "ONNX", "TensorRT", "CUDA"],
        achievements: ["Published: arXiv 2507.13408 — Deep Learning Framework for Automated Shoulder Fracture Detection", "Ensemble outperforms every individual detector — sharply reduced false negatives", "RF-DETR: highest recall on subtle cortical disruptions", "Faster R-CNN: superior localization in clear-contrast images", "EfficientDet-D3: fastest runtime with moderate recall", "120–250 ms ensemble inference on A100 (ONNX/TensorRT)", "COCO-style annotations with hairline / greater-tuberosity FN analysis"],
        featured: true,
        blogUrl: "https://doi.org/10.48550/arXiv.2507.13408"
      },
      {
        title: "General Fracture Detection",
        description: "Comprehensive evaluation of multiple architectures (SIGLIP, ResNet, DenseNet, EfficientNet) with fusion methods and Decision Rules Engine for general fracture detection.",
        technologies: ["PyTorch", "SIGLIP", "DenseNet-169", "EfficientNet-B3", "CheXagent", "PaliGemma"],
        achievements: ["89.36% accuracy (CheXagent fusion)", "87.39% accuracy (SIGLIP fusion)", "Dynamic weight adjustment"]
      },
      {
        title: "StopTB & Silicosis Classification",
        description: "Classification system for Tuberculosis (Active vs. Chronic) and Silicosis. Orchestrated 12+ pathology classifiers with complex logic rules for final diagnosis.",
        technologies: ["ResNet50", "DenseNet169", "ViT-B16", "EfficientNet-B2", "GCP", "PyTorch"],
        achievements: ["12+ pathology classifiers", "Logic-based diagnosis engine", "Active vs Chronic TB distinction"]
      },
      {
        title: "ICU Pathology Detection",
        description: "Critical care pathology detection for Pneumothorax, Lung Collapse, and Subcutaneous Emphysema. Compared segmentation (YOLO-Seg) vs detection (RF-DETR) approaches.",
        technologies: ["YOLOv11-Seg", "YOLOv8-Seg", "RF-DETR", "OBB"],
        achievements: ["98.95% F1 (Subcutaneous Emphysema)", "98.38% F1 (Lung Collapse)", "95.73% F1 (Pleural Effusion)"]
      },
      {
        title: "Chest X-ray Pathology Detection",
        description: "Specialized object detection models for Mass, Fibrosis, Rib Fracture, Pneumothorax, and Mediastinal Shift. Dedicated models for high-priority pathologies to maximize sensitivity.",
        technologies: ["RF-DETR Medium", "EfficientDet-D7x", "YOLOv8", "YOLOv11", "Object Detection"],
        achievements: ["100% precision (Mass)", "96.42% recall (Mass)", "97.75% F1 (Rib Fracture)", "96.09% AUPRC (Pneumothorax)", "89.43% F1 (Mediastinal Shift)", "86.26% F1 (Fibrosis)"]
      },
      {
        title: "Large-Scale Federated CXR Models",
        description: "Large-scale training on 120K chest X-ray images. Normal vs Abnormal classification and segmentation (Pleural Effusion, Consolidation) using diverse backbones.",
        technologies: ["BioViL", "Swin Transformer", "YOLOv11-Seg", "UNet", "Attention-UNet", "DenseNet121"],
        achievements: ["93.16% accuracy (hybrid model)", "97.21% F1 (Sternal Sutures)", "100% precision (Pleural Effusion)"]
      },
      {
        title: "Multi-Label Chest X-ray Classifier (YOLO11-M)",
        description: "Production-ready multi-label classification system for 40 pathologies using YOLO11-M backbone with FPN. Designed with a configurable system allowing seamless switching between Weighted BCE and Asymmetric Focal Loss via YAML to handle class imbalance. Features two-phase fine-tuning, mixed precision training, and ONNX/TensorRT export.",
        technologies: ["PyTorch", "YOLO11-M", "Asymmetric Focal Loss", "ONNX/TensorRT", "Mixed Precision (BF16)", "Ultralytics"],
        achievements: ["Macro AUROC ~0.82–0.88 (40 pathologies)", "40 independent binary classifier heads", "Configurable loss strategies (BCE/Focal)"]
      },
      {
        title: "Automated CXR Quality-Control Pipeline",
        description: "Quality-gate pipeline for detecting suboptimal chest X-rays before they enter the diagnostic queue. Combines a fleet of multiclass quality classifiers with OR-aggregation logic for higher failure sensitivity, plus a Gemini-based structured QC layer that consumes DICOM metadata and PNG renders to extract exposure, artifacts, cropping, rotation, flipping, mobile-capture, age-group, and overall-quality verdicts under strict JSON schemas. Includes deterministic field-validation and QC-label mapping for downstream parsing reliability.",
        technologies: ["PyTorch", "Multiclass Classifiers", "Gemini 2.5 Flash", "Gemini 3 Flash Preview", "DICOM", "JSON Schema", "Prompt Engineering"],
        achievements: ["OR-aggregation across multiclass + per-class models", "Strict JSON-constrained QC validation (8 fields)", "Benchmarked Gemini 2.5 Flash vs 3 Flash Preview", "Reliable metadata extraction (modality, body part, side, study ID, age, sex)", "Surfaced operational gaps in exposure / cropping / latency for deployment"]
      }
    ],
    "Medical Imaging - Vision-Language Models": [
      {
        title: "Google CXR Foundation Analysis",
        description: "Performance analysis of Google's CXR Foundation model (pre-trained ViT) for medical imaging embeddings. Evaluated transfer learning capabilities and bottlenecks.",
        technologies: ["Google CXR Foundation", "ViT", "Hugging Face", "Google Colab", "PyTorch"],
        achievements: ["Identified latency issues (135s/image)", "0.85 images/min throughput", "Strong diagnostic capabilities"]
      },
      {
        title: "CheXagent Evaluation",
        description: "Technical evaluation of Stanford AIMI's CheXagent-8b for zero-shot binary disease classification (pneumothorax, pleural effusion). Multimodal vision-language model assessment.",
        technologies: ["CheXagent-8b", "VLM", "Hugging Face", "PyTorch", "CUDA"],
        achievements: ["70-75% precision/recall (zero-shot)", "Baseline performance established", "Fine-tuning recommended"]
      },
      {
        title: "Radiology Report Generation",
        description: "Fine-tuned multimodal LLMs (PaliGemma 3B, Gemma 4B) for automated radiology report generation from chest X-rays. JSONL datasets with image-text pairs. Architecture selection informed by extensive Vision Encoder experiments evaluating XrayGPT and BioMedLM for efficiency.",
        technologies: ["PaliGemma 3B", "Gemma 4B", "Hugging Face", "LoRA/QLoRA", "JSONL"],
        achievements: ["81.43% F1 score (PaliGemma)", "74% accuracy", "Findings & Impressions generation"]
      },
      {
        title: "PaliGemma Shoulder Fracture Detection",
        description: "Fine-tuned PaliGemma (3B, 10B, 28B) for shoulder fracture detection and bounding box localization. QLoRA for efficient training with custom attention heads.",
        technologies: ["PaliGemma", "QLoRA", "SigLIP", "Focal Loss", "CIoU Loss", "Canny Edge"],
        achievements: ["78.36% accuracy (10B)", "79.14% F1 (bounding box)", "Two-stage inference pipeline"]
      },
      {
        title: "MedCLIP Contrastive Learning",
        description: "Contrastive learning framework based on CLIP to align medical images with diagnostic text. Trained on 420K samples across 69 labels for multi-label classification.",
        technologies: ["MedCLIP", "ViT", "Contrastive Learning", "PyTorch", "Mixed Precision"],
        achievements: ["98-100% accuracy (distinct classes)", "Multi-label classification", "Zero-shot capability"]
      }
    ],
    "Clinical Workflow Systems": [
      {
        title: "Knee X-ray Analysis System",
        description: "Comprehensive knee X-ray analysis system generating structured medical reports. Modular pipeline with bone detection, view classification, and pathology detection.",
        technologies: ["DenseNet169", "YOLO", "Python", "FastAPI", "API Integration"],
        achievements: ["Osteoarthritis grading (0-4)", "Post-operative implant detection", "AP vs Lateral orientation"]
      },
      {
        title: "CXR Analysis Suite — Desktop + Web Deployments",
        description: "End-to-end productionized CXR diagnostic system, evolved from a single inference backend into a four-component product (CXR inference, orchestrator, React frontend, packaging) shipped as both a Windows desktop installer and a Linux web deployment. Modular DB-driven inference replaced the original flat-file monolith with four packages (pathologies, malposition, reporting, security), RAM-adaptive model management, hot-reload of thresholds via DB watcher, persistent SQLite-backed CXR queue with stuck-process detection, SSE streaming with a /health state machine, rotation-aware tiered CTR clinical decision logic, AES-256 streaming model decryption, and a per-detection feedback + analytics layer with cloud sync. Windows track ships via Electron + PyInstaller frozen builds, install-time model decryption, ProgramData-anchored logging, network precheck wizard, and an admin-aware auto-updater with tiered mandatory-grace policy. Linux track runs behind nginx + certbot, systemd-supervised services, Firebase auth with email-domain allowlist, and an aggregated health endpoint.",
        technologies: ["Python", "FastAPI", "PyTorch", "SQLite", "asyncio", "Electron", "PyInstaller", "Inno Setup", "React", "TypeScript", "Tailwind", "nginx", "systemd", "Firebase Auth", "Docker", "AES-256", "SSE Streaming"],
        achievements: ["Cross-platform deployment (Windows installer + Linux web)", "40+ pathologies & 16+ supportive devices, rich per-detection output (mask polygons, anatomy overlays, CTR)", "Persistent CXR queue with 300s warn / 600s restart stuck-monitor", "Rotation-aware tiered CTR decision table (clavicle–spinous asymmetry)", "Per-detection feedback + milestone surveys with cloud sync", "Offline MAIRA loading via bundled HF config (no runtime HF Hub calls)"],
        showcaseUrl: "https://bpl-bionic-demo.5cn.co.in/",
        featured: true
      },
      // {
      //   title: "Radiologist Workflow Dashboard",
      //   description: "Unified radiologist interface consolidating patient history, imaging metadata, and AI-generated summaries. Clinical history summarization with Gemini API.",
      //   technologies: ["FastAPI", "Gemini API", "React/Next.js", "PostgreSQL", "REST APIs"],
      //   achievements: ["Clinical history summaries", "Context-aware question prompts", "Timeline-based UI"]
      // },
      {
        title: "Image Similarity-Based Report Retrieval",
        description: "RAG-style system using MetaCLIP for retrieving relevant historical X-ray reports. FAISS-indexed 1.6M images with Gemini 2.5 Flash for report synthesis.",
        technologies: ["MetaCLIP", "FAISS", "Gemini 2.5 Flash", "NumPy", "Vector Search"],
        achievements: ["1.6M images indexed", "1024-dim embeddings", "Top-100 retrieval with synthesis"]
      },
      {
        title: "ICU Suite – CXR Critical Care Module",
        description: "Comprehensive ICU-focused chest X-ray analysis system detecting critical pathologies and device malpositions. Includes live inference backend with FastAPI and interactive 3D web showcase for conference demonstration.",
        technologies: ["PyTorch", "YOLOv8/YOLOv11", "EfficientDet", "RF-DETR", "FastAPI", "HTML5", "CSS3", "JavaScript", "Docker"],
        achievements: ["Multi-pathology detection (ICU conditions)", "Medical device malposition checks", "Structured JSON + clinical reports"],
        showcaseUrl: "https://bpl-bionic-demo.5cn.co.in/"
      },
      {
        title: "CXR Suite",
        description: "Comprehensive AI solution for Chest X-Ray analysis including pathology detection, device detection, malposition analysis, and cardiothoracic ratio.",
        technologies: ["Python", "FastAPI", "Uvicorn", "Modal", "SQLite"],
        achievements: ["30+ pathologies detected", "16+ support devices recognized", "Flexible deployment (API/App/Cloud)"]
      },
      {
        title: "Pathologies — single-service APIs",
        description: "Standalone FastAPI services for chest X-ray findings. Independent deployable apps for various pathologies with standardized API contracts.",
        technologies: ["Python", "FastAPI", "RF-DETR", "YOLO", "EfficientDet"],
        achievements: ["20+ standalone pathology services", "Standardized API contracts", "Modal deployment support"]
      },
      {
        title: "Device CXR API",
        description: "Production-grade API analyzing chest X-rays for supportive devices and malposition analysis with real-time SSE streaming.",
        technologies: ["Python", "FastAPI", "YOLO", "Server-Sent Events", "PIL"],
        achievements: ["Per-device malposition status", "Real-time SSE streaming", "Single overlay image rendering"]
      }
    ],
    // "Intelligent Automation & LLM Systems": [
    //   {
    //     title: "Intelligence Automation Server",
    //     description: "AI-driven diagnostic rework automation handling Gmail and WhatsApp requests. Gemini-powered message normalization with Google Sheets workflow tracking.",
    //     technologies: ["Python", "FastAPI", "Gemini API", "Gmail API", "WhatsApp Cloud API", "Google Sheets"],
    //     achievements: ["Unified message ingestion", "100% traceability", "Automated status notifications"]
    //   }
    // ]
  }
  
  export const personalProjects: Record<string, Project[]> = {
    "Artificial Intelligence, Machine Learning & Deep Learning": [
      {
        title: "Scoliosis Detection System (Deep Learning)",
        url: "https://github.com/Saianiruthm/scoliosis_3",
        technologies: ["Python", "PyTorch", "OpenCV"],
        description: "A full deep-learning pipeline for detecting scoliosis from spinal X-ray images. Multiple CNN architectures implemented (ResNet/DenseNet/ViT variants). Includes Grad-CAM for interpretability at block/feature-map level. Preprocessing: resizing, noise removal, intensity normalization. Pediatric vs Non-Pediatric classification capability. Evaluated using accuracy, recall, precision, confusion matrix. Designed to scale to 250K medical CXR images."
      },
      {
        title: "Synthetic ID Card Generator",
        url: "https://github.com/Saianiruthm/synthetic-id-generator",
        technologies: ["Python", "Pillow (PIL)", "Faker"],
        description: "Generates large-scale synthetic ID card images for Computer Vision model training. Template-based ID generation. Randomized text, dates, names, photos for maximum variety. Supports exporting datasets for OCR/fraud detection. Modular design for adding new templates quickly."
      },
      {
        title: "Customer Segmentation (Unsupervised ML)",
        url: "https://github.com/Saianiruthm/Customer_segmentation",
        technologies: ["Python", "Sklearn", "K-Means"],
        description: "A clustering solution to categorize customers using behavioral attributes. Uses Annual Income + Spending Score. Elbow Method used for optimal cluster count. Visualizations for cluster boundaries. Helps identify high-value vs low-value customer groups."
      },
      {
        title: "LSTM Stock Prediction",
        url: "https://github.com/Saianiruthm/LSTMStockPrediction",
        technologies: ["Python", "Keras (LSTM)", "NumPy"],
        description: "Predicts stock closing prices using an LSTM neural network. Normalization using MinMaxScaler. Time-window sequence generation. Multi-layer LSTM with dropout. Visualized predicted vs real closing prices."
      },
      {
        title: "Machine Learning Regression – Car Price Prediction",
        url: "https://github.com/Saianiruthm/ML_1",
        technologies: ["Python", "Jupyter Notebook", "Scikit-Learn"],
        description: "A regression machine learning project focused on price prediction using the CarPrice_Assignment.csv dataset. Predicts car prices using features such as engine size, horsepower, curb weight, and fuel type. Builds multiple models: Linear Regression, Decision Trees, Random Forest. Includes EDA, correlation analysis, and outlier treatment. Measures performance using MAE, RMSE, R²."
      }
    ],
    "Data Analytics, Visualization & BI": [
      {
        title: "World Happiness Report Analysis (2015–2019)",
        url: "https://github.com/Saianiruthm/mini_hack_3",
        technologies: ["Python", "Pandas", "Seaborn"],
        description: "Data engineering and visualization across five years of global happiness data. Unified 2015–2019 datasets. Standardized inconsistent features (e.g., 'Economy (GDP per Capita)' → 'GDP per capita'). Visualizes GDP, Trust, Social Support vs Happiness Score. Heatmaps reveal strongest global indicators."
      },
      {
        title: "Time Series Sales Forecasting",
        url: "https://github.com/Saianiruthm/Time_series_sales",
        technologies: ["Python", "Statsmodels"],
        description: "Analysis of a multi-period sales dataset using classical time-series techniques. Decomposition into trend, seasonality. Tested ARIMA/SARIMA models. Rolling means + stationarity tests (ADF)."
      },
      {
        title: "AdventureWorks BI Dashboard",
        url: "https://github.com/Saianiruthm/powerbiproject1",
        technologies: ["Power BI", "DAX", "T-SQL"],
        description: "Interactive business analytics dashboard. Sales performance metrics. Customer segmentation. Product profitability and trends."
      },
      {
        title: "SQL-Based Credit Card Analytics",
        url: "https://github.com/Saianiruthm/sqlproject",
        technologies: ["SQLite", "SQL queries"],
        description: "Credit card transaction analysis using SQL. Window functions, joins, aggregates. High-spend customers vs category analysis. Potential fraud detection patterns."
      }
    ],
    "Software Engineering & Python Applications": [
      {
        title: "Secure Password Manager",
        url: "#",
        technologies: ["Python", "Cryptography", "Tkinter/CLI"],
        description: "A secure local credential management tool. AES encryption. Local encrypted vault storage. GUI + CLI interfaces. Auto password generator. Integrity check + safe read/write."
      },
      {
        title: "HireAI - LLM-Powered ATS",
        description: "End-to-end AI-driven ATS with multi-stage recruitment screening. Gemini-based resume scoring with dynamic MCQ generation tailored to candidate profiles.",
        technologies: ["Python", "FastAPI", "Gemini API", "LangChain", "React/Next.js", "PostgreSQL"],
        achievements: ["70% reduction in shortlisting time", "Dynamic MCQ generation", "Multi-threshold evaluation"]
      },
      {
        title: "E-Commerce Scraper + GPT Insights",
        url: "#",
        technologies: ["Python", "Selenium/BS4", "Proxies", "GPT API"],
        description: "A full pipeline for scraping Amazon/Flipkart/Myntra. Handles lazy loading, pagination. Rotating proxies to avoid blocks. CAPTCHA bypass support. Exports structured JSON. GPT-powered product comparison, shortlisting, summaries."
      }
    ],
    "Automation, Tools & Labeling Workflows": [
      {
        title: "Label Studio Redundancy Workflow Automation",
        url: "https://github.com/Saianiruthm/labelstudio-redundancy-workflow",
        technologies: ["Python"],
        description: "Automates multi-annotator validation in Label Studio. Aggregates annotations. Detects annotation conflicts. Flags mismatches for review. Prepares cleaned dataset for ML training."
      }
    ],
    "Systems Programming, Embedded Logic & Web Development": [
      {
        title: "Student Management System (C Project)",
        url: "https://github.com/Saianiruthm/sms",
        technologies: ["C", "File Handling", "Windows Console API"],
        description: "CLI application to manage student records. Linked list backend. File persistence. Password-protected admin interface. Console colors + formatting."
      },
      {
        title: "Bank Management System (C++ OOP)",
        url: "https://github.com/Saianiruthm/bms",
        technologies: ["C++"],
        description: "Banking simulation with role-based access. Admin + User logins. Binary file account storage. Fund transfers, balance inquiry. OOP modeling (classes, inheritance)."
      },
      {
        title: "Hardware Automation Projects",
        url: "https://github.com/Saianiruthm",
        technologies: ["Embedded Logic", "Embedded Systems"],
        description: "Early Electrical Engineering projects (Sound Activated System & Street Light Automation) representing my initial background before transitioning to AI."
      },
      {
        title: "Personal Portfolio Website",
        url: "https://github.com/Saianiruthm/saianiruth.github.io",
        technologies: ["HTML", "CSS", "JavaScript"],
        description: "Responsive personal website showcasing skills & projects."
      }
    ]
  }
