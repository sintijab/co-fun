import Head from 'next/head';
import { Box, Flex, TextBase } from '@co-fun/ui';
import TripleParallaxHero from '../components/TripleParallaxHero';

type Segment = { text: string; bold?: boolean };
const t = (text: string): Segment => ({ text });
const b = (text: string): Segment => ({ text, bold: true });

const paragraphs: Segment[][] = [
  [
    t(`While working on the OSINT management system, I couldn't get through one decision– analyzing the recordings in favor of the AI unfolding conversations and getting "smarter", or building it around criticizing and annoying communicator, The problem is that there are more than 36 questionnaires with psychometric categories that are useless in practice without understanding the nature, context and trust in relationship.`),
  ],
  [
    t(`Since we started working on this project together, the only way I found effective in understanding our reasoning in communication was developing "stress intelligence": the ability to recognize stress patterns and deliberately shift approach to match the demands of the moment.`),
  ],
  [
    t(`We started training our inner critique in order to invite dissent– but not in a respective way. Our communication became catastrophic the second we started questioning each other's decisions, because we both used to compliment, like Artificial Intelligence is used in conversations. The pernicious cause of false alignment is a tendency for the people to pretend to agree instead of acknowledging the disagreements they need to have. Now imagine having an argument during the night in a locked basement full of surveillance cameras, and conflict turning into a fight. We both knew that it's a great test of leaving the room only with one truth, no matter how hard it is.`),
  ],
  [
    t(`Similar to the art work in the "Adagio, a deformed comfort" and illustration above, the bloom of each flower sewn with coarse cotton thread carries the metaphor of fragmentation and reconstruction and emphasizes the conflict between "forced decency" and "inner collapse". The fatigue is sewn into the petals and blooms together with silence, while the stiff stems that stand forcefully are the rigid spines.`),
  ],
  [
    t(`When the executives don't have a shared agreement on what is changing, why it's changing and how the change will occur, the teams tasked with practically executing the change program will struggle to deliver. We shouldn't be surprised to learn this. Can you imagine a car manufacturer asking workers to build a vehicle without knowing its make or model?`),
  ],
  [
    t(`There are three common outcomes for teams in this situation, and it spans from stress behavior patterns:`),
  ],
  [
    b('1. Paralysis:'),
    t(` lots of work, no action. Teams are stuck between the competing priorities of their leaders. Strategic views are proposed over many months while it seems that the team is stuck or not making the progress.`),
  ],
  [
    b('2. Hyperacrivity:'),
    t(` lots of action, no progress. With the headway of multiple visions from different leaders they show their commitment by devising a huge number of initiatives— but too often many of them are designed to placate the position in the company rather than deliver. It is very similar to the first outcome by work going towards waste and employees burning out.`),
  ],
  [
    b('3. Tunnel vision:'),
    t(` lots of progress — on the wrong thing. Choices that don't address the companies broader needs or have nothing to do to achieve companies broader needs. Without a specific agreement on targets and trade-offs, one initiative might cost all the results from another.`),
  ],
  [
    t(`It might sound all very familiar, not because of the unreasonable thinking, but the fast-paced environment where deal-breaking is worth risk-taking, in only one favor of dealing with stress. Leaders who are not aware of their stress patterns are making decisions under pressure- either imagined or real- to start some version of the program despite discord.`),
  ],
  [
    t(`In a relationship with this person means being in a relationship with this behavior, where anxiety gets easily spread and both parties are thrown under the bus. Executives don't realize that they don't agree. It's a common situation and expression of the consensus effect. If I love vanilla ice cream, I will persistently overestimate the proportion of the population that also loves vanilla ice cream. Leaders who love an idea for a new initiative default to assuming that most of their colleagues must love it as much as they do, and for the same reasons.`),
  ],
  [
    t(`When we don't realize what we don't agree with, it is because our conversations aren't specific enough. If you settle for mere alignment in life or business it will fail, and it will fail hard in manipulation.`),
  ],
  [
    t(`"We are aligned" often means "We are not in one another's way". The more trust you build on this mere alignment, the more you are taking disagreements personally. Breaking this behavior pattern starts by welcoming contrary views– to have a responsibility to voice disagreement. By involving disagreement and seeing through the reaction under stress, leaders default to recognizable response patterns that shape how they interpret situations and make tough calls. Those patterns each have different strengths but also have predictable blind spots.`),
  ],
  [
    t(`There are many situations both in life and in business, when the right decision is just about to begin. Plans written around vague or contradictory premises increase confusion rather than decrease it. Once the confusion sets in it can get extremely difficult for the leaders to get back strategy in place and demoralizing for everyone feeling like they're wasting their time.`),
  ],
  [
    t(`How can you counteract your natural tendency (and your colleagues') to assume that the people around you share the same views? Winning the true agreement begins with setting clear parameters, clarifying the big questions and determining the process of settling it. What conversations will you have over what period of time? Who takes part in these conversations? Will the transformation move forward only when each executive explicitly agrees? Or will the leader alone make the final decision, and if so, what are the implications for the others who disagree?`),
  ],
  [
    t(`Executives perform best when they understand their default reactions– and broaden their range of responses. By expanding this range, you start making better decisions and sustain performance under pressure.`),
  ],
  [
    t(`Many executives describe pressure mounting on multiple fronts, from economic uncertainty to technological disruption to geopolitical volatility. Jon Miller and Drew Keller in their 2025 survey of 400 C-suite leaders in large corporations in the United States, the UK, Germany, and Japan, more than half the respondents said they were very stressed. Nearly two-thirds reported that their stress level had risen over the past year, and a majority anticipated that it would increase further in the coming year.`),
  ],
  [
    t(`While short bursts of stress can sharpen your focus, sustained, elevated levels of it undermine decision quality and erode well-being. Over time, stress narrows your perspective, causes reactive thinking, and increases the likelihood of costly misjudgement. By understanding stress and anxiety patterns in our life, we can learn how to react to it and recognize it in others– stress is the most foremost and primal form of a fear that can either be a threat, or it can bring an opportunity.`),
  ],
  [
    t(`In business there are different frameworks that organize them into response types. Recently I learned about six response types, derived from the work of Richard Lazarus and Suzan Folkman. They observed that when people are in a high-stakes situation, they quickly decide whether it presents more of a threat or an opportunity. Combining their insights with James Gross's research on emotion regulation, it distinguishes between leaders who regulate their emotions dynamically and continually reapprise their reactions, and others who hold their emotions in tight control until after a crisis. Where you fall along those spectrums determines which of the six response types is your default pattern.`),
  ],
  [
    b('The Lighthouse'),
    t(` – stress triggers their orientation toward stability over speed, and their first appraisal of a new situation is more likely to recognize opportunities than threats. In a crisis they maintain a measured pace, regulating their breathing and staying focused on the horizon– not just on the crisis immediately in front of them. In high-pressure situations this style of leadership creates conditions that promote psychological safety, where people feel free to speak up, admit mistakes, and express uncertainty without fear of humiliation or punishment. Studies of high-reliability organizations– from air-traffic control to hospital emergency units– show that calm leadership keeps teams focused and prevents what psychologists call the "emotional contagion of fear."`),
  ],
  [
    b('Lighthouse leaders face hidden risks'),
    t(`– their silence on seemingly critical issues can be seen as indecision. In prolonged periods of stress, their drive for stability can harden into inertia; they may fail to face up to bad news, lack appropriate urgency, or quickly take on too much on themselves.`),
  ],
  [
    b('Adaptive strategies for lighthouses:'),
    t(` During a crisis the first step these leaders should take is to explain their intentions. For example, they could tell their teams: "I'm staying calm so that we can think clearly," not "I'm calm because everything's fine." Next they should invite their teams to share their emotions and should reciprocate in kind. They might ask how others are coping, which will legitimize the stress people are feeling rather than suppress it, reinforcing psychological safety. Finally, they need visible microactions– small decisions, next steps– to reassure others that their stability isn't masking inertia or indecision.`),
  ],
  [
    b('The Alchemist'),
    t(` – Alchemists see pressure not as a threat but as a catalyst for growth. In a world defined by overlapping disruptions, they treat turbulence as the raw material for reinvention– a signal that the old logic no longer fits. Their responses are a combination of composed and dynamic: Outwardly they're steady, but inwardly they're kinetic. They think in ways that help them connect dots others don't yet see. They're the kind of leaders who hear, "The playbook doesn't work anymore" and reply "Great– then we get to write a new one."`),
  ],
  [
    t(`Alchemists gravitate toward frontier spaces where disruption and opportunity meet– like AI, climate tech, and fields where global trade and talent patterns are changing.`),
  ],
  [
    t(`Alchemist's blend of realism and optimism would be "Be brutally honest about the short term… and optimistic and confident about the long term."`),
  ],
  [
    b('Under prolonged uncertainty'),
    t(`, alchemists can slip from creative to chaotic, chasing novelty for its own sake or exhausting teams with constant pivots.`),
  ],
  [
    b('Adaptive strategies for alchemists:'),
    t(` Under pressure alchemist leaders should fix on a North Star. They need to know why they're making a transformation– "because we can" isn't enough– and define what problem the change is meant to solve. And instead of running back-to-back transformations that leave teams perpetually in motion,they should establish a regular cadence for change– cycles of push and pause, invention and consolidation. Finally, they must moderate their tendency toward reinvention and creativity by collaborating with pragmatic teams that can organize and execute transformations skillfully.`),
  ],
  [
    b('The Firefighter'),
    t(`– Firefighters thrive on pressure and momentum. When a crisis erupts, they move fast, radiate urgency, and mobilize others. They not only respond to stress very dynamically but tend to see it as an opportunity. Pressure doesn't paralyze them; it ignites them. Often fueled by adrenaline, they restore a sense of empowerment when others freeze. In the short term this energy can be invaluable: Momentum builds, decisions get made, and complexity feels manageable.`),
  ],
  [
    t(`Where the alchemist uses stress to spark creativity and explore new possibilities, the firefighter uses it to spur `),
    b('immediate action'),
    t(`. The alchemist asks, What could this make possible? The firefighter asks, What must we do right now? Both convert pressure into energy, but one channels it into experimentation, the other into execution.`),
  ],
  [
    b('Firefighters embody in extremis leadership'),
    t(`– a term coined by researchers at the West Point military academy to describe decision-making amid threats, urgency, and uncertainty. Research on "action bias" helps explain their appeal: Action itself reassures both the leader and the team that progress is underway. As the organizational theorist Karl Weick, who popularized the story of some soldiers who got lost in the Alps and found their way back to camp using a map of the Pyrenees, noted, "When you are lost, any old map will do."`),
  ],
  [
    t(`Under prolonged strain, a firefighter's immediacy can become problematic. Every spark starts to look like a blaze, and decisions can become impulsive. You must feel alive when you're fighting the fires, but you have to be careful you don't start fanning the flames.`),
  ],
  [
    b('When balanced'),
    t(`, the firefighter embodies the best of decisive leadership: courage, momentum, the will to act when others hesitate. `),
    b('Great leadership'),
    t(` is measured not only by the flames extinguished but by what is preserved and the future fires prevented.`),
  ],
  [
    t(`Adaptive strategies for firefighters: `),
    b('In a crisis'),
    t(` the first step firefighter leaders should take is to pause before acting– to get set, then go. A short break will give them a chance to regulate their nervous system and clarify their intent to their teams. Next they should involve others in decisions early on. That will distribute the cognitive load in a way that will help them sustain their energy over time and prevent burnout. Finally, they should hold quick after-action reviews on a situation once the immediate urgency has passed, asking: What worked? What didn't? What felt productive but actually wasn't? Such a reflection can turn the adrenaline spikes into learning and help release the stress people have been carrying.`),
  ],
  [
    b('The Stoic'),
    t(`–Stoics lead through discipline and self-control. When the pressure spikes, they get analytical– anchoring themselves in principles and reason and striving to create stability. They have a composed response to stress, sharing the lighthouse's external calm but for different reasons: While the lighthouse uses steadiness to create space and perspective the stoic uses it to manage internal volatility. The lighthouse, regarding stress as an opportunity, looks outward, scanning the horizon; the stoic perceives stress as a threat and looks inward, tightening focus and minimizing emotional reactions. This mindset can often be traced to early professional training– for instance, as an engineer, a lawyer, or a military officer. The result is a distinctive style under pressure: calm, deliberate, and rational to the core.`),
  ],
  [
    t(`This orientation has real strengths. When a crisis hits, stoics naturally slow down, regulate their emotions, and reintroduce order. Behavioral research shows that this approach supports clearer reasoning under uncertainty. The stoic's discipline can preserve strategic coherence when others are spiraling. `),
    b("Don't focus on what you can't control"),
    t(`.`),
  ],
  [
    b('Treating emotion as a distraction'),
    t(` may lead stoics to withdraw just `),
    b('when human connection is most vital'),
    t(`. Their desire to stay rational can push them deeper into data and process, producing technically accurate but emotionally clueless decisions. `),
    b('And costs are often internal'),
    t(`: Unexpected stress can cause insomnia, fatigue, or quiet burnout.`),
  ],
  [
    b('Adaptive strategies for stoics'),
    t(`: In a crisis, stoic leaders must first regulate themselves– steadying their own emotional responses without suppressing them. Then they can make the emotional climate open to discussion, articulating what the tension in the room may be signalling: "I sense frustration building; let's explore why." Next they should visibly practice empathy. Briefly voicing shared difficulty, e.g. "I find this decision tough, too", can strengthen trust `),
    b('without surrendering authority'),
    t(`. Finally, they should `),
    b('acknowledge their own emotions'),
    t(`. That often means `),
    b('having a conversation'),
    t(` about the pressures they're facing with a trusted adviser such as a coach or a peer, turning stress into a source of insight rather than a load.`),
  ],
  [
    b('The Diplomat'),
    t(`– Diplomats ease tensions through dialogue and keep teams connected when stress threatens to divide them. For these leaders, a crisis is as much a social test as a strategic one. Under pressure they foster social connection– defusing conflict, sustaining trust, and reading interpersonal signals as carefully as others read financial data. Under strain, their social intelligence helps them hold together teams that might otherwise fracture. Diplomats sense tension before it surfaces and soften it by enabling what psychologists call `),
    b('relational regulation'),
    t(`– which happens when connection helps people manage emotions.`),
  ],
  [
    b('Under sustained stress'),
    t(`, diplomats may tilt toward consensus over candor– smoothing over conflict rather than addressing it directly. Their composure can become caution, and their diplomacy can slide into delay. Diplomat would say "Sometimes I'd rather have a slightly wrong decision everyone supports than the right one that divides the team."`),
  ],
  [
    b('Adaptive strategies for diplomats'),
    t(`: At their best, diplomats aren't conflict-avoidant but understand that rupture and repair are healthy for relationships. Their first step in a crisis is to `),
    b('surface the tensions'),
    t(`. That means by saying plainly what others sense but won't voice, naming the discomfort in a way that clears the air and creates space for honesty without blame.`),
  ],
  [
    t(`One practical way to do that is to build a `),
    b('crisis management process'),
    t(`– through debate, premortems, or red-team exercises via internal conflicting divisions– so that disagreements are brought to light in a structured way. Finally, diplomats need to be `),
    b('clear about where they stand'),
    t(`. Their empathy helps others regulate themselves, but in times of stress people also need well-defined objectives and direction– to experience the `),
    b('safety and reassurance'),
    t(` that come from knowing what the leader is guiding them toward and what happens next.`),
  ],
  [
    b('The Container'),
    t(`– Containers lead with control. They respond to stress by imposing structure and holding the system together when others are overwhelmed. They excel at managing multiple demands coherently. Like firefighters, they respond to stress dynamically, but they see it as a threat, and their instinct under pressure is to convert ambiguity into clear priorities and channel energy into disciplined execution. They often rely on a tight inner circle– a small trusted team they can move decisively with while filtering out noise.`),
  ],
  [
    t(`Containers' mindset is captured in mantras we've heard many of them in repeat: "strong and steady," "left foot", "right foot", "you can't outrun a storm." Intel cofounder Andrew Grove's famous line "Only paranoid survive" captures the container's vigilance.`),
  ],
  [
    t(`Containers can be invaluable in a crisis. But their intense focus may exclude voices outside the inner circle, leaving teams feeling shut out or underinformed. When the pressure builds, the container can absorb too much of it, too quietly.`),
  ],
  [
    b('Adaptive strategies for containers'),
    t(`: The challenge for containers is learning that sustained performance depends not just on endurance but on knowing when to release pressure, widen the lens, and let others help carry the load. Their first step in a crisis should be to blow off pressure– to use reflection, feedback, and recovery to allow themselves to reset. They should also routinely zoom out, engineering systematic, regular shifts in perspective in their teams so that their organizations aren't operating with tunnel vision. Finally, they need to model resilience. None of us is indestructible, and teams take their cues from the top. So leaders should visibly make rest and renewal part of performing well under pressure.`),
  ],
  [
    t(`Preparing for a high-stakes decision requires a good process and experience, including understanding of how you're likely to react when pressure peaks, based on your response type. Crisis rarely announce themselves with clarity, and they demand to interpret incomplete information under heightened strain.`),
  ],
  [
    t(`Recognizing stress patterns is extremely useful in migraine prevention, because the migraine conditions can become so much worse when you make the wrong decisions out of fear. Even without acknowledging it, psychological strains reflect on the body via physical reaction. How we show up in these moments, what strengths it offers, and where each can go wrong under sustained pressure.`),
  ],
  [
    t(`After working with psychometric analysis for a year I found that there is no advantage of developing good relationships from one default stress response to a person. Most of the arguments and crises we dealt with, I would react to behavior and stress patterns accordingly, with the same or opposite weight in the situation. In order to turn pressure into performance it has to be recognized in the context you're naturally able to deal with– before the damage arises. The real potential gains come from selectively harnessing them to meet the demands of the situation, when it's unpredictable, when you're fighting it instead of acknowledging. Focusing on behavioral therapy and things it can actually change– priorities, behaviors, decisions, cadence– creates clarity and reduces wasted effort.`),
  ],
];

