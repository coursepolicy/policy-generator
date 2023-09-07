import { ScreenReaderInstructions } from "@dnd-kit/core";
import { AiPolicyResponse } from ".";

export const navItems = [
  {
    title: "Survey Insights",
    href: "/blog",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Retrieve existing policy",
    href: "/retrieve",
  },
];

export const samplePolicy: AiPolicyResponse = {
  id: "Sample_Policy_for_all",
  heading:
    '<h1>AI Policy for CS 101: Introduction to Computer Science</h1><p>Course Instructor: John Doe <a target="_blank" rel="noopener noreferrer nofollow" class="editor-links" href="mailto:sample@email.com">sample@email.com</a></p>',
  sections: [
    {
      id: "fdb3044f-3550-4fdd-9399-aaabd6537324",
      children: [
        {
          id: "e43ce008-8c04-4f02-9fb8-93b5780278e5",
          htmlContent:
            "<h3>Course Description</h3><p>Introduction to Computer Science is a foundational course designed to provide a comprehensive overview of the field. This course explores the fundamental concepts that form the backbone of computer science, including algorithms, data structures, computational thinking, programming paradigms, and computer organization.</p>",
          title: "Introduction",
        },
      ],
      title: "Course Description",
    },
    {
      id: "2ee12d9c-e3d4-4691-992f-4008bbf71e68",
      children: [
        {
          id: "81fd49e3-9cf6-455f-9421-47fbab5bac49",
          htmlContent:
            '<h2>1. CS 101 Generative AI Policy</h2><p>We recognize the potential benefits of incorporating generative AI in the learning process. As such, we embrace the use of generative AI tools by our students. In this policy, we employ a "reasonable/not reasonable" system rather than a strict "allowed/not allowed" one (inspired by CS50 at Harvard). This approach fosters proactive thinking among students by encouraging them to understand context, evaluate implications, and make thoughtful decisions.</p>',
          miscData: {
            overallPolicy: "Allowed under conditions",
          },
          title: "Introduction",
        },
        {
          id: "12df2dae-ee8e-433c-8f43-a469f503de21",
          htmlContent: [
            "<div><h3>Reasonable Use Cases ✅</h3><strong>Grammar Check</strong><ul><li><p>Use AI tools for grammar and spelling checks</p></li></ul><strong>Concept Learning</strong><ul><li><p>Chat with AI to gain a general understanding of topics of learning</p></li></ul><strong>Literature Discovery</strong><ul><li><p>Use AI to discover new papers or articles</p></li></ul><strong>Summary Generation</strong><ul><li><p>Use AI to generate summaries of papers or reading materials for faster understanding</p></li></ul><strong>Coding Assistant</strong><ul><li><p>Use AI to assist code-writing processes</p></li></ul></div>",
            "<h3>Unreasonable Use Cases ❌</h3><p><strong>Outline Generation</strong></p><ul><li><p>Use AI to generate an outline for a paper or presentation</p></li></ul><p><strong>Essay Generation</strong></p><ul><li><p>Use AI to generate an entire essay or paper</p></li></ul><p><strong>Test-taking</strong></p><ul><li><p>Use AI during tests and exams</p></li></ul><p><strong>Data Fabrication</strong></p><ul><li><p>Use AI to generate or alter data for use in assignments or projects</p></li></ul>",
          ],
          title: "Use Cases",
        },
        {
          id: "89760d5b-ee1c-43d6-8221-0dd0734c7430",
          htmlContent:
            "<h3>Assignment/Project Specific AI Policies</h3><p>For example: Any usage of generative AI is strictly prohibited for assignment 2. OR You are REQUIRED to use generative AI for assignment 2.</p>",
          title: "Assignment Specific AI Policies",
        },
        {
          id: "2de3d183-923a-4e19-9171-83114faf3b09",
          htmlContent:
            '<h3>How to declare the use of generative tools:</h3><ul><li><p>Add a "Generative AI Usage Declaration" section explaining how generative AI is used as part of the submission</p></li><li><p>Provide the complete chat history with generative AI system as part of the submission</p></li><li><p>Add a footnote or inline citation whenever generative AI is involved in generating a particular sentence</p></li></ul>',
          title: "Declaration",
        },
        {
          id: "c6e888d9-3b08-4c0b-b8be-16b5f60f4feb",
          htmlContent:
            "<h3>Additional Notes</h3><ul><li><p>E.g.: If you are unsure about generative AI use in this course, consult with your TA or instructor. Better be safe than sorry — ensuring your academic integrity is extremely important.</p></li></ul>",
          title: "Additional Notes",
        },
      ],
      title: "Generative AI Policy",
    },
    {
      id: "662000a5-4fcc-495b-935e-367137d29755",
      children: [
        {
          id: "8cf61ea5-24ae-4cf8-a74e-47ed241cd233",
          htmlContent:
            "<h2>2. Additional Policies</h2><p>This policy document aims to provide clarity and transparency for the use of generative AI in our course. However, it's paramount to remember that students are also expected to adhere to all other policies specified in the course syllabus and those established by the school administration. The following represents a non-exhaustive list of institution-wide policies which all students must observe, some of which may touch on the use of generative AI. These policies are subject to modification at any point in time. It's incumbent upon the students to keep themselves updated and well-informed about these policies.</p>",
          title: "Introduction",
        },
        {
          id: "373d0cf5-4b38-4a94-94c4-02873d9271b6",
          htmlContent:
            '<ul><li><p><a target="_blank" rel="noopener noreferrer nofollow" class="editor-links" href="www.sample-campus-AI-policy.com">Campus-wide generative AI policy</a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" class="editor-links" href="www.sample-department-AI-policy.com">Department-wide generative AI policy</a></p></li></ul>',
          title: "Policy Links",
        },
      ],
      title: "Additional Policies",
    },
  ],
  createdAt: "2021-08-24T18:00:00.000Z",
};

export const screenReaderInstructions: ScreenReaderInstructions = {
  draggable: `
    To pick up a section item, press the space bar.
    While sorting, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `,
};
