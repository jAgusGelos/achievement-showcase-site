import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  tags: string[];
  detailedDescription?: string;
  projects?: Array<{
    name: string;
    description: string;
    achievements: string[];
  }>;
}

const getExperiences = (t: any): ExperienceItem[] => [
  {
    title: t("experience.jobs.squadup.title"),
    company: t("experience.jobs.squadup.company"),
    location: t("experience.jobs.squadup.location"),
    period: t("experience.jobs.squadup.period"),
    description: t("experience.jobs.squadup.description"),
    achievements: [],
    tags: ["NestJS", "React", "TypeScript", "PostgreSQL", "AWS Lambda", "AWS CDK", "Serverless", "TanStack Stack"],
    detailedDescription: t("experience.jobs.squadup.description"),
    projects: [
      {
        name: t("experience.jobs.squadup.projects.lbp.name"),
        description: t("experience.jobs.squadup.projects.lbp.description"),
        achievements: t("experience.jobs.squadup.projects.lbp.achievements", { returnObjects: true })
      },
      {
        name: t("experience.jobs.squadup.projects.afterhour.name"),
        description: t("experience.jobs.squadup.projects.afterhour.description"),
        achievements: t("experience.jobs.squadup.projects.afterhour.achievements", { returnObjects: true })
      },
      {
        name: t("experience.jobs.squadup.projects.aptiqude.name"),
        description: t("experience.jobs.squadup.projects.aptiqude.description"),
        achievements: t("experience.jobs.squadup.projects.aptiqude.achievements", { returnObjects: true })
      }
    ]
  },
  {
    title: t("experience.jobs.valdera.title"),
    company: t("experience.jobs.valdera.company"),
    location: t("experience.jobs.valdera.location"),
    period: t("experience.jobs.valdera.period"),
    description: t("experience.jobs.valdera.description"),
    achievements: t("experience.jobs.valdera.achievements", { returnObjects: true }),
    tags: ["React", "Node.js", "GitHub Actions", "GCloud", "Testing", "Mentoring"]
  },
  {
    title: t("experience.jobs.darwoft.title"),
    company: t("experience.jobs.darwoft.company"),
    location: t("experience.jobs.darwoft.location"),
    period: t("experience.jobs.darwoft.period"),
    description: t("experience.jobs.darwoft.description"),
    achievements: t("experience.jobs.darwoft.achievements", { returnObjects: true }),
    tags: ["React", "Node.js", "Authentication", "UI/UX", "MVP Development"]
  },
  {
    title: t("experience.jobs.utn.title"),
    company: t("experience.jobs.utn.company"),
    location: t("experience.jobs.utn.location"),
    period: t("experience.jobs.utn.period"),
    description: t("experience.jobs.utn.description"),
    achievements: t("experience.jobs.utn.achievements", { returnObjects: true }),
    tags: [".NET Core", "FastAPI", "Python", "Documentation"]
  }
];

