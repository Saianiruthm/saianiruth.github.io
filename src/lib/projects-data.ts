interface Project {
    title: string
    description: string
    technologies: string[]
    achievements?: string[]
    url?: string
    liveUrl?: string
    showcaseUrl?: string
  }
  
  export const professionalProjects: Record<string, Project[]> = {
    "Medical Imaging - Classification & Detection": [
      {
        title: "Pediatric Chest X-ray Analysis",
        description: "Binary classification model for pediatric chest X-rays using feature fusion of DenseNet-169 and EfficientNet-B3. Implemented LANCZOS resizing and CLAHE contrast enhancement for preprocessing.",
        technologies: ["Python", "PyTorch", "DenseNet-169", "EfficientNet-B3", "CLAHE", "Adam Optimizer"],
        achievements: ["98.07% accuracy (DenseNet)", "98.14% accuracy with 99% precision (fusion)", "Feature fusion strategy"]
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
        description: "Multi-model ensemble integrating Faster R-CNN, EfficientDet, and RF-DETR. Weighted ensemble strategy with IoU-based bounding box clustering.",
        technologies: ["Faster R-CNN", "EfficientDet", "RF-DETR", "Ensemble Fusion", "ONNX/TensorRT"],
        achievements: ["Reduced false negatives", "RF-DETR: highest recall", "Faster R-CNN: superior localization"]
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
        description: "Specialized object detection models for Mass, Fibrosis, and Rib Fracture. Dedicated models for high-priority pathologies to maximize sensitivity.",
        technologies: ["RF-DETR Medium", "EfficientDet-D7x", "Object Detection"],
        achievements: ["100% precision (Mass)", "96.42% recall (Mass)", "97.75% F1 (Rib Fracture)"]
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
        description: "Fine-tuned multimodal LLMs (PaliGemma 3B, Gemma 4B) for automated radiology report generation from chest X-rays. JSONL datasets with image-text pairs.",
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
      },
      {
        title: "Vision Encoder Experiments",
        description: "Experimental attempts with XrayGPT and BioMedLM for report generation. Feasibility study to select efficient backbone for medical VLMs.",
        technologies: ["XrayGPT", "BioMedLM", "Gemma-3", "PyTorch", "ViT"],
        achievements: ["35 min/epoch (BioMedLM)", "Efficiency benchmarking", "Architecture comparison"]
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
        title: "CXR Analysis System",
        description: "Core orchestration and deployment infrastructure for chest X-ray analysis suite. Unified Model Registry with multi-model inference and report generation.",
        technologies: ["FastAPI", "Docker", "Docker Compose", "PyTorch", "Structlog", "YAML"],
        achievements: ["Dynamic model loading", "GPU support", "Production-ready containerization"]
      },
      {
        title: "Radiologist Workflow Dashboard",
        description: "Unified radiologist interface consolidating patient history, imaging metadata, and AI-generated summaries. Clinical history summarization with Gemini API.",
        technologies: ["FastAPI", "Gemini API", "React/Next.js", "PostgreSQL", "REST APIs"],
        achievements: ["Clinical history summaries", "Context-aware question prompts", "Timeline-based UI"]
      },
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
        showcaseUrl: "https://icudemo.etiqueta.cubebase.ai/"
      }
    ],
    "Intelligent Automation & LLM Systems": [
      {
        title: "Intelligence Automation Server",
        description: "AI-driven diagnostic rework automation handling Gmail and WhatsApp requests. Gemini-powered message normalization with Google Sheets workflow tracking.",
        technologies: ["Python", "FastAPI", "Gemini API", "Gmail API", "WhatsApp Cloud API", "Google Sheets"],
        achievements: ["Unified message ingestion", "100% traceability", "Automated status notifications"]
      },
      {
        title: "QC-Hire - LLM-Powered ATS",
        description: "End-to-end AI-driven ATS with multi-stage recruitment screening. Gemini-based resume scoring with dynamic MCQ generation tailored to candidate profiles.",
        technologies: ["Python", "FastAPI", "Gemini API", "LangChain", "React/Next.js", "PostgreSQL"],
        achievements: ["70% reduction in shortlisting time", "Dynamic MCQ generation", "Multi-threshold evaluation"]
      }
    ]
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
        title: "Titanic Survival Prediction",
        url: "https://github.com/Saianiruthm/titanicsurvivalprediction",
        technologies: ["Python", "Pandas", "Sklearn"],
        description: "Binary classification model predicting survival probability on the Titanic. Feature engineering: Title extraction, Age imputation. Models: Logistic Regression, Random Forest, SVM. Plots for survival patterns across Pclass, Sex, Age."
      },
      {
        title: "Handwritten Digit Recognition (MNIST)",
        url: "https://github.com/Saianiruthm/handwrittennumbersprediction",
        technologies: ["Python", "TensorFlow"],
        description: "Neural Network classifier for handwritten digits from the MNIST dataset. Trains multiple NN architectures. 98% test accuracy. Includes visualizations of predictions and error cases."
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
        title: "IMDb Top 1000 Movie Analysis",
        url: "https://github.com/Saianiruthm/imdb_top_1000",
        technologies: ["Python", "Seaborn", "Matplotlib"],
        description: "Exploratory analysis of IMDB's Top 1000 movies dataset. Identifies top directors, genres, and production patterns. Analyzes rating distribution. Correlation between runtime, genre, IMDB score."
      },
      {
        title: "Time Series Sales Forecasting",
        url: "https://github.com/Saianiruthm/Time_series_sales",
        technologies: ["Python", "Statsmodels"],
        description: "Analysis of a multi-period sales dataset using classical time-series techniques. Decomposition into trend, seasonality. Tested ARIMA/SARIMA models. Rolling means + stationarity tests (ADF)."
      },
      {
        title: "Weather Data Analysis",
        url: "https://github.com/Saianiruthm/pandasproject2",
        technologies: ["Python", "Pandas"],
        description: "Explores long-term weather attributes from weatherHistory.csv. Temp, humidity, wind-speed analysis. Daily/Monthly aggregation. Detects long-term patterns."
      },
      {
        title: "Netflix Titles Dataset Analysis",
        url: "https://github.com/Saianiruthm/pandasproject",
        technologies: ["Python", "Pandas"],
        description: "Examines Netflix's movie and TV catalog dataset. Worldwide content percentage. Yearly release trends. Genre distribution analysis."
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
      },
      {
        title: "Laptop Data Cleaning & Analysis (Excel)",
        url: "https://github.com/Saianiruthm/excelproject",
        technologies: ["MS Excel", "Pivot Tables", "Power Query"],
        description: "Excel-driven analysis of laptop pricing dataset. 20+ cleaned features. Price distribution insights. Pivot chart dashboards."
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
        title: "E-Commerce Scraper + GPT Insights",
        url: "#",
        technologies: ["Python", "Selenium/BS4", "Proxies", "GPT API"],
        description: "A full pipeline for scraping Amazon/Flipkart/Myntra. Handles lazy loading, pagination. Rotating proxies to avoid blocks. CAPTCHA bypass support. Exports structured JSON. GPT-powered product comparison, shortlisting, summaries."
      },
      {
        title: "Automated Desktop Cleaner",
        url: "#",
        technologies: ["Python", "OS Automation"],
        description: "A background system to auto-organize your desktop. Sorts by file type. Moves/Archives/Deletes automatically. Interval-based monitoring. Logging & conflict resolution."
      }
    ],
    "Automation, Tools & Labeling Workflows": [
      {
        title: "Label Studio Redundancy Workflow Automation",
        url: "https://github.com/Saianiruthm/labelstudio-redundancy-workflow",
        technologies: ["Python"],
        description: "Automates multi-annotator validation in Label Studio. Aggregates annotations. Detects annotation conflicts. Flags mismatches for review. Prepares cleaned dataset for ML training."
      },
      {
        title: "Task_1 — Annotation Configuration Project",
        url: "https://github.com/Saianiruthm/Task_1",
        technologies: ["Label Studio", "JSON"],
        description: "Defines two complex annotation projects: Brush-based segmentation. Rectangle bounding box labels. Choice-based classification tasks."
      },
      {
        title: "TechnoHacks Internship Projects",
        url: "https://github.com/Saianiruthm/technohacksinternship",
        technologies: ["Python"],
        description: "Collection of small Python applications: Calculator. Temperature converter. Mini games. Utility scripts."
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
        title: "Sound Activated System",
        url: "https://github.com/Saianiruthm/sas",
        technologies: ["Embedded Logic"],
        description: "Sound-based automated switching system. Detects claps/noise. Controls electrical appliances. Energy efficient automation."
      },
      {
        title: "Street Light Automation",
        url: "https://github.com/Saianiruthm/slm",
        technologies: ["Embedded Systems"],
        description: "Ambient-light-triggered automatic streetlight system. Photodiode/LDR-based detection. Day/Night switching. Energy efficient."
      },
      {
        title: "Personal Portfolio Website",
        url: "https://github.com/Saianiruthm/saianiruth.github.io",
        technologies: ["HTML", "CSS", "JavaScript"],
        description: "Responsive personal website showcasing skills & projects."
      },
      {
        title: "Temperature Converter Web App",
        url: "https://github.com/Saianiruthm/temperature.github.io",
        technologies: ["HTML", "CSS", "JavaScript"],
        description: "Simple browser-based Celsius–Fahrenheit converter using DOM scripting."
      }
    ]
  }
