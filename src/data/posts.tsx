import React from 'react';
import { Newspaper, Microscope, BookOpen, Brain, Heart, Leaf } from 'lucide-react';

export const blogPosts = [
  {
    id: 'measles-vaccine-booster',
    title: 'Expert Q&A: Should you get a measles vaccine booster?',
    author: 'Maria Cohut, Ph.D.',
    category: 'Expert Q&A',
    icon: <Microscope size={18} />,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
    content: (
      <>
        <p className="lead">With measles cases on the rise globally, many adults are wondering whether they need a vaccine booster. We spoke with infectious disease experts to get answers to your most pressing questions.</p>

        <h2>Understanding Measles and Immunity</h2>
        <p>Measles is one of the most contagious viral diseases known to affect humans. The virus can remain airborne for up to two hours after an infected person leaves an area, and up to 90% of non-immune people who come in contact with the virus will become infected.</p>

        <h2>Who Needs a Booster?</h2>
        <p>According to the CDC, you may need a measles booster if you:</p>
        <ul>
          <li>Were born after 1957 and have no documentation of vaccination</li>
          <li>Received only one dose of the MMR vaccine</li>
          <li>Are in a high-risk group (healthcare workers, international travelers)</li>
          <li>Live in an area experiencing a measles outbreak</li>
        </ul>

        <h2>Expert Recommendations</h2>
        <p>Dr. Sarah Jenkins, infectious disease specialist at Mayo Clinic, recommends: "If you're unsure about your vaccination status, it's better to get a booster than risk infection. The MMR vaccine is safe, and there's no harm in receiving another dose even if you're already immune."</p>

        <h2>Testing for Immunity</h2>
        <p>A simple blood test can check for measles antibodies. This test can help determine if you need a booster shot. However, many experts recommend getting the booster without testing if you're unsure of your immunity status, as the vaccine is safe and often less expensive than antibody testing.</p>

        <h2>The Bottom Line</h2>
        <p>The recent increase in measles cases worldwide has raised concerns about waning immunity in adults. While most people vaccinated as children maintain lifelong immunity, certain groups may benefit from a booster shot. Consult with your healthcare provider to determine if you need additional protection against measles.</p>
      </>
    )
  },
  {
    id: 'fiber-diet-inflammation',
    title: 'Diet high in fiber, fermented foods could keep inflammatory diseases at bay',
    author: 'Kelsey Costa, MS, RDN',
    category: 'Nutrition',
    icon: <Leaf size={18} />,
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80',
    content: (
      <>
        <p className="lead">New research suggests that a diet rich in fiber and fermented foods may help prevent and manage inflammatory diseases by promoting a healthy gut microbiome.</p>
        
        <h2>The Gut-Inflammation Connection</h2>
        <p>Recent studies have shown that the gut microbiome plays a crucial role in regulating inflammation throughout the body. A diverse and healthy gut microbiota can help maintain immune system balance and reduce chronic inflammation.</p>

        <h2>Key Findings from Recent Research</h2>
        <ul>
          <li>High-fiber diets promote the growth of beneficial gut bacteria</li>
          <li>Fermented foods introduce beneficial probiotics to the gut</li>
          <li>Certain fiber types may help reduce inflammatory markers</li>
          <li>Combined approach shows most promising results</li>
        </ul>

        <h2>Recommended Foods</h2>
        <p>To boost your intake of fiber and fermented foods, consider incorporating:</p>
        <h3>High-Fiber Foods:</h3>
        <ul>
          <li>Legumes (beans, lentils, chickpeas)</li>
          <li>Whole grains (oats, quinoa, brown rice)</li>
          <li>Vegetables (especially leafy greens)</li>
          <li>Fruits (berries, apples, pears)</li>
        </ul>

        <h3>Fermented Foods:</h3>
        <ul>
          <li>Yogurt and kefir</li>
          <li>Sauerkraut and kimchi</li>
          <li>Kombucha</li>
          <li>Miso and tempeh</li>
        </ul>

        <h2>Implementation Strategies</h2>
        <p>Start slowly when increasing fiber intake to avoid digestive discomfort. Aim for 25-35 grams of fiber per day, and introduce fermented foods gradually. Stay well-hydrated to help fiber do its job effectively.</p>

        <h2>Expert Recommendations</h2>
        <p>According to Dr. Emily Chen, gastroenterologist: "The evidence supporting the benefits of a fiber-rich diet with fermented foods is compelling. This dietary approach not only supports gut health but may also help prevent various inflammatory conditions."</p>
      </>
    )
  },
  {
    id: 'health-misinformation',
    title: 'Health misinformation and disinformation: How to avoid it',
    author: 'Maria Cohut, Ph.D.',
    category: 'Health Literacy',
    icon: <BookOpen size={18} />,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    content: (
      <>
        <p className="lead">In an age of information overload, distinguishing fact from fiction in health news has become increasingly challenging. Learn how to identify and avoid health misinformation.</p>

        <h2>Understanding Health Misinformation</h2>
        <p>Health misinformation can take many forms, from well-intentioned but incorrect advice to deliberately fabricated claims. The rise of social media has made it easier than ever for false health information to spread rapidly.</p>

        <h2>Red Flags to Watch For</h2>
        <ul>
          <li>Claims of "miracle cures" or quick fixes</li>
          <li>Personal anecdotes presented as scientific evidence</li>
          <li>Conspiracy theories about healthcare institutions</li>
          <li>Products claiming to cure multiple unrelated conditions</li>
          <li>Articles that create unnecessary fear or panic</li>
        </ul>

        <h2>Evaluating Health Information</h2>
        <p>When encountering health information online, consider these factors:</p>
        <h3>Source Credibility:</h3>
        <ul>
          <li>Check the author's credentials</li>
          <li>Look for citations from peer-reviewed research</li>
          <li>Verify the website's reputation</li>
          <li>Check publication dates for currency</li>
        </ul>

        <h2>Reliable Health Information Sources</h2>
        <p>Trust information from:</p>
        <ul>
          <li>Government health agencies (CDC, NIH, WHO)</li>
          <li>Academic medical centers</li>
          <li>Peer-reviewed medical journals</li>
          <li>Professional medical associations</li>
        </ul>

        <h2>The Role of Critical Thinking</h2>
        <p>Develop these critical thinking habits:</p>
        <ul>
          <li>Question extraordinary claims</li>
          <li>Look for scientific consensus</li>
          <li>Consider multiple viewpoints</li>
          <li>Recognize emotional manipulation</li>
        </ul>

        <h2>Expert Insight</h2>
        <p>Dr. Rachel Thompson, health communication specialist, notes: "The best defense against health misinformation is a combination of critical thinking skills and reliance on established, evidence-based sources. When in doubt, consult healthcare professionals for personalized advice."</p>
      </>
    )
  },
  {
    id: 'brain-health-exercise',
    title: 'New Study: Exercise Type Matters for Brain Health',
    author: 'Dr. Sarah Thompson',
    category: 'Neuroscience',
    icon: <Brain size={18} />,
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80',
    content: (
      <>
        <p className="lead">Recent research reveals that different types of exercise affect brain health in unique ways, with some forms showing surprising cognitive benefits.</p>

        <h2>The Exercise-Brain Connection</h2>
        <p>Scientists have long known that exercise benefits brain health, but new research suggests that different types of physical activity may have distinct effects on various cognitive functions and brain regions.</p>

        <h2>Key Research Findings</h2>
        <ul>
          <li>Aerobic exercise increases BDNF production, supporting memory formation</li>
          <li>Resistance training improves executive function and attention</li>
          <li>High-intensity interval training shows unique neuroprotective effects</li>
          <li>Balance training enhances spatial awareness and reduces fall risk</li>
        </ul>

        <h2>Optimal Exercise Combinations</h2>
        <p>The study suggests a mixed exercise routine incorporating:</p>
        <ul>
          <li>30 minutes of moderate cardio, 3-4 times weekly</li>
          <li>Strength training 2-3 times per week</li>
          <li>Balance and coordination exercises daily</li>
          <li>Flexibility work to support overall function</li>
        </ul>

        <h2>Expert Commentary</h2>
        <p>Dr. Michael Chen, neuroscientist, explains: "This research demonstrates that a varied exercise routine isn't just good for physical health—it's optimal for brain health too. Different movement patterns create distinct neural adaptations."</p>
      </>
    )
  },
  {
    id: 'heart-health-breakthrough',
    title: 'Breakthrough in Heart Disease Prevention',
    author: 'Dr. James Wilson',
    category: 'Cardiology',
    icon: <Heart size={18} />,
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80',
    content: (
      <>
        <p className="lead">A groundbreaking study reveals new pathways for preventing heart disease through targeted lifestyle interventions and early detection methods.</p>

        <h2>Revolutionary Findings</h2>
        <p>Researchers have identified novel biomarkers that can predict cardiovascular disease risk years before traditional symptoms appear, potentially revolutionizing preventive cardiology.</p>

        <h2>Key Prevention Strategies</h2>
        <ul>
          <li>Early screening for novel biomarkers</li>
          <li>Personalized exercise prescriptions</li>
          <li>Targeted dietary interventions</li>
          <li>Stress management techniques</li>
        </ul>

        <h2>Lifestyle Modifications</h2>
        <p>The study emphasizes specific lifestyle changes:</p>
        <ul>
          <li>Mediterranean-style eating patterns</li>
          <li>Regular physical activity</li>
          <li>Quality sleep habits</li>
          <li>Stress reduction practices</li>
        </ul>

        <h2>Expert Insight</h2>
        <p>According to Dr. Lisa Chen, cardiologist: "These findings represent a paradigm shift in how we approach heart disease prevention. We can now intervene much earlier and more effectively than ever before."</p>
      </>
    )
  }
];

