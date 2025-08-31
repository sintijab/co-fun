import { Flex, Link, TextBase, Box } from "@co-fun/ui";
import Head from "next/head";

export default function ConstructionAI() {
  return (
    <>
      <Head>
        <title>From Construction Planning to Site Operations</title>
      </Head>
      <Box w="100%" display="flex" justifyContent="center" alignItems="center" minH="320px" py={2} position="relative" overflow="visible" minW={["100%", "50%", "50%"]}>
        <img src="/20250812_124822.jpg" alt="Construction AI Cover"
          style={{
            position: 'relative',
            left: 0,
            top: '-48px',
            transform: 'none',
            height: '340px',
            width: '100%',
            maxWidth: '100%',
            borderRadius: '32px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 1,
            overflow: 'hidden',
          }}
          className="construction-img-responsive"
        />
        <style jsx>{`
          @media (max-width: 767px) {
            .construction-img-responsive {
              position: relative !important;
              left: 0 !important;
              top: 0 !important;
              transform: none !important;
              height: 240px !important;
              width: 100% !important;
              margin-bottom: 0 !important;
              z-index: 1 !important;
            }
          }
          @media (min-width: 768px) {
            .construction-img-responsive {
              position: absolute;
              left: 50%;
              top: calc(50% - 48px);
              transform: translate(-50%, -50%);
              height: 440px;
              width: 520px;
              border-radius: 32px;
              box-shadow: 0 12px 48px rgba(0,0,0,0.20);
              object-fit: cover;
              object-position: center;
              overflow: hidden;
            }
          }
        `}</style>
      </Box>
      <TextBase textStyle="heading" lineHeight="2" alignSelf="center" textAlign="justify">
        From the Construction Planning to Operations
      </TextBase>
      <TextBase textStyle="heading" fontSize="1.1rem" fontWeight="300" color="#888" alignSelf="center" textAlign="center" mt=".1rem" mb="1.2rem">
        August 31, 2025 · 3 min to read · by Sintija
      </TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        In the last few weeks I have been working with an extraordinary team in Trento, and we speak the same language about decision-making and analytics with data-driven insights. Together we build a predictive solution that forecast potential delays, optimize resource allocation, and identify risks before they impact project timelines. It delivers value that directly improves project outcomes.
      </TextBase>
      <TextBase textStyle="activity-title" mt="1rem" mb=".5rem" textAlign="justify">The Real Cost of Construction</TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        Construction companies face a unique challenge: they operate in environments where outdated information cost high. Consider the staggering statistics: construction workers face 9.6 deaths per 100,000 full-time employees, while the industry wastes nearly 70% of its activities on non-value-added tasks.
      </TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        At largest construction companies, AI-driven “Safety Sidekick” continuously scans high-resolution jobsite imagery (from drones and wearables), cross-referencing against internal incident histories and public safety records. If a worker inadvertently enters a hazardous exclusion zone, the super agent sends an alert—before the safety officer even hears about it.
      </TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        The role of Computer vision technology in risk reduction is to analyze media of construction sites to identify defects, deviations from design specifications, or compliance issues, allowing for early detection and resolution of problems. For instance, AI-powered drones and robots conduct site inspections, identify potential hazards, help to reduce accidents and injuries, and monitor workers for compliance with safety regulations.
      </TextBase>
      <TextBase textStyle="activity-title" mt="1rem" mb=".5rem" textAlign="justify">Digital Twins Talk Back</TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        Next-generation digital twins in smart buildings like Amsterdam’s The Edge integrate model HVAC and lighting from energy usage metrics, and maintenance schedules—they retrieve and interpret occupant feedback, live occupancy patterns, and operational performance. The AI foundation lets these twins explain anomalies such as “Why did energy spikes hit on Thursday?” and make consensus-driven adjustment proposals.
      </TextBase>
      <TextBase textStyle='label-medium' m='1.44rem 0' lineHeight="2.5" textAlign="center">
        "We saw a need to make these insights more immediate and more actionable on jobsites. This data is not often leveraged in real time. Using generative AI trained on Skanska-specific safety data and jobsite conditions allows us to deliver custom toolbox talks, safety observations and proactive suggestions to workers. On a day-to-day basis, that means workers can ask the AI tool safety related questions via mobile or desktop and get instant support for planning a morning huddle or addressing a new hazard." explains Anita Nelson, Chief Strategy Officer at Skanska USA Building.
      </TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        The system processes images from jobsites, analyzes them against historical safety data, and provides instant, contextual guidance—something impossible with standalone LLMs operating on standard training data.
      </TextBase>
      <TextBase textStyle="activity-title" mt="1rem" mb=".5rem" textAlign="justify">
        Vinci Construction's Underground Intelligence
      </TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        French construction giant Vinci Construction partnered with Exodigo to create an AI system that identifies underground utility lines—a critical safety and cost issue where 13,000 utility lines are accidentally struck annually in France alone. Their augmented system combines scanning data with historical utility maps, construction records, and regulatory databases. As a result the system identified 57% more utility lines than previously recorded, potentially preventing thousands of accidents and project delays.
      </TextBase>
      <TextBase textStyle="activity-title" mt="1rem" mb=".5rem" textAlign="justify">BIM Meets Augmented Generation</TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        The construction industry generates massive amounts of structured and unstructured data through Building Information Modeling (BIM), project documentation, regulatory compliance records, and real-time sensor feeds.
      </TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        Construction firm Mortenson integrated AI-driven BIM clash detection using systems that access architectural models, MEP (mechanical, electrical, plumbing) designs, and structural plans simultaneously. The system identified over 950 design conflicts before construction started—conflicts that would have cost millions to fix during building. The impact was immediate: 30% fewer Requests for Information (RFIs) and 15% reduction in project delays.
      </TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        Startups specializing in augmented generation for the construction industry have a core advantage: the ability to retrieve and cross-reference information that is publicly accessible from multiple centralized databases in different regions of the world is a privilege that largest construction enterprises are secretly taking advantage of.
      </TextBase>
      <TextBase textStyle="activity-title" mt="1rem" mb=".5rem" textAlign="justify">ROI in a Low-Margin Industry Economics</TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        Construction operates on notoriously thin margins, typically 2-5% profit margins industry-wide. This makes the economic case for AI solutions worth the investments when developed gradually.
      </TextBase>
      <TextBase textStyle="activity-title" mt="1rem" mb=".5rem" textAlign="justify">Cost Savings at Scale</TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        The construction AI market is projected to grow from $3.99 billion in 2024 to $11.85 billion by 2029, reflecting a compound annual growth rate of 24.31% predicted by Autodesk.
      </TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        According to Deloitte, AI and advanced data analytics could bring cost savings of 10% to 15% for construction projects. For an industry processing over $2.16 trillion in construction spending annually alone it translates to billions.
      </TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        With Artificial Intelligence bid preparation time is reduced from four to six weeks down to two to three days, which leads to an average 70-80% time reduction and improved Decision-Making.
      </TextBase>
      <TextBase textStyle="activity-title" mt="1rem" mb=".5rem" textAlign="justify">Centralizing system of record</TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        More than 75% of construction contractors use mobile devices to access work-related information. However, they use phone calls, emails, and text messages to request quotes, place orders, communicate changes, and report issues.
      </TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        By automatically capturing all email and text messages, the platform can ensure that everyone on the team has complete visibility into material orders. It works seamlessly with existing estimation and accounting softwares and relies on well-established communication channels between contractors and suppliers.
      </TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        With Autonomous Project Monitoring AI assistant checks delivery status weekly, interprets emails and messages from suppliers, and alerts project managers when issues arise—all while maintaining access to current project schedules, vendor databases, and logistics information through RAG systems.
      </TextBase>
      <TextBase textStyle="activity-title" mt="1rem" mb=".5rem" textAlign="justify">
        Data Fragmentation
      </TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        Construction environments present unique challenges that expose the limitations of alternatives to RAG systems. For example, construction projects generate data across dozens of disconnected systems: BIM software, project management platforms, compliance databases, equipment sensors, and communication tools.
      </TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        As one Fortune 500 manufacturing company discovered, managing over 50 million product records and 100,000 pages of technical documentation requires retrieval systems that search across multiple databases simultaneously. Construction professionals report that more than 20% of their time is spent finding the right data.
      </TextBase>
      <TextBase textStyle="activity-title" mt="1rem" mb=".5rem" textAlign="justify">Platform Integration</TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        The construction industry's embrace of RAG is accelerating, driven by successful implementations and measurable results.
      </TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        Major construction software platforms are embedding RAG capabilities directly into their workflows. Procore, which processes over 1 million projects and $1 trillion in construction volume, is developing conversational AI that integrates with Microsoft Teams, allowing users to ask questions about projects and receive comprehensive summaries accessing the platform's vast data collection.
      </TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        Next-generation construction solutions integrate multi-modal systems combining text, images, 2D plans, BIM data, and structured databases. This enables automated AI-powered workflows across conceptual design, estimation, project planning, coordination, and field management.
      </TextBase>
      <TextBase textStyle="activity-title" mt="1rem" mb=".5rem" textAlign="justify">How can companies invest in AI?</TextBase>
      <TextBase textStyle="initiative-descr" fontSize="17pt" fontWeight="regular" lineHeight="2" p=".5rem 0" textAlign="justify">
        Artificial Intelligence as much as any other technology success depends on cohesive organisational adoption and strategy where all efforts must align with the business targets and cost-benefit analysis. As medium to large construction organisations increasingly develop AI solutions, the focus must be on creating frameworks that integrate individual enablement with organisational objectives and data ecosystems where companies deliver value.
      </TextBase>
    </>
  );
}
