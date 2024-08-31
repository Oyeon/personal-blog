export default {
    id: 10,
    title: "BCI Open Source and Open Dataset",
    description: "Contributed to open source ('PatternRecognition/OpenBMI') and open dataset ('gigadb.org/dataset/100542')",
    images: ["/images/opensource.png"],
    startDate: "2016-09-01",
    endDate: "2018-07-25",
    technologies: [
      "EEG", "Deep Learning", "Convolutional Neural Networks", "Data Processing"
    ],
    position: 10,
    objective: `
      <p>Contributed to the development and dissemination of open source tools and datasets for BCI research, covering:</p>
      <ul>
        <li>Provided an EEG dataset that can be used as foundational data for BCI research (Link: <a href="https://gigadb.org/dataset/100542" target="_blank" rel="noopener noreferrer">gigadb.org/dataset/100542</a>)</li>
        <li>Supported researchers in analyzing and comparing BCI paradigms through the OpenBMI toolbox (Release open source codes: <a href="https://github.com/PatternRecognition/OpenBMI" target="_blank" rel="noopener noreferrer">github.com/PatternRecognition/OpenBMI</a>)</li>
        <li>Offered insights into BCI illiteracy, suggesting future research directions</li>
        <li>Published a paper as the 2nd author detailing the findings and methodologies</li>
      </ul>
    `,
    details: `
      <p>In graduate school, I participated in an open source & dataset project as the main contributor. 
      In the open-source project, our team (total 4, as part leader) developed an open software package dedicated to the development of Brain-Computer Interfaces with various advanced pattern recognition algorithms. 
      In the case of an open dataset project, our team presents a BCI dataset that includes the three major BCI paradigms (Motor imagery, SSVEP, P300) with a 54 subjects (64-channels) over 2 sessions.</p>
      <p>I contributed to building an entirely open-source & dataset project. In particular, I developed the open-source project such as a variety of BCI paradigms and analysis functions. I also managed the experimental process during the open-dataset project. 
      Through the open-source project, we produced easy and useful analysis tools for BCI users and various types of BCI paradigms. In addition, the open-data project is not only one of the largest datasets in BCI fields, but also one of the high-quality data.
      Now, this entire project was publicly open via GitHub and GigaScience paper. This project was mainly implemented in Matlab.
      Through this project, I learned the whole basic process of the BCI (how to design BCI environment, analyze, and manage datasets).</p>
    `,    
    contents: `
      <section>
        <h2>About Open Dataset</h2>
        <ul>
          <li><strong>Subject number:</strong> Fifty-four healthy subjects (ages 24-35; 25 females) participated in the experiment</li>
          <li><strong>Data quantity & quality:</strong> Multiple ECG 64 channels & multiple sessions, 5~6 hours per subject for a single experiment</li>
          <li><strong>Data types:</strong> Including motor imagery, event-related potential, and steady-state visually evoked potential data</li>
        </ul>
        <img src="/images/opensource-1.png" alt="Open Source Image 1" />
      </section>
      <section>
        <h2>About Open Source</h2>
        <ul>
          <li><strong>Various BCI experiments:</strong>
            <ul>
              <li>Binary-class MI system</li>
              <li>36 symbol ERP speller</li>
              <li>Four target frequencies SSVEP system</li>
            </ul>
          </li>
          <li><strong>Full open-source package:</strong> From study design to the outcome</li>
        </ul>
      </section>
      <section>
        <h2>Motor Imagery Setup</h2>
        <p>After the first 3 s of each trial began, the subject performed the imagery task of grasping with the appropriate hand for 4 s when the right or left (100 trials) arrow appeared as a visual cue. The continuous EEG data were then segmented from 1,000 to 3,500 ms with respect to stimulus onset. EEG epochs were therefore constituted as 250 (data points) × 20 (electrodes) × 100 (trials).</p>
        <img src="/images/[giga]mi.png" alt="Open Source Image 1" />
      </section>
      <section>
        <h2>Event-Related Potential Setup</h2>
        <p>The six rows and six columns were configured with 36 symbols. To enhance the signal quality, random-set and face stimuli were utilized. The stimulus-time interval was set to 80 ms (e.g., face on), and the inter-stimulus interval (ISI) to 135 ms (btw face on-off). A single iteration of stimulus presentation in all rows and columns was considered a sequence. 1 sequence consisted of 12 stimulus flashes. A maximum of five sequences (i.e., 60 flashes) was allotted without prolonged inter-sequence intervals for each target character. After the end of five sequences, 4.5 s were given to the user for identifying the next target character. The continuous EEG data were segmented from –200 to 800 ms with respect to stimulus onset. EEG epochs in the offline phase therefore formed 100 (data points) × 32 (electrodes) × 1,980 (target and non-target trials).</p>
        <img src="/images/[giga]p300.png" alt="Open Source Image 1" />
      </section>
      <section>
        <h2>Steady-State Visually Evoked Potential Setup</h2>
        <p>Four target SSVEP stimuli were designed to flicker at 5.45, 6.67, 8.57, and 12 Hz and were presented in four positions (down, right, left, and up, respectively) on a monitor. Participants were asked to fixate the center of a black screen and then to gaze in the direction where the target stimulus was highlighted in a different color. Each SSVEP stimulus was presented for 4 s with an ISI of 6 s. The continuous EEG data were segmented from 0 to 4,000 ms with respect to stimulus onset. Therefore, EEG epochs were 400 (data points) × 10 (electrodes) × 100 (trials).</p>
        <img src="/images/[giga]ssvep.png" alt="Open Source Image 1" />
      </section>
      <section>
        <h2>Evaluation</h2>
        <p>We implemented various comparative algorithms to evaluate our dataset and showed that the dataset’s performance was reasonable. Moreover, we confirmed that our dataset showed a similar neuro-physiological result that lined with previous knowledge (next page).</p>
        <img src="/images/[giga]result1.png" alt="Open Source Image 1" />
        <img src="/images/[giga]result2.png" alt="Open Source Image 1" />
      </section>
      <section>
        <h2>Conclusion</h2>
        <p>This data is not only the largest datasets in BCI fields, but also one of the high-quality data. All methods for the data analysis in this study are supported with fully open-source scripts that can aid in every step of BCI technology. This experience made me a deep understanding of designing an entire BCI framework.</p>
        <img src="/images/[giga]paper.png" alt="Open Source Image 1" />
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
    //   {
    //     title: "BCI Illiteracy",
    //     description: "Addressed the issue of BCI illiteracy where users struggle with specific paradigms."
    //   },
    //   {
    //     title: "Decoding Accuracy",
    //     description: "Highlighted the challenges in decoding accuracy and user adaptation across various BCI paradigms (MI, ERP, SSVEP)."
    //   },
    // ],
    // contributions: [
    //   {
    //     title: "EEG Dataset",
    //     description: "Provided an EEG dataset that can be used as foundational data for BCI research."
    //   },
    //   {
    //     title: "OpenBMI Toolbox",
    //     description: "Supported researchers in analyzing and comparing BCI paradigms through the OpenBMI toolbox."
    //   },
    //   {
    //     title: "BCI Illiteracy Insights",
    //     description: "Offered insights into BCI illiteracy, suggesting future research directions."
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