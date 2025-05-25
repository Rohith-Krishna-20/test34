import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X } from 'lucide-react';

const TerminalEasterEgg = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    'FUSE ECE Terminal v2.0.77',
    'Type "help" for available commands',
    '> '
  ]);
  const [currentPath, setCurrentPath] = useState('/home/fuse');
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  help     - Show this help message',
      '  about    - About FUSE ECE batch',
      '  members  - List batch members',
      '  stats    - Show batch statistics',
      '  trips    - List memorable trips',
      '  events   - Show major events',
      '  secrets  - ???',
      '  clear    - Clear terminal',
      '  matrix   - Enter the Matrix',
      '  exit     - Close terminal'
    ],
    about: () => [
      'FUSE ECE Batch (2021-2025)',
      'Electronics & Communication Engineering',
      'Model Engineering College, Kochi',
      'Batch of 69 brilliant minds',
      'United by code, divided by semicolons'
    ],
    members: () => [
      'Total Members: 69',
      'Active Coders: 42',
      'Coffee Addicts: 69',
      'Night Owls: 67',
      'Debugging Masters: In Progress...'
    ],
    stats: () => [
      'Lines of Code Written: ∞',
      'Bugs Fixed: 1337',
      'Bugs Created: 2674',
      'Pizza Slices Consumed: 42069',
      'All-nighters Pulled: Too many to count',
      'Group Projects Survived: 23',
      'Friendships Forged: Unbreakable'
    ],
    trips: () => [
      'Loading trip memories...',
      '> Munnar Adventure - Epic mountain vibes',
      '> Thekkady Wildlife - Elephants & Friends',
      '> Kochi Heritage Walk - Cultural immersion',
      '> Beach Camping - Stars & Waves',
      '> Tech Fest Bangalore - Code & Compete'
    ],
    events: () => [
      'Major Events Timeline:',
      '2021 - Orientation & First Hello World',
      '2022 - Project Exhibition Madness',
      '2023 - Internship Hunt Begins',
      '2024 - Final Year Panic Mode',
      '2025 - Graduation & New Beginnings'
    ],
    secrets: () => [
      'Accessing classified files...',
      'Password required...',
      'Just kidding! 😄',
      'Secret: Our batch WhatsApp has 50K+ messages',
      'Another secret: We actually understand each other\'s code',
      'Final secret: This website was built with ❤️ by us'
    ],
    clear: () => {
      setOutput(['FUSE ECE Terminal v2.0.77', 'Type "help" for available commands', '> ']);
      return [];
    },
    matrix: () => {
      // Trigger matrix effect
      document.body.style.animation = 'matrix-rain 3s ease-in-out';
      setTimeout(() => {
        document.body.style.animation = '';
      }, 3000);
      return [
        'Wake up, Neo...',
        'The Matrix has you...',
        'Follow the white rabbit...',
        'Knock, knock, Neo.',
        '',
        'Welcome to the real world.',
        'Reality: You\'re still in ECE lab 😅'
      ];
    },
    exit: () => {
      setIsOpen(false);
      return [];
    },
    ls: () => [
      'assignments/',
      'projects/',
      'memories.txt',
      'friendships.exe',
      'dreams.zip',
      'future.loading...'
    ],
    pwd: () => [currentPath],
    whoami: () => ['fuse-ece-student'],
    date: () => [new Date().toString()],
    echo: (args) => [args.join(' ')],
    cowsay: (args) => [
      ' _________________________________',
      '< ' + (args.join(' ') || 'FUSE ECE rocks!') + ' >',
      ' ---------------------------------',
      '        \\   ^__^',
      '         \\  (oo)\\_______',
      '            (__)\\       )\\/\\',
      '                ||----w |',
      '                ||     ||'
    ]
  };

  const easterEggSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
  const [sequenceIndex, setSequenceIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === easterEggSequence[sequenceIndex]) {
        setSequenceIndex(prev => prev + 1);
        if (sequenceIndex === easterEggSequence.length - 1) {
          setIsOpen(true);
          setSequenceIndex(0);
        }
      } else {
        setSequenceIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sequenceIndex]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmedInput = input.trim();
      if (trimmedInput) {
        const [cmd, ...args] = trimmedInput.split(' ');
        const command = commands[cmd.toLowerCase()];
        
        setOutput(prev => [...prev, `${currentPath}$ ${trimmedInput}`]);
        
        if (command) {
          const result = command(args);
          if (result && result.length > 0) {
            setOutput(prev => [...prev, ...result, '> ']);
          } else if (cmd.toLowerCase() !== 'clear') {
            setOutput(prev => [...prev, '> ']);
          }
        } else {
          setOutput(prev => [...prev, `Command not found: ${cmd}`, 'Type "help" for available commands', '> ']);
        }
      } else {
        setOutput(prev => [...prev, `${currentPath}$ `, '> ']);
      }
      setInput('');
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-cyber-dark/80 backdrop-blur-sm border border-neon-cyan/30 rounded-lg p-2 text-xs text-neon-cyan animate-pulse">
          Try: ↑↑↓↓←→←→
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-cyber-dark border-2 border-neon-cyan rounded-lg w-full max-w-4xl h-96 flex flex-col cyber-glow">
        {/* Terminal Header */}
        <div className="flex items-center justify-between bg-neon-cyan/10 p-3 border-b border-neon-cyan/30">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-neon-cyan" />
            <span className="text-neon-cyan font-mono text-sm">FUSE ECE Terminal</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-neon-cyan hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Terminal Content */}
        <div 
          ref={terminalRef}
          className="flex-1 p-4 overflow-y-auto font-mono text-sm text-neon-cyan bg-black/50"
        >
          {output.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap">
              {line}
            </div>
          ))}
          <div className="flex items-center">
            <span className="text-neon-purple">{currentPath}$ </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent outline-none text-neon-cyan ml-1 caret-neon-cyan"
              placeholder="Type a command..."
            />
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="bg-neon-cyan/10 p-2 border-t border-neon-cyan/30 text-xs text-neon-cyan/70 font-mono">
          Press Ctrl+C or type "exit" to close | Easter egg activated! 🎉
        </div>
      </div>
    </div>
  );
};

export default TerminalEasterEgg;
