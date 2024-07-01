import React from "react";
import { HeroBanner } from "../components/hero-banner";
import { SkillBanner } from "../components/skill-banner";
import { PageLayout } from "../components/page-layout";

export const HomePage = () => (
  <PageLayout>
    <HeroBanner />
    <SkillBanner />
  </PageLayout>
);
