const allQuizQuestions = [
  {
    question: "What does JVM stand for?",
    options: [
      "Java Visual Machine",
      "Java Virtual Method",
      "Java Virtual Machine",
      "Java Variable Machine"
    ],
    correctAnswer: 2
  },
  {
    question: "Which of the following is NOT a Java primitive type?",
    options: [
      "int",
      "boolean",
      "char",
      "String"
    ],
    correctAnswer: 3
  },
  {
    question: "What does JDK stand for?",
    options: [
      "Java Data Kit",
      "Java Deployment Kit",
      "Java Debug Kit",
      "Java Development Kit"
    ],
    correctAnswer: 3
  },
  {
    question: "Which component is responsible for executing Java bytecode?",
    options: [
      "JDK",
      "JRE",
      "JVM",
      "JAR"
    ],
    correctAnswer: 2
  },
  {
    question: "What is the significance of the 'public' access modifier in Java?",
    options: [
      "It restricts access to the same class only",
      "It allows access to the class from any other class",
      "It limits access to subclasses only",
      "It hides the class implementation"
    ],
    correctAnswer: 1
  },
  {
    question: "What is method overloading in Java?",
    options: [
      "Defining multiple methods with the same name but different parameters",
      "Redefining a method in a subclass",
      "Having methods with identical signatures in a class",
      "Overriding a method from a superclass"
    ],
    correctAnswer: 0
  },
  {
    question: "Which keyword is used to prevent a class from being subclassed?",
    options: [
      "static",
      "final",
      "abstract",
      "private"
    ],
    correctAnswer: 1
  },
  {
    question: "How do you declare an abstract class in Java?",
    options: [
      "class MyClass { }",
      "abstract class MyClass { }",
      "interface MyClass { }",
      "static class MyClass { }"
    ],
    correctAnswer: 1
  },
  {
    question: "Which Java collection maintains insertion order and allows duplicates?",
    options: [
      "Set",
      "HashMap",
      "ArrayList",
      "TreeSet"
    ],
    correctAnswer: 2
  },
  {
    question: "Which keyword is used to create an instance of an object in Java?",
    options: [
      "new",
      "create",
      "instance",
      "build"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the primary use of the 'this' keyword in Java?",
    options: [
      "To refer to a static variable",
      "To refer to the current class",
      "To refer to the current object",
      "To refer to a superclass"
    ],
    correctAnswer: 2
  },
  {
    question: "Which method in Java is used to start a thread?",
    options: [
      "run()",
      "start()",
      "execute()",
      "init()"
    ],
    correctAnswer: 1
  },
  {
    question: "In Java Streams, which method is used to transform each element of a stream?",
    options: [
      "filter()",
      "collect()",
      "map()",
      "reduce()"
    ],
    correctAnswer: 2
  },
  {
    question: "Which of the following methods in Java Streams is used for aggregation?",
    options: [
      "count()",
      "map()",
      "flatMap()",
      "forEach()"
    ],
    correctAnswer: 0
  },
  {
    question: "In Spring Boot, which annotation automatically scans for components within the package?",
    options: [
      "@ComponentScan",
      "@Bean",
      "@Repository",
      "@Autowired"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the primary benefit of dependency injection in Spring?",
    options: [
      "It increases the coupling between classes",
      "It makes integration with unrelated systems easier",
      "It results in looser coupling and easier testing",
      "It automatically generates code"
    ],
    correctAnswer: 2
  },
  {
    question: "Which annotation in Spring Boot is used to mark a class that holds business logic?",
    options: [
      "@Repository",
      "@Service",
      "@Controller",
      "@Component"
    ],
    correctAnswer: 1
  },
  {
    question: "In JPA, which annotation is used to specify the table name for an entity in the database?",
    options: [
      "@Table",
      "@Entity",
      "@Column",
      "@Id"
    ],
    correctAnswer: 0
  },
  {
    question: "Which annotation is used to define a many-to-one relationship in JPA?",
    options: [
      "@OneToMany",
      "@ManyToOne",
      "@OneToOne",
      "@ManyToMany"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the purpose of the Optional class in Java?",
    options: [
      "To handle null values gracefully",
      "To perform mathematical operations",
      "To create immutable objects",
      "To manage collections"
    ],
    correctAnswer: 0
  },
  {
    question: "Which statement best describes immutability in Java objects?",
    options: [
      "Objects whose state can be changed after creation",
      "Objects that cannot be modified once they are created",
      "Objects that are not subject to garbage collection",
      "Objects that consume less memory"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the significance of the equals() and hashCode() methods in Java?",
    options: [
      "They are used for string concatenation",
      "They determine how objects are compared and stored in hash-based collections",
      "They handle input/output operations",
      "They initialize class variables"
    ],
    correctAnswer: 1
  },
  {
    question: "Which method serves as the entry point of a Java application?",
    options: [
      "start()",
      "main()",
      "init()",
      "run()"
    ],
    correctAnswer: 1
  },
  {
    question: "What does the static keyword indicate in Java?",
    options: [
      "The variable or method is tied to the instance of a class",
      "The variable or method belongs to the class itself",
      "The variable cannot be modified after assignment",
      "The method must return a static value"
    ],
    correctAnswer: 1
  },
  {
    question: "Which interface represents a function that accepts one argument and produces a result?",
    options: [
      "Consumer",
      "Function",
      "Supplier",
      "Predicate"
    ],
    correctAnswer: 1
  },
  {
    question: "Which Java 8 feature allows you to treat functions as first-class citizens?",
    options: [
      "Streams",
      "Lambda expressions",
      "Generics",
      "Annotations"
    ],
    correctAnswer: 1
  },
  {
    question: "What does the filter() method do in Java Streams?",
    options: [
      "Transforms each element in the stream",
      "Sorts the elements in the stream",
      "Excludes elements that do not match a given predicate",
      "Aggregates the elements into a collection"
    ],
    correctAnswer: 2
  },
  {
    question: "Which of the following is considered a terminal operation in Java Streams?",
    options: [
      "map()",
      "filter()",
      "forEach()",
      "sorted()"
    ],
    correctAnswer: 2
  },
  {
    question: "Which annotation is used to mark the main class in a Spring Boot application?",
    options: [
      "@Component",
      "@SpringBootApplication",
      "@EnableAutoConfiguration",
      "@Configuration"
    ],
    correctAnswer: 1
  },
  {
    question: "In Spring Boot, which annotation is used to define a REST controller?",
    options: [
      "@Service",
      "@RestController",
      "@ControllerAdvice",
      "@Repository"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the primary benefit of using Spring Boot?",
    options: [
      "It requires manual configuration of all components",
      "It provides auto-configuration and rapid application development",
      "It is only suitable for small applications",
      "It does not support microservices architecture"
    ],
    correctAnswer: 1
  },
  {
    question: "Which annotation maps an HTTP GET request to a controller method in Spring Boot?",
    options: [
      "@PostMapping",
      "@DeleteMapping",
      "@GetMapping",
      "@PutMapping"
    ],
    correctAnswer: 2
  },
  {
    question: "In JPA, what is an entity?",
    options: [
      "A table in the database",
      "A Java object representing a row in a database table",
      "A database query",
      "A schema in the database"
    ],
    correctAnswer: 1
  },
  {
    question: "Which annotation is used to mark a class as an entity in JPA?",
    options: [
      "@Table",
      "@Entity",
      "@Column",
      "@Id"
    ],
    correctAnswer: 1
  },
  {
    question: "What does the @Id annotation denote in a JPA entity?",
    options: [
      "It marks a field as a foreign key",
      "It specifies the primary key of the entity",
      "It indicates that the field is auto-generated",
      "It defines a unique constraint"
    ],
    correctAnswer: 1
  },
  {
    question: "Which annotation defines a one-to-many relationship in JPA?",
    options: [
      "@ManyToOne",
      "@OneToMany",
      "@ManyToMany",
      "@OneToOne"
    ],
    correctAnswer: 1
  },
  {
    question: "Which of the following is used to handle exceptions in Java?",
    options: [
      "try-catch blocks",
      "if-else statements",
      "switch-case statements",
      "for loops"
    ],
    correctAnswer: 0
  },
  {
    question: "What is the purpose of the finally block in exception handling?",
    options: [
      "To execute code only when an exception occurs",
      "To execute code regardless of whether an exception is thrown",
      "To ignore exceptions silently",
      "To rethrow the caught exception"
    ],
    correctAnswer: 1
  },
  {
    question: "Which Java collection does not allow duplicate elements?",
    options: [
      "List",
      "Set",
      "Map",
      "Queue"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the purpose of the stream() method in the Collection interface?",
    options: [
      "To convert the collection to an array",
      "To enable functional-style operations on the collection",
      "To sort the collection",
      "To check if the collection is empty"
    ],
    correctAnswer: 1
  }
];

// The quiz.js will handle selecting 10 random questions from this pool
const quizQuestions = allQuizQuestions;