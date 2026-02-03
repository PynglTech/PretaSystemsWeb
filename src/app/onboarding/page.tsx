"use client";

import React from "react";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";
import ConnectWebsite from "@/components/onboarding/ConnectWebsite";

export default function OnboardingPage() {
    return (
        <OnboardingLayout>
            <ConnectWebsite />
        </OnboardingLayout>
    );
}
