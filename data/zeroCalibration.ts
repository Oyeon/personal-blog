export default {
    id: 9,
    title: "Subject-Independent Brain-Computer Interface",
    description: "Proposed a BCI system that can be used without individual calibration procedures",
    images: ["/images/zerocalibration.png"],
    startDate: "2016-09-01",
    endDate: "2018-07-25",
    technologies: [
      "EEG", "Deep Learning", "Convolutional Neural Networks", "Data Processing",
    ],
    position: 9,
    objective: `
      <p>Developed a subject-independent BCI system that can be used without individual calibration procedures, covering:</p>
      <ul>
        <li>Utilized a large-scale motor imagery (EEG) database collected from 54 subjects</li>
        <li>Developed a subject-independent framework based on deep convolutional neural networks (CNN)</li>
        <li>Achieved higher classification accuracy compared to traditional subject-dependent models</li>
        <li>Published as the 1st author in a top 1% journal (TNNLS) in the field of Machine Learning</li>
      </ul>
    `,
    details: `
    <p>I performed this research project during Korea University and this project was my representative brain research.
In graduate school, I developed a subject-independent non-invasive brain-computer interface (BCI) based on deep convolutional neural networks that classified a user's imagined movements. 
I mainly implemented this entire system (Matlab, Python, and Tensorflow) from the experimental environment (paradigm) to analysis functions.
I contributed to one of the prominent journals (TNNLS, 0.97%, 1 of 104 in CS) as the first author. 
.</p>
    <p>I demonstrate that the classification accuracy of our subject-independent (or calibration-free) model outperforms that of subject-dependent models using various methods [common spatial pattern (CSP), common spatiospectral pattern (CSSP), filter bank CSP (FBCSP), and Bayesian spatio-spectral filter optimization (BSSFO)].
It indicated that this system can reduce approximately 20–30 min to collect enough data to build a reliable decoder.
Through this experience, I realized the importance of statistical and practical integration when creating ML models for real-world applications.</p>
  `,    
  contents: `
  <section>
    <h2>Motivation</h2>
    <div>
      <p>A calibration procedure is required for the use of BCI, which requires approximately 20–30 min to collect enough data to build a reliable decoder.</p>
      <ul>
        <li><strong>Input:</strong> Time-series multi-dimensional data (Time by ECG Channels)</li>
        <li><strong>Output:</strong> Motor imagination (binary classification; right or left motor imagination)</li>
      </ul>
    </div>
    <img src="/images/[tnnls]overview.png" alt="Overview Image" />
  </section>
  <section>
    <h2>Previous Approaches</h2>
    <p>Previous approaches mainly utilized the linear characteristics of the given samples (log-variance of raw data). I thought that there were limitations to building a classifier using only linear information from a data pool composed of different people. Thus, I focused on considering the non-linear characteristics of the data and combining them with deep learning.</p>
    <p>There were two major problems when trying to solve the calibration issue through deep learning:</p>
    <ul>
      <li>First, there were no databases with a large number of subjects.</li>
      <li>Second, there were scarce studies on zero-calibration BCIs based on deep learning, which required strategies for extracting discriminative brain features from a large-scale database.</li>
    </ul>
  </section>
  <section>
    <h2>Our Approach</h2>
    <p>We built a large amount of data over about a year and then opened the database, representing the largest BCI dataset thus far reported in the literature. We developed a novel algorithm to extract common features from a large number of data pools and deliver these features as the input for deep learning.</p>
  </section>
  <section>
    <h2>Dataset</h2>
    <p>In the experiment, 54 healthy subjects (aged 24–35: 29 male and 25 female) participated in two sessions.</p>
    <img src="/images/[tnnls]data.png" alt="Dataset Image" />
  </section>
  <section>
    <h2>Methods</h2>
    <ol>
      <li>Extract discriminant features from a large number of data pools.</li>
      <li>Deliver these features as the input for deep learning.</li>
      <li>Train the transformed inputs with deep learning.</li>
    </ol>
    <img src="/images/[tnnls]method.png" alt="Methods Image" />
  </section>
  <section>
    <h2>Step 1</h2>
    <p>Discover data-specific optimal frequency subsets representing the large data. In each person, the optimal frequency range (e.g., A=7-13Hz, B=8-30Hz) of brain signals was different due to their respective neurophysiological basis. From the large dataset, since it is uncertain which frequency bands can compose discriminative brain features, I encoded these uncertainties using mutual information over frequencies and features. This is the first approach to extracting unique features from the large dataset.</p>
  </section>
  <section>
    <h2>Step 2</h2>
    <p>Convert inputs to 2D formats like images that have clear class information and spatial relationships. CNN was designed to compress spatial information of a certain region within the input. Our input consisted of temporal and channel dimensions, so it was required to convert inputs to 2D formats such as images that had clear class information and spatial relationships. Applying a linear spatial transformation maximized the variance differences between classes. Designing the input to consider spatial relationships of itself by taking the covariance. This is also the first approach to transform time series input into 2D inputs.</p>
  </section>
  <section>
    <h2>Step 3</h2>
    <p>Provide different distinctive transformations of raw data while preserving inherent signal characteristics. Integrate all the discriminant features that contain the discriminant ERD patterns. Inputs are individually trained through the CNN and then combined by a concatenation fusion technique.</p>
  </section>
  <section>
    <h2>Conclusion</h2>
    <p>For the performance comparison, we evaluated the decoding accuracy of the proposed method by comparing the previous subject-independent approaches as well as subject-dependent approaches. Our zero-calibration method showed superior classification performance compared to other calibration methods [common spatial pattern (CSP), common spatiospectral pattern (CSSP), filter bank CSP (FBCSP), and Bayesian spatio-spectral filter optimization (BSSFO)].</p>
    <img src="/images/[tnnls]result.png" alt="Result Image" />
    <p>This study is the first approach to solving a zero-calibration issue by combining a large dataset with deep learning, which provides a novel feature representation method. This was my representative brain research, and it will be expanded to a variety of BCI applications.</p>
    <img src="/images/[tnnls]paper.png" alt="Paper Image" />
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