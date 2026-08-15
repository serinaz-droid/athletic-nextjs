import Caipo from '@/components/sections/Caipo';
import Challenge from '@/components/sections/Challenge';
import ComingSoon from '@/components/sections/ComingSoon';
import Dashboards from '@/components/sections/Dashboards';
import DeviceFlow from '@/components/sections/DeviceFlow';
import FloBrain from '@/components/sections/FloBrain';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import MoodChanger from '@/components/sections/MoodChanger';
import Pricing from '@/components/sections/Pricing';
import StickySteps from '@/components/sections/StickySteps';
import Solution from '@/components/sections/Solution';
import SystemModels from '@/components/sections/SystemModels';
import Tier1 from '@/components/sections/Tier1';
import Tier1Deliverables from '@/components/sections/Tier1Deliverables';
import Tier2 from '@/components/sections/Tier2';
import Tier3 from '@/components/sections/Tier3';
import TierCompare from '@/components/sections/TierCompare';
import WhatIsApi from '@/components/sections/WhatIsApi';
import Why from '@/components/sections/Why';
import { stepsWith, stepsWithout } from '@/lib/content';

export default function Home() {
  return (
    <main style={{ paddingTop: 63 }}>
      <Hero />
      <MoodChanger />
      <FloBrain />
      <WhatIsApi />
      <SystemModels />
      <Challenge />
      <Solution />
      <HowItWorks />
      <Tier1 />
      <Tier1Deliverables />
      <StickySteps
        id="how-without"
        screenLabel="How It Works Without Wearables"
        titleLead="How It Works"
        titleHighlight="Without Wearables"
        image="/images/how-without-wearables.jpg"
        imageAlt="Athlete self-reflection and readiness"
        steps={stepsWithout}
      />
      <Tier2 />
      <DeviceFlow />
      <Dashboards />
      <StickySteps
        id="how-with"
        screenLabel="How It Works With Wearable"
        titleLead="How It Works"
        titleHighlight="With Wearables"
        image="/images/how-with-wearables.jpg"
        imageAlt="Athlete in action"
        steps={stepsWith}
      />
      <Tier3 />
      <TierCompare />
      <Pricing />
      <Caipo />
      <ComingSoon />
      <Why />
    </main>
  );
}
