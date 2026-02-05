import { Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                       
                       <div className="relative flex justify-center opacity-0 animate-fade-in">
                        {/* Glow ring */}
                        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/40 via-purple-500/30 to-primary/40 blur-2xl animate-pulse" />
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/40 shadow-xl animate-float">
                            <img
                            src="/public/mehal.png"
                            alt="Mehal Gosalia"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                       </div>
                    </div>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>

                            <a 
                            href="/public/Mehal_Gosalia_Resume copy.pdf" 
                            download
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download Resume
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Beyond Tech</h4>
                                    <p className="text-muted-foreground">
                                    A curious, creative builder who enjoys designing content, dancing, 
                                    and drawing inspiration from the energy of Chicago beyond the screen.
                                    </p>
                                </div>
    
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">What I’m Exploring!</h4>
                                    <p className="text-muted-foreground">
                                   Actively exploring roles across  
                                   <span className="font-semibold"> Software and Web Development</span>, {" "} 
                                    <span className="font-semibold">Data Analytics</span>, {" "}
                                     <span className="font-semibold">Data science</span>, and {" "}
                                     <span className="font-semibold">AI engineering</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg">Education</h4>
                                    <p className="text-muted-foreground">
                                  Bachelor’s in Computer Science · Illinois Institute of Technology · Aug 2021 - May 2025
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};