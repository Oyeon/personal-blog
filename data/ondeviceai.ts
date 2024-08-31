export default {
    id: 4,
    title: "On-Device AI",
    description: "AI on-device",
    images: ["/images/[ondevice]main.png"],
    startDate: "2024-09-01",
    endDate: "2025-01-31",
    technologies: [
      "Python", "PyTorch", "TensorFlow", "Low-Power Devices", "Distillation", 
      "Quantization", "Weight Imprinting", "Power Calculation", 
      "Low-Power Compute Hardware", "Sensors"
    ],
    position: 4,
    objective: `
      <p>Taking an on-device ML course focused on building, training, and deploying models for low-power devices, covering:</p>
      <ul>
        <li>Distillation</li>
        <li>Quantization</li>
        <li>Weight Imprinting</li>
        <li>Power Calculation</li>
        <li>Utilizing low-power compute hardware and sensors</li>
      </ul>
    `,
    rolesAndSolutions: [
        {
          role: "Model Optimization",
          contribution: "Optimized models for low-power devices, ensuring efficient performance without compromising accuracy.",
        },
        {
          role: "Deployment",
          contribution: "Deployed models on various low-power hardware, ensuring compatibility and performance.",
        },
      ],
    issues: [
      {
        title: "Power Efficiency",
        description: "Ensuring models run efficiently on low-power devices without draining the battery quickly."
      },
      {
        title: "Model Accuracy",
        description: "Maintaining high model accuracy while optimizing for low-power hardware."
      },
      {
        title: "Hardware Compatibility",
        description: "Ensuring models are compatible with a variety of low-power hardware devices."
      },
    ],
    details: "",
    contents: "",   
    // pdfLinks: [] // Add pdfLinks array
  };