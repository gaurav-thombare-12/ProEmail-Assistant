# ProEmail-Assistant

ProEmail-Assistant is a Spring Boot-based email generation service that leverages Gemini AI to generate professional email replies based on user input. The frontend is built using HTML, CSS, and JavaScript.

## Features
- Generate professional email replies using Gemini AI.
- Supports different tones for email responses.
- REST API for seamless integration.
- Simple and user-friendly frontend.

## Tech Stack
- **Backend:** Java, Spring Boot, WebClient, Lombok
- **Frontend:** HTML, CSS, JavaScript
- **API Integration:** Gemini AI

## Setup & Installation

### Prerequisites
- Java 17+
- Maven
- Node.js (for frontend development, if needed)

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/ProEmail-Assistant.git
   ```
2. Navigate to the backend folder:
   ```sh
   cd ProEmail-Assistant
   ```
3. Configure environment variables:
   - Set `GEMINI_URL` and `GEMINI_KEY` in your environment or `application.properties`.

4. Build and run the application:
   ```sh
   mvn spring-boot:run
   ```

### Frontend Setup
1. Open the frontend folder:
   ```sh
   cd frontend
   ```
2. Open `index.html` in a browser or use a local server to run it.

## API Endpoints
### 1. Generate Email Reply
**Endpoint:** `POST /api/email/generate`

**Request Body:**
```json
{
  "emailContent": "Hello, I would like to schedule a meeting.",
  "tone": "formal"
}
```

**Response:**
```json
"Sure, I’d be happy to schedule a meeting. Please let me know your available time slots."
```

## Output
![image](https://github.com/user-attachments/assets/58d31db8-f764-4b0a-9879-dee23a04b767)
![image](https://github.com/user-attachments/assets/57d6133a-6cb3-43f6-982d-d52f45aaae0d)


## Future Enhancements
- Add user authentication and authorization.
- Support multiple email templates.
- Improve AI response customization.
- Provide multilingual email generation.
- Deploy as a cloud-based service.

## License
This project is open-source and available under the **MIT License**.

---
### Developed by Gaurav Thombare 🚀


