import { Github, Linkedin, Mail, MapPin, Calendar, Award, Code2, Database, Globe, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const quickStats = [
    { label: t("hero.yearsExperience"), value: "4+" },
    { label: t("hero.completedProjects"), value: "20+" },
    { label: t("hero.internationalCompanies"), value: "3" },
    { label: t("hero.masterTechnologies"), value: "15+" }
  ];

  const topSkills = [
    "React", "TypeScript", "Node.js", "NestJs", "PostgreSQL", "AWS", "Docker", "Git"
  ];

  const currentRole = {
    title: t("hero.position"),
    company: t("hero.company"),
    location: t("hero.companyLocation"),
    period: t("hero.period")
  };

  const keyAchievements = [
    t("hero.achievement1"),
    t("hero.achievement2"),
    t("hero.achievement3"),
    t("hero.achievement4")
  ];

  return (
    <section className="relative min-h-screen overflow-hidden border-b border-border flex items-center pattern-gradient-grid">
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10 py-6 w-full">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
              <span className="gradient-text">{t("hero.name")}</span>
            </h1>
            <p className="text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-light">
              {t("hero.title")}
            </p>
            <div className="flex items-center justify-center gap-6 text-lg md:text-xl text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-6 w-6" />
                <span>{t("hero.location")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-6 w-6" />
                <span>{t("hero.availability")}</span>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Left Column - Current Role & Stats */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Award className="h-6 w-6" />
                      <span className="font-semibold text-lg">{t("hero.currentRole")}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base">{currentRole.title}</h3>
                      <p className="text-sm text-muted-foreground">{currentRole.company}</p>
                      <p className="text-sm text-muted-foreground">{currentRole.location} • {currentRole.period}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Code2 className="h-6 w-6" />
                      <span className="font-semibold text-lg">{t("hero.stats")}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {quickStats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-xl font-bold text-primary">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Center Column - Skills & Achievements */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Database className="h-6 w-6" />
                      <span className="font-semibold text-lg">{t("hero.topSkills")}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {topSkills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Globe className="h-6 w-6" />
                      <span className="font-semibold text-lg">{t("hero.keyAchievements")}</span>
                    </div>
                    <ul className="space-y-2">
                      {keyAchievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Contact & Quick Info */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Smartphone className="h-6 w-6" />
                      <span className="font-semibold text-lg">{t("hero.contact")}</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-base">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <span className="text-muted-foreground">juanagustingelos@gmail.com</span>
                      </div>
                      <div className="flex gap-4 pt-2">
                        <a
                          href="https://github.com/jAgusGelos"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                        >
                          <Github className="h-7 w-7" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/juan-agustin-gelos/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                        >
                          <Linkedin className="h-7 w-7" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Award className="h-6 w-6" />
                      <span className="font-semibold text-lg">{t("hero.specialization")}</span>
                    </div>
                    <div className="space-y-3">
                      <div className="text-sm text-muted-foreground">
                        <strong>{t("hero.frontend")}:</strong> React, Next.js, TypeScript
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <strong>{t("hero.backend")}:</strong> Node.js, NestJs, PostgreSQL
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <strong>{t("hero.devops")}:</strong> AWS, Docker, CI/CD
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <strong>{t("hero.testing")}:</strong> Cypress, Jest
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              {t("hero.cta")}
            </p>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-base md:text-lg font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t("hero.viewExperience")}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
