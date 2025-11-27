import { CheckCircle2, Zap, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Simple & Clean",
    description: "Focus on what matters with an intuitive interface designed for clarity and ease of use.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description: "Lightning-fast performance with real-time updates and seamless synchronization across devices.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is protected with enterprise-grade security and privacy controls you can trust.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Access your tasks anywhere, anytime with cloud-based storage that never lets you down.",
  },
];

export default function Features() {
  return (
    <section className="container px-4 py-20 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col space-y-4 border border-border rounded-xl p-6 hover:bg-muted transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className="p-2 rounded-lg"
                    style={{ background: "#8B5CF6", color: "white" }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
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

