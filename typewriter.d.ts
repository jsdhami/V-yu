declare module "react-typewriter-effect" {
    export interface TypewriterOptions {
      strings: string[];
      autoStart: boolean;
      loop?: boolean;
      delay?: number;
      pauseFor?: number; // Add pauseFor if it’s indeed a valid option
    }
  
    export interface TypewriterProps {
      options: TypewriterOptions;
    }
  
    const Typewriter: React.FC<TypewriterProps>;
    export default Typewriter;
  }
  