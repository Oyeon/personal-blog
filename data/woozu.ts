export default {
  id: 6,
  title: "1:1 Local Korean Matching Service",
  description: "Launched 1:1 local Korean matching service achieving 4x month-on-month growth from zero-to-one",
  images: ["/images/woozu2.png", "/images/woozu1.png"],
  startDate: "2023-01-01",
  endDate: "2023-08-31",
  technologies: [
    "Flutter", "Firebase", "Agora", "UXCam", "SNS"
  ],
  position: 6,
  objective: `
    <p>Launched 1:1 local Korean matching service achieving 4x month-on-month growth from zero-to-one, covering:</p>
    <ul>
      <li>Secured pre-seed funding from Antler, leading to $0.1M in funding</li>
      <li>Developed cross-platform app (Flutter & Firebase) with integrated video calls (Agora)</li>
      <li>Improved 50% retention rate by analyzing customer behavior with UXCam and optimizing initial content lock-in</li>
      <li>Achieved CPA of $0.15 (90% lower market average) by tracking 20-30 female users and rescheduling SNS content</li>
    </ul>
  `,
  details: `
  <p>After graduate school, at my previous employer, I developed early prediction and classification models for cardiology patients, capable of predicting events such as cardiac arrest. 
We called this project DeepCARS which calculates the likelihood of cardiac arrest by utilizing five vital signs (HR;heart rate, RR; respiratory rate, SBP; systolic blood pressure, DBP; diastolic blood pressure, and BT; body temperature). 
Here, I contributed to building from the initial stage of the project to technological development. In particular, I developed the basic analysis framework to predict the cardiac arrest risk within 24 hours to give early notification for professionals in hospitals to take precise decisions.</p>
  <p>It was a real-world issue very different from development environments and our team created missing data imputation methods, batch sampling for data imbalances, dataset construction, and architecture designs to create a robust, real-world framework. 
Our team successfully created a prototype that is being tested in Korean hospitals. Our prototype is capable of predicting cardiac arrest in advance and saving patients' lives. 
This project was mainly implemented in Python and Tensorflow 1 & 2.
Through this experience, I came to understand the necessity of robustness when applying engineering concepts to the real world. 
</p>
`,    
contents: `
<section>
  <h2>Motivation</h2>
  <div>
    <p>Developing an intelligent AI-based medical solution based on EMR data</p>
    <ul>
      <li><strong>Input:</strong> Discrete time-series data (5 vital signs; HR, SBP, DBP, RR, BT)</li>
      <li><strong>Output:</strong> Deteriorating heart diseases (cardiac arrest, mortality, and so on) predict/classify</li>
    </ul>
  </div>
  <img src="/images/[cars]overview.png" alt="Overview Image" class="centered-image"/>
</section>
<section>
  <h2>Problem Definition</h2>
  <div class="image-container">
    <img src="/images/[cars]method.png" alt="Method Image" class="centered-image"/>
  </div>
</section>
<section>
  <h2>Project Issues</h2>
  <div class="image-container">
    <img src="/images/[cars]issue.png" alt="Issue Image" class="centered-image"/>
  </div>
</section>
<section>
  <h2>Project Contribution</h2>
  <div class="image-container">
    <img src="/images/[cars]solve.png" alt="Contribution Image 1" class="centered-image"/>
    <img src="/images/vuno2.png" alt="Contribution Image 2" class="centered-image"/>
  </div>
</section>    
<section>
  <h2>Conclusion</h2>
  <p>Most approaches are new and novel, and effectively combined in an entire framework.</p>
  <p>Through this project, I published several papers as a co-first author, and this was my first research to apply technology to the real-world environment.</p>
  <p>I came to learn how to build up a robust model setup and understand performance (reducing false-positive alarms and improving high true-negative cases).</p>
  <div class="image-container">
    <img src="/images/vuno3.png" alt="Result Image 1" class="centered-image"/>
    <img src="/images/vuno4.png" alt="Result Image 2" class="centered-image"/>
  </div>
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