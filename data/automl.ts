export default {
    id: 8,
    title: "Automated Learning System Project Contribution",
    description: "Creating AutoML system based on RL in the field of biosignals",
    images: ["/images/automl.png"],
    startDate: "2021-05-01",
    endDate: "2022-04-25",
    technologies: [
      "Reinforcement Learning", "AutoML", "Model Training", "Hyperparameter Optimization"
    ],
    position: 8,
    objective: `
      <p>Developed an RL-based AutoML system demonstrating performance comparable to expert-trained models, covering:</p>
      <ul>
        <li>Faced and overcame the difficulty of designing a project that required a high level of expertise in both reinforcement learning and biosignal processing</li>
        <li>Designed a search space specifically suited for time-series data, ensuring optimal model performance</li>
        <li>Developed a controller to manage the expansion of search spaces, enhancing the system's adaptability and efficiency</li>
        <li>Achieved the automatic construction of task-specific pipelines, covering everything from preprocessing to architecture design</li>
        <li>Automatically generates deep learning models suitable for data analysis when only data and labels are provided</li>
      </ul>
    `,
    details: `
      <p>After developing DeepECG project, I realized that, in the field of ECG, task-specific design requires high levels of expertise and experience, leading to performance variation per different designs. 
In my experience, task-specific design processes are cumbersome and their meticulous configurations rarely translate to other data or tasks. In other words, I should always perform an iterative trial-and-error process to build the whole training process. 
I thought that even for other expert researchers, experimenting with numerous combinations every time is an inconvenient and time-consuming task.</p>
      <p>Therefore, I began this project to reduce the specialized knowledge required for designing neural networks. 
I proposed an end-to-end automated ML framework that automatically found optimal frameworks from preprocessing to neural networks at a single training, which showed similar results tuned by experts.
This experience enabled me to discover the necessity of efficiency when designing ML models. </p>
    `,    
    contents: `
    <section>
      <h2>Motivation</h2>
      <div>
        <p>Requiring an iterative trial-and-error process to build the whole training process (ranging from preprocessing to architecture), which is an inconvenient and time-consuming task.</p>
        <ul>
          <li><strong>Input:</strong> Time-series multi-dimensional data (ECG data)</li>
          <li><strong>Output:</strong> Heart diseases (Multi-label classification)</li>
        </ul>
      </div>
      <img src="/images/[automl]overview.png" alt="Overview Image" />
    </section>
    <section>
      <h2>Methods</h2>
      <p>I borrowed the ENAS concept (Google 2018) which utilized reinforcement learning concepts. ENAS optimized the whole pipeline based on two-step optimization.</p>
      <div class="image-container">
        <img src="/images/[automl]method1.png" alt="Method Image 1" />
        <img src="/images/[automl]method2.png" alt="Method Image 2" />
      </div>
    </section>
    <section>
      <h2>Contribution</h2>
      <p>Despite AutoML success in several fields, these methods are difficult to directly apply to the electrocardiography (ECG) fields that morphological and temporal characteristics of the signal should be essentially considered.</p>
      <p>Furthermore, until now, there are scarce automated learning methods that take into consideration the entire framework ranging from proper search spaces to suitable automated learning processes in the ECG field.</p>
      <p>Here, I newly designed “Macro” search spaces for considering time-series characteristics:</p>
        <img src="/images/[automl]detail1.png" alt="Detail Image 1" />      
      <ul>
        <li>Preprocessing search space designs: Input sizes, Normalization, data augmentation</li>
        <li>Architecture search space designs: CNN kernels, strides, etc.</li>
        <li>Other strategies for search space designs: Layer skip connection, Layer activation functions</li>
      </ul>
      <p>Designing our modified controller which samples ranging from preprocessing to architecture.</p>
      <div class="image-container">
        <img src="/images/[automl]detail3.png" alt="Detail Image 3" />
      </div>
    </section>
    <section>
      <h2>More Details</h2>
      <p>I designed our modified controller which samples ranging from preprocessing to architecture while providing stable training strategies.</p>
      <p>Prior to this section, I determined many search spaces by considering ECG characteristics. Thus, the number of search spaces is expanded. The issue of this is that the construction of the controller should be redesigned according to increasing the length of search spaces.</p>
      <p>I hypothesized it is important to make the controller understandable which the search space is designed at the current step. This is because I believed that the property between preprocessing and architecture sampling is slightly different. Thus, I distinguish each step by adding additional clues.</p>
      <p>Plus, when it comes to the metric in the field of biosignals, the ROC value is mainly used as the main metric. However, unfortunately, calculating the ROC from a mini-batch will be unstable, and this unstable performance may even badly affect the learning of the controller. This indicates that it is difficult to use the ROC metric as a reward function to train the controller, so I firstly utilized another metric for training.</p>
      <img src="/images/[automl]detail2.png" alt="Detail Image 2" />
    </section>
    <section>
      <h2>Conclusion</h2>
      <p>In this project, I proposed a novel AutoML framework for multi-label ECG classification.</p>
      <p>In particular, I devised not only diverse search spaces based on the temporal characteristics of the ECG signal that can utilize inherent ECG properties but also integrated the development strategies ranging from preprocessing to architecture sampling through a modified controller.</p>
      <p>I learned that unexpected CNN architecture designs were achieved from an automated framework.</p>
      <p>In addition, I observed that similar NAS structures were extracted in the same dataset, but different NAS structures were selected according to a different dataset.</p>
      <p>Also, unnecessary search spaces (e.g., 500 Hz sampling) were found.</p>
      <p>From this perspective, this framework will be one of the convenient and efficient tools to automatically design a deep learning framework for a future company project.</p>
      <img src="/images/[automl]result.png" alt="Result Image" />
    </section>
  `,        
      // rolesAndSolutions: [
      //     {
      //       role: "BCI System Developer",
      //       contribution: "Proposed a subject-independent BCI system that can be used without individual calibration procedures.",
      //     },
      //     {
      //       role: "Data Utilization",
      //       contribution: "Utilized a large-scale motor imagery (EEG) database collected from 54 subjects.",
      //     },
      //     {
      //       role: "CNN Framework Developer",
      //       contribution: "Developed a subject-independent framework based on deep convolutional neural networks (CNN).",
      //     },
      //   ],
      // issues: [
      //   {
      //     title: "BCI System Developer",
      //     description: "Proposed a subject-independent BCI system that can be used without individual calibration procedures."
      //   },
      //   {
      //     title: "Data Utilization",
      //     description: "Utilized a large-scale motor imagery (EEG) database collected from 54 subjects."
      //   },
      //   {
      //     title: "CNN Framework Developer",
      //     description: "Developed a subject-independent framework based on deep convolutional neural networks (CNN)."
      //   },
      // ],
      
      issues: [], // Add issues array
      rolesAndSolutions: [], // Add roles and solutions array     
      // pdfLinks: [ // PDF 링크 배열로 변경
        // "/uploads/[Main2] OpenSourceData.pdf",
        // "/uploads/[Main2] AdditionalData.pdf",
        // "/uploads/[Main2] AnotherResource.pdf"
      // ],    
  };