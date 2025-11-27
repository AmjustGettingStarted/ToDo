import { CheckCircle2, Zap, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Simple & Clean",
    description: "Focus on what matters with an intuitive interface designed for clarity.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description: "Lightning-fast performance with real-time updates and seamless synchronization.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is protected with enterprise-grade security and privacy controls.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Access your tasks anywhere, anytime with cloud-based storage.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="container px-4 py-20 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col space-y-3 border-b border-border pb-8 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-8 sm:[&:nth-child(even)]:border-r-0 lg:[&:nth-child(even)]:border-r lg:[&:nth-child(4)]:border-r-0"
              >
                <div className="flex items-center space-x-2">
                  <Icon className="h-5 w-5 text-foreground" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

