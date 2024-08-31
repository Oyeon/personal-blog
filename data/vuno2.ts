export default {
    id: 11,
    title: "Continuous Time-series Prediction/Classification",
    description: "Contributing to B2B & B2C AI projects as a core AI Researcher",
    images: ["/images/vuno1.png"],
    startDate: "2018-07-23",
    endDate: "2022-04-25",
    technologies: [
      "AI", "Machine Learning", "Data Processing", "Feature Engineering", "Modeling", "Evaluation"
    ],
    position: 7,
    objective: `
      <p>Developed AI-based solutions for healthcare, contributing to both B2B and B2C projects, covering:</p>
      <ul>
        <li><strong>Contribution:</strong></li>
        <ul>
          <li>Develop deteriorating patient early prediction/classification model</li>
          <li>Study design, data processing, architecture design, and evaluation in tabular data domain</li>
        </ul>
        <li><strong>Issues:</strong></li>
        <ul>
          <li>Data imbalance, preprocessing issues (filtering, centering, etc), and model design</li>
          <li>Entire work to proceed an early stage of business development</li>
        </ul>
        <li><strong>Achievement:</strong></li>
        <ul>
          <li>4th Int. Conf. of the ESC Council on Stroke: Stroke patient prediction (co-first)</li>
          <li>Create a prototype to start B2C service (device UI/UX, hardware)</li>
        </ul>
      </ul>
    `,
    details: `
      <p>After DeepCAS and DeepTAS projects, I led the DeepECG project (total 4 people) which detects heart diseases such as heart failure, myocardial infarction, and arrhythmia by utilizing ECG.
Our team assumed that it was worth knowing whether heart disease will occur or what kind of heart disease have by using ECG signals. To do this, I put my effort into this project by defining study design, managing the dataset, and designing an entire framework. This project was mainly collaborated with Ajou University.
To obtain outperform performance, I applied several novel technologies to our model. I tried to make a variety of data transformations, implement a variety of experiments for our baseline models, handle long-range ECG signals (about 48 hours), and utilize unlabeled data based on a pre-training approach. </p>
      <p>I also contributed to creating an ECG measuring device, which collects people's ECG data and will provide proper information about their heart-related disease.
Now, this project was verified by the Korean FDA. In addition to this development, I published several papers and patents for this project.
Based on this experience, I not only contributed to developing our ECG model, but also I understood the perspective to combine diverse fields with ML via a macro mindset. 
 </p>
    `,    
    contents: `
    <section>
      <h2>Motivation</h2>
      <div>
        <p>Developing an intelligent AI-based medical solution for utilizing ECG signals  </p>
        <ul>
          <li><strong>Input:</strong> Continuous time-series data (mainly 12-lead ECG data)</li>
          <li><strong>Output:</strong> Heart diseases (Arrhythmia, Myocardial Infarction, Heart Failure, ..) predict/classify</li>
        </ul>
      </div>
      <img src="/images/[ecg]overview.png" alt="Overview Image" class="centered-image"/>
    </section>
    <section>
      <h2>Prediction Model</h2>
      <p>First, I built an atrial fibrillation prediction algorithm based on a previous Lancet (2019) paper
They developed artificial intelligence (AI)-enabled electrocardiograph (ECG) to detect the electrocardiographic signature of atrial fibrillation present during normal sinus rhythm using standard 10-second, 12-lead ECG 
However, when I used this paper’s method, training was not properly worked. Thus, I tried to utilize previous DeepCARS training knowledge. For example, I recalled that the construction of a reliable validation data set is one of the most important means by which to make training stable. Plus, I designed CNN framework suited for this task. 
Finally, our team predicted AFIB (event) during sinus (normal) ECG showing 0.78 AUROC, which gave a clue for future performance improvement.
By using our baseline model, we built stable performance to provide an early prediction for arrhythmia. Ongoing progress for performance development based on previous research experience.</p>
      <div class="image-container">
        <img src="/images/[ecg]definition.png" alt="Method Image" class="centered-image"/>
      </div>
    </section>
    <section>
      <h2>Input Trasnformation</h2>
      <p>First of all, I tried to understand what kinds of input formats will give a robust and superior performance for ECG tasks.
Previously (from a zero-calibration study), I understood the input format was one of the significant factors to build a great framework.
Here, I transformed 1-D input to time-frequency inputs based on STFT, and consider combining different data augmentation techniques. 
I believed 2D input formats in a way might be robust in a noise environment based on the fact that 2D architecture (i.e., CNN) is more robust to input setting.
Moreover, I did several experiments only considering 1D input or 2D input or 1-D & 2D combination. 
Through this approach, I believed that low false positive will be reduced because we can classify noise data.</p>
      <div class="image-container">
        <img src="/images/[ecg]method1.png" alt="Issue Image" class="centered-image"/>
      </div>
    </section>
    <section>
      <h2>Model Implementation</h2>
      <p>Next, I experimented in a different way to find our baseline models. 
This is because there were no baseline models unlike computer vision fields in these fields so I should find out a proper network for this task.
For example, we implemented basic classification models (ResNet, Inception, Xception, ResNext, DenseNet, EfficientNet, ..)
Furthermore, I believed that ECG’s high and low-frequency information may have different characteristics, thus we should consider this information in designing networks. 
Therefore, I borrowed the architecture concept in video classification like Slow Fast Framework & Temporal Relation Networks to consider low and high frames. 
Through this approach, I tried to find out the proper framework giving the low false positive rate and high true negative.</p>
      <div class="image-container">
        <img src="/images/[ecg]method2.png" alt="Contribution Image 1" class="centered-image"/>
      </div>
    </section>  
    <section>
      <h2>Long-range signal processing</h2>
      <p>Sometimes, our team should handle long-range ECG signals (about 48 hours). It was difficult to train these long-range signals in a single training due to numerous computational costs.
Thus, we tried to compress raw ECG signals by using CNN and utilizing embedded vectors for the input of transformer or multi-layer perceptrons (based on previous studies).
The major different point was how to augment input signals. Our input was not image-like input so we need to consider input transformation and augmentation. 
Here, we tried to divide our input into an hourly signal and transform it into an embedding vector.
Now, we tried to expand our research to developing other data augmentation techniques.</p>
      <div class="image-container">
        <img src="/images/[ecg]method3.png" alt="Contribution Image 1" class="centered-image"/>
      </div>
    </section>  
    <section>
      <h2>Unlabeled data</h2>
      <p>Finally, we understood our company had many unlabeled data, so we tried to utilize those unlabeled data for our training. 
We believe that it would be a good way to borrow the power of data by accumulating data.
Therefore, we borrowed previous research concepts that label unlabeled data or use unlabeled-data representation. 
In fact, in the field of ECG, there was scarce label information, especially in the case of minor heart diseases, it would be hard to get label information. Thus, we decided to label unlabeled data, and then we gave these label information to the medical director in the company for exact confirmation.
By building multi-label pre-trained models based on label-hierarchy and creating self-supervised learning methods for ECG tasks while preserving ECG inherent characteristics</p>
      <div class="image-container">
        <img src="/images/[ecg]method4.png" alt="Contribution Image 1" class="centered-image"/>
      </div>
    </section>            
    <section>
      <h2>Main-Device</h2>
      <p>We created a simple and portable ECG measurement, called Hativ P30.
Hativ P30 is a simple and portable ECG measurement medical device that analyzes ECG data and provides analysis results such as normal sinus rhythm, atrial fibrillation, bradycardia, and tachycardia. 
Hativ can easily measure heart signals within 30 seconds anytime, anywhere. Analysis results can be checked at a glance through a connected mobile app.
I led this project, collaborated with other departments (design, business, etc), and made a prototype. 
We believed that this product will be one of the paths to deliver medical service for anyone.</p>
      <div class="image-container">
        <img src="/images/[ecg]result.png" alt="Result Image 1" class="centered-image"/>
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
    //   pdfLinks: [ // PDF 링크 배열로 변경
        // "/uploads/[Main2] OpenSourceData.pdf",
        // "/uploads/[Main2] AdditionalData.pdf",
        // "/uploads/[Main2] AnotherResource.pdf"
    //   ],    
  };