export const latestNews = [
  {
    title: "New AI model predicts drug combinations for treating resistant infections",
    author: "Dr. James Chen",
    date: "2025-03-15",
    summary: "Researchers have developed an AI system that can predict effective antibiotic combinations for treating drug-resistant bacterial infections, potentially saving countless lives."
  },
  {
    title: "Breakthrough in Alzheimer's treatment shows promise in clinical trials",
    author: "Sarah Martinez, Ph.D.",
    date: "2025-03-14",
    summary: "A novel therapeutic approach targeting both amyloid plaques and tau tangles has shown significant cognitive improvement in early-stage Alzheimer's patients."
  },
  {
    title: "Study reveals link between gut bacteria and mental health resilience",
    author: "Dr. Michael Wong",
    date: "2025-03-13",
    summary: "New research indicates that specific gut bacterial compositions may enhance mental health resilience and reduce anxiety and depression risk."
  },
  {
    title: "Revolutionary blood test detects multiple cancers at early stages",
    author: "Emily Thompson, MD",
    date: "2025-03-12",
    summary: "A new blood test can detect over 50 types of cancer at early stages with high accuracy, potentially transforming cancer screening protocols."
  },
  {
    title: "Personalized vaccine technology shows promise against recurring cancers",
    author: "Dr. Robert Anderson",
    date: "2025-03-11",
    summary: "Clinical trials of personalized mRNA vaccines have demonstrated significant success in preventing cancer recurrence in patients."
  },
  {
    title: "Global study identifies new genetic factors in longevity",
    author: "Lisa Chen, Ph.D.",
    date: "2025-03-10",
    summary: "International research team discovers new genetic variants associated with exceptional longevity, opening possibilities for healthy aging interventions."
  }
];