export const experienceData = {
    company: "5C Network",
    location: "Bengaluru, India",
    roles: [
      {
        title: "Data Scientist",
        period: "June 2025 – Present",
        type: "Full-time"
      },
      {
        title: "AI Scientist Intern", 
        period: "January 2025 – May 2025",
        type: "Internship"
      }
    ],
    highlights: [
      "Developed 22+ production-grade AI models for medical imaging analysis, including pediatric chest X-rays (98.14% accuracy), shoulder fractures (89.42% F1), tuberculosis/silicosis detection, and multi-pathology systems for ICU diagnostics",
      "Built end-to-end ML pipelines using PyTorch, TensorFlow, and Hugging Face Transformers, processing 1.6M+ medical images with advanced preprocessing (CLAHE, LANCZOS) and augmentation techniques",
      "Implemented ensemble learning systems combining DenseNet, EfficientNet, ResNet, Vision Transformers (ViT), CLIP, and YOLO architectures for robust clinical decision support across multiple modalities (X-ray, CT, MRI)",
      "Designed scalable data engineering workflows using FastAPI, Docker, and cloud infrastructure (GCP), serving 1000+ real-time predictions per hour with sub-second latency and GPU optimization",
      "Created multimodal AI systems integrating vision-language models (PaliGemma, CheXagent, Gemini) for automated radiology report generation, achieving 81.43% F1 score on findings/impressions tasks",
      "Developed RAG-based retrieval systems using MetaCLIP and FAISS for image similarity search across 1.6M indexed studies, enabling unsupervised pathology exploration and historical report synthesis",
      "Built intelligent automation workflows integrating Gmail API, WhatsApp Cloud API, and Gemini for diagnostic rework automation, eliminating manual message processing and ensuring 100% traceability",
      "Engineered LLM-powered ATS system (QC-Hire) with dynamic resume scoring, custom MCQ generation, and multi-threshold evaluation, reducing manual shortlisting time by 70%"
    ],
    technologies: [
      "Python", "PyTorch", "TensorFlow", "Hugging Face", "Scikit-learn", "OpenCV", "Pandas", "NumPy",
      "YOLO", "Detectron2", "Vision Transformers", "CLIP", "Gemini API", "LangChain",
      "FastAPI", "Flask", "Docker", "Docker Compose", "PostgreSQL", "FAISS",
      "GCP", "Git", "Weights & Biases", "Streamlit", "Linux", "REST APIs"
    ],
    publication: {
      title: "A Deep Learning-Based Ensemble System for Automated Shoulder Fracture Detection in Clinical Radiographs",
      doi: "10.48550/arXiv.2507.13408",
      description: "Research publication developed during tenure at 5C Network, presenting novel ensemble deep learning approach for medical imaging analysis."
    }
  }
  
  export const publicationData = {
    title: "A Deep Learning-Based Ensemble System for Automated Shoulder Fracture Detection in Clinical Radiographs",
    authors: "SAIANIRUTH M, et al.",
    journal: "arXiv preprint",
    doi: "10.48550/arXiv.2507.13408",
    year: "2025",
    abstract: "This paper presents a comprehensive deep learning-based ensemble system for automated detection of shoulder fractures in clinical radiographs. The proposed methodology combines multiple state-of-the-art convolutional neural network architectures including ResNet, DenseNet, and Vision Transformers to achieve robust and accurate fracture detection. The system incorporates advanced preprocessing techniques, data augmentation strategies, and interpretability features through Grad-CAM visualization.",
    keywords: ["Deep Learning", "Medical Imaging", "Fracture Detection", "Ensemble Learning", "Computer Vision"],
    link: `https://doi.org/10.48550/arXiv.2507.13408`
  }
  
  export const educationData = {
    institution: "Government College of Technology Coimbatore",
    location: "Coimbatore, India",
    degree: "Bachelor of Engineering in Electrical and Electronics Engineering",
    period: "Oct 2021 – Apr 2025",
    gpa: "8.0/10.0"
  }