
// This is a mock implementation for demonstration purposes
// In a real application, you would integrate with an AI service like OpenAI

// Mock roadmap generation function
export const generateRoadmap = async (prompt: string): Promise<string> => {
  console.log('Generating roadmap for prompt:', prompt);
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Extract the topic and duration from the prompt
  const topicMatch = prompt.match(/learn\s+(\w+)/i);
  const durationMatch = prompt.match(/(\d+)\s+days/i);
  
  const topic = topicMatch ? topicMatch[1] : 'Programming';
  const days = durationMatch ? parseInt(durationMatch[1]) : 30;
  
  // Generate a mock roadmap based on the topic
  let roadmap = '';
  
  if (topic.toLowerCase() === 'java') {
    roadmap = generateJavaRoadmap(days);
  } else if (topic.toLowerCase().includes('operating') || topic.toLowerCase().includes('os')) {
    roadmap = generateOSRoadmap(days);
  } else if (topic.toLowerCase().includes('python')) {
    roadmap = generatePythonRoadmap(days);
  } else {
    roadmap = generateGenericRoadmap(topic, days);
  }
  
  return roadmap;
};

// Extract topics from a roadmap
export const extractTopics = (roadmap: string): string[] => {
  const topics: string[] = [];
  
  // Split by lines
  const lines = roadmap.split('\n');
  
  // Look for day headers or major section headers
  for (const line of lines) {
    // Match "Day X: Topic" pattern
    const dayMatch = line.match(/Day\s+\d+:\s+(.*)/i);
    if (dayMatch && dayMatch[1]) {
      topics.push(dayMatch[1].trim());
      continue;
    }
    
    // Match "Week X: Topic" pattern
    const weekMatch = line.match(/Week\s+\d+:\s+(.*)/i);
    if (weekMatch && weekMatch[1]) {
      topics.push(weekMatch[1].trim());
      continue;
    }
    
    // Match "# Topic" pattern (h1 headers)
    const h1Match = line.match(/^#\s+(.*)/);
    if (h1Match && h1Match[1] && !h1Match[1].toLowerCase().includes('roadmap')) {
      topics.push(h1Match[1].trim());
    }
  }
  
  // If no topics found, use fallback method - look for bold topics or list items
  if (topics.length === 0) {
    for (const line of lines) {
      if (line.startsWith('- ') && line.length > 5) {
        const topic = line.substring(2).split(':')[0].trim();
        if (topic && !topics.includes(topic)) {
          topics.push(topic);
        }
      }
    }
  }
  
  // Ensure we don't have too many topics
  return topics.slice(0, 10);
};

// Mock quiz generation function
export const generateQuizQuestions = async (topic: string) => {
  console.log('Generating quiz questions for topic:', topic);
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Generate 5 mock questions based on the topic
  const questions = [];
  
  if (topic.toLowerCase().includes('java') || topic.toLowerCase().includes('fundamentals')) {
    questions.push({
      question: 'Which of the following is NOT a feature of Java?',
      options: ['Platform Independence', 'Pointers', 'Object-Oriented', 'Automatic Memory Management'],
      correctAnswer: 'Pointers'
    });
    questions.push({
      question: 'What is the output of System.out.println(2 + 5 + "7");',
      options: ['257', '77', '14', 'Error'],
      correctAnswer: '77'
    });
  } else if (topic.toLowerCase().includes('variables') || topic.toLowerCase().includes('data types')) {
    questions.push({
      question: 'Which data type would you use for storing a whole number in Java?',
      options: ['float', 'String', 'boolean', 'int'],
      correctAnswer: 'int'
    });
    questions.push({
      question: 'What is the default value of an int variable in Java?',
      options: ['0', '1', 'null', 'undefined'],
      correctAnswer: '0'
    });
  } else if (topic.toLowerCase().includes('processes') || topic.toLowerCase().includes('operating system')) {
    questions.push({
      question: 'What is a process in an operating system?',
      options: ['A thread of execution', 'A program in execution', 'A memory location', 'A file system'],
      correctAnswer: 'A program in execution'
    });
    questions.push({
      question: 'What is context switching in OS?',
      options: ['Changing the UI theme', 'Switching between processes', 'Creating new files', 'Installing software'],
      correctAnswer: 'Switching between processes'
    });
  } else {
    questions.push({
      question: `What is a key concept in ${topic}?`,
      options: ['Abstraction', 'Modularity', 'Encapsulation', 'All of the above'],
      correctAnswer: 'All of the above'
    });
    questions.push({
      question: `Which of the following best describes ${topic}?`,
      options: [
        'A programming paradigm',
        'A design pattern',
        'A field of study in computer science',
        'A software development methodology'
      ],
      correctAnswer: 'A field of study in computer science'
    });
  }
  
  // Add generic questions to reach 5 questions
  while (questions.length < 5) {
    questions.push({
      question: `Question about ${topic} (${questions.length + 1})`,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 'Option A'
    });
  }
  
  return questions;
};

// Helper functions to generate specific roadmaps
function generateJavaRoadmap(days: number): string {
  return `# Java Learning Roadmap (${days} Days)

Day 1: Java Fundamentals
- Introduction to Java and its features
- Setting up Java development environment (JDK, IDE)
- Writing your first Java program
- Understanding the main method and program structure

Day 2: Variables and Data Types
- Primitive data types (int, double, boolean, etc.)
- Reference data types
- Type casting and conversions
- Variables, constants, and naming conventions

Day 3: Operators and Control Flow
- Arithmetic operators
- Relational and logical operators
- Decision-making statements (if, switch)
- Loops (for, while, do-while)

Day 4: Arrays and Strings
- Creating and manipulating arrays
- Multi-dimensional arrays
- String operations and methods
- StringBuilder and StringBuffer

Day 5: Object-Oriented Programming Basics
- Classes and objects
- Attributes and methods
- Constructors and this keyword
- Access modifiers (public, private, protected)

Day 6: Inheritance and Polymorphism
- Extending classes
- Method overriding
- Super keyword
- Dynamic method dispatch

Day 7: Interfaces and Abstract Classes
- Abstract methods and classes
- Implementing interfaces
- Multiple inheritance via interfaces
- Default and static methods in interfaces

Day 8: Exception Handling
- Try, catch, finally blocks
- Checked vs unchecked exceptions
- Creating custom exceptions
- Best practices for exception handling

Day 9: Collections Framework
- Lists, Sets, Maps
- ArrayList, LinkedList
- HashSet, TreeSet
- HashMap, TreeMap

Day 10: File I/O Operations
- Reading and writing files
- File streams
- BufferedReader and BufferedWriter
- Working with directories

Day 11-${days}: Advanced Topics and Projects
- Multithreading
- Java 8+ features (Lambda expressions, Stream API)
- JDBC for database connectivity
- Build a small application implementing all concepts learned
`;
}

function generateOSRoadmap(days: number): string {
  return `# Operating Systems Learning Roadmap (${days} Days)

Day 1: Introduction to Operating Systems
- What is an Operating System?
- Functions and objectives of OS
- Types of Operating Systems
- OS structures and components

Day 2: Process Management
- Process concept and states
- Process control block
- Process scheduling algorithms
- Context switching and process creation

Day 3: Threads and Concurrency
- Thread concepts
- Multithreading models
- Thread scheduling
- Thread issues and synchronization basics

Day 4: CPU Scheduling
- Scheduling criteria and algorithms
- FCFS, SJF, Round-Robin scheduling
- Priority scheduling
- Multiple-processor scheduling

Day 5: Process Synchronization
- The critical section problem
- Semaphores and monitors
- Classic synchronization problems (producer-consumer, readers-writers)
- Deadlock handling strategies

Day 6: Memory Management
- Memory hierarchy
- Memory allocation techniques
- Paging and segmentation
- Virtual memory concepts

Day 7: Virtual Memory
- Demand paging
- Page replacement algorithms
- Thrashing
- Allocation policies

Day 8: File Systems
- File concepts and operations
- Access methods
- Directory structure
- File system implementation

Day 9: I/O Systems
- I/O hardware
- Application I/O interface
- Kernel I/O subsystem
- Disk scheduling algorithms

Day 10: Protection and Security
- Protection mechanisms
- Access control
- Authentication and authorization
- Security threats and countermeasures

Day 11-${days}: Advanced Topics and Case Studies
- Distributed operating systems
- Real-time operating systems
- Case studies (Linux, Windows, macOS)
- Virtualization and cloud OS concepts
`;
}

function generatePythonRoadmap(days: number): string {
  return `# Python Learning Roadmap (${days} Days)

Day 1: Python Basics
- Installing Python and setup
- Running Python (interactive shell and scripts)
- Basic syntax, variables, and data types
- Basic operators and expressions

Day 2: Control Flow
- Conditional statements (if, elif, else)
- Loops (for, while)
- Break and continue statements
- Loop control and comprehensions

Day 3: Data Structures
- Lists and tuples
- Dictionaries and sets
- Operations on data structures
- Choosing the right data structure

Day 4: Functions
- Defining and calling functions
- Parameters and arguments
- Return values
- Lambda functions

Day 5: Modules and Packages
- Importing modules
- Creating your own modules
- Using the standard library
- Installing third-party packages with pip

Day 6: File Handling
- Reading and writing files
- File modes and operations
- Working with CSV and JSON
- Context managers (with statement)

Day 7: Error Handling
- Exceptions and error types
- Try, except, finally blocks
- Raising exceptions
- Creating custom exceptions

Day 8: Object-Oriented Programming
- Classes and objects
- Attributes and methods
- Inheritance and polymorphism
- Encapsulation and abstraction

Day 9: Advanced Python Features
- Decorators
- Generators
- Context managers
- Regular expressions

Day 10: Working with Data
- Introduction to NumPy
- Pandas basics for data analysis
- Data visualization with Matplotlib
- Basic data manipulation operations

Day 11-${days}: Projects and Specialized Areas
- Web development with Flask or Django
- Data science with scikit-learn
- Automation scripts and tools
- Building a complete Python application
`;
}

function generateGenericRoadmap(topic: string, days: number): string {
  return `# ${topic} Learning Roadmap (${days} Days)

Day 1: Fundamentals of ${topic}
- Introduction to ${topic}
- History and evolution
- Core concepts and principles
- Setting up your learning environment

Day 2: Basic ${topic} Concepts
- Key terminology and definitions
- Understanding the ${topic} ecosystem
- Fundamental techniques and approaches
- Solving simple ${topic} problems

Day 3: Intermediate Concepts
- Advanced ${topic} structures
- Efficient algorithms and methods
- Best practices and conventions
- Common patterns in ${topic}

Day 4: Practical Applications
- Real-world use cases
- Building simple projects
- Implementing ${topic} solutions
- Testing and debugging

Day 5-${days}: Advanced Topics and Project Work
- Specialized areas in ${topic}
- Current trends and future directions
- Working on comprehensive projects
- Optimizing ${topic} implementations
`;
}
