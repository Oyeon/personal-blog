export default {
    id: 1,
    title: "Virtual Assistant",
    description: "3D Realistic & Conversational Avatar",
    images: ["/images/talkmotion.ai.png"],
    startDate: "2023-09-01",
    endDate: "2024-08-21",
    technologies: [
      "Python", "FastAPI", "PyTorch", "Triton", "ONNX", "PEFT", "DeepSpeed",
      "Langchain", "LlamaIndex", "OpenSearch", "MySQL", "MongoDB", "Qdrant",
      "Milvus", "Git", "Docker", "BigQuery", "AirFlow", "Kubeflow", "k8s",
      "MLFlow", "Kafka", "AWS", "GCP"
    ],
    position: 1,
    objective: `
      <p>The primary objective of the project was to develop and deploy an advanced, 
      real-time chatbot agent integrated with 3D animation capabilities. This involved:</p>
      <ul>
        <li>Building a scalable and high-availability cloud infrastructure</li>
        <li>Supporting the deployment of a machine learning-driven solution</li>
        <li>Combining LLM (Language Model), TTS (Text-to-Speech), and 3D animation</li>
        <li>Creating a seamless, interactive user experience</li>
        <li>Enhancing the user interface through cutting-edge AI technologies</li>
      </ul>
    `,
    rolesAndSolutions: [
        {
          role: "Leadership",
          contribution: "Led the project by coordinating with Unity developers, AI researchers, and designers to ensure cohesive and aligned development efforts.",
        //   solution: "Provided strategic direction and facilitated communication across teams, ensuring that project goals were met efficiently."
        },
        {
          role: "Cloud Infrastructure",
          contribution: "Architected and deployed a k8s-based high-availability infrastructure on GCP and Azure to support real-time AI-driven services, including monitoring with Prometheus and Grafana dashboards",
        //   solution: "Designed and implemented a cloud architecture focused on scalability and availability, ensuring consistent performance under load."
        },
        {
          role: "Model Optimization",
          contribution: "Optimized a diffusion-based 3D animation inference stage, significantly reducing inference time from 10 seconds to 0.1 seconds.",
        //   solution: "Trained and optimized the model to enhance performance, reducing inference time to 0.1 seconds, enabling real-time application."
        },
        {
          role: "Deployment",
          contribution: "Integrated and deployed the LLM, TTS, and 3D animation models using Triton Ensemble for real-time service delivery.",
        //   solution: "Used Triton Ensemble to seamlessly integrate LLM, TTS, and 3D animation models, ensuring real-time synchronization and performance."
        },
        {
          role: "Chatbot Development",
          contribution: "Developed a real-time chatbot using Adaptive RAG-flow and layered indexing/search techniques to enhance response accuracy.",
        //   solution: "Engineered the chatbot system to leverage Adaptive RAG-flow, improving the accuracy and relevance of real-time responses."
        },
        {
          role: "Data Pipeline Design",
          contribution: "Implemented automated data acquisition and response evaluation pipelines, facilitating continuous data processing and model improvement.",
        //   solution: "Created automated pipelines for data acquisition and response evaluation, improving data processing efficiency and model accuracy."
        },
        {
          role: "MLOps Implementation",
          contribution: "Established a Level 2 MLOps pipeline with CI/CD processes to ensure efficient model integration, deployment, and management.",
        //   solution: "Implemented a Level 2 MLOps pipeline with CI/CD to facilitate smooth, continuous model updates and deployments."
        }
      ],
      issues:  [
        {
          title: "High Inference Latency",
          description: "The original 3D animation model had an inference latency of 10 seconds, hindering real-time application capabilities."
        },
        {
          title: "Scalability Concerns",
          description: "The need to design a cloud architecture that could efficiently scale with increasing user demands while ensuring high availability."
        },
        {
          title: "Integration Complexity",
          description: "Challenges in synchronizing and integrating LLM, TTS, and 3D animation models within a real-time system."
        },
        {
          title: "Data Handling",
          description: "Difficulty in automating and managing large-scale data acquisition and response evaluation processes while maintaining data integrity."
        },
        {
          title: "MLOps Setup",
          description: "Challenges in setting up a reliable MLOps pipeline to handle continuous model updates without disrupting live services."
        }
      ],
      details: "",
      contents: "",     
      // pdfLinks: [] // Add pdfLinks array
  };