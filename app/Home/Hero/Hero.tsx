"use client";

import AnimatedBorderButton from "@/components/ui/AnimatedBorderButton";
import Button from "@/components/ui/Button";
import { ArrowRight, ChevronDown, Download, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { skills } from "@/constants";


type Dot = {
  left: string;
  top: string;
  duration: string;
  delay: string;
};


const socialLinks= [
  { icon: Github, href: "https://github.com/marwancodes" },
  { icon: Linkedin, href: "https://ma.linkedin.com/in/marouane-ouarradi" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "https://www.youtube.com/@MarwanWarradi" },
  { icon: Instagram, href: "https://www.instagram.com/marwanwarradi" },

];



const Hero = () => {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const generatedDots = Array.from({ length: 30 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${15 + Math.random() * 20}s`,
      delay: `${Math.random() * 5}s`,
    }));

    setTimeout(() => setDots(generatedDots), 0);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-20"
        />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 ">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Software Developer • MERN Specialist
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building <span className="text-primary glow-text">web</span>
                <br />
                applications with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
                Hi, Im Marwan Warradi — a UK-based full-stack developer specializing
                Hi, I&apos;m Marwan Warradi — a UK-based full-stack developer with expertise
                in React, Next.js, TypeScript, WordPress, Shopify, and SEO. I build fast,
                scalable, and user-focused websites that help businesses grow online through clean code,
                strong performance, and smart digital strategy.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
              <Button size="lg" onClick={() => window.location.href = "#contact"}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              {/* <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton> */}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relatice animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                    <Image
                      src="/images/profile-photo.png"
                      alt="Marwan Warradi"
                      width={400}
                      height={500}
                      className="w-full aspect-4/5 object-cover rounded-2xl"
                    />

                    {/* Floating Badge */}
                    <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium">
                          Available for work
                        </span>
                      </div>
                    </div>
                    {/* Stats Badge */}
                    <div className="absolute -top-4 -left-4 glass-strong rounded-xl px-4 py-3 animate-float animation-delay-500">
                      <div className="text-2xl font-bold text-primary">Marwan</div>
                      <div className="text-xs text-muted-foreground">
                        Warradi
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="text-sm text-muted-foreground mb-6 text-center">
              Technologies I work with
            </p>
            <div className="relative overflow-hidden">

              <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10"/>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10"/>

              <div className="flex w-max animate-marquee">
                {[...skills, ...skills].map((skill, idx) => (
                  <div key={idx} className="shrink-0 px-8 py-4 flex items-center gap-3">
                    <Image
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <span className={`text-xl font-semibold hover:text-muted-foreground transition-colors`} style={{ color: skill.color}}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a
              href="#about"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="text-xs uppercase tracking-wider">Scroll</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div>

    </section>
  );
};

export default Hero;