export default function StressIntelligence() {
  return (
    <>
      <Head>
        <title>Conflict in False Alignment</title>
      </Head>
      <TripleParallaxHero
        images={[
          { src: '/01-lilies.jpeg', alt: 'Lilies sewn with coarse cotton thread, panel one' },
          { src: '/02-lilies.jpeg', alt: 'Lilies sewn with coarse cotton thread, panel two' },
          { src: '/03-lilies.jpeg', alt: 'Lilies sewn with coarse cotton thread, panel three' },
        ]}
        height="62vh"
        minHeight="360px"
      />
      <Box p=".75rem 1rem" textAlign="center">
        <TextBase
          fontSize=".85rem"
          fontWeight="300"
          fontStyle="italic"
          color="#888"
        >
          Lilies inspired by the artwork &ldquo;Adagio, a deformed
          comfort&rdquo; by photographer Cheuk Lun Lo and floral artist
          Vanessa Lyu.
        </TextBase>
      </Box>
      <Flex
        direction="column"
        margin={['3rem .5rem', '5rem 10rem', '5rem 20rem']}
        flexWrap="wrap"
      >
        <TextBase
          textStyle="heading"
          lineHeight="2"
          alignSelf="center"
          textAlign="justify"
        >
          CONFLICT IN FALSE ALIGNMENT
        </TextBase>
        <TextBase
          textStyle="heading"
          fontSize="1.1rem"
          fontWeight="300"
          color="#888"
          alignSelf="center"
          textAlign="center"
          mt=".1rem"
          mb="1.2rem"
        >
          September 14, 2026 · 16 min to read · by Sintija
        </TextBase>

        {paragraphs.map((paragraph, index) => (
          <Box key={index}>
            <TextBase
              textStyle="initiative-descr"
              fontSize="17pt"
              fontWeight="regular"
              lineHeight="2"
              p=".5rem 0"
              textAlign="justify"
            >
              {paragraph.map((segment, segmentIndex) =>
                segment.bold ? (
                  <strong key={segmentIndex}>{segment.text}</strong>
                ) : (
                  segment.text
                )
              )}
            </TextBase>
            {index === 18 && (
              <Box p="1rem 0" textAlign="center">
                <img
                  src="/R2604F_MILLER_STRESSRESPONSE_360 (1).avif"
                  alt="Six stress response types diagram, from the Miller/Keller research"
                  style={{
                    width: '100%',
                    maxWidth: '420px',
                    height: 'auto',
                    display: 'inline-block',
                    borderRadius: '.5rem',
                  }}
                />
              </Box>
            )}
          </Box>
        ))}
      </Flex>
    </>
  );
}
