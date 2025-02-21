# Email Writer App

## Overview
The **Email Writer App** is a Spring Boot-based application that generates professional email replies using Google's Gemini AI. It provides an API to process incoming email content and return an AI-generated response. The frontend is built using **HTML, CSS, and JavaScript**.

## Features
- Generates AI-powered email replies
- Allows customization of the email tone
- REST API built with Spring Boot
- Uses WebClient to call Gemini API
- Simple and user-friendly frontend

## Technologies Used
### Backend:
- **Spring Boot** (REST API)
- **Spring WebFlux** (WebClient for API calls)
- **Lombok** (Simplifies Java code)
- **Jackson** (JSON processing)

### Frontend:
- **HTML** (Structure)
- **CSS** (Styling)
- **JavaScript** (API integration)

## Setup & Installation
### Prerequisites:
- **Java 17+** installed
- **Maven** installed
- **Google Gemini API Key**

### Steps:
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/email-writer-app.git
   cd email-writer-app
   ```
2. Configure environment variables:
   - Set `GEMINI_URL` and `GEMINI_KEY` in `application.properties` or as environment variables.
   
3. Build and run the application:
   ```sh
   mvn clean install
   mvn spring-boot:run
   ```
4. The backend runs at `http://localhost:8080/api/email/generate`

5. Open `index.html` in a browser to use the frontend.

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
![image](https://github.com/user-attachments/assets/7cc5bc09-0fcc-4ad4-92fc-e67e98142b00)