const Experience = () => {
  const { t } = useTranslation();
  const experiences = getExperiences(t);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [showAllExpanded, setShowAllExpanded] = useState(false);

  const toggleCard = (index: number) => {
    setExpandedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleShowAll = () => {
    if (showAllExpanded) {
      setExpandedCards([]);
      setShowAllExpanded(false);
    } else {
      setExpandedCards(experiences.map((_, index) => index));
      setShowAllExpanded(true);
    }
  };

  const isExpanded = (index: number) => expandedCards.includes(index);

  return (
    <section id="experience" className="py-8 relative pattern-gradient-grid">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 space-y-2">
          <div className="flex justify-between items-center mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleShowAll}
              className="ml-4"
            >
              {showAllExpanded ? t("experience.hideAll") : t("experience.showAll")}
            </Button>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">
            {t("experience.title")} <span className="gradient-text">{t("experience.subtitle")}</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Timeline View for Desktop */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-primary/20"></div>

              <div className="space-y-8">
                {experiences.map((exp, index) => {
                  // Extract year from period (e.g., "Feb 2025 - Presente" -> "2025")
                  const yearMatch = exp.period.match(/\d{4}/);
                  const year = yearMatch ? yearMatch[0] : '';

                  return (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Timeline dot with year */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                      <div className="w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
                      <span className="mt-2 text-base md:text-lg font-bold text-primary bg-background px-3 py-1.5 rounded-md shadow-sm whitespace-nowrap">
                        {year}
                      </span>
                    </div>

                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <Card
                        className="group bg-card border-border hover:border-primary/50 transition-all duration-500 hover:glow-effect cursor-pointer hover:scale-105"
                        onMouseEnter={() => !showAllExpanded && toggleCard(index)}
                        onMouseLeave={() => !showAllExpanded && toggleCard(index)}
                      >
                        <CardContent className="p-6 transition-all duration-500">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-base font-semibold text-muted-foreground transition-all duration-300">
                              <Briefcase className="h-5 w-5" />
                              {exp.company}
                            </div>
                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground transition-all duration-300">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>

                            {/* Collapsed View */}
                            <div className={`transition-all duration-500 overflow-hidden ${!isExpanded(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {exp.description}
                              </p>
                              <div className="flex flex-wrap gap-2 mt-3">
                                {exp.tags.slice(0, 3).map((tag, tagIndex) => (
                                  <Badge
                                    key={tagIndex}
                                    variant="secondary"
                                    className="bg-secondary hover:bg-primary transition-colors text-sm"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                                {exp.tags.length > 3 && (
                                  <Badge variant="secondary" className="text-sm">
                                    +{exp.tags.length - 3}
                                  </Badge>
                                )}
                              </div>
                            </div>

                            {/* Expanded View */}
                            <div className={`transition-all duration-500 overflow-hidden ${isExpanded(index) ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                              <div className="space-y-4 mt-4">
                                <p className="text-sm text-muted-foreground">
                                  {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                  {exp.tags.map((tag, tagIndex) => (
                                    <Badge
                                      key={tagIndex}
                                      variant="secondary"
                                      className="bg-secondary hover:bg-primary transition-colors text-sm"
                                    >
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>

                                {exp.projects && exp.projects.length > 0 && (
                                  <div className="space-y-4 mt-4">
                                    <h4 className="text-sm font-semibold text-primary">{t("experience.projects")}:</h4>
                                    {exp.projects.map((project, projectIndex) => (
                                      <div key={projectIndex} className="bg-muted/50 p-4 rounded-md space-y-3 transition-all duration-300">
                                        <h5 className="text-sm font-semibold">{project.name}</h5>
                                        <p className="text-sm text-muted-foreground">{project.description}</p>
                                        <ul className="space-y-2">
                                          {project.achievements.map((achievement, achIndex) => (
                                            <li key={achIndex} className="text-sm text-muted-foreground flex gap-2">
                                              <span className="text-primary">•</span>
                                              <span>{achievement}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {(!exp.projects || exp.projects.length === 0) && exp.achievements.length > 0 && (
                                  <div className="space-y-3">
                                    <h4 className="text-sm font-semibold text-primary">{t("experience.achievements")}:</h4>
                                    <ul className="space-y-2">
                                      {exp.achievements.map((achievement, achIndex) => (
                                        <li key={achIndex} className="text-sm text-muted-foreground flex gap-2">
                                          <span className="text-primary">•</span>
                                          <span>{achievement}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Compact Grid for Mobile/Tablet */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group bg-card border-border hover:border-primary/50 transition-all duration-500 hover:glow-effect cursor-pointer hover:scale-105"
                onMouseEnter={() => !showAllExpanded && toggleCard(index)}
                onMouseLeave={() => !showAllExpanded && toggleCard(index)}
              >
                <CardContent className="p-6 transition-all duration-500">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-base font-semibold text-muted-foreground transition-all duration-300">
                      <Briefcase className="h-5 w-5" />
                      {exp.company}
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground transition-all duration-300">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Collapsed View */}
                    <div className={`transition-all duration-500 overflow-hidden ${!isExpanded(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.tags.slice(0, 3).map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-secondary hover:bg-primary transition-colors text-sm"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {exp.tags.length > 3 && (
                          <Badge variant="secondary" className="text-sm">
                            +{exp.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Expanded View */}
                    <div className={`transition-all duration-500 overflow-hidden ${isExpanded(index) ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="space-y-4 mt-4">
                        <p className="text-sm text-muted-foreground">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="secondary"
                              className="bg-secondary hover:bg-primary transition-colors text-sm"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {exp.projects && exp.projects.length > 0 && (
                          <div className="space-y-4 mt-4">
                            <h4 className="text-sm font-semibold text-primary">{t("experience.projects")}:</h4>
                            {exp.projects.map((project, projectIndex) => (
                              <div key={projectIndex} className="bg-muted/50 p-4 rounded-md space-y-3 transition-all duration-300">
                                <h5 className="text-sm font-semibold">{project.name}</h5>
                                <p className="text-sm text-muted-foreground">{project.description}</p>
                                <ul className="space-y-2">
                                  {project.achievements.map((achievement, achIndex) => (
                                    <li key={achIndex} className="text-sm text-muted-foreground flex gap-2">
                                      <span className="text-primary">•</span>
                                      <span>{achievement}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}

                        {(!exp.projects || exp.projects.length === 0) && exp.achievements.length > 0 && (
                          <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-primary">{t("experience.achievements")}:</h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="text-sm text-muted-foreground flex gap-2">
                                  <span className="text-primary">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
