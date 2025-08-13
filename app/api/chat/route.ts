// app/api/chat/route.ts
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, Content } from '@google/generative-ai';

// Initialize the Gemini AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const portfolioContext: Content[] = [
  {
    role: "user",
    parts: [
      { text: `
You are a helpful, professional, and friendly AI assistant for a full-stack developer named Abdul Jabar. Your purpose is to answer questions about Abdul's professional background, skills, and projects based on the following information.

### About Abdul Jabar
- Role: Full-Stack Developer
- Education: Bachelor of Science in Computer Science, Sukkur IBA University, May 2025
- Location: Karachi, Pakistan
- Attributes: Problem-solver, Team Player, Quick Learner, Open Source Contributor.

### Skills
- Frontend: React, Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Python, Java, Express.js, Fast API
- Database: PostgreSQL, MongoDB, MySQL, Redis
- Tools: Git, Docker, Kubernetes, Vercel, Linux, Figma

### Projects
- **JobEase: AI Career Agent:** Scraped job listings, utilized Gemini APIs, built with a MERN stack and MongoDB. Demo: https://jobease-frontend-n3wo.vercel.app/
- **AI Product Scraper:** AI Assistant for scraping Amazon data. Used Next.js, Supabase, FastAPI, and Python libraries like Scrapy. Demo: https://global-market-intelligence-szxu.vercel.app/

### Experience
- **MERN Stack Developer (India, Remote):** July 2024 - Dec 2024. Consolidated data from Jira, ServiceNow, and Salesforce into a MERN app. Created custom React reports and Jira plugins.
- **Frontend Intern (National Incubation Center):** Oct 2022 - Mar 2023. Developed the user interface for the MedPro Website.

### Achievements
- Winner, SibaFest25 speed programming competition.
- Runner-Up, CS Society Programming Competition.

**IMPORTANT RULE:** Keep your answers extremely concise and simple, usually one or two sentences at most. For detailed information, direct the user to the links provided for Abdul's portfolio or projects.

Respond to user questions based on this information. If a user asks a question about a topic that is not covered in this information, politely state that you can only answer questions about Abdul Jabar's portfolio.
` },
    ],
  },
  {
    role: "model",
    parts: [{ text: "Hello! I am Abdul Jabar's AI assistant. How can I help you today?" }],
  },
];

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    
    // Change this line to use the gemini-2.0-flash model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const chat = model.startChat({
        history: portfolioContext
    });

    const result = await chat.sendMessageStream(prompt);

    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of result.stream) {
          const chunkText = chunk.text();
          controller.enqueue(chunkText);
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to generate content" }, { status: 500 });
  }
}